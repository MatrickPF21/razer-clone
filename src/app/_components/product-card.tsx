import type { BadgeColor, Price } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { cn, formatPrices } from "@/utils";
import { Skeleton } from "./ui/skeleton";

export type ProductCardProps = {
  image: string;
  altText: string;
  name: string;
  summary: string | null;
  promoliner: string | null;
  hrefLink: string;
  price: Pick<Price, "amount" | "currency" | "discount">;
  badge?: ProductCardBadgeProps;
  isRgb?: boolean;
};

export default function ProductCard({
  altText,
  image,
  name,
  price,
  promoliner,
  summary,
  hrefLink,
  badge,
  isRgb,
}: ProductCardProps) {
  return (
    <li
      className='relative grid min-h-[480px] w-[295px] translate-x-8 snap-center self-stretch bg-[#222]'
      style={{ gridTemplateRows: "298px 1fr" }}
    >
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
          {!!summary && (
            <p className='text-[0.875rem] font-light leading-[1.3] text-[#888]'>
              {summary}
            </p>
          )}
          {!!promoliner && (
            <p className='text-[0.875rem] font-light leading-[1.3]'>
              {promoliner}
            </p>
          )}
        </div>
        <div className='flex items-end justify-between text-[14px]'>
          <div className='leading-[16px]'>
            {price.discount ? (
              <p>
                <span>
                  {formatPrices(
                    price.amount * ((100 - price.discount) / 100),
                    price.currency,
                  )}
                </span>
                <br />
                <span className='text-[#999] line-through'>
                  {formatPrices(price.amount, price.currency)}
                </span>
              </p>
            ) : (
              <p>
                From
                <br />
                {formatPrices(price.amount, price.currency)}
              </p>
            )}
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
      {!badge && price.discount && (
        <ProductCardBadge color='BLUE' text={`${price.discount}% OFF`} />
      )}
    </li>
  );
}

const colorConfig: Record<BadgeColor | "BLUE", string> = {
  ORANGE: "bg-[#ff9c07]",
  YELLOW: "bg-[#ffc107]",
  BLUE: "bg-[#28aadc]",
};

type ProductCardBadgeProps = {
  color: keyof typeof colorConfig;
  text: string;
};

function ProductCardBadge({ color, text }: ProductCardBadgeProps) {
  const bg = colorConfig[color];

  return (
    <div
      className={cn(
        "absolute -left-[10px] top-5 max-w-full px-[1em] py-[5px] text-center font-roboto text-base font-bold text-black",
        bg,
      )}
    >
      {text}
    </div>
  );
}

export function ProductCardSkeleton() {
  return (
    <Skeleton className='relative min-h-[480px] w-[295px] translate-x-8 snap-center bg-[#222]'></Skeleton>
  );
}
