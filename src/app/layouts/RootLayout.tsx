import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
