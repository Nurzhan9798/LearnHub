import path from "path";
import webpack from "webpack"
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode} from "./config/build/types/types";

interface EnvVariables {
    mode: BuildMode;
    port: number;
}

export default (env: EnvVariables): webpack.Configuration => {

    const config: webpack.Configuration = buildWebpack({
        mode: env.mode || "development",
        port: env.port || 4000,
        paths: {
            html: path.resolve(__dirname, 'public', 'index.html'),
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            src: path.resolve(__dirname, 'src')
        }
    })
    return config
}
