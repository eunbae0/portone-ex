import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Payment from './Payment';
import PaymentResult from './PaymentResult';
import CancelPay from './CanclePay';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/payment/result" element={<PaymentResult />} />
        <Route path="/canclePay" element={<CancelPay />} />
      </Routes>
      {/* <Route exact path="/payment/result" component={PaymentResult} /> */}
    </BrowserRouter>
  );
};

export default App;
