export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return <section className="page-hero"><div className="shell"><p className="eyebrow">{eyebrow}</p><h1 className="display">{title}</h1><p className="lede" style={{ color: "rgba(255,255,255,.78)" }}>{lead}</p></div></section>;
}
