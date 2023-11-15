import {buildDevServer} from "./buildDevServer";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types/types";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import webpack from "webpack";

export function buildWebpack(options: BuildOptions): webpack.Configuration {

    const {mode, port, paths} = options;

    const isDev = mode === 'development';
    const isProd = mode === 'production';

    const config: webpack.Configuration = {
        mode: mode || 'development',
        entry: paths.entry,
        output: {
            path: paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? buildDevServer(options) : undefined
    }

    return config
}
