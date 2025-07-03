import type { Metadata } from "next";
import MuiProvider from "./MuiProvider";

export const metadata: Metadata = {
  title: "Job Interview",
  description: "Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MuiProvider>
          {children}
        </MuiProvider>
      </body>
    </html>
  );
}
