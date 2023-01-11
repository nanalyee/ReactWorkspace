const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  //app.use는 미들웨어를 사용할때, 사용한다
  // '/api'로  요청이 오면, proxy미들웨어를 실행해라.
  // /api로 요청을 보내면 우리 스프링 서버인 8080으로 가게 된다.
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
