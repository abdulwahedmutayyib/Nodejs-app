module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current', // or specify the Node.js version you're targeting
        },
      },
    ],
  ],
};
