import '../styles/globals.css';
import NavBarMain from './(root)/_PageComponents/NavBarMain';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center p-24">
          <NavBarMain />
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
