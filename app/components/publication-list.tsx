import type { Publication } from "../data/publications";

function EmphasizedAuthors({ authors }: { authors: string }) {
  const parts = authors.split(/(Yashaswini Murthy|Y\. Murthy)/g);

  return parts.map((part, index) =>
    part === "Yashaswini Murthy" || part === "Y. Murthy" ? (
      <strong key={`${part}-${index}`}>{part}</strong>
    ) : (
      part
    ),
  );
}

export function PublicationList({
  publications,
  compact = false,
}: {
  publications: Publication[];
  compact?: boolean;
}) {
  return (
    <ol className={`publication-list${compact ? " publication-list--compact" : ""}`}>
      {publications.map((publication) => (
        <li className="publication" key={publication.title}>
          <div className="publication__year" aria-hidden={!publication.year}>
            {publication.year}
          </div>
          <div className="publication__content">
            {publication.href ? (
              <a
                className="publication__title"
                href={publication.href}
                target="_blank"
                rel="noreferrer"
              >
                {publication.title}
              </a>
            ) : (
              <span className="publication__title publication__title--plain">
                {publication.title}
              </span>
            )}
            <p className="publication__authors">
              <EmphasizedAuthors authors={publication.authors} />
            </p>
            <p className="publication__venue">
              {publication.venue}
              {publication.note ? ` · ${publication.note}` : ""}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
