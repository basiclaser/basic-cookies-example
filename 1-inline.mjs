// express cookies example 
// 1. install cookie-parser
// 2. require cookie-parser
// 3. use cookie-parser
// 4. set cookie
// 5. get cookie
import express from "express" 
import cookieParser from "cookie-parser"

const app = express();
const port = 8800;

app.use(cookieParser());
app.get('/', (req, res) => {
    res.send(`<html>
    <body>
        <h1>Express Cookies Example</h1>
        <a href="/setcookie">Set Cookie</a>
        <a href="/getcookie">Get Cookie</a>
    </body>
    </html>`);
})
app.get('/setcookie', (req, res) => {
    res.cookie('name', 'express').send('cookie set');
})

app.get('/getcookie', (req, res) => {
    res.send(req.cookies);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
