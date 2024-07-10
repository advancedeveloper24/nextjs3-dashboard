import "@/app/ui/global.css";
import { mukta } from "./ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mukta.className} antialiased`}>{children}</body>
    </html>
  );
}
