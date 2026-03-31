# Output

## Vite -- Default Chunks Splitting

6 items:

```log
√ script to run » build:vite-default
$ bun run ./node_modules/vite/bin/vite.js --config vite.default.config.js build
✔ Console Ninja extension is connected to Vite, see https://tinyurl.com/2vt8jxzw
vite v8.0.3 building client environment for production...
✓ 2166 modules transformed.
computing gzip size...
dist/vite-default/index.html                                0.44 kB │ gzip:   0.31 kB
dist/vite-default/demo-Duj3nMRG.css                         0.01 kB │ gzip:   0.03 kB
dist/vite-default/module-async-CgRiViTa.js                  0.04 kB │ gzip:   0.06 kB
dist/vite-default/demo-sd6Mk9tM.js                          0.32 kB │ gzip:   0.26 kB
dist/vite-default/runtime-core.esm-bundler-yoqtp7za.js     63.64 kB │ gzip:  24.98 kB
dist/vite-default/index-DvfFJ0Mb.js                     2,023.45 kB │ gzip: 656.39 kB

✓ built in 710ms
[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
```

## Vite -- Custom Chunks Splitting

49 items:

```log
√ script to run » build:vite-custom
$ bun run ./node_modules/vite/bin/vite.js --config vite.custom.config.js build
✔ Console Ninja extension is connected to Vite, see https://tinyurl.com/2vt8jxzw
vite v8.0.3 building client environment for production...
✓ 2166 modules transformed.
computing gzip size...
dist/vite-custom/index.html                     3.46 kB │ gzip:  0.70 kB
dist/vite-custom/demo-Duj3nMRG.css              0.01 kB │ gzip:  0.03 kB
dist/vite-custom/module-async-CUsUxgTB.js       0.04 kB │ gzip:  0.06 kB
dist/vite-custom/demo-C5RJJjby.js               0.30 kB │ gzip:  0.25 kB
dist/vite-custom/rolldown-runtime-DTK7i6HB.js   0.68 kB │ gzip:  0.41 kB
dist/vite-custom/index-Ct9F8fC6.js              2.75 kB │ gzip:  1.38 kB
dist/vite-custom/vue-DDeU5Y7n.js               22.97 kB │ gzip:  8.90 kB
dist/vite-custom/element-plus-CTFB5HiR.js      27.58 kB │ gzip: 11.51 kB
dist/vite-custom/echarts-GKNUNinD.js           27.61 kB │ gzip:  8.81 kB
dist/vite-custom/echarts-0ubfcDlA.js           28.50 kB │ gzip:  9.40 kB
dist/vite-custom/echarts-Cabi3aBC.js           28.85 kB │ gzip: 10.19 kB
dist/vite-custom/echarts-DmLLcoQa.js           30.68 kB │ gzip: 10.92 kB
dist/vite-custom/element-plus-G_bQpTo6.js      30.87 kB │ gzip: 11.25 kB
dist/vite-custom/echarts-BJ_WaDbE.js           32.32 kB │ gzip: 11.25 kB
dist/vite-custom/echarts-Ba0xUwdQ.js           32.85 kB │ gzip: 10.65 kB
dist/vite-custom/echarts-BSgcfS3g.js           34.21 kB │ gzip: 13.39 kB
dist/vite-custom/echarts-gKOmxmWt.js           35.34 kB │ gzip: 14.45 kB
dist/vite-custom/echarts-DO6hEiwa.js           35.41 kB │ gzip: 12.58 kB
dist/vite-custom/echarts-DpdEv_vl.js           35.49 kB │ gzip: 13.00 kB
dist/vite-custom/echarts-Bwta7DmV.js           38.71 kB │ gzip: 12.92 kB
dist/vite-custom/echarts-mPTTSdpj.js           38.87 kB │ gzip: 13.56 kB
dist/vite-custom/echarts-Baw6pwRN.js           40.70 kB │ gzip: 13.89 kB
dist/vite-custom/element-plus-D_0cmcny.js      43.42 kB │ gzip: 14.09 kB
dist/vite-custom/element-plus-CXzj2YzG.js      43.65 kB │ gzip: 15.15 kB
dist/vite-custom/echarts-DEgTNWyh.js           44.33 kB │ gzip: 14.46 kB
dist/vite-custom/echarts-CYYxrXvm.js           44.97 kB │ gzip: 14.38 kB
dist/vite-custom/echarts-CFsGbeMU.js           46.29 kB │ gzip: 16.13 kB
dist/vite-custom/element-plus-C04qwE1J.js      46.46 kB │ gzip: 15.09 kB
dist/vite-custom/element-plus-cPo32dbB.js      46.47 kB │ gzip: 15.22 kB
dist/vite-custom/echarts-5pU4R3uh.js           46.85 kB │ gzip: 15.18 kB
dist/vite-custom/element-plus-DLPxABzM.js      47.78 kB │ gzip: 16.32 kB
dist/vite-custom/echarts-CYjjMOZa.js           52.15 kB │ gzip: 17.95 kB
dist/vite-custom/echarts-GdXMjxXE.js           54.21 kB │ gzip: 18.54 kB
dist/vite-custom/echarts-CG0fE5DY.js           55.70 kB │ gzip: 19.20 kB
dist/vite-custom/echarts-5A1Y2sq8.js           56.23 kB │ gzip: 18.71 kB
dist/vite-custom/echarts-CZZPtGdR.js           57.09 kB │ gzip: 18.99 kB
dist/vite-custom/element-plus-BIIVp23y.js      57.76 kB │ gzip: 20.51 kB
dist/vite-custom/echarts-BGJqzX9-.js           57.82 kB │ gzip: 20.70 kB
dist/vite-custom/echarts-AfUA35Na.js           58.89 kB │ gzip: 18.15 kB
dist/vite-custom/echarts-Bc3Pu9Mg.js           59.42 kB │ gzip: 22.64 kB
dist/vite-custom/vue-BInppceg.js               63.64 kB │ gzip: 24.98 kB
dist/vite-custom/echarts-B-PhYmvC.js           63.79 kB │ gzip: 21.36 kB
dist/vite-custom/element-plus-B5OxfGoB.js      64.06 kB │ gzip: 20.57 kB
dist/vite-custom/element-plus-4AyJip7U.js      70.86 kB │ gzip: 23.50 kB
dist/vite-custom/element-plus-BRuw-j1n.js      77.25 kB │ gzip: 25.82 kB
dist/vite-custom/element-plus-C5WxpozM.js      77.43 kB │ gzip: 26.30 kB
dist/vite-custom/element-plus-ygU-KXTn.js      82.91 kB │ gzip: 24.08 kB
dist/vite-custom/element-plus-OMGRw4jX.js      88.98 kB │ gzip: 24.35 kB
dist/vite-custom/element-plus-CXXEQwbu.js      91.21 kB │ gzip: 29.56 kB

✓ built in 416ms
```

