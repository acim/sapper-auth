export function post(req, res) {
  const auth = req.body;
  console.log(req.user)
  res.setHeader("Content-Type", "application/json");

  //   TODO: Handle authentication
  if (auth.username === "admin" && auth.password === "123") {
    res.json({
        user: {
          username: auth.username,
          token: 123123123
        }
    });
    return;
  }

  res.status(401).json({
    error: "Wrong username or password"
  });
}
