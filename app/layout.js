import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import "./global.css";
export const metadata = {
  title: "Reat time detection app",
  description: "A web demo of sign language translator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
