# Manually Split Chunks

Testing on Windows 11 (26200.8728), i5-13490F.

## Vite -- Default Chunks Splitting

8 items, totally 1.62 MiB:

```log
❯ mise build:vite-default
[build:vite-default] $ bun run ./node_modules/vite/bin/vite.js --config vite.def…
vite v8.0.16 building client environment for production...
✓ 2186 modules transformed.
computing gzip size...
dist/vite-default/index.html                               0.42 kB │ gzip:   0.30 kB
dist/vite-default/demo-CH7iB75L.css                        0.02 kB │ gzip:   0.04 kB
dist/vite-default/module-async-DOLldLYO.js                 0.10 kB │ gzip:   0.10 kB
dist/vite-default/demo-CxDl7-Gv.js                         0.79 kB │ gzip:   0.45 kB
dist/vite-default/demo2-CUgVpAnQ.js                       55.12 kB │ gzip:  14.89 kB
dist/vite-default/index-tBkhEAci.js                       64.22 kB │ gzip:  18.76 kB
dist/vite-default/runtime-dom.esm-bundler-Bhx2HOaX.js    156.18 kB │ gzip:  38.17 kB
dist/vite-default/echarts-bTlC61tD.js                  1,431.93 kB │ gzip: 346.96 kB

[INVALID_ANNOTATION] A comment "/* #__PURE__ */" in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rolldown cannot interpret due to the position of the comment.
      ╭─[ node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js:3362:1 ]
      │
 3362 │ /* #__PURE__ */
      │ ───────┬───────
      │        ╰───────── comment ignored due to position
      │
      │ Help: For more information on how to use pure annotations correctly, check the documentation: https://rolldown.rs/in-depth/dead-code-elimination#pure
──────╯

[INVALID_ANNOTATION] A comment "/* #__PURE__ */" in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rolldown cannot interpret due to the position of the comment.
      ╭─[ node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js:5780:23 ]
      │
 5780 │ const defaultState = (/* #__PURE__ */ {
      │                       ───────┬───────
      │                              ╰───────── comment ignored due to position
      │
      │ Help: For more information on how to use pure annotations correctly, check the documentation: https://rolldown.rs/in-depth/dead-code-elimination#pure
──────╯

✓ built in 916ms
```

## Vite -- Custom Chunks Splitting

26 items, totally 1.66 MiB:

