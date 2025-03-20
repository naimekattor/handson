const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied, no token provided" });
  }

  try {
    const cleanedToken = token.startsWith("Bearer ")
      ? token.split(" ")[1]
      : token; // Handle token properly
    const decoded = jwt.verify(cleanedToken, process.env.JWT_SECRET);

    console.log("Decoded User:", decoded); // Debugging line

    req.user = decoded; // Ensure this contains necessary fields (_id)
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error); // Debugging line
    res.status(401).json({ message: "Invalid token" });
  }
};
