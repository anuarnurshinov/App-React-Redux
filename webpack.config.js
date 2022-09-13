const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "bundle.js"
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
};