import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { search } = location;

  const query = queryString.parse(search);

  const { merchant_uid, error_msg, imp_uid } = query;
  const isSuccessed = getIsSuccessed();
  function getIsSuccessed() {
    const { success, imp_success } = query;
    if (typeof imp_success === 'string') return imp_success === 'true';
    if (typeof imp_success === 'boolean') return imp_success === true;
    if (typeof success === 'string') return success === 'true';
    if (typeof success === 'boolean') return success === true;
  }

  const iconType = isSuccessed ? 'check-circle' : 'exclamation-circle';
  const resultType = isSuccessed ? '성공' : '실패';
  const colorType = isSuccessed ? '#52c41a' : '#f5222d';
  return (
    // <Wrapper>
    //   <Container colorType={colorType}>
    //     <Icon type={iconType} theme="filled" />
    <>
      <p>{`결제에 ${resultType}하였습니다`}</p>
      <ul>
        <li>
          <span>주문번호</span>
          <span>{merchant_uid}</span>
        </li>
        {isSuccessed ? (
          <li>
            <span>아임포트 번호</span>
            <span>{imp_uid}</span>
          </li>
        ) : (
          <li>
            <span>에러 메시지</span>
            <span>{error_msg}</span>
          </li>
        )}
      </ul>
      <button onClick={() => navigate('/')}>돌아가기</button>
    </>
    //     <Button size="large" onClick={() => history.push('/')}>
    //       <Icon type="arrow-left" />
    //       돌아가기
    //     </Button>
    //   </Container>
    // </Wrapper>
  );
};
export default PaymentResult;
