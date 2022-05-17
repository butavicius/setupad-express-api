## To install and run:

* Clone this repository
* `cd setupad-express-api`
* `npm install`
* `npm start`

You can make a request to `/api/getPriceHistory/{startDate}/{endDate} to get CoinDesk answer` now.

## To run in development mode:
* `npm run dev`

In this mode you will get more detailed error reporting.

## To enable IP firewall:

* go to `config.js`
* uncomment `allowedIPs` field on configuration object, or use environmental variables (see below).

## Environmental variables:

You can set these to configure your server. Environmental variables override the configuration in `config.js`.

* `SETUPAD_API_URL` - main URL of API server
* `SETUPAD_ALLOWED_IPS` - comma separated list of allowed IPs. Careful - if set to empty string - all requests will be blocked.
* `NODE_ENV` - if set to "production", sensitive error reporting is turned off.
* `SETUPAD_RATE_LIMIT_WINDOWMS` - the window in MS to configure rate limit for the server.
* `SETUPAD_RATE_LIMIT_MAX` - number of requests client is allowed to make in given rate limit window.
* `SETUPAD_PORT` - port server listens on. Default is 3000.