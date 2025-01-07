// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 반드시 하나여야만 한다 (빈태그 <></>로 묶어도 된다)
import "./Main.css";

const Main = () => {
  const user = {
    name: "Lee",
    isLogin: true,
  };

  // 1. 삼항연산자
  //   return <>{user.isLogin ? <div>Logout</div> : <div>Login</div>}</>;

  // 2. if ~ else문
  if (user.isLogin) {
    return <div className="logout">Logout</div>;
  } else {
    return <div>Login</div>;
  }
};

export default Main;
