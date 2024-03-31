import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authService } from './appwrite/auth.js';
import { useEffect } from 'react';
import { login, logout } from './store/authSlice.js';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) dispatch(login({ userData }))
      else dispatch(logout());
    }).finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
    <div className='min-h-screen bg-gray-400' >
    <Header />
    {/* <outlet/> */}
    <Footer />
    </div>
      
    </>
  ) : null;
}

export default App;
