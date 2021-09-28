/**
 * routes array -> map
 * 按url路径作为key，component为value
 * */
export default function createRouteMap(routes, oldPathMap) {
  let pathMap = oldPathMap || Object.create(null);
  routes.forEach((route) => addRouteRecord(route, pathMap));
  return { pathMap };
}

/**
 * 先序深度
 * */
function addRouteRecord(route, pathMap, parent) {
  const path = parent ? parent.path + "/" + route.path : route.path;
  const record = {
    path,
    component: route.component,
    parent,
  };

  // 避免重复定义路由
  if (!pathMap[path]) {
    pathMap[path] = record;
  }

  // 在遍历儿子时把父亲传进去
  if (route.children) {
    route.children.forEach(function (childRoute) {
      addRouteRecord(childRoute, pathMap, record);
    });
  }
}
