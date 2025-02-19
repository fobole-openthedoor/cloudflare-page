import { ReactNode } from "react";

export default function ErrorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl flex-grow">
        {children}
      </main>
    </div>
  );
} 