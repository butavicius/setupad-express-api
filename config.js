const configDefault = {
  apiURL: "https://api.coindesk.com/v1/bpi/historical/close.json",
  environment: "development",
    // allowedIPs: '192.168.43.2, 192.168.43.1',
  rateLimit: {
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
  },
};

export default {
  apiURL: process.env.SETUPAD_API_URL || configDefault.apiURL,
  allowedIPs: process.env.SETUPAD_ALLOWED_IPS || configDefault.allowedIPs,
  environment: process.env.NODE_ENV || configDefault.environment,
  rateLimit: {
    windowMs:
      process.env.SETUPAD_RATE_LIMIT_WINDOWMS ||
      configDefault.rateLimit.windowMs,
    max: process.env.SETUPAD_RATE_LIMIT_MAX || configDefault.rateLimit.max,
    standardHeaders:
      !!process.env.SETUPAD_RATE_LIMIT_STANDARD_HEADERS ||
      configDefault.standardHeaders,
  },
};
