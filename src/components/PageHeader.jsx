export default function PageHeader({ title, lead, children }) {
  return (
    <header className="wrap pt-10 pb-14 md:pt-20 md:pb-20">
      {children}
      <h1 className="max-w-[16ch] text-[2.75rem] leading-[1.02] font-medium tracking-[-0.03em] md:text-7xl">
        {title}
      </h1>
      {lead && <p className="mt-6 max-w-[36rem] text-xl leading-snug text-muted md:text-2xl">{lead}</p>}
    </header>
  );
}
