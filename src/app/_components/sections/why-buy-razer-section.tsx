import { Zap, ShoppingBag, Star, CalendarDays } from "lucide-react";

const items: ItemProps[] = [
  {
    icon: <Zap className='h-10 w-10 text-white' />,
    title: "Get First Dlbs",
    description:
      "Razer.com is the only place where you can buy our most anticipated Razer gear immediately upon release.",
  },
  {
    icon: <ShoppingBag className='h-10 w-10 text-white' />,
    title: "The Largest Array Of Razer Gear",
    description:
      "As Razer’s official online store, we hold a massive collection of products that can't be matched anywhere else.",
  },
  {
    icon: <Star className='h-10 w-10 text-white' />,
    title: "Exclusive Razer Gear And Swag",
    description:
      "Get access to limited edition Razer gear that’s only available on Razer.com.",
  },
  {
    icon: <CalendarDays className='h-10 w-10 text-white' />,
    title: "Play Now, Pay Later",
    description:
      "With our 0% installment plan, spend more time gaming with your sweet new gear and less time fussing over payment.",
  },
];

export default function WhyBuyRazerSection() {
  return (
    <section className='container px-[1.125rem] py-8 text-center font-titillium sm:max-w-[1200px]'>
      <h2 className='pb-8 text-[1.75rem] font-bold leading-[1.75rem] text-primary sm:text-[2.25rem] sm:leading-[2.625rem]'>
        WHY BUY FROM RAZER.COM
      </h2>
      <ul className='grid w-full grid-cols-12 gap-4 px-[1.125rem]'>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </section>
  );
}

type ItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Item({ icon, description, title }: ItemProps) {
  return (
    <li className='col-span-12 my-4 flex flex-col items-center justify-center sm:col-span-3'>
      <div className='rounded-full border-2 border-white p-2'>{icon}</div>
      <div className='mb-1 mt-4 text-[1.125rem] font-bold leading-[1.5rem] sm:text-[1.5rem] sm:leading-[1.2em]'>
        {title}
      </div>
      <div className='pb-[1.25rem] pt-[0.4375rem] font-roboto text-[1.125rem] leading-[1.5em] text-[#9a9a9a] sm:font-normal'>
        <p>{description}</p>
      </div>
    </li>
  );
}
