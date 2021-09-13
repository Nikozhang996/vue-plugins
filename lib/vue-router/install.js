import Link from "./components/link";
import View from "./components/view";
export let _Vue;

export default function install(Vue) {
  _Vue = Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.$router) {
        this._routerRoot = this;
        this._router = this.$options._router;
        this._router.init(this);

        Vue.util.defineReactive(this, "_route", this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot;
      }
    },
  });

  Vue.component("router-link", Link);
  Vue.component("router-view", View);

  // 代表路由中所有的属性
  Object.defineProperty(Vue.prototype, "$route", {
    get() {
      return this._routerRoot._route;
    },
  });
  Object.defineProperty(Vue.prototype, "$router", {
    get() {
      return this._routerRoot._router;
    },
  });
}
