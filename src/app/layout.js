import "../style.scss";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio CM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-lt-installed="true">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="light-theme">{children}</body>
    </html>
  );
}