```log
❯ mise build:vite-custom
[build:vite-custom] $ bun run ./node_modules/vite/bin/vite.js --config vite.cust…
vite v8.0.16 building client environment for production...
✓ 2186 modules transformed.
computing gzip size...
dist/vite-custom/index.html                      0.53 kB │ gzip:  0.31 kB
dist/vite-custom/demo-CH7iB75L.css               0.02 kB │ gzip:  0.04 kB
dist/vite-custom/module-async-DOLldLYO.js        0.10 kB │ gzip:  0.10 kB
dist/vite-custom/rolldown-runtime-D7D4PA-g.js    0.36 kB │ gzip:  0.25 kB
dist/vite-custom/echarts-DHVXW8c7.js             0.65 kB │ gzip:  0.29 kB
dist/vite-custom/demo-NwCs7R7V.js                0.85 kB │ gzip:  0.47 kB
dist/vite-custom/element-plus-Dau0-XwD.js        5.04 kB │ gzip:  1.61 kB
dist/vite-custom/index-Cggz9EZd.js               5.42 kB │ gzip:  2.21 kB
dist/vite-custom/vue-BdR2Odfb.js                13.27 kB │ gzip:  4.52 kB
dist/vite-custom/demo2-LU0V1wRQ.js              55.22 kB │ gzip: 14.90 kB
dist/vite-custom/vue-Cpmg4BEI.js                59.41 kB │ gzip: 16.98 kB
dist/vite-custom/echarts-B21cXxgz.js            70.53 kB │ gzip: 17.17 kB
dist/vite-custom/echarts-DGqkqv8R.js            72.98 kB │ gzip: 18.39 kB
dist/vite-custom/echarts-BA__13Bv.js            76.87 kB │ gzip: 20.62 kB
dist/vite-custom/echarts-CLH8vgg1.js            77.02 kB │ gzip: 21.99 kB
dist/vite-custom/echarts-DfDQ6nLI.js            84.82 kB │ gzip: 21.66 kB
dist/vite-custom/echarts-CVEYuXVX.js            86.64 kB │ gzip: 21.17 kB
dist/vite-custom/echarts-CbELrCnp.js            91.07 kB │ gzip: 27.21 kB
dist/vite-custom/element-plus-2dayTjbC.js       99.56 kB │ gzip: 22.33 kB
dist/vite-custom/echarts-CITc4qEB.js           111.58 kB │ gzip: 29.28 kB
dist/vite-custom/echarts-Cp0ZgkUr.js           118.43 kB │ gzip: 27.22 kB
dist/vite-custom/echarts-DrK0aC6E.js           128.46 kB │ gzip: 30.19 kB
dist/vite-custom/echarts-C7opr6O7.js           129.61 kB │ gzip: 32.56 kB
dist/vite-custom/echarts-r7cZl4NL.js           147.36 kB │ gzip: 36.82 kB
dist/vite-custom/vue-CO2051e4.js               149.83 kB │ gzip: 36.32 kB
dist/vite-custom/echarts-FC39c-2X.js           163.21 kB │ gzip: 37.55 kB

[INVALID_ANNOTATION] A comment "/* #__PURE__ */" in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rolldown cannot interpret due to the position of the comment.
      ╭─[ node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js:3362:1 ]
      │
 3362 │ /* #__PURE__ */
      │ ───────┬───────
      │        ╰───────── comment ignored due to position
      │
      │ Help: For more information on how to use pure annotations correctly, check the documentation: https://rolldown.rs/in-depth/dead-code-elimination#pure
──────╯

[INVALID_ANNOTATION] A comment "/* #__PURE__ */" in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rolldown cannot interpret due to the position of the comment.
      ╭─[ node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js:5780:23 ]
      │
 5780 │ const defaultState = (/* #__PURE__ */ {
      │                       ───────┬───────
      │                              ╰───────── comment ignored due to position
      │
      │ Help: For more information on how to use pure annotations correctly, check the documentation: https://rolldown.rs/in-depth/dead-code-elimination#pure
──────╯

✓ built in 868ms
```

## Vite 7 -- Default Chunks Splitting

7 items, totally 1.74 MiB:

```log
❯ mise build:vite7-default
[build:vite7-default] $ bun run ./node_modules/vite7/bin/vite.js --config vite7.…
vite v7.3.5 building client environment for production...
node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js (3362:0): A comment

"/* #__PURE__ */"

in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js (5780:22): A comment

"/* #__PURE__ */"

in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
✓ 2204 modules transformed.
dist/vite7-default/index.html                    0.34 kB │ gzip:   0.26 kB
dist/vite7-default/demo-CH7iB75L.css             0.03 kB │ gzip:   0.05 kB
dist/vite7-default/module-async-BUWF_v6B.js      0.05 kB │ gzip:   0.07 kB
dist/vite7-default/demo-BlASmrYl.js              0.76 kB │ gzip:   0.42 kB
dist/vite7-default/demo2-BXKgMVN4.js            73.06 kB │ gzip:  18.91 kB
dist/vite7-default/index-C_dhSYNS.js           289.35 kB │ gzip:  68.24 kB
dist/vite7-default/echarts-DKrKWWez.js       1,469.98 kB │ gzip: 325.16 kB
✓ built in 6.92s
```

## Vite 7 -- Custom Chunks Splitting

8 items, totally 1.74 MiB:

```log
❯ mise build:vite7-custom
[build:vite7-custom] $ bun run ./node_modules/vite7/bin/vite.js --config vite7.c…
vite v7.3.5 building client environment for production...
node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js (3362:0): A comment

"/* #__PURE__ */"

in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js (5780:22): A comment

"/* #__PURE__ */"

in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
✓ 2204 modules transformed.
dist/vite7-custom/index.html                    0.41 kB │ gzip:   0.29 kB
dist/vite7-custom/demo-CH7iB75L.css             0.03 kB │ gzip:   0.05 kB
dist/vite7-custom/module-async-BUWF_v6B.js      0.05 kB │ gzip:   0.07 kB
dist/vite7-custom/demo-CzXc8z3k.js              0.76 kB │ gzip:   0.42 kB
dist/vite7-custom/index-DgtkwCUJ.js             4.76 kB │ gzip:   1.86 kB
dist/vite7-custom/demo2-SIoc6sNZ.js            73.06 kB │ gzip:  18.91 kB
dist/vite7-custom/vue-pDo_MeZZ.js             315.46 kB │ gzip:  73.44 kB
dist/vite7-custom/echarts-BVnqQWnT.js       1,439.69 kB │ gzip: 318.29 kB
✓ built in 6.96s
```

