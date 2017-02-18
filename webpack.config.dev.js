import webpack from 'webpack';
import mergeWebpack from 'webpack-merge';
import baseConfig from './webpack.config.base';

export default mergeWebpack(baseConfig, {
    debug: true,
    devtool: 'source-map',
    noInfo: true,
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './src/index',
    ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            __DEV__: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', ]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './src'
    }
});
