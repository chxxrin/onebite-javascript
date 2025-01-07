// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  // 통합 event handler
  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input, //관련없는 값들은 그대로 가져오도록
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        ></input>
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
          placeholder={"생년월일"}
        ></input>
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option>국적</option>
          <option value="kr">한국</option>
          <option value="uk">영국</option>
          <option value="us">미국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </>
  );
};

export default Register;
