# Manually Split Chunks

Testing on Windows 11 (26200.8728), i5-13490F.

## Vite -- Default Chunks Splitting

8 items, totally 1.63 MiB:

```log
❯ mise build:vite-default
[build:vite-default] $ bun run ./node_modules/vite/bin/vite.js --config vite.default.config.js build
vite v8.1.0 building client environment for production...
✓ 1012 modules transformed.
computing gzip size...
dist/vite-default/index.html                               0.42 kB │ gzip:   0.30 kB
dist/vite-default/123-CH7iB75L.css                         0.02 kB │ gzip:   0.04 kB
dist/vite-default/module-async-DOLldLYO.js                 0.10 kB │ gzip:   0.10 kB
dist/vite-default/views-B2NUms8A.js                        0.80 kB │ gzip:   0.45 kB
dist/vite-default/123-CqlV04tW.js                         54.84 kB │ gzip:  14.88 kB
dist/vite-default/index-BUFzETUs.js                       69.46 kB │ gzip:  20.22 kB
dist/vite-default/runtime-dom.esm-bundler-Dgx7g8L-.js    156.22 kB │ gzip:  38.18 kB
dist/vite-default/echarts-Bsq_hdW2.js                  1,432.04 kB │ gzip: 347.92 kB

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

✓ built in 377ms
```

## Vite -- Custom Chunks Splitting

10 items, totally 1.63 MiB:

```log
❯ mise build:vite-custom
[build:vite-custom] $ bun run ./node_modules/vite/bin/vite.js --config vite.custom.config.js build
vite v8.1.0 building client environment for production...
✓ 1012 modules transformed.
computing gzip size...
dist/vite-custom/index.html                    0.40 kB │ gzip:   0.29 kB
dist/vite-custom/123-CH7iB75L.css              0.02 kB │ gzip:   0.04 kB
dist/vite-custom/module-async-DOLldLYO.js      0.10 kB │ gzip:   0.10 kB
dist/vite-custom/source-AA-AxzVQ.js            0.49 kB │ gzip:   0.25 kB
dist/vite-custom/views-BmBd4hci.js             0.82 kB │ gzip:   0.45 kB
dist/vite-custom/index-BmkVAQWg.js             6.04 kB │ gzip:   2.39 kB
dist/vite-custom/123-YzIUIXon.js              54.86 kB │ gzip:  14.88 kB
dist/vite-custom/element-plus-Gynct1py.js    104.25 kB │ gzip:  23.70 kB
dist/vite-custom/vue-DsnSPZbY.js             225.35 kB │ gzip:  57.30 kB
dist/vite-custom/echarts-DSO5kOTi.js       1,322.13 kB │ gzip: 322.83 kB

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

✓ built in 385ms
```

## Vite -- Custom Chunks Splitting with Size

> [!Caution]
> The output is unusable, `defaults_default is not a function`.

26 items, totally 1.74 MiB:

