# Output

## Vite -- Default Chunks Splitting

8 items:

```log
❯ : nr build:vite-default
$ bun run ./node_modules/vite/bin/vite.js --config vite.default.config.js build
vite v8.0.10 building client environment for production...
✓ 2173 modules transformed.
computing gzip size...
dist/vite-default/index.html                               0.44 kB │ gzip:   0.30 kB
dist/vite-default/demo-BZLqDL_2.css                        0.03 kB │ gzip:   0.05 kB
dist/vite-default/module-async-C2CEgzJi.js                 0.10 kB │ gzip:   0.10 kB
dist/vite-default/demo-CMy_r7Vo.js                         0.78 kB │ gzip:   0.46 kB
dist/vite-default/demo2-16oAq_xZ.js                       50.79 kB │ gzip:  14.39 kB
dist/vite-default/index-BmfpVcdE.js                       67.65 kB │ gzip:  19.45 kB
dist/vite-default/runtime-dom.esm-bundler-noch1_FQ.js    155.49 kB │ gzip:  37.98 kB
dist/vite-default/input-CXRqK8L4.js                    1,359.32 kB │ gzip: 328.82 kB

✓ built in 361ms
```

## Vite -- Custom Chunks Splitting

26 items:

```log
❯ : nr build:vite-custom
$ bun run ./node_modules/vite/bin/vite.js --config vite.custom.config.js build
vite v8.0.10 building client environment for production...
✓ 2173 modules transformed.
computing gzip size...
dist/vite-custom/index.html                      0.48 kB │ gzip:  0.31 kB
dist/vite-custom/demo-BZLqDL_2.css               0.03 kB │ gzip:  0.05 kB
dist/vite-custom/module-async-6Vqa-JHi.js        0.10 kB │ gzip:  0.10 kB
dist/vite-custom/rolldown-runtime-DC46zqPa.js    0.36 kB │ gzip:  0.25 kB
dist/vite-custom/echarts-BZ1pqBaN.js             0.65 kB │ gzip:  0.29 kB
dist/vite-custom/demo-B-k5gOcW.js                0.81 kB │ gzip:  0.45 kB
dist/vite-custom/vue-KJndwYc1.js                 4.23 kB │ gzip:  1.56 kB
dist/vite-custom/element-plus-CXtEGAJK.js        4.93 kB │ gzip:  1.55 kB
dist/vite-custom/index-D_akMF2z.js               5.42 kB │ gzip:  2.21 kB
dist/vite-custom/demo2-DiT7l-vJ.js              50.86 kB │ gzip: 14.40 kB
dist/vite-custom/vue-CJ2XuwKi.js                62.84 kB │ gzip: 17.67 kB
dist/vite-custom/echarts-DILQ0mIB.js            69.55 kB │ gzip: 17.06 kB
dist/vite-custom/echarts-n2bjvFZq.js            71.22 kB │ gzip: 17.90 kB
dist/vite-custom/echarts-TfV-tWP7.js            73.20 kB │ gzip: 20.51 kB
dist/vite-custom/echarts-DHv1bxiw.js            77.55 kB │ gzip: 20.57 kB
dist/vite-custom/echarts-D21JSS4W.js            81.30 kB │ gzip: 21.05 kB
dist/vite-custom/echarts-BgjWGzpz.js            82.33 kB │ gzip: 24.51 kB
dist/vite-custom/echarts-BAoohQav.js            82.98 kB │ gzip: 20.90 kB
dist/vite-custom/echarts-BxwwwkJ_.js            84.48 kB │ gzip: 20.74 kB
dist/vite-custom/element-plus-Bre9OvMr.js       90.60 kB │ gzip: 21.13 kB
dist/vite-custom/echarts-C2xFtYxQ.js           113.36 kB │ gzip: 26.38 kB
dist/vite-custom/echarts-CM3XW6nP.js           124.27 kB │ gzip: 30.26 kB
dist/vite-custom/echarts-qT1zIm-g.js           126.55 kB │ gzip: 30.00 kB
dist/vite-custom/echarts-LkC4bJvJ.js           143.53 kB │ gzip: 35.87 kB
dist/vite-custom/vue-D-tbgfnb.js               155.49 kB │ gzip: 37.98 kB
dist/vite-custom/echarts-CuqF8RNa.js           161.24 kB │ gzip: 37.24 kB

✓ built in 309ms
```

## Vite 7 -- Default Chunks Splitting

7 items:

