module.exports = {
  plugins: [
    require('postcss-preset-env')({
      browsers: 'last 10 years', // compatibilitat navegadors antics
      autoprefixer: { grid: true } // suport Grid en navegadors antics
    })
  ]
}