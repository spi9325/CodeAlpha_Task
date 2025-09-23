import { SessionProvider } from "next-auth/react";
import { Navbar } from "./components/Navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <main>
        <SessionProvider>
        <Navbar/>
        {children}
        </SessionProvider>
      </main>
  );
}
