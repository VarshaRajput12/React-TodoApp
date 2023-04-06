// rrd imports
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RootLayout() {
  return (
    <main className="font-roboto">
      <ToastContainer limit={1} />
      <Outlet />
    </main>
  );
}

export default RootLayout;
