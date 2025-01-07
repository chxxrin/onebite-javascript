// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다 (조건문, 반복문 내에서는 hook 호출 불가)
// 3. 커스텀 훅을 직접 만들 수 있다

import { useState } from "react";
import useInput from "./../hooks/useInput";

const HookExam = () => {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();
  return (
    <div>
      <input value={input} onChange={onChange}></input>
      <input value={input2} onChange={onChange2}></input>
    </div>
  );
};

export default HookExam;
