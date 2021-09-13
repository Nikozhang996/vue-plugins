import createRouteMap from "./create-route-map";
import { createRoute } from "./history/base";

export default function createMatcher(routes) {
  const { pathMap } = createRouteMap(routes);
  function addRoutes(routes) {
    createRouteMap(routes, pathMap);
  }

  function match(location) {
    const record = pathMap[location];
    if (record) {
      return createRoute(record, {
        path: location,
      });
    }
  }

  return { addRoutes, match };
}
