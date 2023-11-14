import GlideCarousel, {
  GlideCarouselCard,
  type GlideCarouselCardProps,
} from "../glide-carousel";

export default function SliderSection({
  items,
}: {
  items: GlideCarouselCardProps[];
}) {
  return (
    <section className='mb-10 mt-4 w-full overflow-hidden px-2'>
      <GlideCarousel items={items.length}>
        {items.map((props, idx) => (
          <GlideCarouselCard key={idx} {...props} />
        ))}
      </GlideCarousel>
    </section>
  );
}
