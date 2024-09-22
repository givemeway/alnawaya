import cookie from "cookie";

export const extractCookie = () => (req, res, next) => {
  req.cookies = cookie.parse(req.headers.cookie || "");
  next();
};