```log
❯ mise build:vite-custom-with-size
[build:vite-custom-with-size] $ bun run ./node_modules/vite/bin/vite.js --config vite.custom-with-size.config.js build
vite v8.1.0 building client environment for production...
✓ 1012 modules transformed.
computing gzip size...
dist/vite-custom-with-size/index.html                      0.61 kB │ gzip:  0.33 kB
dist/vite-custom-with-size/123-CH7iB75L.css                0.02 kB │ gzip:  0.04 kB
dist/vite-custom-with-size/module-async-BV0t2-zq.js        0.19 kB │ gzip:  0.17 kB
dist/vite-custom-with-size/rolldown-runtime-Cl99QfTQ.js    0.53 kB │ gzip:  0.33 kB
dist/vite-custom-with-size/echarts-5fP7HMUu.js             1.03 kB │ gzip:  0.43 kB
dist/vite-custom-with-size/views-DazQu6Mf.js               1.35 kB │ gzip:  0.63 kB
dist/vite-custom-with-size/123-BkEhRoRw.js                 1.39 kB │ gzip:  0.66 kB
dist/vite-custom-with-size/index-CLkzMpFd.js               7.71 kB │ gzip:  2.82 kB
dist/vite-custom-with-size/vue-DaD6w1ae.js                14.24 kB │ gzip:  4.81 kB
dist/vite-custom-with-size/element-plus-u0YFgv2J.js       37.50 kB │ gzip:  9.86 kB
dist/vite-custom-with-size/vue-CzHBGtTC.js                61.98 kB │ gzip: 17.16 kB
dist/vite-custom-with-size/echarts-Cu5dlSPO.js            74.29 kB │ gzip: 17.76 kB
dist/vite-custom-with-size/echarts-DQz1pObn.js            77.13 kB │ gzip: 19.25 kB
dist/vite-custom-with-size/echarts-BIoubNFi.js            79.53 kB │ gzip: 21.17 kB
dist/vite-custom-with-size/echarts-CgeZkMKO.js            80.39 kB │ gzip: 22.81 kB
dist/vite-custom-with-size/echarts-CmgfuhsN.js            89.66 kB │ gzip: 21.71 kB
dist/vite-custom-with-size/echarts-L6z7kO7p.js            92.92 kB │ gzip: 23.09 kB
dist/vite-custom-with-size/echarts-7zrbUOut.js            93.24 kB │ gzip: 27.62 kB
dist/vite-custom-with-size/echarts-QtgmiqaE.js           116.12 kB │ gzip: 30.30 kB
dist/vite-custom-with-size/echarts-CkMo5G4x.js           124.12 kB │ gzip: 28.15 kB
dist/vite-custom-with-size/echarts-BLT97jr5.js           134.31 kB │ gzip: 32.93 kB
dist/vite-custom-with-size/echarts-D4jQam5D.js           134.65 kB │ gzip: 31.41 kB
dist/vite-custom-with-size/element-plus-Cb3MTV-Y.js      138.67 kB │ gzip: 29.80 kB
dist/vite-custom-with-size/echarts-D-m4Kj6y.js           144.45 kB │ gzip: 35.27 kB
dist/vite-custom-with-size/vue-DOmZfj0A.js               153.14 kB │ gzip: 37.17 kB
dist/vite-custom-with-size/echarts-DpWCeL2F.js           172.18 kB │ gzip: 39.05 kB

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

✓ built in 340ms
```

## Vite 7 -- Default Chunks Splitting

7 items, totally 1.75 MiB:

```log
❯ mise build:vite7-default
[build:vite7-default] $ bun run ./node_modules/vite7/bin/vite.js --config vite7.default.config.js build
vite v7.3.5 building client environment for production...
node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js (3362:0): A comment

"/* #__PURE__ */"

in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js (5780:22): A comment

"/* #__PURE__ */"

in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
✓ 2204 modules transformed.
dist/vite7-default/index.html                    0.34 kB │ gzip:   0.26 kB
dist/vite7-default/index-CH7iB75L.css            0.03 kB │ gzip:   0.05 kB
dist/vite7-default/module-async-BUWF_v6B.js      0.05 kB │ gzip:   0.07 kB
dist/vite7-default/index-xVbdzsNx.js             0.77 kB │ gzip:   0.42 kB
dist/vite7-default/123-DTtCg5JA.js              73.06 kB │ gzip:  18.91 kB
dist/vite7-default/index-DkPdjD8a.js           294.12 kB │ gzip:  69.44 kB
dist/vite7-default/echarts-Dc52mqeC.js       1,469.98 kB │ gzip: 325.16 kB
✓ built in 8.62s
```

## Vite 7 -- Custom Chunks Splitting

8 items, totally 1.75 MiB:

