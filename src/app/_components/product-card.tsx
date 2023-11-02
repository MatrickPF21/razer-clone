import { formatPrices } from "@/utils";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  image: string;
  altText: string;
  name: string;
  summary: string;
  promoliner: string;
  price: number;
  priceCurrency: string;
  hrefLink: string;
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
}: ProductCardProps) {
  return (
    <li className='relative min-h-[480px] w-[295px] translate-x-8 snap-center bg-[#222]'>
      <Link href={hrefLink} className='block bg-[#111]'>
        <Image src={image} alt={altText} width={295} height={295} />
      </Link>
      <div className='flex min-h-[180px] flex-col justify-between gap-4 p-4 font-roboto'>
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
      <div className='absolute -left-[10px] top-5 max-w-full bg-[#ffc107] px-[1em] py-[5px] text-center font-roboto text-base font-bold text-black'>
        WITH US$300 GIFT CARD
      </div>
    </li>
  );
}
