export type BuildMode = 'production' | 'development';

interface BuildPaths {
    html: string;
    entry: string;
    output: string;
    src: string
}
export interface BuildOptions {
    mode: BuildMode;
    port: number;
    paths: BuildPaths;
}
