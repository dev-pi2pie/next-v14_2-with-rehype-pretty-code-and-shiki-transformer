# Current state

> [!Note]
> Upgrade to v14.2.10 

And found the old code would cause the confuse of where the code from.

Therefore wrapping all Editor components into a component which from client, and then import it to the page.


# Solution

Check out Next.js v14.2.8 
> https://github.com/vercel/next.js/releases/tag/v14.2.8

The related discussion: 
https://github.com/vercel/next.js/issues/64434

No need to set anything with `optimizePackageImports` or `transpilePackages` 

See:

```diff
// next.config.mjs
const nextConfig = {
  // ... other config

  experimental: {
-    optimizePackageImports: [
-      'shiki',
-    ],
  },
-  transpilePackages: ["shiki"],
  // ...

}
```

After use this new config, and then the build will be success.

Like this:

```
> ...
> next build

  ▲ Next.js 14.2.8

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
 ✓ Generating static pages (6/6)
 ✓ Collecting build traces
 ✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                    102 kB          244 kB
├ ○ /_not-found                          877 B          91.6 kB
└ ○ /shiki                               1.18 kB         144 kB
+ First Load JS shared by all            90.7 kB
  ├ chunks/3471c0f1-e0a01212b37e4aa7.js  53.6 kB
  ├ chunks/8006-f5f765bd384508bb.js      31.7 kB
  └ other shared chunks (total)          5.37 kB


○  (Static)  prerendered as static content
```

# For reproducing the build issue

After upgrade Next.js from ver 14.1.4 to ver 14.2.0

The build issue happened, and after the fix version 14.2.1 coming. 

The issue was still happened.

The build issue message like this:

```
pnpm build

> next-v14_2-with-rehype-pretty-code-and-shiki-transform@0.0.5 build <user project path>
> next build

  ▲ Next.js 14.2.1

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
   Generating static pages (1/5)  [==  ]Error [ERR_REQUIRE_ESM]: require() of ES Module <user project path>/node_modules/.pnpm/shiki@1.3.0/node_modules/shiki/dist/index.mjs not supported.
Instead change the require of <user project path>/node_modules/.pnpm/shiki@1.3.0/node_modules/shiki/dist/index.mjs to a dynamic import() which is available in all CommonJS modules.
    at mod.require (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/require-hook.js:65:28)
    at 41 (<user project path>/.next/server/app/page.js:1:168240)
    at Object.t [as require] (<user project path>/.next/server/webpack-runtime.js:1:127)
    at require (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:16:18270)
    at I (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:94362)
    at C (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:92913)
    at rP (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:33974)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:62304)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58560)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nD (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66680)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64853)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58560)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61156)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61546)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58560)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nD (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66680)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64853)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nD (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66680)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64853)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61156)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nO (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46706)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47432)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nO (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46706)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47432)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59102)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59102)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nO (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46706)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47432)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59102)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61546)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nD (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66680)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64853)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61156)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nD (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66680)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64853)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nD (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66680)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64853)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59102)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61546)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58560)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:58560)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nD (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66680)
 ✓ Generating static pages (5/5)
d-shiki-transform/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64853)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nD (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66680)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64853)
    at nO (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46706)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47432)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61156)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61156)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61156)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61156)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61156)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:61156)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nB (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:67538)
    at nD (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:66680)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64853)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:59102)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nI (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47010)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47717)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:64546)
    at nO (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:46706)
    at nM (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-page.runtime.prod.js:12:47432)
    at nN (<user project path>/node_modules/.pnpm/next@14.2.1_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/compiled/next-server/app-p
> Export encountered errors on following paths:
	/page: /
 ELIFECYCLE  Command failed with exit code 1.
```



---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
