import express from "express" 
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express();

const port = 8800;

app.use(cors({
    origin : "http://localhost:5500",
    credentials: true,
}));

app.use(cookieParser());
  
app.get('/setcookie', (req, res) => {
    const cookieConfig = 
    {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
    }
    res.cookie('testcookieproject_test1', 'hello!', cookieConfig)
    .send({key: 'testcookieproject_test1', value: 'hello!', cookieConfig});
})

app.get('/getcookie', (req, res) => {
    res.send(req.cookies);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})


// sms
