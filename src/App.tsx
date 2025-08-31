// src/App.tsx
import { useLocation } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import PromoBanner from './components/PromoBanner';

const App = () => {
  const routing = useRoutes(routes);
  const location = useLocation();

  const showBanner = location.pathname === '/';

  return (
    <>
      {showBanner && (
        <PromoBanner
          message="Sign up and get 20% off your first order."
          ctaText="Sign Up Now"
          ctaHref="/signup"
        />
      )}
      {routing}
    </>
  );
};

export default App;