## Vite 7 -- Default Chunks Splitting

5 items:

```log
√ script to run » build:vite7-default
$ bun run ./node_modules/vite7/bin/vite.js --config vite7.default.config.js build
vite v7.3.1 building client environment for production...
✓ 2184 modules transformed.
dist/vite7-default/index.html                    0.36 kB │ gzip:   0.26 kB
dist/vite7-default/demo-Duj3nMRG.css             0.02 kB │ gzip:   0.04 kB
dist/vite7-default/module-async-C-Qs9KZ6.js      0.05 kB │ gzip:   0.07 kB
dist/vite7-default/demo-CbyK7JS3.js              0.32 kB │ gzip:   0.25 kB
dist/vite7-default/index-Uhch1h3W.js         2,113.41 kB │ gzip: 728.72 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 7.77s
```

## Vite 7 -- Custom Chunks Splitting

9 items:

```log
√ script to run » build:vite7-custom
$ bun run ./node_modules/vite7/bin/vite.js --config vite7.custom.config.js build
vite v7.3.1 building client environment for production...
✓ 2184 modules transformed.
dist/vite7-custom/index.html                  0.63 kB │ gzip:   0.35 kB
dist/vite7-custom/demo-Duj3nMRG.css           0.02 kB │ gzip:   0.04 kB
dist/vite7-custom/module-async-C-Qs9KZ6.js    0.05 kB │ gzip:   0.07 kB
dist/vite7-custom/demo-BNJs8n-8.js            0.32 kB │ gzip:   0.26 kB
dist/vite7-custom/index-DBE2_qVr.js           2.63 kB │ gzip:   1.37 kB
dist/vite7-custom/vue-D_EBQ2y8.js            23.79 kB │ gzip:   9.78 kB
dist/vite7-custom/vendor-BmgUk3Dl.js        446.02 kB │ gzip: 162.52 kB
dist/vite7-custom/element-plus-BfgcYqVy.js  735.25 kB │ gzip: 243.52 kB
dist/vite7-custom/echarts-iMxdRW0_.js       902.90 kB │ gzip: 309.29 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 7.04s
```

## Webpack -- Default Chunks Splitting

5 items:

