import type { Metadata } from "next";
import { PageIntro } from "../components/page-intro";
import { PublicationList } from "../components/publication-list";
import {
  conferencePublications,
  journalPublications,
  preprints,
  workingPapers,
} from "../data/publications";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications and theses by Yashaswini Murthy in reinforcement learning, Markov decision processes, and stochastic control.",
};

export default function PublicationsPage() {
  return (
    <main className="site-main" id="main-content">
      <div className="content-shell content-shell--narrow">
        <PageIntro eyebrow="Research" title="Publications">
          <p>
            Work on reinforcement learning theory, applied probability, Markov
            decision processes, stochastic control, and optimization.
          </p>
        </PageIntro>

        <section className="page-section" aria-labelledby="working-title">
          <h2 id="working-title">Working papers</h2>
          <PublicationList publications={workingPapers} />
        </section>

        <section className="page-section" aria-labelledby="journals-title">
          <h2 id="journals-title">Journals</h2>
          <PublicationList publications={journalPublications} />
        </section>

        <section className="page-section" aria-labelledby="conferences-title">
          <h2 id="conferences-title">Conferences</h2>
          <PublicationList publications={conferencePublications} />
        </section>

        <section className="page-section" aria-labelledby="preprints-title">
          <h2 id="preprints-title">Preprints</h2>
          <PublicationList publications={preprints} />
        </section>

        <section className="page-section" aria-labelledby="theses-title">
          <h2 id="theses-title">Theses</h2>
          <ul className="document-list">
            <li>
              <a href="/assets/files/Yashaswini-Murthy-PhD-Thesis.pdf">
                <span className="document-list__type">Ph.D. thesis</span>
                <span>
                  Policy-Based Average-Reward and Robust Markov Decision
                  Processes and Reinforcement Learning
                </span>
                <span className="document-list__action">PDF ↗</span>
              </a>
            </li>
            <li>
              <a href="/assets/files/Yashaswini-Murthy-Masters-Thesis.pdf">
                <span className="document-list__type">Master&apos;s thesis</span>
                <span>Microscallop Modelling, Motion Planning and Control</span>
                <span className="document-list__action">PDF ↗</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
