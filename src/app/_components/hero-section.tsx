type HeroSectionProps = {
  children?: React.ReactNode;
  heroImage?: React.ReactNode;
};

export default function HeroSection({ children, heroImage }: HeroSectionProps) {
  return (
    <section className='relative w-full'>
      {heroImage}
      <article className='relative z-10 w-full text-center'>{children}</article>
    </section>
  );
}
