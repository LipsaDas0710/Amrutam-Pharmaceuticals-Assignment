// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Amrutam – Grow Your Ayurvedic Practice",
  description:
    "Join Amrutam to connect with more patients, manage consultations, and manage your Ayurvedic practice with flexible work timings and smart wallet payouts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
