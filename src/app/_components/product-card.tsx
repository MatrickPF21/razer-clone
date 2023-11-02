import Image from "next/image";
import Link from "next/link";

import { cn, formatPrices } from "@/utils";

type ProductCardProps = {
  image: string;
  altText: string;
  name: string;
  summary: string;
  promoliner: string;
  price: number;
  priceCurrency: string;
  hrefLink: string;
  badge?: ProductCardBadgeProps;
  isRgb?: boolean;
};

export default function ProductCard({
  altText,
  image,
  name,
  price,
  priceCurrency,
  promoliner,
  summary,
  hrefLink,
  badge,
  isRgb,
}: ProductCardProps) {
  return (
    <li className='relative min-h-[480px] w-[295px] translate-x-8 snap-center bg-[#222]'>
      <Link href={hrefLink} className='block bg-[#111]'>
        <Image src={image} alt={altText} width={295} height={295} />
      </Link>
      <div className='relative flex min-h-[180px] flex-col justify-between gap-4 p-4 font-roboto'>
        {isRgb && (
          <div
            className='absolute left-4 z-10'
            style={{ top: "calc(-50px + 1rem)" }}
          >
            <Image
              src='/assets/razer-chroma-white-icon.png'
              alt='Razer Chroma RGB'
              width={22}
              height={22}
            />
          </div>
        )}
        <div className='-mt-4 flex flex-col gap-4 sm:mt-0'>
          <h5 className='text-[1.125rem] leading-[25px]'>{name}</h5>
          <p className='text-[0.875rem] font-light leading-[1.3] text-[#888]'>
            {summary}
          </p>
          <p className='text-[0.875rem] font-light leading-[1.3]'>
            {promoliner}
          </p>
        </div>
        <div className='flex items-end justify-between text-[14px]'>
          <div className='leading-[16px]'>
            <p>
              From
              <br />
              {formatPrices(price, priceCurrency)}
            </p>
          </div>
          <div>
            <Link
              href={hrefLink}
              className='rounded-[5px] bg-primary px-[10px] py-[5px] font-bold leading-[14px] text-black'
            >
              BUY
            </Link>
          </div>
        </div>
      </div>
      {!!badge && <ProductCardBadge {...badge} />}
    </li>
  );
}

const colorConfig = {
  ORANGE: "bg-[#ff9c07]",
  BLUE: "bg-[#28aadc]",
  YELLOW: "bg-[#ffc107]",
};

type ProductCardBadgeProps = {
  color: keyof typeof colorConfig;
};

function ProductCardBadge({ color }: ProductCardBadgeProps) {
  const bg = colorConfig[color];

  return (
    <div
      className={cn(
        "absolute -left-[10px] top-5 max-w-full px-[1em] py-[5px] text-center font-roboto text-base font-bold text-black",
        bg,
      )}
    >
      WITH US$300 GIFT CARD
    </div>
  );
}
