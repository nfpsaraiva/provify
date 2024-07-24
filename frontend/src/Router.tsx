import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './pages/About/About.page';
import HowItWorks from './pages/HowItWorks/HowItWorks.page';
import Roadmap from './pages/Roadmap/Roadmap.page';
import Drafts from './pages/Drafts/Drafts.page';
import { Notes, Team } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Notes />
    ),
  },
  {
    path: '/drafts',
    element: (
      <Drafts />
    ),
  },
  {
    path: '/team',
    element: (
      <Team />
    ),
  },
  {
    path: '/how-it-works',
    element: (
      <HowItWorks />
    ),
  },
  {
    path: '/roadmap',
    element: (
      <Roadmap />
    ),
  },
  {
    path: '/about',
    element: (
      <About />
    ),
  }
]);

export function Router() {
  return <RouterProvider router={router} />;
}
