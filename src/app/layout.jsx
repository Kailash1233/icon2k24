import dynamic from "next/dynamic";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/footer";
import connectDB from "./lib/mongodb";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ICON 2K24",
  description:
    "A National Level Technical Symposium by Dept of Information Technology",
};

export default function RootLayout() {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Acme&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* <body className={inter.className}> */}
      <body>
        <Analytics />
        <SpeedInsights />
        <Navbar />

        <LazyLoadedComponent dynamicImport={() => import("./page")} />
        <LazyLoadedComponent
          dynamicImport={() => import("./pages/about/page")}
        />
        <LazyLoadedComponent
          dynamicImport={() => import("./pages/event/page")}
        />
        <LazyLoadedComponent
          dynamicImport={() => import("./pages/contact/page")}
        />

        <Footer />
        {connectDB()}
      </body>
    </html>
  );
}

function LazyLoadedComponent({ dynamicImport }) {
  const Component = dynamic(dynamicImport);
  return <Component />;
}
