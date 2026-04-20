export type LeadSource =
  | "consultation"
  | "contacts"
  | "homepage"
  | "crm"
  | "netvision"
  | "cases"
  | "unknown";

export type LeadRequest = {
  name: string;
  contact: string;
  comment?: string;
  source?: LeadSource;
};

export type LeadResponse = {
  ok: boolean;
  leadId?: string;
  message: string;
};

export type ApiError = {
  code?: string;
  fieldErrors?: Partial<Record<keyof LeadRequest, string>>;
  message: string;
};
