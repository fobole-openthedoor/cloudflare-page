import { Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-sans",
  // 只加载需要的字重
  weight: ['400', '600', '700'],
});
