import { Inter } from "next/font/google";
import "../globals.css";
import { NavBar } from "@/components/layout";
import { Lexend } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const lexend = Lexend({ subsets: ['latin'] });
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={lexend.className}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
