export const metadata = {
  title: 'GreenTrace',
  description: 'GreenTrace demo prototype',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">GreenTrace</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <small>GreenTrace Demo</small>
        </footer>
      </body>
    </html>
  );
}
