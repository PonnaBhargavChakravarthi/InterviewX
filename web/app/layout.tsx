import "./globals.css";
import type { Metadata } from "next";
import { ResumeProvider } from "@/context/ResumeContext";

export const metadata: Metadata = {
  title: "InterviewX",
  description: "Resume Builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ResumeProvider>
          {children}
        </ResumeProvider>
      </body>
    </html>
  );
}