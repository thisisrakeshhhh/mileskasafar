import jwt from "jsonwebtoken";

function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET || "development-secret");
}

export function authMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }
    const decoded = verifyToken(token);
    req.userId = decoded.userId;
    req.email = decoded.email;
    req.role = decoded.role;
    return next();
  } catch {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
}

export function adminMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided" });
    }
    const decoded = verifyToken(token);
    if (decoded.role !== "admin") {
      return res.status(403).json({ success: false, message: "Admin access required" });
    }
    req.userId = decoded.userId;
    req.email = decoded.email;
    req.role = decoded.role;
    return next();
  } catch {
    return res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
}
