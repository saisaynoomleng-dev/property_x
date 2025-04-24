import Bounded from '@/components/Bounded';
import Paragraph from '@/components/Paragraph';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Bounded className="grid sm:grid-cols-2 gap-5">
      <div className="flex flex-col min-h-[15rem] gap-5 items-center justify-center overflow-hidden relative">
        <Paragraph className="absolute text-[10rem] indent-0 font-bold text-brand-neutral-500/10  md:text-[15rem] z-10">
          404
        </Paragraph>
        <Paragraph className="font-semibold relative leading-brand-200 z-20 text-fs-500">
          The page you are looking for is{' '}
          <span className="text-red-500 capitalize">not found!</span>
        </Paragraph>
        <Button className="relative z-20 ">
          <Link href="/">Go To Home Page</Link>
        </Button>
      </div>
      <div>
        <Image
          src="/not-found.webp"
          width={600}
          height={600}
          priority
          alt=""
          className="object-cover min-w-full mx-auto rounded-lg"
        />
      </div>
    </Bounded>
  );
};

export default NotFoundPage;
