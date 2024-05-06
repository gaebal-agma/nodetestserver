// Express 모듈을 불러옵니다.
const express = require('express');

// Express 애플리케이션을 생성합니다.
const app = express();

// 루트 엔드포인트를 정의합니다.
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 서버를 포트 3000에서 시작합니다.
app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.');
});
