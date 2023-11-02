import Link from "next/link";

import MainWrapper from "../_components/main-wrapper";
import Notification from "../_components/notification";
import ProductCard from "../_components/product-card";
import CarouselSection from "../_components/sections/carousel-section";
import StaticProduct, {
  type StaticProductProps,
} from "../_components/static-product";

const staticProducts: StaticProductProps[] = [
  {
    image: "/assets/products/razer-blade-16_200x150.png",
    alt: "Razer blade 16 image",
    link: "/",
    title: "Laptops",
  },
  {
    image: "/assets/products/razer-store-v2_gamer-room_icon_188x150.webp",
    alt: "Razer store v2 gamer room image",
    link: "/",
    title: "Gamer Room",
  },
  {
    image: "/assets/products/razer-basilisk-v3-pro_90x150.png",
    alt: "Razer basilisk v3 pro image",
    link: "/",
    title: "Mice",
  },
  {
    image: "/assets/products/razer-blackwidow-v4-pro_168x150.png",
    alt: "Razer blackwidow v4 pro image",
    link: "/",
    title: "Keyboards",
  },
  {
    image: "/assets/products/razer-store-v2_audio_icon_168x150.webp",
    alt: "Razer store v2 audio image",
    link: "/",
    title: "Audio",
  },
  {
    image: "/assets/products/razer-kiyo-pro-ultra_118x150.png",
    alt: "Razer kiyo pro ultra image",
    link: "/",
    title: "Content Creation",
  },
  {
    image: "/assets/products/razer-enki-pro_lamborghini_80x150.png",
    alt: "Razer enki pro lamborghini image",
    link: "/",
    title: "Chairs",
  },
  {
    image: "/assets/products/razer-wolverine-v2-pro-white_144x150.png",
    alt: "Razer wolverine v2 pro white image",
    link: "/",
    title: "Console",
  },
  {
    image: "/assets/products/razer-edge_186x150.png",
    alt: "Razer edge image",
    link: "/",
    title: "Mobile",
  },
  {
    image: "/assets/products/xanthus-tote-bag_2x.webp",
    alt: "Xanthus tote bag image",
    link: "/",
    title: "Apparel & Gear",
  },
];

export default function StorePage() {
  return (
    <MainWrapper>
      <Notification>
        RazerStore Rewards Giveaway: Become a member and stand to win both the
        Razer Kitsune and the PlayStation 5.{" "}
        <Link href={"/"}>Join now {">"}</Link>
      </Notification>
      <section className='mb-10 pt-10 sm:container sm:max-w-[1236px] sm:px-0'>
        <article>
          <ul className='scroll-bar-h-5px flex w-full items-center gap-12 overflow-x-auto px-4 pb-8 font-roboto text-sm sm:justify-between sm:gap-4 sm:overflow-hidden'>
            {staticProducts.map((product, idx) => (
              <StaticProduct key={idx} {...product} />
            ))}
          </ul>
        </article>
        <article className='pl-6 pr-4 pt-8 sm:mx-auto'>
          <h1 className='mb-[0.3rem] font-titillium text-[1.75rem] font-bold leading-none text-primary sm:mb-0 sm:text-[2.25rem] sm:leading-[2.625rem]'>
            THE LATEST AND GREATEST GAMING GEAR
          </h1>
          <span className='font-roboto text-lg leading-none tracking-normal text-[#9a9a9a]'>
            Razer mice, keyboards, headsets, laptops&nbsp;&amp;&nbsp;more
          </span>
        </article>
      </section>
      <CarouselSection
        title='FRESH OFF THE LINE'
        description='Check out our latest releases to secure the most up-to-date upgrades for your setup'
      >
        {Array(9)
          .fill(0)
          .map((_, idx) => (
            <ProductCard
              key={idx}
              image={"/assets/blade14-p9-black-500x500.png"}
              altText='Blade 14 P9 Black'
              name='Razer Blade 14 Models'
              summary='NVIDIA® GeForce RTX™ 40 Series 14” Laptop with AMD Ryzen 9 7940HS Processor'
              promoliner='Score a US$300 Gift Card with the purchase of any RTX™ 4060 and 4070 laptops.'
              price={239999}
              priceCurrency='USD'
              hrefLink='/'
            />
          ))}
      </CarouselSection>
    </MainWrapper>
  );
}
