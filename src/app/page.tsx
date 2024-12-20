"use client"
import Banner from "@/components/UI/Banner";
import GridPost from "@/components/UI/GridPost";
import Hero from "@/components/UI/Hero";
import products  from "@/data/products.json";

export default  function Home() {
  
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
      item: products.filter(product=> product.name === "iPhone 15 Pro")[0]
    },
    {
      title: "iPhone 15",
      subtitle: "Nouvel appareil photo. Nouvelles couleurs. Réemerveillement.",
      image: "/images/banners/iphone_15.jpg",
      color:"black",
      item: products.filter(product=> product.name === "iPhone 15")[0]
  
    }
  ]

  const grid = [
    {
      title: "MacBook Air",
      subtitle: "Poids plume. Puissance M3.",
      image: "/images/promo/macbook_air_m3.jpg",
      url: "#",
      item: products.filter(product=> product.name === "Macbook Air M3")[0]
    },
    {
      title: "Apple Watch",
      subtitle: "Clairement brillante",
      text:"Series 9",
      className:"text-red-500",
      image: "/images/promo/apple_watch_series_9.jpg",
      url: "#",
      item: products.filter(product=> product.name === "Apple Watch")[0]
    },
    {
      title: "iPad",
      subtitle:"Vos idées. Sa magie. Du génie.",
      image: "/images/promo/ipads.jpg",
      url: "#",
      item: products.filter(product=> product.name === "iPad")[0]
    },
    {
      title: "AirPods Pro",
      subtitle: "Nouveau son sur mesure.",
      text: "Audio adaptatif.",
      className:"text-red-500",
      image: "/images/promo/airpods_pro.jpg",
      url: "#",
      item: products.filter(product=> product.name === "AirPods Pro")[0]
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
     <GridPost items={grid} />
   </main>
  );
}
