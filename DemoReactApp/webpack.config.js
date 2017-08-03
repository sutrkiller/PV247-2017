module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/build',
        filename: 'app.js'
    },
    module: {
        rules: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};