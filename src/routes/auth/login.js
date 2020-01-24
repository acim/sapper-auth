export function post(req, res) {
  const resBody = {
    token: 123123123
  };

  const auth = req.body;
  res.setHeader("Content-Type", "application/json");

//   TODO: Handle authentication
  if (auth.username === "admin" && auth.password === "123") {
    res.json(resBody);
    return;
  }

  res.status(401).json({
    error: "Wrong username or password"
  });
}
