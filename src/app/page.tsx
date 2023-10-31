import Image from "next/image";
import Link from "next/link";

import HeroSection from "./_components/hero-section";
import Notification from "./_components/notification";

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Notification>
        Join RazerStore Rewards to unlock bonus Razer Silver, reduced minimum
        spend for free shipping, exclusive perks and more.
      </Notification>
      <HeroSection
        heroImage={
          <>
            <Image
              src='/assets/halloween-campaign-homepage-mobile2x.webp'
              alt='Razer halloween campaign'
              fill
              className='min-h-[650px] object-cover sm:hidden'
              sizes='100vw'
            />
            <Image
              src='/assets/halloween-campaign-homepage-desktop2x.webp'
              alt='Razer halloween campaign'
              fill
              className='hidden min-h-[650px] object-cover sm:block'
              sizes='100vw'
            />
          </>
        }
      >
        <div className='pt-14'>
          <h1 className='mb-2 text-4xl font-semibold'>WAKE YOUR HALLOWEEN</h1>
          <p className='mb-2 text-lg'>EXCLUSIVE OFFERS WILL MANIFEST</p>
          <Link href={"/"}>
            Show Now <span className='text-[#44D62C]'>{">"}</span>
          </Link>
        </div>
      </HeroSection>
    </main>
  );
}
