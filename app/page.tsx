import Link from "next/link";
import Image from "next/image";
import { ProfileLinks } from "./components/profile-links";
import { PublicationList } from "./components/publication-list";
import { selectedPublications } from "./data/publications";

export default function Home() {
  return (
    <main className="site-main" id="main-content">
      <div className="content-shell">
        <section className="hero" aria-labelledby="home-title">
          <div className="hero__copy">
            <p className="eyebrow">Operations Research · UT Austin</p>
            <h1 id="home-title">Yashaswini Murthy</h1>
            <p className="hero__role">
              Assistant Professor in Operations Research at{" "}
              <a href="https://www.utexas.edu/">
                The University of Texas at Austin
              </a>
            </p>
            <p className="research-summary">
              My research lies at the intersection of reinforcement learning,
              stochastic control, optimization, and applied probability. I
              develop learning methods for stochastic systems that must operate
              over long horizons, under uncertainty, or through decentralized
              interactions, with a particular focus on rigorous non-asymptotic
              performance guarantees.
            </p>
            <ul className="research-themes">
              <li>
                <strong>
                  Reinforcement learning for stochastic systems and networks.
                </strong>{" "}
                I study Markov decision processes and networked control problems
                under long-run average-reward objectives, seeking algorithms that
                exploit problem structure and scale to large systems.
              </li>
              <li>
                <strong>
                  Robust, risk-sensitive, and multi-agent decision-making.
                </strong>{" "}
                I develop methods that account for model uncertainty, risk,
                partial information, communication constraints, and interactions
                among multiple decision-makers.
              </li>
              <li>
                <strong>Non-asymptotic analysis.</strong> I use probabilistic,
                optimization, stochastic approximation, and spectral tools to
                establish convergence rates, sample complexity, and performance
                guarantees with finite data.
              </li>
            </ul>
            <dl className="contact-list">
              <div>
                <dt>Office</dt>
                <dd>ETC 5.122</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>
                  <a href="mailto:yashaswini.murthy@austin.utexas.edu">
                    yashaswini.murthy@austin.utexas.edu
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <figure className="hero__portrait">
            <div className="hero__portrait-frame">
              <Image
                src="/assets/images/yashaswini-murthy.jpg"
                alt="Yashaswini Murthy smiling outdoors"
                width={1600}
                height={1329}
                priority
                unoptimized
                sizes="(max-width: 680px) 285px, (max-width: 800px) 260px, 310px"
              />
            </div>
            <ProfileLinks />
          </figure>
        </section>

        <aside className="recruiting-callout" aria-labelledby="recruiting-title">
          <div className="recruiting-callout__mark" aria-hidden="true">
            →
          </div>
          <div>
            <h2 id="recruiting-title">Prospective students and researchers</h2>
            <p>
              <strong>
                I am recruiting mathematically strong and self-motivated graduate
                students, postdocs, and research interns.
              </strong>{" "}
              Relevant areas include reinforcement learning theory, applied
              probability, stochastic control, and optimization. If you are
              interested in working with me, please email your CV with a short
              summary of your research interests.
            </p>
          </div>
        </aside>

        <section className="home-section" aria-labelledby="news-title">
          <div className="section-heading">
            <p className="eyebrow">Updates</p>
            <h2 id="news-title">News &amp; announcements</h2>
          </div>
          <ol className="news-list">
            <li className="news-item">
              <div className="news-item__date">September 2026</div>
              <p>
                Two of my papers were accepted to NeurIPS 2026: “Finite Time
                Analysis of Risk-Sensitive RL via Noisy Power Iteration” and
                “Finite-Sample Convergence in Networked Average Reward MARL:
                Decentralization Pitfalls and Entropy Remedies.”
              </p>
            </li>
            <li className="news-item">
              <div className="news-item__date">September 2026</div>
              <p>I received the CSL PhD Thesis Award (UIUC).</p>
            </li>
            <li className="news-item">
              <div className="news-item__date">May 2026</div>
              <p>
                I will be chairing the “Large-scale MDPs and Reinforcement
                Learning” session at the INFORMS Annual Meeting in San Francisco,
                CA.
              </p>
            </li>
          </ol>
        </section>

        <section className="home-section" aria-labelledby="research-title">
          <div className="section-heading section-heading--with-link">
            <div>
              <p className="eyebrow">Research</p>
              <h2 id="research-title">Selected publications</h2>
            </div>
            <Link className="text-link" href="/publications/">
              View all publications <span aria-hidden="true">→</span>
            </Link>
          </div>
          <PublicationList publications={selectedPublications} compact />
        </section>

        <section className="home-section background" aria-labelledby="background-title">
          <div className="section-heading">
            <p className="eyebrow">Background</p>
            <h2 id="background-title">Experience &amp; education</h2>
          </div>
          <div className="background-grid">
            <section aria-labelledby="experience-title">
              <h3 id="experience-title">Experience</h3>
              <ul className="background-list">
                <li>
                  <strong>Assistant Professor</strong>
                  <span>Operations Research, UT Austin · 2026–present</span>
                </li>
                <li>
                  <strong>Postdoctoral Scholar</strong>
                  <span>
                    Computing and Mathematical Sciences, Caltech · 2025–2026
                  </span>
                  <span>Advisors: Adam Wierman, Eric Mazumdar, and Laixi Shi</span>
                </li>
                <li>
                  <strong>Research Intern</strong>
                  <span>
                    Georgia Institute of Technology · Summer 2024 · Host: Siva
                    Theja Maguluri
                  </span>
                </li>
                <li>
                  <strong>Research Intern</strong>
                  <span>
                    Inria Paris · September 2023 · Host: Ana Bušić
                  </span>
                </li>
              </ul>
            </section>
            <section aria-labelledby="education-title">
              <h3 id="education-title">Education</h3>
              <ul className="background-list">
                <li>
                  <strong>Ph.D., Electrical &amp; Computer Engineering</strong>
                  <span>UIUC · 2025 · Advisor: R. Srikant</span>
                </li>
                <li>
                  <strong>M.Tech., Mechanical Engineering</strong>
                  <span>IIT Bombay · 2019 · Specialization in Automation</span>
                </li>
                <li>
                  <strong>B.Tech., Mechanical Engineering</strong>
                  <span>
                    IIT Bombay · 2019 · Minor in Systems &amp; Control Engineering
                  </span>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
