import type { Metadata } from "next";
import MuiProvider from "./MuiProvider";
import "./globals.css";

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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <MuiProvider>
          {children}
        </MuiProvider>
      </body>
    </html>
  );
}
