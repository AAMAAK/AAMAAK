export const metadata = {
  title: "AAMAAK",
  description: "EGCC Hub - demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: "system-ui, Arial" }}>
        {children}
      </body>
    </html>
  );
}
