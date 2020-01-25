export function del(req, res) {
  console.log(req.session);
  res.setHeader("Content-Type", "application/json");
  res
    .cookie("token", null, {
      maxAge: 0
    })
    .end(JSON.stringify({ ok: true }));
}
