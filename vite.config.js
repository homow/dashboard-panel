import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import {fileURLToPath} from "url";
import {visualizer} from "rollup-plugin-visualizer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createChunks = () => {
    const groups = {
        vendor: ["react", "react-dom", "react-router-dom"],
        ui: ["clsx", "tailwind-merge"],
        charts: ["recharts"],
    };

    return (id) => {
        if (!id.includes("node_modules")) return;

        for (const [chunkName, deps] of Object.entries(groups)) {
            if (deps.some((dep) => id.includes(dep))) {
                return chunkName;
            }
        }
    };
};

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        base: env.VITE_BASE_PATH || "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@img': path.resolve(__dirname, 'src/assets/images'),
            }
        },
        plugins: [
            react(),
            tailwindcss(),
            env.ANALYZE === 'true' && visualizer({
                open: true,
                gzipSize: true,
                brotliSize: true,
                filename: "bundle-report.html",
            }),
        ].filter(Boolean),
        build: {
            rollupOptions: {
                output: {
                    manualChunks: createChunks()
                },
            },
        },
    };
});