```log
√ script to run » build:webpack-default
$ webpack build --config webpack.default.config.js --mode production
assets by status 2.12 MiB [cached] 4 assets
asset index.html 251 bytes [compared for emit]
orphan modules 7.54 MiB (javascript) 937 bytes (runtime) [orphan] 2151 modules
runtime modules 11.7 KiB 12 modules
cacheable modules 7.5 MiB (javascript) 28 bytes (css/mini-extract)
  modules by path ./node_modules/ 7.2 MiB
    modules by path ./node_modules/dayjs/ 16.1 KiB 9 modules
    modules by path ./node_modules/@vue/ 400 KiB 4 modules
    ./node_modules/echarts/index.js + 571 modules 4.05 MiB [built] [code generated]
    ./node_modules/element-plus/es/index.mjs + 1104 modules 2.75 MiB [built] [code generated]    
    ./node_modules/vue-loader/dist/exportHelper.js 328 bytes [built] [code generated]
  modules by path ./src/ 299 KiB (javascript) 28 bytes (css/mini-extract)
    modules by path ./src/modules/*.js 123 bytes 3 modules
    modules by path ./src/views/*.vue 1.19 KiB (javascript) 28 bytes (css/mini-extract) 2 modules
    + 3 modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB). 
This can impact web performance.
Assets:
  index-db2267d5.js (2.12 MiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (2.12 MiB)
      index-db2267d5.js


webpack 5.105.4 compiled with 2 warnings in 12310 ms
```

## Webpack -- Custom Chunks Splitting

42 items:

```log
√ script to run » build:webpack-custom
$ webpack build --config webpack.custom.config.js --mode production
assets by status 2.24 MiB [cached] 41 assets
asset index.html 2.67 KiB [compared for emit]
Entrypoint index [big] 2.24 MiB = 38 assets
orphan modules 3.98 MiB (javascript) 937 bytes (runtime) [orphan] 1507 modules
runtime modules 12.7 KiB 13 modules
cacheable modules 7.5 MiB (javascript) 28 bytes (css/mini-extract)
  modules by path ./node_modules/ 7.49 MiB 660 modules
  modules by path ./src/ 2.68 KiB (javascript) 28 bytes (css/mini-extract)
    modules by path ./src/modules/*.js 123 bytes 3 modules
    modules by path ./src/views/*.vue 1.19 KiB (javascript) 28 bytes (css/mini-extract)
      ./src/views/demo.vue + 2 modules 1.19 KiB [built] [code generated]
      css ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[3].use[0]!./src/views/demo.vue?vue&type=style&index=0&id=196205d2&lang=css 28 bytes [built] [code generated]
    ./src/main.js 579 bytes [built] [code generated]
    ./src/App.vue + 1 modules 548 bytes [built] [code generated]
    ./src/routers/index.js 272 bytes [built] [code generated]

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  vendor-d45aa8e4.js (510 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  index (2.24 MiB)
      vue-b1bf034d.js
      echarts-a5f333c2-5e8bea10.js
      echarts-359a55e8-3ccfc01c.js
      echarts-a170a3f7-f881b334.js
      echarts-e8ef2174-bbb9c387.js
      echarts-26fed032-373a8611.js
      echarts-25483a5b-38323661.js
      echarts-e082e6bb-e61e5a88.js
      echarts-4a311e13-95695c00.js
      echarts-6479a87a-bf3c472e.js
      echarts-2a8592e6-5786d5ca.js
      echarts-ad1e3ed6-49b92b83.js
      echarts-d3488cc9-55e425e0.js
      echarts-29914631-8dc6df0e.js
      echarts-2f1b1130-835e98c8.js
      echarts-e159c8b5-bda273b3.js
      echarts-d549cd86-299fc476.js
      echarts-c1824f61-e193f388.js
      echarts-873c46ee-ac70ccb8.js
      echarts-d878ab5e-c545970b.js
      echarts-82428f5c-b56f605d.js
      echarts-19e1fdfe-f7074eec.js
      echarts-2cf6e2dd-de1f14f5.js
      element-plus-2371bf14-ecf3c310.js
      element-plus-7239b66e-593beec3.js
      element-plus-06860fcc-2276e5fc.js
      element-plus-2ccb5807-aa199a66.js
      element-plus-a2035a2b-4d67efc3.js
      element-plus-db255e8c-c0b4b845.js
      element-plus-f9edd1bc-031809be.js
      element-plus-f8539b38-000c95d1.js
      element-plus-c541d834-b3c4168c.js
      element-plus-9dce7a5b-8df55e85.js
      element-plus-95eb2204-c02491c6.js
      element-plus-60411191-8551b153.js
      element-plus-74559da4-84a6196b.js
      vendor-d45aa8e4.js
      index-3b2e804e.js


webpack 5.105.4 compiled with 2 warnings in 7616 ms
```