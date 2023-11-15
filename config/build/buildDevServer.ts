import {BuildOptions} from "./types/types";

export function buildDevServer({port}: BuildOptions) {
    return {
        port: port || 3000,
        open: true,
        historyApiFallback: true
    }
}
