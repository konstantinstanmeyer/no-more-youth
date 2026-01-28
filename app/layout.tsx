import type { Metadata } from "next";
import { Roboto, Chivo, Montserrat } from "next/font/google"
import "./globals.css";

export const metadata: Metadata = {
  title: "NMY",
  description: "Boston-based metallic hardcore band",
};

// copy-paste base
// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['100', '200','300','400','500','600','700','800','900'],
//   style: ['normal', 'italic'],
//   variable: '--font-roboto'
// })

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '200','300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  variable: '--font-roboto'
})

const chivo = Chivo({
  subsets: ['latin'],
  weight: ['100', '200','300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  variable: '--font-chivo'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200','300','400','500','600','700','800','900'],
  style: ['normal', 'italic'],
  variable: '--font-montserrat'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-black" lang="en">
      <body
        className={`antialiased ${roboto.variable} ${chivo.variable} ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
