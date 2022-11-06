import NavBar from "./nav-bar";
import Link from "next/link";

// RootLayout replace app.js and _document.js files
export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