```log
❯ mise build:vite7-custom
[build:vite7-custom] $ bun run ./node_modules/vite7/bin/vite.js --config vite7.custom.config.js build
vite v7.3.5 building client environment for production...
node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js (3362:0): A comment

"/* #__PURE__ */"

in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js (5780:22): A comment

"/* #__PURE__ */"

in "node_modules/.aube/@vueuse+core@14.3.0_vue@3.5.38_typescript@6.0.3_/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
✓ 2204 modules transformed.
dist/vite7-custom/index.html                    0.41 kB │ gzip:   0.29 kB
dist/vite7-custom/index-CH7iB75L.css            0.03 kB │ gzip:   0.05 kB
dist/vite7-custom/module-async-BUWF_v6B.js      0.05 kB │ gzip:   0.07 kB
dist/vite7-custom/index-EzQrMTAg.js             0.77 kB │ gzip:   0.42 kB
dist/vite7-custom/index-hLkRoyGp.js             5.86 kB │ gzip:   2.20 kB
dist/vite7-custom/123-CVWJgJSn.js              73.06 kB │ gzip:  18.92 kB
dist/vite7-custom/vue-3lWFRd8l.js             319.29 kB │ gzip:  74.36 kB
dist/vite7-custom/echarts-BGt85HYj.js       1,439.69 kB │ gzip: 318.29 kB
✓ built in 7.91s
```

## Webpack -- Default Chunks Splitting

7 items, totally 3.82 MiB:

```log
❯ mise build:webpack-default
[build:webpack-default] $ webpack build --config webpack.default.config.js --mode production
assets by status 3.74 MiB [big]
  asset 693-7606414a.js 3.06 MiB [emitted] [immutable] [big] (id hint: vendors)
  asset index-83210854.js 699 KiB [emitted] [immutable] [big] (name: index)
asset 151-dc7ce2fc.js 76.1 KiB [emitted] [immutable] (id hint: vendors)
asset 123.vue-8c53b8d7.js 8.13 KiB [emitted] [immutable] (name: 123.vue)
asset index.vue-b153f8d3.js 7.68 KiB [emitted] [immutable] (name: index.vue)
asset module-async-8f0b5594.js 451 bytes [emitted] [immutable] (name: module-async)
asset index.html 251 bytes [emitted]
orphan modules 6.29 MiB [orphan] 1995 modules
runtime modules 9.34 KiB 11 modules
cacheable modules 3.54 MiB
  modules by path ./node_modules/.aube/ 3.25 MiB 186 modules
  modules by path ./src/ 301 KiB
    modules by path ./src/modules/*.js 1.23 KiB 4 modules
    modules by path ./src/views/*.vue 5.48 KiB 4 modules
    ./src/main.js 530 bytes [built] [code generated]
    ./src/App.vue + 1 modules 1.95 KiB [built] [code generated]
    ./src/routers/index.js + 7 modules 292 KiB [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  index-83210854.js (699 KiB)
  693-7606414a.js (3.06 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (699 KiB)
      index-83210854.js


webpack 5.107.2 compiled with 2 warnings in 3008 ms
```

## Webpack -- Custom Chunks Splitting

9 items, totally 3.83 MiB:

