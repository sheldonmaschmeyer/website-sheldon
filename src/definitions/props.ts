export const classes = {
  type: Object,
  default: () => {
    return {
      section: {
        type: Array,
        default: () => [],
      },
      item: {
        type: Array,
        default: () => [],
      },
    };
  },
};

export const name = {
  type: Object,
  default() {
    return {
      first: "",
      middle: "",
      last: "",
    };
  },
};
