import { Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className='font-RazerF5 fixed top-0 z-40 h-12 w-full border-b border-primary bg-black text-[#999] sm:h-[60px]'>
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
      <ul className='container hidden h-full grid-cols-11 place-items-center px-16 font-light sm:grid'>
        <li className='col-span-1'>
          <nav>
            <Link href={"/"}>
              <Image src='/logo.svg' alt='Razer logo' width='35' height='35' />
            </Link>
          </nav>
        </li>
        <li className='col-span-1'>
          <nav>
            <Link href={"/store"}>Store</Link>
          </nav>
        </li>
        {Array(7)
          .fill(0)
          .map((_, idx) => (
            <li className='col-span-1' key={idx}></li>
          ))}
        <li className='col-span-1'>
          <Button className='h-12 w-12' variant='ghost' size='icon'>
            <Search className='h-7 w-7' />
          </Button>
        </li>
        <li className='col-span-1'>
          <Button className='h-12 w-12' variant='ghost' size='icon'>
            <ShoppingCart className='h-7 w-7' />
          </Button>
        </li>
      </ul>
    </header>
  );
}
