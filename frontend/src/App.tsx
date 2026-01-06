import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import ProtectedRoute from './components/auth/ProtectedRoute';
import PublicLayout from './components/layout/PublicLayout';
import MainLayout from './components/layout/MainLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PublicLayout />} />

        <Route element={<ProtectedRoute />} >
          <Route element={<MainLayout />} >
            {/* Protected routes go here */}
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;