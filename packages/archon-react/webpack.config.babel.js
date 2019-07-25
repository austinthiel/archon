module.exports = env => {
  return require(`./webpack.${env}.babel.js`);
};
