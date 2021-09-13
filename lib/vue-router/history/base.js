export function createRoute(record, location) {
  let res = [];

  return {
    ...location,
    matched: res,
  };
}

function runQueue(queue, iterator, cb) {
  function step(index) {
    if (index >= queue.length) return cb();
    let hook = queue[index];
    iterator(hook, () => step(index + 1));
  }

  step(0);
}

class History {
  constructor(router) {
    this.router = router;

    this.current = createRoute(null, {
      path: "/",
    });
  }

  listen(cb) {
    this.cb = cb;
  }

  transitionTo(location, onComplte) {
    console.log(location);
    console.log(onComplte);
    console.log(runQueue);
  }

  updateRoute(route) {
    this.current = route;
    this.cb && this.cb(route);
  }
}

export { History };
