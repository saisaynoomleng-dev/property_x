import type { Metadata } from 'next';
import './globals.css';
import { mainFont } from '@/lib/fonts';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
    title: {
        default: 'Haru Property',
        template: '%s | Haru Property',
    },
    description:
        'Haru Property is a real estate agency company that lists different types of properties around the United States.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
            <body className={mainFont.variable}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
