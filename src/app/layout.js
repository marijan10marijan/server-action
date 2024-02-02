import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Server Actions",
  description: "Learning server actions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" font-serif min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
