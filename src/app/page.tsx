import Image from "next/image";
import Link from "next/link";

import HeroSection, {
  HeroSectionLinks,
  HeroSectionSubTitle,
  HeroSectionTitle,
} from "./_components/hero-section";
import MainWrapper from "./_components/main-wrapper";
import Notification from "./_components/notification";

export default function Home() {
  return (
    <MainWrapper>
      <Notification>
        RazerStore Rewards Giveaway: Become a member and stand to win both the
        Razer Kitsune and the PlayStation 5.{" "}
        <Link href={"/"}>Join now {">"}</Link>
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
          <HeroSectionLinks>
            {[
              {
                href: "/",
                text: "Shop Now",
              },
            ]}
          </HeroSectionLinks>
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
          <HeroSectionLinks>
            {[
              {
                href: "/",
                text: "Learn More",
              },
              {
                href: "/",
                text: "Buy",
              },
            ]}
          </HeroSectionLinks>
        </div>
      </HeroSection>
    </MainWrapper>
  );
}
