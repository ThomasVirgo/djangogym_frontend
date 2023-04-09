import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './login'
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';

function App() {

  return (
    <BrowserRouter basename={'/'}>
      <Routes>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/home' element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>

  )
}

export default App
