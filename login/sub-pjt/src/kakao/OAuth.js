const CLIENT_ID = "cb78d868648ad8b2e322df61796a0bff";
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
