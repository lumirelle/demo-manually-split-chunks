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

✓ built in 896ms
```

## Vite -- Custom Chunks Splitting

40 items, totally 3.90 MiB:

```log
❯ mise build:vite-custom
[build:vite-custom] $ bun run ./node_modules/vite/bin/vite.js --config vite.custom.config.js build
vite v8.0.16 building client environment for production...
✓ 2186 modules transformed.
computing gzip size...
dist/vite-custom/index.html                      0.61 kB │ gzip:  0.33 kB
dist/vite-custom/demo-CH7iB75L.css               0.02 kB │ gzip:  0.04 kB
dist/vite-custom/module-async-1wntcOP4.js        0.19 kB │ gzip:  0.17 kB
dist/vite-custom/echarts-6bGilPvC.js             1.03 kB │ gzip:  0.43 kB
dist/vite-custom/demo-DfV6GBNe.js                1.38 kB │ gzip:  0.64 kB
dist/vite-custom/rolldown-runtime-D9B2Ntkf.js    1.48 kB │ gzip:  0.69 kB
dist/vite-custom/demo2-BA6U9Bx8.js               1.49 kB │ gzip:  0.68 kB
dist/vite-custom/index-D5SBBIeU.js               7.04 kB │ gzip:  2.61 kB
dist/vite-custom/vue-dFdeoUI1.js                43.35 kB │ gzip: 12.10 kB
dist/vite-custom/vue-6OHdDS9C.js                57.82 kB │ gzip: 16.06 kB
dist/vite-custom/element-plus-DbThr7oa.js       62.34 kB │ gzip: 14.24 kB
dist/vite-custom/echarts-C8E6CKsg.js            74.30 kB │ gzip: 17.77 kB
dist/vite-custom/element-plus-DT5lOUOu.js       76.82 kB │ gzip: 19.48 kB
dist/vite-custom/echarts-Crv5nWeE.js            77.14 kB │ gzip: 19.26 kB
dist/vite-custom/echarts-GezADXPZ.js            79.53 kB │ gzip: 21.17 kB
dist/vite-custom/echarts-CuhnSP-z.js            80.40 kB │ gzip: 22.78 kB
dist/vite-custom/echarts-DoBGa1q5.js            89.66 kB │ gzip: 21.70 kB
dist/vite-custom/echarts-BcG-ipr4.js            92.92 kB │ gzip: 23.09 kB
dist/vite-custom/echarts-Aj7qjPzh.js            93.24 kB │ gzip: 27.68 kB
dist/vite-custom/element-plus-C_8WLnu9.js      101.12 kB │ gzip: 25.56 kB
dist/vite-custom/echarts-UD4BDjN7.js           116.11 kB │ gzip: 30.30 kB
dist/vite-custom/element-plus-D6JWeedh.js      118.07 kB │ gzip: 25.44 kB
dist/vite-custom/element-plus-gGs9wyH0.js      120.16 kB │ gzip: 23.76 kB
dist/vite-custom/element-plus-EXlz76yu.js      123.40 kB │ gzip: 22.70 kB
dist/vite-custom/element-plus-tq6qdnQW.js      124.10 kB │ gzip: 24.97 kB
dist/vite-custom/echarts-B5SJYiMN.js           124.12 kB │ gzip: 28.15 kB
dist/vite-custom/element-plus-CTEDizGw.js      129.81 kB │ gzip: 28.87 kB
dist/vite-custom/echarts-2zzUtNW9.js           134.31 kB │ gzip: 32.98 kB
dist/vite-custom/echarts-B4NkVCMw.js           134.65 kB │ gzip: 31.36 kB
dist/vite-custom/element-plus--PtMHeJa.js      143.02 kB │ gzip: 27.86 kB
dist/vite-custom/echarts-DQglEYy5.js           145.30 kB │ gzip: 35.23 kB
dist/vite-custom/element-plus-BlVoQHxO.js      154.60 kB │ gzip: 32.91 kB
dist/vite-custom/element-plus-C9xeQHQV.js      171.96 kB │ gzip: 33.78 kB
dist/vite-custom/echarts-CEa5iAgq.js           172.18 kB │ gzip: 39.05 kB
dist/vite-custom/element-plus-DPse25gI.js      186.43 kB │ gzip: 32.24 kB
dist/vite-custom/vue-WArCTO8n.js               191.45 kB │ gzip: 46.36 kB
dist/vite-custom/element-plus-CPqO3CYY.js      200.68 kB │ gzip: 45.91 kB
dist/vite-custom/element-plus-BzV3qpO1.js      207.52 kB │ gzip: 44.74 kB
dist/vite-custom/element-plus-D8w4NtsO.js      218.14 kB │ gzip: 47.02 kB
dist/vite-custom/element-plus-BUBBj_nd.js      241.92 kB │ gzip: 52.86 kB

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

✓ built in 966ms
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
