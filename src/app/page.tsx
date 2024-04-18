import Hero from "@/components/UI/Hero";

export default function Home() {
  const hero = {
    title: "iPhone 15 Pro",
    subtitle: "Titane. Si robuste. Si léger. Si Pro.",
    image: "/images/hero/iphone-15-pro.png",
    item: {
      id: 1,
      name: "iPhone 15",
      url: "/iphone/iphone-15-pro",
      image: "/images/iphone-15-pro.png",
      type: "iPhone"
    },
  }
  return (
   <>
   <Hero title={hero.title} subtitle={hero.subtitle} image={hero.image} item={hero.item} />
    <section>
      <p>Home</p>
    </section>
   </>
  );
}
