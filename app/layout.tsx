export const metadata = {
  author: "Justin Le",
  description: "countdown to April 18th, 2140",
  title: "giju timer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
