module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                enforce: "pre",
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },

                exclude: /node_modules$/
            }

        ]
    }
};