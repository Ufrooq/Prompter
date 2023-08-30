import "@styles/globals.css";

export const metadata = {
  title: "Prompter",
  description: "Discover some new and useful prompts for chat gpt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
