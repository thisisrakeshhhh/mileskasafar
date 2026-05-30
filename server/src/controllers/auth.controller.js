import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

function buildAuthResponse(user) {
  return {
    id: user._id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    profileImage: user.profileImage,
    bookings: user.bookings,
    wishlist: user.wishlist
  };
}

function signAccessToken(user) {
  return jwt.sign(
    { userId: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET || "development-secret",
    { expiresIn: "7d" }
  );
}

function signRefreshToken(userId) {
  return jwt.sign(
    { userId },
    process.env.REFRESH_TOKEN_SECRET || "development-refresh-secret",
    { expiresIn: "30d" }
  );
}

export async function register(req, res) {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email: String(email).toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ success: false, message: "User already exists with this email" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email: String(email).toLowerCase(), password: hashedPassword, phone });
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: buildAuthResponse(newUser),
        accessToken: signAccessToken(newUser),
        refreshToken: signRefreshToken(String(newUser._id))
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Registration failed" });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "Email and password are required" });
    }
    const user = await User.findOne({ email: String(email).toLowerCase() });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ success: false, message: "Invalid email or password" });
    }
    return res.json({
      success: true,
      message: "Login successful",
      data: {
        user: buildAuthResponse(user),
        accessToken: signAccessToken(user),
        refreshToken: signRefreshToken(String(user._id))
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Login failed" });
  }
}

export async function getProfile(req, res) {
  try {
    const user = await User.findById(req.userId).populate("bookings").populate("wishlist");
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.json({ success: true, message: "Profile retrieved", data: buildAuthResponse(user) });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: "Failed to retrieve profile" });
  }
}

export async function refreshToken(req, res) {
  try {
    const { refreshToken: incomingToken } = req.body;
    if (!incomingToken) {
      return res.status(400).json({ success: false, message: "Refresh token is required" });
    }
    const decoded = jwt.verify(
      incomingToken,
      process.env.REFRESH_TOKEN_SECRET || "development-refresh-secret"
    );
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    return res.json({
      success: true,
      message: "Token refreshed",
      data: { accessToken: signAccessToken(user) }
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ success: false, message: "Invalid refresh token" });
  }
}
