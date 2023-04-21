import axios from 'axios';

const CancelPay = () => {
  const cancelPay = () => {
    axios({
      url: 'https://api.iamport.kr/payments/cancel', // 예: http://www.myservice.com/payments/cancel
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        merchant_uid: 'ORD20180131-0000011', // 주문번호
        cancel_request_amount: 100, // 환불금액
        reason: '테스트 결제 환불', // 환불사유
        // refund_holder: '홍길동', // [가상계좌 환불시 필수입력] 환불 수령계좌 예금주
        // refund_bank: '88', // [가상계좌 환불시 필수입력] 환불 수령계좌 은행코드(예: KG이니시스의 경우 신한은행은 88번)
        // refund_account: '56211105948400', // [가상계좌 환불시 필수입력] 환불 수령계좌 번호
      },
    }).then((res) => console.log(res));
  };
  return <button onClick={cancelPay}>환불하기</button>;
};
export default CancelPay;
