import webpack from 'webpack';
import mergeWebpack from 'webpack-merge';
import baseConfig from './webpack.config.base';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production'),
    __DEV__: false
};

export default mergeWebpack(baseConfig, {
    devtool: 'eval',
    entry: './src/index',
    node: {  //setting these as a workaround for a conflict with the library 'request' https://github.com/request/request/issues/1691
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),

        // Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        new webpack.optimize.UglifyJsPlugin()
    ]
});
