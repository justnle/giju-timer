export const metadata = {
  title: "giju timer",
  description: "countdown to April 18th, 2140",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
