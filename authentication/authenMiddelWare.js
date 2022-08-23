const jwt = require("jsonwebtoken");

const isAuthenticated = async (req, res, next) => {
  try {
    jwt.verify(getTokenFromHeaders(req), process.env.TOKEN_SECRET, {
      algorithm: ["HS256"],
    });
    next()
  } catch (error) {
    next(error);
  }
};

function getTokenFromHeaders(req) {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
}
module.exports = isAuthenticated;
