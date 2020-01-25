export function del(req, res) {
  res.setHeader("Content-Type", "application/json");
  res
    .cookie("token", null, {
      maxAge: 0
    });
}
