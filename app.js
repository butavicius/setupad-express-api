import express from "express";
import rateLimit from "express-rate-limit";
import compression from "compression";
import indexRouter from "./routes/index.js";
import ipFirewall from "./middleware/ipFirewall.js";
import config from "./config.js";

const app = express();

// Use GZIP compression
app.use(compression());

// Use rate limiter if configured
if (config.rateLimit) {
  app.use(rateLimit(config.rateLimit));
}

// Use IP firewall if configured
if (typeof config.allowedIPs === "string") {
  app.use(ipFirewall);
}

app.use("/", indexRouter);

export default app;
