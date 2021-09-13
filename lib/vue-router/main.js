/*
* https://gitee.com/jw-speed/jiagouke2-vue/blob/master/7.vue-router/vue-router/index.js
* */
import install from "./install";
import createMatcher from "./create-matcher";
import HashHistory from "./history/hash";
import BrowserHistory from "./history/history";

class VueRouter {
  constructor(options) {
    this.beforeHooks = [];
    this.matcher = createMatcher(options.routes || []);
    console.log(options);

    options.mode = options.mode || "hash";
    switch (options.mode) {
      case "hash":
        this.history = new HashHistory(this);
        break;
      case "history":
        this.history = new BrowserHistory(this);
        break;
    }
  }

  push(to) {
    this.history.push(to);
  }
  go() {}
  match(location) {
    return this.matcher.match(location);
  }
  init(app) {
    // 监听hash值变化 默认跳转到对应的路径中
    const history = this.history;
    const setUpHashListener = () => {
      history.setupListener(); // 监听路由变化 hashchange
    };
    // 初始化 会先获得当前hash值 进行跳转, 并且监听hash变化
    history.transitionTo(
      history.getCurrentLocation(), // 获取当前的位置
      setUpHashListener
    );
    history.listen((route) => {
      // 每次路径变化 都会调用此方法  订阅
      app._route = route;
    });
    // setupListener  放到hash里取
    // transitionTo  放到base中 做成公共的方法
    // getCurrentLocation // 放到自己家里  window.location.hash / window.location.path
  }
  beforeEach(fn) {
    this.beforeHooks.push(fn);
  }
}

VueRouter.install = install;

export default VueRouter;
