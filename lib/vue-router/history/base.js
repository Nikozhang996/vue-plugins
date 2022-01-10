export function createRoute(record, location) {
  let res = [];
  if (record) {
    while (record) {
      res.unshift(record);
      record = record.parent;
    }
  }
  return {
    ...location,
    matched: res,
  };
}

function runQueue(queue, iterator, callback) {
  function step(index) {
    if (index >= queue.length) return callback();
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

  transitionTo(location, onComplete) {
    // 从map路由表中获取route数据
    const route = this.router.match(location);
    if (
      location === this.current.path &&
      route.matched.length === this.current.matched.length
    ) {
      return;
    }

    const queue = [].concat(this.router.beforeHooks);

    runQueue(
      queue,
      (hook, next) => {
        hook(this.current, route, () => {
          next();
        });
      },
      () => {
        this.updateRoute(route);
        onComplete && onComplete();
      }
    );
  }

  updateRoute(route) {
    this.current = route;
    this.cb && this.cb(route);
  }
}

export { History };
