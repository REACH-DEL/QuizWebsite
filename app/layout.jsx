import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const nunito = Nunito({
  variable: "--font-nunito", 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunito.className} font-sans`}
      >
        {children}  
        <Toaster/>
      </body>
    </html>
  );
}
