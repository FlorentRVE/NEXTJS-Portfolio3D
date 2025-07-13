import "../style.scss";

export const metadata = {
  metadataBase: new URL("https://florent-rve.fr"),
  title: "Florent RVE | CM",
  description: "Venez découvrir mon petit espace de créativité 🏝️",
  openGraph: {
    type: "website",
    title: "Florent RVE | CM",
    description: "Venez découvrir mon petit espace de créativité 🏝️",
    url: "https://florent-rve.fr",
    images: [
      {
        url: "/textures/image/logo.webp",
        alt: "Logo de mon site personnel Florent RVE",
      },
    ],
  },
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
