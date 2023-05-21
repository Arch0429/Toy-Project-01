// express.js 
const express = require("express");
const app = express();

// Port
const port = 3000;
// Router
const router = require("./router/main")(app);

// 화면 경로 세팅
app.set("views", __dirname + "/views");
// View Engine(ejs)
app.set("view engine", 'ejs');
app.engine("html", require("ejs").renderFile);
// 정적 파일 경로 세팅( => express.static() )
app.use('/', express.static(__dirname + '/'));

// 서버 실행 시 동작 함수
const server = app.listen(port, function(){
    console.log(`Server Running by ${port}`);
})