## Webpack -- Default Chunks Splitting

7 items, totally 3.82 MiB:

```log
❯ mise build:webpack-default
[build:webpack-default] $ webpack build --config webpack.default.config.js --mod…
assets by status 3.74 MiB [big]
  asset 693-7606414a.js 3.06 MiB [emitted] [immutable] [big] (id hint: vendors)
  asset index-091db05a.js 698 KiB [emitted] [immutable] [big] (name: index)
asset 151-dc7ce2fc.js 76.1 KiB [emitted] [immutable] (id hint: vendors)
asset demo2-bf52104a.js 8.15 KiB [emitted] [immutable] (name: demo2)
asset demo-989c861b.js 7.66 KiB [emitted] [immutable] (name: demo)
asset module-async-8f0b5594.js 451 bytes [emitted] [immutable] (name: module-async)
asset index.html 251 bytes [emitted]
orphan modules 6.29 MiB [orphan] 1995 modules
runtime modules 9.33 KiB 11 modules
cacheable modules 3.54 MiB
  modules by path ./node_modules/.aube/ 3.25 MiB 186 modules
  modules by path ./src/ 300 KiB
    modules by path ./src/modules/*.js 1.23 KiB 4 modules
    modules by path ./src/views/*.vue 5.47 KiB 4 modules
    ./src/main.js 530 bytes [built] [code generated]
    ./src/App.vue + 1 modules 674 bytes [built] [code generated]
    ./src/routers/index.js + 7 modules 292 KiB [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  index-091db05a.js (698 KiB)
  693-7606414a.js (3.06 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (698 KiB)
      index-091db05a.js


webpack 5.107.2 compiled with 2 warnings in 2792 ms
```

## Webpack -- Custom Chunks Splitting

25 items, totally 3.88 MiB:

```log
❯ mise build:webpack-custom
[build:webpack-custom] $ webpack build --config webpack.custom.config.js --mode …
assets by chunk 1.72 MiB (id hint: echarts)
  assets by status 533 KiB [big] 2 assets
  + 8 assets
assets by chunk 1.07 MiB (id hint: defaultVendors)
  asset vendor-5738d0c9-31501bbe.js 350 KiB [emitted] [immutable] [big] (name: vendor-5738d0c9) (id hint: defaultVendors)
  asset vendor-3af99290-2d784dd6.js 234 KiB [emitted] [immutable] (name: vendor-3af99290) (id hint: defaultVendors)
  + 3 assets
assets by chunk 1010 KiB (id hint: vue)
  assets by status 529 KiB [big] 2 assets
  + 3 assets
+ 5 assets
Entrypoint index [big] 1.02 MiB = 6 assets
orphan modules 5.42 MiB [orphan] 1942 modules
runtime modules 10.8 KiB 12 modules
cacheable modules 3.54 MiB
  modules by path ./node_modules/.aube/ 3.46 MiB 239 modules
  modules by path ./src/ 76.7 KiB
    modules by path ./src/modules/*.js 1.23 KiB 4 modules
    modules by path ./src/views/*.vue 73.9 KiB 4 modules
    ./src/main.js 530 bytes [built] [code generated]
    ./src/App.vue + 1 modules 674 bytes [built] [code generated]
    ./src/routers/index.js 361 bytes [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  vue-8a2e3a6d-722965fa.js (276 KiB)
  vue-7fea91be-609449ae.js (253 KiB)
  echarts-3377815f-afbd0cf6.js (274 KiB)
  echarts-359c601c-b49a7b96.js (259 KiB)
  vendor-5738d0c9-31501bbe.js (350 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (1.02 MiB)
      vue-1936a24a-1d3ea258.js
      vue-af9ba5ae-fa4e2b37.js
      vue-7fea91be-609449ae.js
      vue-a9239bb3-8351044a.js
      vue-8a2e3a6d-722965fa.js
      index-b977f806.js


webpack 5.107.2 compiled with 2 warnings in 2635 ms
```
