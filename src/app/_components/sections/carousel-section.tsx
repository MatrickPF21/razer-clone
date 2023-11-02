import Carousel from "../carousel";

type CarouselSectionProps = {
  title: string;
  description: string;
};

export default function CarouselSection({
  description,
  title,
  children,
}: React.PropsWithChildren<CarouselSectionProps>) {
  return (
    <section className=''>
      <div className='mx-auto mb-[1.065rem] max-w-[1200px] px-[1.125rem] text-[1.125rem] leading-[1.2] sm:px-[0.5rem]'>
        <h1 className='mb-[0.3rem] font-titillium font-bold sm:text-[1.5rem]'>
          {title}
        </h1>
        <p className='font-roboto text-[#9a9a9a] sm:text-[1.125rem]'>
          {description}
        </p>
      </div>
      <article className='pb-8'>
        <Carousel>{children}</Carousel>
      </article>
    </section>
  );
}
