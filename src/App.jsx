import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout imports
import RootLayout from './layout/RootLayout';

//Page imports
import Body from './pages/Body';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Body />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
