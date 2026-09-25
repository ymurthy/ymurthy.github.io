import type { Metadata } from "next";
import { PageIntro } from "../components/page-intro";

export const metadata: Metadata = {
  title: "Awards",
  description: "Selected awards and honors received by Yashaswini Murthy.",
};

type AwardItem = {
  before?: string;
  emphasis: string;
  after?: string;
};

const awards: { year: string; items: AwardItem[] }[] = [
  {
    year: "2026",
    items: [
      {
        emphasis: "CSL PhD Thesis Award",
        after: ", UIUC.",
      },
    ],
  },
  {
    year: "2025",
    items: [
      {
        before: "Selected for ",
        emphasis: "Rising Star EECS",
        after: ", hosted by MIT and Boston University.",
      },
      {
        emphasis: "PIMCO Postdoctoral Fellowship",
        after: ", Caltech.",
      },
      {
        before: "Selected as an ",
        emphasis: "ISyE–MS&E–IOE Joint Rising Star",
        after: ".",
      },
      {
        emphasis: "Presidential Postdoctoral Fellowship",
        after: ", Georgia Institute of Technology (declined).",
      },
    ],
  },
  {
    year: "2024",
    items: [
      {
        emphasis: "Invited speaker",
        after:
          ", Young Researchers Workshop, Operations Research and Information Engineering, Cornell University.",
      },
      {
        emphasis: "Joan and Lalit Bahl Fellowship",
        after: ", UIUC.",
      },
    ],
  },
  {
    year: "2023",
    items: [
      {
        emphasis: "Mavis Future Faculty Fellowship",
        after: ", Grainger College of Engineering, UIUC.",
      },
      {
        emphasis: "Joan and Lalit Bahl Fellowship",
        after: ", UIUC.",
      },
    ],
  },
  {
    year: "2022",
    items: [
      {
        emphasis: "Rambus Computer Engineering Fellowship",
        after: ", UIUC.",
      },
    ],
  },
  {
    year: "2021",
    items: [
      {
        emphasis: "James M. Henderson Fellowship",
        after: ", UIUC.",
      },
    ],
  },
  {
    year: "2019",
    items: [
      {
        emphasis: "Certificate of Excellence",
        after: " for extraordinary Department Academic Mentorship.",
      },
    ],
  },
  {
    year: "2018",
    items: [
      {
        emphasis: "Institute Academic Excellence Prize",
        after: " for the highest GPA.",
      },
    ],
  },
  {
    year: "2017",
    items: [
      {
        emphasis: "Institute Academic Excellence Prize",
        after: " for the highest GPA.",
      },
    ],
  },
  {
    year: "2014",
    items: [
      {
        emphasis: "All India Rank 239",
        after: " in the KVPY examination and fellowship (declined).",
      },
      {
        before: "Cleared the ",
        emphasis: "Karnataka Regional Mathematical Olympiad",
        after: " and attended the Indian National Mathematical Olympiad camp.",
      },
    ],
  },
];

export default function AwardsPage() {
  return (
    <main className="site-main" id="main-content">
      <div className="content-shell content-shell--narrow">
        <PageIntro eyebrow="Recognition" title="Awards &amp; honors" />
        <ol className="timeline-list">
          {awards.map((group) => (
            <li className="timeline-row" key={group.year}>
              <div className="timeline-row__year">{group.year}</div>
              <ul className="timeline-row__items">
                {group.items.map((item) => (
                  <li key={`${item.before ?? ""}-${item.emphasis}`}>
                    {item.before}
                    <strong>{item.emphasis}</strong>
                    {item.after}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </main>
  );
}
