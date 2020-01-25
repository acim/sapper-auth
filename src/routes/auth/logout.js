export function del(req, res) {
  if (req.session && req.session.user) {
    req.session.user = null;
  }
  res.setHeader("Content-Type", "application/json");
  res
    .cookie("token", null, {
      maxAge: 0
    })
    .end();
}
