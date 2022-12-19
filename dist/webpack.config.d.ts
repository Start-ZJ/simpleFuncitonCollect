declare function _exports(): {
    mode: string;
    entry: string;
    output: {
        path: string;
        filename: string;
    };
    externals: {
        extensions: string[];
    };
    resolve: {
        modules: string[];
        extensions: string[];
        alias: {};
    };
    module: {
        rules: {
            test: RegExp;
            use: {
                loader: string;
            };
            exclude: RegExp;
        }[];
    };
    plugins: CleanWebpackPlugin[];
};
export = _exports;
