import * as ChildProcess from "child_process";
import path from 'path';

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const rootPath = path.resolve(__dirname, '../../');
  const gitHash = ChildProcess.execSync("git rev-parse HEAD").toString().trim();

  process.env = {
    ...process.env,
    ...loadEnv(mode, rootPath),

    VITE_GIT_HASH: gitHash,
  };

  return {
    build: { target: "es2020" },

    server: {
      port: 3000,
      fs: { strict: false },
      host:'0.0.0.0',
    },

    optimizeDeps: {
      esbuildOptions: {
        target: "es2020",
      },
    },

    plugins: [tsconfigPaths(), react({ jsxImportSource: "@emotion/react" })],
  };
});
