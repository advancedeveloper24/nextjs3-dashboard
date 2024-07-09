import "@/app/ui/global.css";
import { kenia } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${kenia.className} antialiased`}>{children}</body>
    </html>
  );
}
