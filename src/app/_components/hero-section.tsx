import Link, { type LinkProps } from "next/link";

import { cn } from "@/utils";

type HeroSectionProps = {
  children?: React.ReactNode;
  heroImage?: React.ReactNode;
};

export default function HeroSection({ children, heroImage }: HeroSectionProps) {
  return (
    <section className='w-full bg-[#222] pb-2'>
      <div className='relative'>
        {heroImage}
        <article className='font-RazerF5 container absolute top-0 z-10 w-full text-center'>
          {children}
        </article>
      </div>
    </section>
  );
}

type HeroSectionTitleProps = React.ComponentProps<"h1">;

export function HeroSectionTitle({
  children,
  className,
}: HeroSectionTitleProps) {
  return (
    <h1
      className={cn(
        "mb-2 text-[2rem] font-medium leading-[1.2] sm:text-[3.5rem] sm:leading-none",
        className,
      )}
    >
      {children}
    </h1>
  );
}

type HeroSectionSubTitleProps = React.ComponentProps<"h1">;

export function HeroSectionSubTitle({
  children,
  className,
}: HeroSectionSubTitleProps) {
  return (
    <h3
      className={cn(
        "mb-2 text-[1.1875rem] font-light leading-[1.2] sm:text-[1.75rem]",
        className,
      )}
    >
      {children}
    </h3>
  );
}

type LinkItem = Omit<React.ComponentPropsWithoutRef<"a">, "children"> &
  Omit<LinkProps, "children"> & {
    text?: string;
  };

type HeroSectionLinksProps = {
  children?: LinkItem[];
};

export function HeroSectionLinks({ children }: HeroSectionLinksProps) {
  return (
    <div className='flex items-center justify-center gap-8 text-[1.0625rem] font-light leading-normal sm:text-[1.3125rem]'>
      {!!children?.length &&
        children.map(({ text, ...props }, idx) => (
          <Link key={idx} {...props}>
            {text} <span className='text-primary'>{">"}</span>
          </Link>
        ))}
    </div>
  );
}
