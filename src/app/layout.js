import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";
import { interDisplay } from "@/styles/fonts";
import GlobalStyle from "@/styles/GlobalStyle";
import AnalyticsProvider from "@/lib/analytics";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "uiLogos - A collection of logos for your next project",
  description: `Every now and then, we all need a logo as a placeholder for design and don't have the time to create a dummy logo or Google one. UILogos allows you to quickly insert dummy logosinto your design.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${interDisplay.variable}`}>
      <body>

        <StyledComponentsRegistry>
          <AnalyticsProvider />
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
