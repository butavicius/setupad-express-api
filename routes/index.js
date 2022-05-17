import express from "express";
const router = express.Router();
import config from "../config.js";
import { get as getModifiedPriceHistory } from "../controllers/modifiedPriceHistory.js";

router.get(
  "/api/getPriceHistory/:startDate/:endDate",
  async (req, res, next) => {
    const { startDate, endDate } = req.params;

    try {
      const result = await getModifiedPriceHistory(startDate, endDate);
      res.json(result);
    } catch (error) {
      if (config.environment === "production") {
        res.json({
          error:
            "There has been an error with your request. Make sure startDate and endDate are valid.",
        });
      } else {
        //provide more detailed error reporting in development environment
        next(error);
      }
    }
  }
);

export default router;
