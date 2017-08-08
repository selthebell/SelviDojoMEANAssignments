const express=require('express');
const parser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const port = process.env.PORT || 8000;
const app = express();

//rolling-  update expiration
//cookie - https will be secure true
const sessionConfig = {
  saveUnintialized: true,
  secret: 'SessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000
  }
};

app.use(parser.urlencoded({extendend: true}));
app.use(parser.json());

app.use(session(sessionConfig));
app.use(cookieParser('asdsafsdfsdgfsgergeghgj'));
app.use(express.static(path.join(__dirname,'dist')));

require('./server/config/database');

app.use('/api/auth',require('./server/config/routes/auth.routes'));
app.use('/api/bicycle',require('./server/config/routes/bicycle.routes'));

const catchAll = require('./server/config/routes/catch-all.routes');
app.use(catchAll);

app.listen(port,()=> console.log(`listening on port ${ port }`))
