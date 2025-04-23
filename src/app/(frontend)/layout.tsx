import '../globals.css';
import { mainFont } from '@/lib/fonts';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <main>{children}</main>;
}
