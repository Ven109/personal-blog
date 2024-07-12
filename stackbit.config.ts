import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    cmsName: "contentful",
    "nodeVersion": "18",
    ssgName: "custom",
    devCommand: "npm run dev -- -p {PORT}",
    experimental: {
        ssg: {
          name: "Nuxt3",
          logPatterns: { up: ["Local:    http"] },
          passthrough: ["/vite-hmr/**"]
        }
    }
});
