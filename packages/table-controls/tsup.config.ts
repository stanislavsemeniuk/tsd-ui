import { defineConfig } from "tsup";

import pkg from "./package.json";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
  ],
});