```log
❯ mise build:webpack-custom
[build:webpack-custom] $ webpack build --config webpack.custom.config.js --mode production
assets by status 3.64 MiB [big]
  asset echarts-ca8967ef.js 1.67 MiB [emitted] [immutable] [big] (name: echarts) (id hint: echarts)
  asset vue-b705d011.js 1010 KiB [emitted] [immutable] [big] (name: vue) (id hint: vue)
  asset vendor-2fd68fc7.js 1000 KiB [emitted] [immutable] [big] (name: vendor) (id hint: defaultVendors)
asset element-plus-9966d68f.js 82.6 KiB [emitted] [immutable] (name: element-plus) (id hint: elementplus)
asset 123.vue-4ba15f20.js 81.2 KiB [emitted] [immutable] (name: 123.vue)
asset index-a6371bf9.js 33.6 KiB [emitted] [immutable] (name: index)
asset index.vue-6b604d0b.js 7.68 KiB [emitted] [immutable] (name: index.vue)
asset module-async-8f0b5594.js 451 bytes [emitted] [immutable] (name: module-async)
asset index.html 304 bytes [emitted]
Entrypoint index [big] 1.02 MiB = vue-b705d011.js 1010 KiB index-a6371bf9.js 33.6 KiB
orphan modules 5.91 MiB [orphan] 1986 modules
runtime modules 10.3 KiB 12 modules
cacheable modules 3.54 MiB
  modules by path ./node_modules/.aube/ 3.46 MiB 195 modules
  modules by path ./src/ 78 KiB
    modules by path ./src/modules/*.js 1.23 KiB 4 modules
    modules by path ./src/views/*.vue 73.9 KiB 4 modules
    ./src/main.js 530 bytes [built] [code generated]
    ./src/App.vue + 1 modules 1.95 KiB [built] [code generated]
    ./src/routers/index.js 361 bytes [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  vue-b705d011.js (1010 KiB)
  echarts-ca8967ef.js (1.67 MiB)
  vendor-2fd68fc7.js (1000 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (1.02 MiB)
      vue-b705d011.js
      index-a6371bf9.js


webpack 5.107.2 compiled with 2 warnings in 2666 ms
```

## Webpack -- Custom Chunks Splitting with Size

25 items, totally 3.88 MiB:

```log
❯ mise build:webpack-custom-with-size
[build:webpack-custom-with-size] $ webpack build --config webpack.custom-with-size.config.js --mode production
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
runtime modules 10.9 KiB 12 modules
cacheable modules 3.54 MiB
  modules by path ./node_modules/.aube/ 3.46 MiB 239 modules
  modules by path ./src/ 78 KiB
    modules by path ./src/modules/*.js 1.23 KiB 4 modules
    modules by path ./src/views/*.vue 73.9 KiB 4 modules
    ./src/main.js 530 bytes [built] [code generated]
    ./src/App.vue + 1 modules 1.95 KiB [built] [code generated]
    ./src/routers/index.js 361 bytes [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  vue-8a2e3a6d-722965fa.js (276 KiB)
  vue-7fea91be-171cc4b4.js (253 KiB)
  echarts-3377815f-afbd0cf6.js (274 KiB)
  echarts-359c601c-b49a7b96.js (259 KiB)
  vendor-5738d0c9-31501bbe.js (350 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (1.02 MiB)
      vue-1936a24a-839b41c3.js
      vue-af9ba5ae-fa4e2b37.js
      vue-7fea91be-171cc4b4.js
      vue-a9239bb3-8351044a.js
      vue-8a2e3a6d-722965fa.js
      index-d9075659.js


webpack 5.107.2 compiled with 2 warnings in 2689 ms
```

## Summary

Until now, it's still recommended to use manually chunks splitting without specific min & max size:

- Manually chunks splitting can improve the cache efficiency;
- Specific min & max size will increase totally dist size, because:
  > [Be aware that manual code splitting can change the behavior of the application if side effects are triggered before the corresponding modules are actually used. You can change the chunking configuration to group some modules so that the modules are reordered, or you can use the `output.strictExecutionOrder` option to ensure that modules are executed in the order they are imported with the cost of a slight increase in bundle size.](https://rolldown.rs/reference/OutputOptions.codeSplitting#codesplitting)

  Basically, in most of the cases, you should couple `output.strictExecutionOrder=true` with `output.codeSplitting.minSize` & `output.codeSplitting.maxSize`, ~~which looks like driving in reverse: "Back to the Webpack Era", 😆~~.

  > [!Note]
  > Since Vite 8.1.0, the output size has been greatly improved, much smaller than Webpack and close to the Vite default, but there is still some minor mistakes stop us using it.
  >
  > In this repo, function accesses `defaults_default.install` & `defaults_default.version` from `element-plus/es/index.mjs` are correctly tree-shaked but still appear in the output bundle in accident.
- Specific min & max size hides the real problem: you'd better not load to much things for one page, all of the optimizations apply on a huge page are just like patches, not the cures.
