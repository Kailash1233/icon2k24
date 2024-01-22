import dynamic from "next/dynamic";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer/footer";
import connectDB from "./lib/mongodb";

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
      </head>
      {/* <body className={inter.className}> */}
      <body>
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
