export default function createRouteMap(routes, oldPathMap) {
  let pathMap = oldPathMap || Object.create(null);
  routes.forEach((route) => addRouteRecord(route, pathMap));
  return { pathMap };
}

function addRouteRecord(route, pathMap, parent) {
  console.log(route);
  console.log(pathMap);
  console.log(parent);
}
