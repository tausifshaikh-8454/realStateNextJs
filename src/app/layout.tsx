import Head from '@/components/Head';
import './globals.css';
import Footer from '@/components/Footer';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        <Head/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
