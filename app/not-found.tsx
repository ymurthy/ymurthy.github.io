import Link from "next/link";

export default function NotFound() {
  return (
    <main className="site-main" id="main-content">
      <div className="content-shell content-shell--narrow empty-state">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you were looking for does not exist or has moved.</p>
        <Link className="button-link" href="/">
          Return home
        </Link>
      </div>
    </main>
  );
}
