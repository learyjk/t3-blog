import "../styles/globals.css";
import type { AppProps } from "next/app";
import { withTRPC } from "@trpc/next";
import { loggerLink } from "@trpc/client/links/loggerLink";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// TODO add appRouter to generic
export default withTRPC({
  config({ ctx }) {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/trpc`
      : "http://localhost:3000/api/trpc";

    const links = [loggerLink()];

    return {
      url,
    };
  },
});
