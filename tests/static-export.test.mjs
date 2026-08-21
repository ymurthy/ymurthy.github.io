import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import test from "node:test";

const outputDirectory = new URL("../dist/client/", import.meta.url);

const routes = [
  "index.html",
  "awards/index.html",
  "publications/index.html",
  "teaching/index.html",
  "service/index.html",
  "404.html",
];

function publicationEntry(html, title) {
  const titleIndex = html.indexOf(title);
  assert.notEqual(titleIndex, -1, `missing publication: ${title}`);

  const entryStart = html.lastIndexOf('<li class="publication">', titleIndex);
  const entryEnd = html.indexOf("</li>", titleIndex);
  assert.notEqual(entryStart, -1, `missing publication wrapper: ${title}`);
  assert.notEqual(entryEnd, -1, `missing publication closing tag: ${title}`);

  return html.slice(entryStart, entryEnd).replaceAll("<!-- -->", "");
}

test("exports every public route", async () => {
  for (const route of routes) {
    const file = new URL(route, outputDirectory);
    assert.ok((await stat(file)).size > 1_000, `${route} should be non-empty`);
  }
});

test("home page contains the requested current information", async () => {
  const html = await readFile(new URL("index.html", outputDirectory), "utf8");

  assert.match(html, /Assistant Professor in Operations Research/);
  assert.match(html, /ETC 5\.122/);
  assert.match(html, /yashaswini\.murthy@austin\.utexas\.edu/);
  assert.match(html, /Prospective students and researchers/);
  assert.match(html, /Large-scale MDPs and Reinforcement Learning/);
  assert.match(html, /May 2026/);
  assert.match(html, /linkedin\.com\/in\/yashaswini-murthy-74b475b9/);
  assert.match(html, /scholar\.google\.com\/citations\?user=0ryrI64AAAAJ/);
  assert.match(html, /M\.Tech\., Mechanical Engineering/);
  assert.match(html, /Specialization in Automation/);
  assert.match(html, /B\.Tech\., Mechanical Engineering/);
  assert.match(html, /Minor in Systems &amp; Control Engineering/);
  assert.match(html, /Advisors: Adam Wierman, Eric Mazumdar, and Laixi Shi/);
  assert.match(html, /Host: Siva[\s\S]*Theja Maguluri/);
  assert.match(html, /Host: Ana Bušić/);
  assert.match(html, /Reinforcement learning for stochastic systems and networks/);
  assert.match(html, /Robust, risk-sensitive, and multi-agent decision-making/);
  assert.match(html, /Non-asymptotic analysis/);
  assert.match(
    html,
    /<img src="\/assets\/images\/yashaswini-murthy\.jpg"/,
  );
  assert.doesNotMatch(html, /\/_vinext\/image/);
  assert.doesNotMatch(html, /finite-time theory/i);
  assert.doesNotMatch(html, /Compare fonts/);
  assert.match(html, />Teaching</);
});

