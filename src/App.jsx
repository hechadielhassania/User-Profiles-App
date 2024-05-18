import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilesPage from './pages/ProfilesPage';
import ProfilePage from './pages/ProfilePage';
import NavBar from './pages/NavBar';
import NotFoundPage from './pages/NotFoudPage'
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/profiles',
    element: <ProfilesPage />,
  },
  {
    path: '/profile/:id',
    element: <ProfilePage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div>
        <div className="container mt-3">
          <NavBar />
          <router.Component />
        </div>
      </div>
    </RouterProvider>
  );
}

export default App;
