import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aakarshit Giri - Software Developer",
  description:
    "I am a software engineer with over 2 years of experience, primarily focused on developing and enhancing travel portals. I have successfully delivered end-to-end projects, including the integration of hotel suppliers and the development of B2B and B2C platforms with wallet-related features. My work includes creating a robust B2B dashboard that allows for efficient client management and enables the launch of white-label sites within a week. Additionally, I developed a comprehensive logs management dashboard that merges Kibana and Grafana visualizations to monitor and analyze system performance across the platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
