import Banner from "@/components/UI/Banner";
import GridPost from "@/components/UI/GridPost";
import Hero from "@/components/UI/Hero";
import { GET_PRODUCTS } from "@/graphql/queries";
import { Item } from "@/interfaces";
import { fetchGraphQl } from "@/services/fetchGraphql.api";
import { it } from "node:test";

export default async function Home() {
  const products  = await fetchGraphQl(GET_PRODUCTS).then(data => data.getProducts as Item[])
  if (!products) return <div>loading...</div>
  
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
      item: products.find(product=> product.name == "iPhone 15 Pro")
    },
    {
      title: "iPhone 15",
      subtitle: "Nouvel appareil photo. Nouvelles couleurs. Réemerveillement.",
      image: "/images/banners/iphone_15.jpg",
      color:"black",
      item: products.find(product=> product.name == "iPhone 15")
  
    }
  ]

  const grid = [
 {
  
    title: "MacBook Air",
    subtitle: "Poids plume. Puissance M3.",
    image: "/images/promo/macbook_air_m3.jpg",
    url: "#",
    item: products.find(product=> product.name == "Macbook Air M3")
  },
  {
    
    title: "Apple Watch",
    subtitle: "Clairement brillante",
    text:"Series 9",
    className:"text-red-500",
    image: "/images/promo/apple_watch_series_9.jpg",
    url: "#",
    item: products.find(product=> product.name == "Apple Watch")
 },
 {
  
  title: "iPad",
  subtitle:"Vos idées. Sa magie. Du génie.",
  image: "/images/promo/ipads.jpg",
  url: "#",
  item: products.find(product=> product.name == "iPad")
  },
  {
    
    title: "AirPods Pro",
    subtitle: "Nouveau son sur mesure.",
    text: "Audio adaptatif.",
    className:"text-red-500",
    image: "/images/promo/airpods_pro.jpg",
    url: "#",
    item: products.find(product=> product.name == "AirPods Pro")
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
