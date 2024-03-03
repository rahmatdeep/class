export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
      <div className="border-b text-center">20% off on all courses</div>
      {children}
      </>
    );
  }
  