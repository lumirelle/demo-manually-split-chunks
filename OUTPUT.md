# Output

## Vite -- Default Chunks Splitting

8 items:

```log
 : nr
√ script to run » build:vite-default
$ bun run ./node_modules/vite/bin/vite.js --config vite.default.config.js build
✔ Console Ninja extension is connected to Vite, see https://tinyurl.com/2vt8jxzw
vite v8.0.13 building client environment for production...
✓ 2173 modules transformed.
computing gzip size...
dist/vite-default/index.html                               0.44 kB │ gzip:   0.31 kB
dist/vite-default/demo-CH7iB75L.css                        0.02 kB │ gzip:   0.04 kB
dist/vite-default/module-async-C2CEgzJi.js                 0.10 kB │ gzip:   0.10 kB
dist/vite-default/demo-DICyHcH2.js                         0.79 kB │ gzip:   0.45 kB
dist/vite-default/demo2-CE1aNW5J.js                       53.93 kB │ gzip:  14.91 kB
dist/vite-default/index-hhP_j57-.js                       67.95 kB │ gzip:  19.51 kB
dist/vite-default/runtime-dom.esm-bundler-rgVXy6z0.js    155.88 kB │ gzip:  38.09 kB
dist/vite-default/echarts-DiuddBA4.js                  1,376.67 kB │ gzip: 330.10 kB

✓ built in 427ms
```

## Vite -- Custom Chunks Splitting

26 items:

```log
❯ : nr
√ script to run » build:vite-custom
$ bun run ./node_modules/vite/bin/vite.js --config vite.custom.config.js build
✔ Console Ninja extension is connected to Vite, see https://tinyurl.com/2vt8jxzw
vite v8.0.13 building client environment for production...
✓ 2173 modules transformed.
computing gzip size...
dist/vite-custom/index.html                      0.55 kB │ gzip:  0.32 kB
dist/vite-custom/demo-CH7iB75L.css               0.02 kB │ gzip:  0.04 kB
dist/vite-custom/module-async-DyjcqUVj.js        0.10 kB │ gzip:  0.10 kB
dist/vite-custom/rolldown-runtime-DC46zqPa.js    0.36 kB │ gzip:  0.25 kB
dist/vite-custom/echarts-DNxrCaoX.js             0.65 kB │ gzip:  0.30 kB
dist/vite-custom/demo-DbwTZXK9.js                0.85 kB │ gzip:  0.46 kB
dist/vite-custom/element-plus-DGn9DAQ5.js        5.03 kB │ gzip:  1.60 kB
dist/vite-custom/index-BHooU4r1.js               5.42 kB │ gzip:  2.21 kB
dist/vite-custom/vue-CBoWPEre.js                13.24 kB │ gzip:  4.52 kB
dist/vite-custom/demo2-D_Bk4JIq.js              54.04 kB │ gzip: 14.93 kB
dist/vite-custom/vue-MScfqHyg.js                63.14 kB │ gzip: 17.73 kB
dist/vite-custom/echarts-BPr1wGF6.js            70.03 kB │ gzip: 17.09 kB
dist/vite-custom/echarts-BNXICRwy.js            71.67 kB │ gzip: 17.96 kB
dist/vite-custom/echarts-gUKN4hVL.js            73.68 kB │ gzip: 20.66 kB
dist/vite-custom/echarts-CUR5S4QW.js            77.90 kB │ gzip: 20.61 kB
dist/vite-custom/echarts-BsCxuwfu.js            81.91 kB │ gzip: 21.03 kB
dist/vite-custom/echarts-CIGmrhEl.js            82.72 kB │ gzip: 24.57 kB
dist/vite-custom/echarts-BuO1vw5R.js            82.93 kB │ gzip: 20.91 kB
dist/vite-custom/echarts-3f-xXFvb.js            85.00 kB │ gzip: 20.76 kB
dist/vite-custom/element-plus-CnatuWDv.js       99.10 kB │ gzip: 22.32 kB
dist/vite-custom/echarts-DsiHXKJ9.js           113.84 kB │ gzip: 26.18 kB
dist/vite-custom/echarts-D8ZwaOPx.js           125.16 kB │ gzip: 30.23 kB
dist/vite-custom/echarts-Bayj7irQ.js           127.55 kB │ gzip: 30.00 kB
dist/vite-custom/echarts-EKdkcG0h.js           144.30 kB │ gzip: 35.89 kB
dist/vite-custom/vue-Bi6EqL9K.js               149.53 kB │ gzip: 36.24 kB
dist/vite-custom/echarts-BIJfDkWk.js           162.42 kB │ gzip: 37.42 kB

✓ built in 353ms
```

## Vite 7 -- Default Chunks Splitting

7 items:

