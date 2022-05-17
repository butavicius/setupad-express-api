import { get as getPriceHistory } from "../api/priceHistory.js";
import multiplyBpi from "../utils/multiplyBpi.js";

async function get(startDate, endDate) {
  const originalPriceHistory = await getPriceHistory(startDate, endDate);

  const modifiedPriceHistory = {...originalPriceHistory, bpi: multiplyBpi(originalPriceHistory.bpi)};

  return modifiedPriceHistory;
}

export { get };
