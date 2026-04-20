import { useState, type FormEvent } from "react";

import { leadFormDefaults, leadFormFields } from "../../data/forms";
import type { LeadRequest, LeadResponse, LeadSource } from "../../shared/api";
import { Button, Text } from "../../shared/ui";

export type LeadFormValues = Pick<LeadRequest, "name" | "contact"> & {
  comment: string;
};

type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

type LeadFormProps = {
  description?: string;
  onSubmit?: (request: LeadRequest) => Promise<LeadResponse> | LeadResponse;
  source?: LeadSource;
  submitLabel?: string;
  successMessage?: string;
  successTitle?: string;
  title: string;
};

const initialValues: LeadFormValues = {
  name: "",
  contact: "",
  comment: "",
};

function validateLeadForm(values: LeadFormValues) {
  const errors: LeadFormErrors = {};

  if (!values.name.trim()) {
    errors.name = leadFormFields.name.requiredMessage;
  }

  if (!values.contact.trim()) {
    errors.contact = leadFormFields.contact.requiredMessage;
  } else if (values.contact.trim().length < 5) {
    errors.contact = leadFormFields.contact.minLengthMessage;
  }

  return errors;
}

export function LeadForm({
  description,
  onSubmit,
  source = "unknown",
  submitLabel = leadFormDefaults.submitLabel,
  successMessage = leadFormDefaults.successMessage,
  successTitle = leadFormDefaults.successTitle,
  title,
}: LeadFormProps) {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [submitResult, setSubmitResult] = useState<LeadResponse | null>(null);

  const updateField = (field: keyof LeadFormValues, value: string) => {
    setValues((currentValues) => ({ ...currentValues, [field]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    setSubmitResult(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateLeadForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitResult(null);
      return;
    }

    const request: LeadRequest = {
      name: values.name.trim(),
      contact: values.contact.trim(),
      comment: values.comment.trim() || undefined,
      source,
    };

    const response = await onSubmit?.(request);

    setSubmitResult(
      response ?? {
        ok: true,
        message: successMessage,
      },
    );
  };

  return (
    <form className="lead-form" noValidate onSubmit={handleSubmit}>
      <div className="section-header section-header--compact">
        <Text as="p" className="lead-form__title">
          {title}
        </Text>
        {description ? (
          <Text muted size="sm">
            {description}
          </Text>
        ) : null}
      </div>

      <div className="lead-form__fields">
        <label className="form-field">
          <span>{leadFormFields.name.label}</span>
          <input
            aria-describedby={errors.name ? "lead-form-name-error" : undefined}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
            name="name"
            onChange={(event) => updateField("name", event.target.value)}
            placeholder={leadFormFields.name.placeholder}
            value={values.name}
          />
          {errors.name ? (
            <span className="form-field__error" id="lead-form-name-error">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className="form-field">
          <span>{leadFormFields.contact.label}</span>
          <input
            aria-describedby={errors.contact ? "lead-form-contact-error" : undefined}
            aria-invalid={Boolean(errors.contact)}
            autoComplete="tel"
            name="contact"
            onChange={(event) => updateField("contact", event.target.value)}
            placeholder={leadFormFields.contact.placeholder}
            value={values.contact}
          />
          {errors.contact ? (
            <span className="form-field__error" id="lead-form-contact-error">
              {errors.contact}
            </span>
          ) : null}
        </label>

        <label className="form-field">
          <span>{leadFormFields.comment.label}</span>
          <textarea
            name="comment"
            onChange={(event) => updateField("comment", event.target.value)}
            placeholder={leadFormFields.comment.placeholder}
            rows={4}
            value={values.comment}
          />
        </label>
      </div>

      <Button type="submit" variant="primary">
        {submitLabel}
      </Button>

      {submitResult?.ok ? (
        <div className="form-success" role="status">
          <Text as="p" className="case-card__label">
            {successTitle}
          </Text>
          <Text muted size="sm">
            {submitResult.message}
          </Text>
        </div>
      ) : null}
    </form>
  );
}
