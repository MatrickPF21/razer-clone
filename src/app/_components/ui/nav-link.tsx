"use client";
import type { NavigationMenuLinkProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavigationMenuLink } from "./navigation-menu";

export default function NavLink({
  href,
  ...props
}: NavigationMenuLinkProps & { href: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} passHref legacyBehavior>
      <NavigationMenuLink active={isActive} {...props} />
    </Link>
  );
}
