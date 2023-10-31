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
        <article className='font-RazerF5 absolute top-0 z-10 w-full text-center'>
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
      className={cn("mb-2 text-[32px] font-medium sm:text-[56px]", className)}
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
    <h3 className={cn("mb-2 text-[19px] font-light sm:text-[28px]", className)}>
      {children}
    </h3>
  );
}
