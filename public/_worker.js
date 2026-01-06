// Cloudflare Pages Worker for Next.js
export default {
  async fetch(request, env, ctx) {
    // Let Cloudflare Pages handle the request normally
    return env.ASSETS.fetch(request);
  },
};