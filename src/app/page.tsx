import Image from "next/image";
import Link from "next/link";

import HeroSection, {
  HeroSectionSubTitle,
  HeroSectionTitle,
} from "./_components/hero-section";
import Notification from "./_components/notification";

export default function Home() {
  return (
    <main className='min-h-screen pt-12 sm:pt-[60px]'>
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
              className='!relative min-h-[650px] object-cover sm:hidden'
              sizes='100vw'
            />
            <Image
              src='/assets/halloween-campaign-homepage-desktop2x.webp'
              alt='Razer halloween campaign'
              fill
              className='!relative hidden min-h-[650px] object-cover sm:block'
              sizes='100vw'
            />
          </>
        }
      >
        <div className='pt-14'>
          <HeroSectionTitle>WAKE YOUR HALLOWEEN</HeroSectionTitle>
          <HeroSectionSubTitle>
            EXCLUSIVE OFFERS WILL MANIFEST
          </HeroSectionSubTitle>
          <Link href={"/"} className='text-[21px] font-light'>
            Show Now <span className='text-[#44D62C]'>{">"}</span>
          </Link>
        </div>
      </HeroSection>
      <HeroSection
        heroImage={
          <>
            <Image
              src='/assets/razer-blade16-lamborghini-homepage-mobile2x.webp'
              alt='Razer blade 16 campaign'
              fill
              className='!relative min-h-[650px] object-cover sm:hidden'
              sizes='100vw'
            />
            <Image
              src='/assets/razer-blade16-lamborghini-homepage-desktop2x.webp'
              alt='Razer blade 16 campaign'
              fill
              className='!relative hidden min-h-[650px] object-cover sm:block'
              sizes='100vw'
            />
          </>
        }
      >
        <div className='pt-6'>
          <div className='mx-auto mb-4 w-fit bg-[#ff9c07] px-4 py-1 text-start font-roboto text-[0.875rem] text-black sm:font-bold'>
            <span className='block text-[0.6rem] leading-[1em]'>RAZER.COM</span>
            <div className='leading-[1em]'>EXCLUSIVE</div>
          </div>
          <HeroSectionTitle>NEW RAZER BLADE 16</HeroSectionTitle>
          <HeroSectionSubTitle>
            AUTOMOBILI LAMBORGHINI EDITION
          </HeroSectionSubTitle>
          <div className='flex items-center justify-center gap-8 sm:text-[21px] sm:font-light'>
            <Link href={"/"}>
              Learn More <span className='text-[#44D62C]'>{">"}</span>
            </Link>
            <Link href={"/"}>
              Buy <span className='text-[#44D62C]'>{">"}</span>
            </Link>
          </div>
        </div>
      </HeroSection>
    </main>
  );
}
