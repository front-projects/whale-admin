import Navigation from "@/components/Navigation/Navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen" >
      <Navigation />
      <div style={{ height: "calc(100% - 72px)" }} className="w-full p-4">
        {children}
      </div>
      
    </div>
  );
}
