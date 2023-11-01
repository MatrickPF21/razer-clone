import Image from "next/image";
import Link from "next/link";

export type StaticProductProps = {
  link: string;
  image: string;
  alt: string;
  title: string;
};

export default function StaticProduct({
  alt,
  image,
  link,
  title,
}: StaticProductProps) {
  return (
    <li className='w-[100px] text-center hover:text-primary'>
      <Link href={link} className='block w-[100px]'>
        <Image
          src={image}
          alt={alt}
          width={100}
          height={75}
          className='mx-auto h-[75px] w-auto max-w-[100px]'
        />
        <div className='mt-[10px]'>{title}</div>
      </Link>
    </li>
  );
}
