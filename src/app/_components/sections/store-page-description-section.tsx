import StaticProduct, { type StaticProductProps } from "../static-product";

type StorePageDescriptionSectionProps = {
  title: string;
  description: string;
};

export default function StorePageDescriptionSection({
  description,
  title,
}: StorePageDescriptionSectionProps) {
  return (
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
          {title}
        </h1>
        <span className='font-roboto text-lg leading-none tracking-normal text-[#9a9a9a]'>
          {description}
        </span>
      </article>
    </section>
  );
}

const staticProducts: StaticProductProps[] = [
  {
    image: "/assets/products/razer-blade-16_200x150.png",
    alt: "Razer blade 16 image",
    link: "/store/gaming-laptops",
    title: "Laptops",
  },
  {
    image: "/assets/products/razer-store-v2_gamer-room_icon_188x150.webp",
    alt: "Razer store v2 gamer room image",
    link: "/store/gaming-desktops-and-components",
    title: "Gamer Room",
  },
  {
    image: "/assets/products/razer-basilisk-v3-pro_90x150.png",
    alt: "Razer basilisk v3 pro image",
    link: "/store/gaming-mice",
    title: "Mice",
  },
  {
    image: "/assets/products/razer-blackwidow-v4-pro_168x150.png",
    alt: "Razer blackwidow v4 pro image",
    link: "/store/gaming-keyboards",
    title: "Keyboards",
  },
  {
    image: "/assets/products/razer-store-v2_audio_icon_168x150.webp",
    alt: "Razer store v2 audio image",
    link: "/store/gaming-audio",
    title: "Audio",
  },
  {
    image: "/assets/products/razer-kiyo-pro-ultra_118x150.png",
    alt: "Razer kiyo pro ultra image",
    link: "/store/content-creation",
    title: "Content Creation",
  },
  {
    image: "/assets/products/razer-enki-pro_lamborghini_80x150.png",
    alt: "Razer enki pro lamborghini image",
    link: "/store/gaming-chairs",
    title: "Chairs",
  },
  {
    image: "/assets/products/razer-wolverine-v2-pro-white_144x150.png",
    alt: "Razer wolverine v2 pro white image",
    link: "/store/console-gaming",
    title: "Console",
  },
  {
    image: "/assets/products/razer-edge_186x150.png",
    alt: "Razer edge image",
    link: "/store/mobile",
    title: "Mobile",
  },
  {
    image: "/assets/products/xanthus-tote-bag_2x.webp",
    alt: "Xanthus tote bag image",
    link: "/store/gaming-gear",
    title: "Apparel & Gear",
  },
];
