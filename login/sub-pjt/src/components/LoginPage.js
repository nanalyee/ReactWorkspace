import React, { useState } from "react";
import "./LoginRegister.css";

function LoginPage() {
  const [id, setID] = useState("");
  const [password, setPassword] = useState("");

  const onIdHandler = (event) => {
    setID(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="loginregister">
      <form>
        <div>
          <input
            name="id"
            type="text"
            placeholder="아이디"
            value={id}
            onChange={onIdHandler}
            className="loginregister__input"
          />
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onPasswordHandler}
            className="loginregister__input"
          />
        </div>
        <div>
          <button
            type="submit"
            onSubmit={onSubmit}
            className="loginregister__button"
          >
            로그인
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
