const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry: './main.js',
    output: {
        filename: 'build.js'
    },
    // whem you use vue-loader ,then you must set the plugins .
    // link :https://stackoverflow.com/questions/42541315/best-approach-when-replacing-jquery-with-vuejs-2-in-multi-page-existing-net-mvc/50101059#50101059
    plugins: [
        new VueLoaderPlugin()
    ],
    // must : if not set alias of vue ,then throw error
    // error : [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
    // link ： https://stackoverflow.com/questions/47332728/you-are-using-the-runtime-only-build-of-vue-where-the-template-compiler-is-not-a
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
    },
    module: {
        rules: [{
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            }
        ]
    }
};