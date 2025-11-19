import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import {fileURLToPath} from "url";
import {visualizer} from "rollup-plugin-visualizer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: env.VITE_BASE_PATH || "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@ui': path.resolve(__dirname, 'src/components/ui'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@img': path.resolve(__dirname, 'src/assets/images'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@api': path.resolve(__dirname, 'src/lib/api'),
                '@context': path.resolve(__dirname, 'src/context'),
                '@utils': path.resolve(__dirname, 'src/lib/utils'),
                react: path.resolve(__dirname, 'node_modules/react'),
                'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
            }
        },
        plugins: [
            react(),
            tailwindcss(),
            env.ANALYZE === 'true' && visualizer({
                open: true,
                gzipSize: true,
                brotliSize: true,
                filename: "analyze.html",
            }),
        ].filter(Boolean),
        build: {
            cssCodeSplit: true,
        },
    };
});