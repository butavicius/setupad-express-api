// Super simple IP firewall middleware

import config from "../config.js";

export default function (req, res, next) {
  const clientIPString = req.socket.remoteAddress;

  // If firewall is not configured, allow all requests
  if (config.allowedIPs === undefined || typeof config.allowedIPs !== "string")
    return next();

  // If configured to an empty string, this is incorrect configuration. deny all requests
  if (config.allowedIPs.trim === "") {
    res.status(403);
    res.json({ error: "You are not allowed to use this API" });
  }

  const allowedIPs = config.allowedIPs
    .trim()
    .split(",")
    .filter((ip) => ip.length !== 0);


  // Otherwise check if our client's IP string includes IP in our whitelist (either IPv4 or IPv6)
  if (allowedIPs.some((allowedIP) => clientIPString.includes(allowedIP.trim())))
    return next();

  // In all other cases deny request
  res.status(403);
  res.json({ error: "You are not allowed to use this API" });
}
