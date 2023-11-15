import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

export function buildPlugins(options: BuildOptions): webpack.Configuration['plugins'] {
    const {paths, mode} = options;
    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const plugins: webpack.Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }))
    }

    return plugins;
}
