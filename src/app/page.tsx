import Banner from "@/components/UI/Banner";
import Hero from "@/components/UI/Hero";

export default function Home() {
  const hero = {
    title: "Evénement Apple",
    subtitle: "Regardez l'événement en ligne le 07/05 à 16h.",
    image: "/images/hero.jpg",
    url:"#"
  }
  const banners = [
    {
      title: "iPhone 15 Pro",
      subtitle: "Titane. Si robuste. Si léger. Si Pro.",
      image: "/images/banners/iphone_15_pro.jpg",
      color:"white",
      item: {
        id: 1,
        name: "iPhone 15",
        url: "#",
        image: "/images/products/iphone_15_pro.jpg",
        type: "iPhone"
      },
    },
    {
      title: "iPhone 15",
      subtitle: "Nouvel appareil photo. Nouvelles couleurs. Réemerveillement.",
      image: "/images/banners/iphone_15.jpg",
      item: {
        id: 1,
        name: "iPhone 15",
        url: "#",
        image: "/images/products/iphone_15.jpg",
        type: "iPhone"
      },
  
    }
  ]
  return (
    <main className="flex flex-col gap-5">
      <Hero title={hero.title} subtitle={hero.subtitle} image={hero.image} url={hero.url} />
      {
        banners.map((banner, index) => (
          <Banner key={`banner-${index}`} title={banner.title} subtitle={banner.subtitle} image={banner.image} item={banner.item} color={banner.color} />
        ))
      }
   </main>
  );
}
