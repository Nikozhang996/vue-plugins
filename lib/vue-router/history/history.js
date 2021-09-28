import { History } from "./base";

export default class BrowserHistory extends History {
  setupListener() {
    window.addEventListener("popstate", () => {
      // this.transitionTo(getHash());
    });
  }
}
