export default {
  name: "router-link",
  props: {
    to: {
      type: String,
      require: true,
    },
    tag: {
      type: String,
      default: "a",
    },
  },
  methods: {
    handler(to) {
      this.$router.push(to);
    },
  },
  render(h) {
    const { tag, to } = this;
    return h(
      tag,
      {
        on: {
          click: this.handler.bind(this, to),
        },
      },
      this.$slots.default
    );
  },
};
