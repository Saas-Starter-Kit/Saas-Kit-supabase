import '../styles/globals.css';
import NavBarMain from '../components/NavBarMain';
import { InterFont } from '@/styles/fonts';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={`${InterFont.variable}`}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
