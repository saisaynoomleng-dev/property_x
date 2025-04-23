'use client';

import Link from 'next/link';
import { DarkModeToggler } from './DarkModeToggler';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex sm:flex-row py-5 px-3 max-w-[1500px] items-center justify-between">
      <div className="flex gap-3 items-center">
        <Link href="/">
          <Image
            src="/logo-on-white.png"
            width={100}
            height={30}
            alt=""
            priority
            className="dark:hidden w-36"
          />

          <Image
            src="/logo-on-black.png"
            width={100}
            height={30}
            alt=""
            priority
            className="hidden dark:block w-36"
          />
        </Link>
        <DarkModeToggler />
      </div>
    </header>
  );
};

export default Header;
