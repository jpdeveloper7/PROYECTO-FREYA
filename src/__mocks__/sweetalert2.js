module.exports = {
  fire: () => Promise.resolve(),
  mixin: () => ({ fire: () => Promise.resolve() })
};