```log
❯ : nr
√ script to run » build:vite7-default
$ bun run ./node_modules/vite7/bin/vite.js --config vite7.default.config.js build
vite v7.3.3 building client environment for production...
node_modules/.bun/@vueuse+core@14.3.0+d99744f06a420513/node_modules/@vueuse/core/dist/index.js (3362:0): A comment

"/* #__PURE__ */"

in "node_modules/.bun/@vueuse+core@14.3.0+d99744f06a420513/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
node_modules/.bun/@vueuse+core@14.3.0+d99744f06a420513/node_modules/@vueuse/core/dist/index.js (5780:22): A comment

"/* #__PURE__ */"

in "node_modules/.bun/@vueuse+core@14.3.0+d99744f06a420513/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
✓ 2191 modules transformed.
dist/vite7-default/index.html                    0.36 kB │ gzip:   0.26 kB
dist/vite7-default/demo-CH7iB75L.css             0.03 kB │ gzip:   0.05 kB
dist/vite7-default/module-async-BUWF_v6B.js      0.05 kB │ gzip:   0.07 kB
dist/vite7-default/demo-BMvMTVwn.js              0.76 kB │ gzip:   0.42 kB
dist/vite7-default/demo2-1b5gJqwH.js            72.94 kB │ gzip:  18.88 kB
dist/vite7-default/index-CCuguniC.js           293.70 kB │ gzip:  69.21 kB
dist/vite7-default/echarts-BSqjoYCM.js       1,429.07 kB │ gzip: 313.75 kB
✓ built in 6.48s
```

## Vite 7 -- Custom Chunks Splitting

8 items:

```log
❯ : nr
√ script to run » build:vite7-custom
$ bun run ./node_modules/vite7/bin/vite.js --config vite7.custom.config.js build
vite v7.3.3 building client environment for production...
node_modules/.bun/@vueuse+core@14.3.0+d99744f06a420513/node_modules/@vueuse/core/dist/index.js (3362:0): A comment

"/* #__PURE__ */"

in "node_modules/.bun/@vueuse+core@14.3.0+d99744f06a420513/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
node_modules/.bun/@vueuse+core@14.3.0+d99744f06a420513/node_modules/@vueuse/core/dist/index.js (5780:22): A comment

"/* #__PURE__ */"

in "node_modules/.bun/@vueuse+core@14.3.0+d99744f06a420513/node_modules/@vueuse/core/dist/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
✓ 2191 modules transformed.
dist/vite7-custom/index.html                    0.42 kB │ gzip:   0.30 kB
dist/vite7-custom/demo-CH7iB75L.css             0.03 kB │ gzip:   0.05 kB
dist/vite7-custom/module-async-BUWF_v6B.js      0.05 kB │ gzip:   0.07 kB
dist/vite7-custom/demo-RXjffYhX.js              0.76 kB │ gzip:   0.42 kB
dist/vite7-custom/index-CSUxOB84.js             4.76 kB │ gzip:   1.86 kB
dist/vite7-custom/demo2-DZ_fBN2O.js            72.94 kB │ gzip:  18.88 kB
dist/vite7-custom/vue-D-fL7kac.js             319.85 kB │ gzip:  74.42 kB
dist/vite7-custom/echarts-CRt9ehGP.js       1,398.77 kB │ gzip: 306.84 kB
✓ built in 6.46s
```

## Webpack -- Default Chunks Splitting

7 items:

```log
❯ : nr
√ script to run » build:webpack-default
$ webpack build --config webpack.default.config.js --mode production
assets by status 3.65 MiB [cached] 6 assets
asset index.html 251 bytes [compared for emit]
orphan modules 6.21 MiB [orphan] 1992 modules
runtime modules 9.33 KiB 11 modules
cacheable modules 3.42 MiB
  modules by path ./node_modules/.bun/ 3.12 MiB 176 modules
  modules by path ./src/ 303 KiB
    modules by path ./src/modules/*.js 1.24 KiB 4 modules
    modules by path ./src/views/*.vue 4.79 KiB 4 modules
    ./src/main.js 530 bytes [built] [code generated]
    ./src/App.vue + 1 modules 601 bytes [built] [code generated]
    ./src/routers/index.js + 7 modules 296 KiB [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  index-f3022627.js (699 KiB)
  483-9cebd463.js (2.88 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (699 KiB)
      index-f3022627.js


webpack 5.106.2 compiled with 2 warnings in 2461 ms
```

## Webpack -- Custom Chunks Splitting

28 items:

```log
❯ : nr
√ script to run » build:webpack-custom
$ webpack build --config webpack.custom.config.js --mode production
assets by status 3.71 MiB [cached] 25 assets
asset index.html 561 bytes [compared for emit]
Entrypoint index [big] 1.02 MiB = 6 assets
orphan modules 5.37 MiB [orphan] 1943 modules
runtime modules 10.9 KiB 12 modules
cacheable modules 3.42 MiB
  modules by path ./node_modules/.bun/ 3.34 MiB 225 modules
  modules by path ./src/ 75.8 KiB
    modules by path ./src/modules/*.js 1.24 KiB 4 modules
    modules by path ./src/views/*.vue 73.1 KiB 4 modules
    ./src/main.js 530 bytes [built] [code generated]
    ./src/App.vue + 1 modules 601 bytes [built] [code generated]
    ./src/routers/index.js 372 bytes [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  vue-a5d024e0-f181c030.js (275 KiB)
  vue-70f75098-b157f866.js (252 KiB)
  echarts-de9ee17b-a66636bc.js (251 KiB)
  vendor-eec623bc-e5b245ca.js (319 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (1.02 MiB)
      vue-eeff1e3f-66384739.js
      vue-c4d15388-71b0c3fd.js
      vue-70f75098-b157f866.js
      vue-a05153f5-ca650ddc.js
      vue-a5d024e0-f181c030.js
      index-87b9c45d.js


webpack 5.106.2 compiled with 2 warnings in 2308 ms
```
