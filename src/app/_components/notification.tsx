import Link from "next/link";

const sentence =
  "RazerStore Rewards Giveaway: Become a member and stand to win both the Razer Kitsune and the PlayStation 5.";

// most of notification messages are the same
export default function Notification({ children }: React.PropsWithChildren) {
  return (
    <section className='bg-[#555] text-center font-roboto text-[14px] font-normal leading-[20px] tracking-[-0.01px] text-white'>
      <div className='container pb-[9.5px] pl-[30px] pr-[24px] pt-[11.5px] sm:pr-[40px]'>
        <p>
          {children || sentence} <Link href={"/"}>Join Now {">"}</Link>
        </p>
      </div>
    </section>
  );
}
