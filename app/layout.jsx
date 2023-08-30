import Navbar from "@components/Navbar";
import "@styles/globals.css";

export const metadata = {
  title: "Prompter",
  description: "Discover some new and useful prompts for chat gpt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
