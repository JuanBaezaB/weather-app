
import { caching } from 'cache-manager';
const TIME_TO_LIVE = 5 * 60 * 1000; // 5 minutes

const memoryCache = await caching('memory', {
  max: 100,
  ttl: TIME_TO_LIVE,
});

export default memoryCache;