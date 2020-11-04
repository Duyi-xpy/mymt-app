const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const staticPublic = path.resolve(__dirname, "../public");

app.use(
  express.static(staticPublic, {
    setHeaders(res, path) {
      if (!path.endsWith(".html")) {
        res.header("Cache-Control", `max-age=${3600 * 24 * 365 * 100}`);
      }
    },
  })
);

// app.use(
//   cors({
//     origin(origin, callback) {
//       if (!origin) {
//         callback(null, "*");
//         return;
//       }
//       callback(null, origin);
//     },
//     credentials: true,
//   })
// );

// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use("/api/user", require("./api/user"));
app.use("/api/shop", require("./api/shop"));
//app.use("/api/admin", require(""));

const port = 23331;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
