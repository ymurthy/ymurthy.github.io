import type { Metadata } from "next";
import { PageIntro } from "../components/page-intro";

export const metadata: Metadata = {
  title: "Service",
  description: "Professional service by Yashaswini Murthy.",
};

const journalReviewerVenues = [
  "Operations Research (OR)",
  "Mathematics of Operations Research (MOR)",
  "Management Science",
  "Queueing Systems",
  "IEEE Transactions on Automatic Control (TAC)",
  "IEEE Transactions on Signal Processing (TSP)",
  "IEEE Control Systems Letters (L-CSS)",
  "Journal of Machine Learning Research (JMLR)",
];

const conferenceReviewerVenues = [
  "Neural Information Processing Systems (NeurIPS)",
  "International Symposium on Information Theory (ISIT)",
  "Learning for Dynamics and Control (L4DC)",
  "European Workshop on Reinforcement Learning (EWRL)",
  "International Conference on Learning Representations (ICLR)",
  "International Conference on Machine Learning (ICML)",
  "IEEE Conference on Decision and Control (CDC)",
  "Reinforcement Learning Conference (RLC)",
];

export default function ServicePage() {
  return (
    <main className="site-main" id="main-content">
      <div className="content-shell content-shell--narrow">
        <PageIntro eyebrow="Community" title="Professional service" />

        <section className="page-section" aria-labelledby="organization-title">
          <h2 id="organization-title">Organization</h2>
          <ul className="service-list">
            <li>
              Session chair, “Large-scale MDPs and Reinforcement Learning,”
              INFORMS Annual Meeting, San Francisco (November).
            </li>
            <li>Session chair, INFORMS Applied Probability Society Conference (2025).</li>
            <li>Session chair, INFORMS Annual Meeting (2024).</li>
            <li>
              Session co-chair, Reinforcement Learning for Stochastic Networks
              (RL4SN) (2024).
            </li>
            <li>Robotics Demo Chair, CSL Student Conference (2021–2022).</li>
            <li>
              Media and Publicity, CSL Student Conference (2020–2021).
            </li>
          </ul>
        </section>

        <section className="page-section" aria-labelledby="reviewer-title">
          <h2 id="reviewer-title">Reviewer</h2>
          <p className="reviewer-intro">
            I regularly serve as a reviewer for most of these journals and
            conferences, which span operations research, control, machine
            learning, and information theory.
          </p>
          <section className="reviewer-group" aria-labelledby="journals-title">
            <h3 id="journals-title">Journals</h3>
            <ul className="tag-list">
              {journalReviewerVenues.map((venue) => (
                <li key={venue}>{venue}</li>
              ))}
            </ul>
          </section>
          <section className="reviewer-group" aria-labelledby="conferences-title">
            <h3 id="conferences-title">Conferences</h3>
            <ul className="tag-list">
              {conferenceReviewerVenues.map((venue) => (
                <li key={venue}>{venue}</li>
              ))}
            </ul>
          </section>
        </section>
      </div>
    </main>
  );
}
