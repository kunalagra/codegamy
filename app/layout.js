import "./globals.css";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "Codegamy - Your Coding Ground",
  description: "Best Coding platform for all your needs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}