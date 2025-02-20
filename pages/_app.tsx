import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans } from "@/config/fonts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider>
      <div className={`${fontSans.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
