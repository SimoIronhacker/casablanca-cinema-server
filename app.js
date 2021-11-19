require("dotenv").config();
require("./config/mongo");

require("./config/passport");

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const logger = require("morgan");
const passport = require("passport");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const articleRouter = require("./routes/article.js");
const categoryRouter = require("./routes/category.js");
const commentRouter = require("./routes/comments.js");
const authRouter = require("./routes/auth");
const session = require("express-session");

const app = express();
app.use(session({ cookie: { maxAge: 1000 * 60 * 60 * 4 },
  resave: true,
  saveUninitialized: true,
  secret: process.env.SECRET_SESSION
}));

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// app.use('/', indexRouter);
app.use("/", usersRouter);
app.use(passport.initialize());
app.use(passport.session());
app.use("/", articleRouter);
app.use("/", categoryRouter);
app.use("/", commentRouter);
app.use("/", authRouter);

// // 404 Middleware

app.use("/api/*", (req, res, next) => {
  const error = new Error("Ressource not found.");
  error.status = 404;
  next(error);
});

if (process.env.NODE_ENV === "production") {
  app.use("*", (req, res, next) => {
    // If no routes match, send them the React HTML.
    res.sendFile(path.join(__dirname, "public/build/index.html"));
  });
}

module.exports = app;
