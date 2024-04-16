export default function topBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="border-b text-center">20% OFF</div>
      {children}
    </>
  );
}
