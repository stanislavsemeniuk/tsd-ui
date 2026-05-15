import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightTypeDoc from "starlight-typedoc";

export default defineConfig({
  integrations: [
    starlight({
      title: "tsd-ui",
      social: [{ icon: "github", label: "GitHub", href: "https://github.com/tsd-ui/tsd-ui" }],
      plugins: [
        starlightTypeDoc({
          entryPoints: [
            "../../packages/core/src/index.ts",
            "../../packages/forms/src/index.ts",
            "../../packages/table-controls/src/index.ts",
          ],
          tsconfig: "./tsconfig.typedoc.json",
          sidebar: { label: "API Reference", collapsed: true },
        }),
      ],
      sidebar: [
        { label: "Getting Started", slug: "getting-started" },
        {
          label: "Core",
          items: [
            { label: "Theme", slug: "core/theme" },
            { label: "LoadingWrapper", slug: "core/loading-wrapper" },
          ],
        },
        {
          label: "Guides",
          items: [{ label: "Architecture", slug: "guides/architecture" }],
        },
      ],
    }),
  ],
});
