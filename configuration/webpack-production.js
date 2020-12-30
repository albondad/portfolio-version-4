const webpack = require('webpack');
const path = require('path')

console.log(path.resolve(__dirname, '../react/components/views'));
const configuration = {
    entry: './react/index.tsx',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: {
                                        node: "current"
                                    }
                                }
                            ],
                            "@babel/preset-typescript",
                            "@babel/preset-react"
                        ],
                        "plugins": [
                            [
                                "babel-plugin-styled-components",
                                {
                                    displayName: true
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            'constants': path.resolve(__dirname, '../constants'),
            'view-components': path.resolve(__dirname, '../react/components/views'),
            'shared-components': path.resolve(__dirname, '../react/components/shared'),
        }
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '../public'),
        port: 8000,
        historyApiFallback: true,
        hot: true
    }
}

module.exports = configuration;