export default function MediaLogos() {
  const logos = [
    "FOX",
    "NBC",
    "USA Today",
    "CBS",
    "Daily Herald",
    "InkeyNews",
  ];

  return (
    <section className="bg-white section-padding py-10 border-y border-gray-100">
      <div className="container-main">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 shrink-0">
            As Seen On
          </span>
          {logos.map((logo) => (
            <div
              key={logo}
              className="text-gray-400 hover:text-gray-600 transition-colors cursor-default"
            >
              <span className="text-xl md:text-2xl font-extrabold tracking-tight whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
