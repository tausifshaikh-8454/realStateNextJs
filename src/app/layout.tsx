import Head from '@/components/Head';
import './globals.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='dark'>

        <Head/>
        {children}

      </body>
    </html>
  );
}
