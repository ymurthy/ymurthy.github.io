import type { Metadata } from "next";
import { PageIntro } from "../components/page-intro";

export const metadata: Metadata = {
  title: "Teaching",
  description: "Teaching experience of Yashaswini Murthy.",
};

const uiucCourses = [
  ["Random Processes", "Spring 2025"],
  ["Introduction to Optimization", "Fall 2024"],
  ["Linear Algebra for Data Science", "Spring 2024"],
  ["MDPs and Reinforcement Learning", "Fall 2022"],
  ["Design for Manufacturability", "Fall 2019–Spring 2020"],
];

const iitCourses = [
  ["Microprocessors and Automatic Control", "Fall 2018"],
  ["Microprocessors and Automatic Control Lab", "Spring 2019"],
];

function CourseList({ courses }: { courses: string[][] }) {
  return (
    <ul className="course-list course-list--compact">
      {courses.map(([name, term]) => (
        <li key={`${name}-${term}`}>
          <span>{name}</span>
          <span className="course-list__term">{term}</span>
        </li>
      ))}
    </ul>
  );
}

export default function TeachingPage() {
  return (
    <main className="site-main" id="main-content">
      <div className="content-shell content-shell--narrow">
        <PageIntro eyebrow="Courses" title="Teaching">
          <p>
            Current and previous teaching in probability, statistics,
            optimization, and reinforcement learning.
          </p>
        </PageIntro>

        <section
          className="page-section current-course"
          aria-labelledby="current-course-title"
        >
          <p className="section-kicker">Instructor · Fall 2026</p>
          <h2 id="current-course-title">
            <span>ORI 397</span> Special Topics in Probability and Statistics
          </h2>
          <p>
            A graduate course exploring selected topics in probability and
            statistics, with an emphasis on mathematical foundations and tools
            used in modern operations research.
          </p>
        </section>

        <section
          className="page-section past-teaching"
          aria-labelledby="past-teaching-title"
        >
          <p className="section-kicker">Previous roles</p>
          <h2 id="past-teaching-title">Teaching assistant experience</h2>
          <div className="past-teaching__grid">
            <section aria-labelledby="uiuc-title">
              <h3 id="uiuc-title">University of Illinois Urbana-Champaign</h3>
              <CourseList courses={uiucCourses} />
            </section>
            <section aria-labelledby="iit-title">
              <h3 id="iit-title">IIT Bombay</h3>
              <CourseList courses={iitCourses} />
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
