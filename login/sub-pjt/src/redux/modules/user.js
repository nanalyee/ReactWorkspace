import axios from "axios";

const kakaoLogin = (code) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "GET",
      url: `http://localhost:3000/oauth/callback/kakao?code=${code}`,
    })
      .then((res) => {
        console.log(res); // 토큰이 넘어올 것임

        const ACCESS_TOKEN = res.data.accessToken;

        localStorage.setItem("token", ACCESS_TOKEN); //예시로 로컬에 저장함

        history.replace("/sign_in"); // 토큰 받았았고 로그인됐으니 화면 전환시켜줌(메인으로)
        console.log("로그인 성공");
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        window.alert("로그인에 실패하였습니다.");
        history.replace("/"); // 로그인 실패하면 로그인화면으로 돌려보냄
      });
  };
};
