const path = require('path'); 
module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'), 
        // compress: true, // это ускорит загрузку в режиме разработки
        port: 8080, 
        open: true,
        hot: true,
    },
}