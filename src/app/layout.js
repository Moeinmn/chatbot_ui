import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({ src: "../../fonts/IRANYekanBold.ttf" });
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Chat Bot AI",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
