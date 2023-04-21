// import $ from 'jquery';
// import axios from 'axios';
import queryString from 'query-string';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { IMP } = window;
  const userCode = '';
  const data = {
    // param
    pg: 'danal_tpay.9810030929',
    pay_method: 'card',
    merchant_uid: 'ORD20180131-0000011',
    name: '노르웨이 회전 의자',
    amount: 100,
    buyer_email: 'gildong@gmail.com',
    buyer_name: '홍길동',
    buyer_tel: '010-4242-4242',
    buyer_addr: '서울특별시 강남구 신사동',
    buyer_postcode: '01181',
  };
  const navigate = useNavigate();
  const callback = (response) => {
    console.log(response);
    const query = queryString.stringify(response);
    navigate(`/payment/result?${query}`);
  };
  const requestPay = () => {
    IMP.init(userCode);
    IMP.request_pay(data, callback);
  };
  return (
    <>
      <button className="" onClick={requestPay}>
        결제
      </button>
    </>
  );
};
export default Payment;
