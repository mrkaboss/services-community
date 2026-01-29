export function generaToken(id) {
  return jwt.sign(
    { id },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  )
}
export default generaToken