test("updated teaching, awards, and publication details are exported", async () => {
  const teaching = await readFile(
    new URL("teaching/index.html", outputDirectory),
    "utf8",
  );
  const awards = await readFile(
    new URL("awards/index.html", outputDirectory),
    "utf8",
  );
  const publications = await readFile(
    new URL("publications/index.html", outputDirectory),
    "utf8",
  );
  const service = await readFile(
    new URL("service/index.html", outputDirectory),
    "utf8",
  );

  assert.match(teaching, /ORI 397/);
  assert.match(teaching, /Instructor · Fall 2026/);
  assert.doesNotMatch(teaching, /Course site coming soon/);
  assert.doesNotMatch(awards, /Sysmex/);
  assert.ok(
    (awards.match(/Joan and Lalit Bahl Fellowship/g)?.length ?? 0) >= 2,
    "the Bahl fellowship should appear in both 2023 and 2024",
  );
  assert.doesNotMatch(awards, /also 2023/);
  assert.match(awards, /<strong>Rising Star EECS<\/strong>/);
  assert.doesNotMatch(service, /Institute Student Mentor|Department Academic Mentor/);
  assert.match(service, /regularly serve as a reviewer for most of these journals/);
  assert.match(service, />Journals</);
  assert.match(service, />Conferences</);
  assert.match(service, /Management Science/);
  assert.match(service, /Queueing Systems/);
  assert.match(service, /IEEE Control Systems Letters \(L-CSS\)/);
  assert.ok(
    service.indexOf("Journals") < service.indexOf("Conferences"),
    "journal reviewing should appear before conference reviewing",
  );
  assert.ok(
    publications.indexOf("Working papers") < publications.indexOf("Journals"),
    "working papers should appear before published work",
  );
  const riskSensitiveTitle =
    "Finite Time Analysis of Risk-Sensitive RL via Noisy Power Iteration";
  const networkedMarlTitle =
    "Finite-Sample Convergence in Networked Average Reward MARL: Decentralization Pitfalls and Entropy Remedies";
  const robustQTitle =
    "Finite-Time Convergence of Single-Trajectory Chi-Square Robust Q-Learning With Linear Function Approximation";
  const npgTitle = "Performance of NPG in Countable State-Space Average-Cost RL";
  const modifiedPolicyTitle =
    "On the Convergence of Modified Policy Iteration in Risk Sensitive Exponential Cost Markov Decision Processes";

  assert.ok(
    publications.indexOf(riskSensitiveTitle) < publications.indexOf(networkedMarlTitle) &&
      publications.indexOf(networkedMarlTitle) < publications.indexOf(robustQTitle) &&
      publications.indexOf(robustQTitle) < publications.indexOf(npgTitle) &&
      publications.indexOf(npgTitle) < publications.indexOf("Journals"),
    "the recent working papers should appear first in the requested order",
  );
  assert.match(publicationEntry(publications, riskSensitiveTitle), /NeurIPS 2026 · Under review/);
  assert.match(
    publicationEntry(publications, networkedMarlTitle),
    /NeurIPS 2026 · Under review · \* Equal contribution/,
  );
  assert.match(
    publicationEntry(publications, robustQTitle),
    /IEEE Transactions on Automatic Control \(TAC\) · Under submission/,
  );
  assert.match(
    publicationEntry(publications, npgTitle),
    /Operations Research · Major revision/,
  );
  assert.doesNotMatch(
    publicationEntry(publications, modifiedPolicyTitle),
    /Major revision/,
  );
  assert.match(publications, /A Theoretical Model of Microscallop/);
});

test("all root-relative links in exported HTML resolve", async () => {
  for (const route of routes.filter((route) => route !== "404.html")) {
    const html = await readFile(new URL(route, outputDirectory), "utf8");
    const urls = [
      ...html.matchAll(/(?:href|src)="(\/[^"#?]*)"/g),
    ].map((match) => match[1]);

    for (const url of new Set(urls)) {
      const relativePath =
        url === "/"
          ? "index.html"
          : url.endsWith("/")
            ? `${url.slice(1)}index.html`
            : url.slice(1);
      const resolved = join(outputDirectory.pathname, relativePath);
      assert.ok((await stat(resolved)).isFile(), `${route}: ${url} should resolve`);
    }
  }
});

test("recovered portrait and theses are valid, non-placeholder assets", async () => {
  const assets = [
    ["assets/images/yashaswini-murthy.jpg", 100_000],
    ["assets/files/Yashaswini-Murthy-PhD-Thesis.pdf", 1_000_000],
    ["assets/files/Yashaswini-Murthy-Masters-Thesis.pdf", 1_000_000],
  ];

  for (const [asset, minimumSize] of assets) {
    assert.ok(
      (await stat(new URL(asset, outputDirectory))).size > minimumSize,
      `${asset} should be a recovered source asset`,
    );
  }
});
