import cors from "cors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend domain/port
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable credentials (if your fetch requests include credentials)
  }),
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.get("/", (req, res) => {
  res.send("hello there, server is online ");
});

// to perform action for login requests
app.post("/api/login", async (req, res) => {
  console.log("login request: ", req.body);
  let username = req.body.username;
  let password = req.body.password;
  //let result = await db.login(username, password);
  console.log("login request: ", username, " | ", password);
  console.log("login user cookie: ", req.cookies.user);
  let user = { username: username, password: password };
  if (!auth(user)) {
    res.send(
      JSON.stringify({
        message: "login failed",
        reason: "username or password is incorrect",
      }),
    );
    return;
  }
  const user_session_id = generateSessionId(20);
  res.cookie("user_session_id", user_session_id, {
    maxAge: 900000,
    httpOnly: true,
  });

  addSession({ username: req.body.username, sessionId: user_session_id });
  res.send(
    JSON.stringify({ message: "login Success", cook: req.cookies.user }),
  );
});

app.get("/api/greet", (req, res) => {
  user_session_id.forEach((element) => {
    if (element.sessionId === req.cookies.user_session_id) {
      res.send(JSON.stringify({ message: "hello there, user" }));
    }
  });
  res.send(JSON.stringify({ message: "are you user?" }));
});
// sign up
app.post("/api/signup", async (req, res) => {
  console.log("========================================================");
  if (checkUser(req.body.username)) {
    res.send(
      JSON.stringify({
        message: "signup failed",
        reason: "username already exists",
      }),
    );
    return;
  }
  try {
    let user = {
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      remember: req.body.remember,
    };
    addUser(user);
  } catch (err) {
    res.send(
      JSON.stringify({
        message: "signup failed",
        reason: "required data hasnt given",
      }),
    );
  }
  const user_session_id = generateSessionId(20);
  res.cookie("user_session_id", user_session_id, {
    maxAge: 900000,
    httpOnly: true,
  });
  addSession({ username: req.body.username, sessionId: user_session_id });
  res.send(JSON.stringify({ message: "signup Success" }));
});
app.delete("/api/login", async (req, res) => {
  console.log("logout request: ", req.cookies.user);
  res.clearCookie("user_session_id");
  const index = user_session_id.indexOf(
    (element) => element.username === req.body.user,
  );
  if (index > -1) {
    user_session_id.splice(index, 1);
  }
  res.send(JSON.stringify({ message: "logout Success" }));
});

const auth = (user) => {
  for (let i = 0; i < users.length; i++) {
    if (
      users[i].username === user.username &&
      users[i].password === user.password
    )
      return true;
  }
  return false;
};

const addUser = (user) => {
  users.push(user);
};

const users = [];
const user_session_id = [];
const addSession = (user) => {
  user_session_id.push(user);
};

const checkUser = (username) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) return true;
  }
  return false;
};

app.listen(6969, () => {
  console.log("Server listening on port 6969");
});

function generateSessionId(length) {
  let sessionId = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    sessionId += characters.charAt(randomIndex);
  }

  return sessionId;
}
