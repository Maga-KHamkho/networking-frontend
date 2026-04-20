import { ButtonLink, Card, Heading, Text } from "../../shared/ui";

export type CasePreviewGroup = {
  label: string;
  text: string;
  muted?: boolean;
};

type CasePreviewCardProps = {
  eyebrow: string;
  groups: CasePreviewGroup[];
  title?: string;
  linkLabel?: string;
  linkTo?: string;
};

export function CasePreviewCard({
  eyebrow,
  groups,
  linkLabel,
  linkTo,
  title,
}: CasePreviewCardProps) {
  return (
    <Card className="case-card">
      <Text as="p" className="eyebrow">
        {eyebrow}
      </Text>
      {title ? (
        <Heading as="h2" size="md">
          {title}
        </Heading>
      ) : null}
      {groups.map((group) => (
        <div key={group.label} className="case-card__group">
          <Text as="p" className="case-card__label">
            {group.label}
          </Text>
          <Text muted={group.muted ?? true}>{group.text}</Text>
        </div>
      ))}
      {linkTo && linkLabel ? (
        <ButtonLink to={linkTo} variant="secondary">
          {linkLabel}
        </ButtonLink>
      ) : null}
    </Card>
  );
}
