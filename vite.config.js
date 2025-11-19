import {defineConfig, loadEnv} from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import {fileURLToPath} from "url";
import {visualizer} from "rollup-plugin-visualizer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const chunkGroups = {
    vendor: ["react", "react-dom", "react-router-dom"],
    ui: ["clsx", "tailwind-merge"],
    charts: ["recharts"],
};

const createChunks = () => {
    return (id) => {
        if (!id.includes("node_modules")) return;

        if (id.includes("node_modules/.vite")) return;

        if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("react-router-dom") ||
            id.includes("recharts")
        ) {
            return "vendor";
        }

        if (id.includes("recharts")) {
            return "charts";
        }

        if (id.includes("clsx") || id.includes("tailwind-merge")) {
            return "ui";
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
                '@ui': path.resolve(__dirname, 'src/components/ui'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@img': path.resolve(__dirname, 'src/assets/images'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
                '@api': path.resolve(__dirname, 'src/lib/api'),
                '@context': path.resolve(__dirname, 'src/context'),
                '@utils': path.resolve(__dirname, 'src/lib/utils'),
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
            sourcemap: true,
            cssCodeSplit: true,
            rollupOptions: {
                output: {
                    manualChunks: createChunks()
                },
            },
        },
    };
});