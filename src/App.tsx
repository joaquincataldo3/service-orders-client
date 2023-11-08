import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { OrderPage } from './pages/order/OrderPage';
import { UserProfilePage } from './pages/userProfile/UserProfilePage';
import { HomePage } from './pages/home/HomePage';
import { ReceiptPage } from './pages/receipts/ReceiptPage';

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='user-profile/:orderId' element={<UserProfilePage />}/>
        <Route path='orders/:receipt' element={<ReceiptPage />}/>
        <Route path='orders/:orderId' element={<OrderPage />}/>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
