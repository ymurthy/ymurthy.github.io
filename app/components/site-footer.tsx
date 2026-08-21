export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© {new Date().getFullYear()} Yashaswini Murthy</p>
        <p className="site-footer__links">
          <a href="mailto:yashaswini.murthy@austin.utexas.edu">Email</a>
          <span aria-hidden="true">·</span>
          <a href="https://www.orie.utexas.edu/">UT Austin ORIE</a>
        </p>
      </div>
    </footer>
  );
}
