> [!NOTE]
>
> branches:
> 1. [main](https://github.com/dev-pi2pie/next-v14_2-with-rehype-pretty-code-and-shiki-transformer/tree/main): the issue happened
> 2. [work-on-the-previous](https://github.com/dev-pi2pie/next-v14_2-with-rehype-pretty-code-and-shiki-transformer/tree/work-on-the-previous): In `v14.1.4`, the issue not happened
> 3. [with-dynamic-import](https://github.com/dev-pi2pie/next-v14_2-with-rehype-pretty-code-and-shiki-transformer/tree/with-dynamic-import): avoid the issue happened, and get the build success
> 4. [with-optimize-package-imports](https://github.com/dev-pi2pie/next-v14_2-with-rehype-pretty-code-and-shiki-transformer/tree/with-optimize-package-imports): fix the issue with the new next config settings
> 5. [with-transpile-packages-and-code-to-html](https://github.com/dev-pi2pie/next-v14_2-with-rehype-pretty-code-and-shiki-transformer/tree/with-transpile-packages-and-code-to-html): new case while interacting with `codeToHtml()`

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
