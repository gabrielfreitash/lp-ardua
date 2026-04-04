import { content } from "../../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ardua-gray/50 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: logo + copyright */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <span className="text-ardua-pure font-black text-sm tracking-[0.15em]">
            ÁRDUA
          </span>
          <span className="text-ardua-muted text-xs">
            &copy; {year} {content.footer.copyright}
          </span>
        </div>

        {/* Center: tagline */}
        <span className="text-ardua-muted text-xs tracking-wider">
          {content.footer.tagline}
        </span>

        {/* Right: social links */}
        <div className="flex items-center gap-6">
          {content.footer.social.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-ardua-muted text-xs uppercase tracking-wider hover:text-ardua-pure transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
