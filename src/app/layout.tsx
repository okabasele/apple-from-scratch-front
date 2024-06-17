import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/partials/Header";
import CartContextProvider from "@/context/CartContext";
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "@/components/partials/Footer";

const ibm = IBM_Plex_Sans({weight:['100', '200', '300', '400', '500', '600', '700'],subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apple (France)",
  description: "L'univers Apple : de l'iPhone à l'iPad, l'Apple Watch, le Mac et l'Apple TV en passant par les accessoires, le divertissement et l'assistance.",
  icons: 
    {
      icon: "/images/logo_apple.png"
    }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <CartContextProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
          <Header />
          {children}
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
