import { KAKAO_AUTH_URL } from "./OAuth";

function Login() {
  return (
    <div>
      <a href={KAKAO_AUTH_URL}>카카오계정 로그인</a>
      <span>카카오계정 로그인</span>
    </div>
  );
}

export default Login;
