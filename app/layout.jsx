import Navbar from "@components/Navbar";
import "@styles/globals.css";
import Provider from "@components/Provider";

export const metadata = {
  title: "Prompter",
  description: "Discover some new and useful prompts for chat gpt",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Navbar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