```log
❯ : nr build:vite7-default
$ bun run ./node_modules/vite7/bin/vite.js --config vite7.default.config.js build
vite v7.3.2 building client environment for production...
✓ 2191 modules transformed.
dist/vite7-default/index.html                    0.36 kB │ gzip:   0.26 kB
dist/vite7-default/demo-BZLqDL_2.css             0.03 kB │ gzip:   0.05 kB
dist/vite7-default/module-async-BUWF_v6B.js      0.05 kB │ gzip:   0.07 kB
dist/vite7-default/demo-BaRag9Ov.js              0.77 kB │ gzip:   0.42 kB
dist/vite7-default/demo2-DIqbCoaT.js            70.87 kB │ gzip:  18.39 kB
dist/vite7-default/index-DCovtQ0L.js           293.22 kB │ gzip:  69.11 kB
dist/vite7-default/dayjs.min-Cf7_-0rr.js     1,420.73 kB │ gzip: 312.23 kB
✓ built in 5.57s
```

## Vite 7 -- Custom Chunks Splitting

8 items:

```log
❯ : nr build:vite7-custom
$ bun run ./node_modules/vite7/bin/vite.js --config vite7.custom.config.js build
vite v7.3.2 building client environment for production...
✓ 2191 modules transformed.
dist/vite7-custom/index.html                    0.42 kB │ gzip:   0.30 kB
dist/vite7-custom/demo-BZLqDL_2.css             0.03 kB │ gzip:   0.05 kB
dist/vite7-custom/module-async-BUWF_v6B.js      0.05 kB │ gzip:   0.07 kB
dist/vite7-custom/demo-BjBJv-0k.js              0.76 kB │ gzip:   0.43 kB
dist/vite7-custom/index-BnEO9Ov8.js             4.76 kB │ gzip:   1.86 kB
dist/vite7-custom/demo2-DiGgNmUo.js            70.86 kB │ gzip:  18.39 kB
dist/vite7-custom/vue-BJMHp9Fq.js             314.82 kB │ gzip:  73.29 kB
dist/vite7-custom/dayjs.min-BvKFOFEf.js     1,395.03 kB │ gzip: 306.19 kB
✓ built in 5.94s
```

## Webpack -- Default Chunks Splitting

7 items:

```log
❯ : nr build:webpack-default
$ webpack build --config webpack.default.config.js --mode production
assets by status 4.16 MiB [cached] 6 assets
asset index.html 251 bytes [compared for emit]
orphan modules 6.81 MiB [orphan] 2004 modules
runtime modules 9.33 KiB 11 modules
cacheable modules 4 MiB
  modules by path ./node_modules/ 3.71 MiB 174 modules
  modules by path ./src/ 303 KiB
    modules by path ./src/modules/*.js 1.28 KiB 4 modules
    modules by path ./src/views/*.vue 4.03 KiB
      ./src/views/demo.vue + 3 modules 1.54 KiB [built] [code generated]
      + 3 modules
    ./src/main.js 459 bytes [built] [code generated]
    ./src/App.vue + 1 modules 548 bytes [built] [code generated]
    ./src/routers/index.js + 7 modules 296 KiB [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  index-5bc6a522.js (698 KiB)
  846-46a29aa9.js (3.39 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (698 KiB)
      index-5bc6a522.js


webpack 5.106.2 compiled with 2 warnings in 2938 ms
```

## Webpack -- Custom Chunks Splitting

28 items:

```log
❯ : nr build:webpack-custom
$ webpack build --config webpack.custom.config.js --mode production
assets by status 4.24 MiB [cached] 27 assets
asset index.html 747 bytes [compared for emit]
Entrypoint index [big] 1.58 MiB = 9 assets
orphan modules 5.37 MiB [orphan] 1950 modules
runtime modules 10.8 KiB 12 modules
cacheable modules 4 MiB
  modules by path ./node_modules/ 3.93 MiB 228 modules
  modules by path ./src/ 73.1 KiB
    modules by path ./src/modules/*.js 1.28 KiB 4 modules
    modules by path ./src/views/*.vue 70.5 KiB
      ./src/views/demo.vue + 3 modules 1.54 KiB [built] [code generated]
      + 3 modules
    ./src/main.js 459 bytes [built] [code generated]
    ./src/App.vue + 1 modules 548 bytes [built] [code generated]
    ./src/routers/index.js 372 bytes [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  vue-00cefcf7-30a9964a.js (246 KiB)
  vue-17c34557-8f147cb4.js (252 KiB)
  vue-0b8f0f24-2783131d.js (299 KiB)
  vue-47020cf5-39965fee.js (246 KiB)
  echarts-c1824f61-8863c407.js (259 KiB)
  echarts-873c46ee-c8147aeb.js (259 KiB)
  vendor-b5d721ca-e7b2a1b4.js (319 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (1.58 MiB)
      vue-9dd26f51-ae992875.js
      vue-f6ec1f32-4055e328.js
      vue-37dcf926-917f3e96.js
      vue-17c34557-8f147cb4.js
      vue-0b8f0f24-2783131d.js
      vue-47020cf5-39965fee.js
      vue-950dee89-ebd9ee49.js
      vue-00cefcf7-30a9964a.js
      index-6a72ee0a.js


webpack 5.106.2 compiled with 2 warnings in 2748 ms
```