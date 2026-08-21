const profileLinks = [
  {
    label: "Email Yashaswini Murthy",
    href: "mailto:yashaswini.murthy@austin.utexas.edu",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.75 6.75h16.5v10.5H3.75z" />
        <path d="m4.5 7.5 7.5 5.25 7.5-5.25" />
      </svg>
    ),
  },
  {
    label: "Yashaswini Murthy on LinkedIn",
    href: "https://www.linkedin.com/in/yashaswini-murthy-74b475b9",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.4 9.2v8.4" />
        <path d="M6.4 6.4v.1" />
        <path d="M10.2 17.6V9.2" />
        <path d="M10.2 12.8a4.1 4.1 0 0 1 4-3.6c2.25 0 3.4 1.5 3.4 4.2v4.2" />
      </svg>
    ),
  },
  {
    label: "Yashaswini Murthy on Google Scholar",
    href: "https://scholar.google.com/citations?user=0ryrI64AAAAJ&hl=en",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m3 9 9-5 9 5-9 5z" />
        <path d="M6.5 11v5.1c2.8 2.5 8.2 2.5 11 0V11" />
      </svg>
    ),
  },
];

export function ProfileLinks() {
  return (
    <nav className="profile-links" aria-label="Contact and academic profiles">
      {profileLinks.map((profile) => {
        const isExternal = profile.href.startsWith("http");

        return (
          <a
            href={profile.href}
            aria-label={profile.label}
            title={profile.label}
            key={profile.href}
            {...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {profile.icon}
          </a>
        );
      })}
    </nav>
  );
}
