// pages/500.js
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Custom500() {
  return (
    <div className={inter.className}>
      <h1>500 - Server Error</h1>
      <p>Sorry, something went wrong on our end.</p>
    </div>
  );
}
