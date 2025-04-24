'use client';

import Link from 'next/link';
import { DarkModeToggler } from './DarkModeToggler';
import Image from 'next/image';
import { NavigationMenu } from '@radix-ui/react-navigation-menu';
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { usePathname } from 'next/navigation';
import { FaArrowDown } from 'react-icons/fa';
import clsx from 'clsx';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex sm:flex-row py-5 px-10 max-w-[1500px] items-center justify-between">
      <div className="flex gap-1 items-center">
        <Link href="/">
          <Image
            src="/logo-on-white.png"
            width={100}
            height={30}
            alt=""
            priority
            className="dark:hidden min-w-36"
          />

          <Image
            src="/logo-on-black.png"
            width={100}
            height={30}
            alt=""
            priority
            className="hidden dark:block min-w-36"
          />
        </Link>
        <DarkModeToggler />
      </div>

      <nav role="navigation"></nav>
    </header>
  );
};

export default Header;
