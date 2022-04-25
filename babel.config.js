module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        "@controllers": "./src/controllers",
        "@entities": "./src/entities",
        "@services": "./src/services",
        "@repositories": "./src/repositories"
      }
    }],
    ["@babel/plugin-proposal-decorators", { "legacy" : true }],
    ["@babel/plugin-proposal-class-properties", { "loose" : true }],
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
