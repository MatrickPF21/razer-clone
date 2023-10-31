type HeroSectionProps = {
  children?: React.ReactNode;
  heroImage?: React.ReactNode;
};

export default function HeroSection({ children, heroImage }: HeroSectionProps) {
  return (
    <section className='w-full bg-[#222] pb-2'>
      <div className='relative'>
        {heroImage}
        <article className='absolute top-0 z-10 w-full text-center'>
          {children}
        </article>
      </div>
    </section>
  );
}
