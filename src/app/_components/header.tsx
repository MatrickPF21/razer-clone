import { Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className='h-12 w-full border-b border-[#44D62C] bg-black text-[#999]'>
      <div className='flex justify-between px-2 sm:hidden'>
        <Button className='h-12 w-12' variant='ghost' size='icon'>
          <Menu className='h-7 w-7' />
        </Button>
        <nav className='flex h-12 w-12 items-center justify-center'>
          <Link href={"/"}>
            <Image src='/logo.svg' alt='Razer logo' width='35' height='35' />
          </Link>
        </nav>
        <nav className='flex h-12 w-12 items-center justify-center'>
          <Link href='/'>
            <ShoppingCart className='h-6 w-6' />
          </Link>
        </nav>
      </div>
    </header>
  );
}
