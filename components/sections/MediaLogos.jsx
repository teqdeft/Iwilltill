export default function MediaLogos() {
  const logos = [
    { name: "FOX", src: "/images/svg/fox.svg" },
    { name: "NBC", src: "/images/svg/nbc-news.png" },
    { name: "USA Today", src: "/images/svg/usa-today.svg" },
    { name: "CBS", src: "/images/svg/ncn.svg" },
    { name: "Daily Herald", src: "/images/svg/daily-heart.svg" },
    { name: "InkeyNews", src: "/images/svg/daily-news.svg" },

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
              key={logo.name}
              className=" cursor-default"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
           
        </div>
      
      </div>
    </section>
  );
}