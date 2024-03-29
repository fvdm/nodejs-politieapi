#### 1.1.1 (2023-09-15)

##### Chores

* **package:**  Only major version dev dep ([27fbcca5](https://github.com/fvdm/nodejs-politieapi/commit/27fbcca51195208e6d041651aedc2750cda4904d))
* **github:**  Update configs ([9b6e1485](https://github.com/fvdm/nodejs-politieapi/commit/9b6e148515f72af1f09a6753849b64444804efe0))

##### Refactors

*  No more production dependencies ([#8](https://github.com/fvdm/nodejs-politieapi/pull/8)) ([b7faa419](https://github.com/fvdm/nodejs-politieapi/commit/b7faa4193865e6a04e03420d897b5512944258ae))
* **_talk:**  Shorter User-Agent header ([01cee6c2](https://github.com/fvdm/nodejs-politieapi/commit/01cee6c2c2ec2d49494417be3bc58b3795aef468))

### 1.1.0 (2021-10-20)

##### Documentation Changes

* **security:**
  *  Update text ([54b2cb1b](https://github.com/fvdm/nodejs-politieapi/commit/54b2cb1bfe74c48a5b35387b24857ce0060eb9d7))
  *  Fixed typo ([44dda1bf](https://github.com/fvdm/nodejs-politieapi/commit/44dda1bfb59cac1230c63ee96c3e4c03cdda6af9))
*  Added security info ([4d9ac611](https://github.com/fvdm/nodejs-politieapi/commit/4d9ac611079512d743c89098c2832e807a4e9f30))
*  Added line about Twitter usernames ([488cba4f](https://github.com/fvdm/nodejs-politieapi/commit/488cba4fa01be450014a51c3e1199798747f9e6d))
*  Minor edits ([f4502650](https://github.com/fvdm/nodejs-politieapi/commit/f4502650ba517285dfed20a74b8d6ad091a48b63))
*  Changed npm badge to published versions ([0b6febe1](https://github.com/fvdm/nodejs-politieapi/commit/0b6febe1d9db401fce9113d5a6735eef78ad1b35))

##### New Features

*  Add method vermist() ([30722c43](https://github.com/fvdm/nodejs-politieapi/commit/30722c43dc46c30e49e073fef84e91a362e33ab3))

##### Bug Fixes

*  Syntax typo ([c333a9ef](https://github.com/fvdm/nodejs-politieapi/commit/c333a9efb0544ce45e71fdf693750bf8f4effbdf))
*  Invalid uid handling ([d02709df](https://github.com/fvdm/nodejs-politieapi/commit/d02709df7f42a8866a81b51666baa75faf55901c))

##### Other Changes

*  Return object when a `uid` is requested ([4f6919b8](https://github.com/fvdm/nodejs-politieapi/commit/4f6919b884a4993962c3b729325d56e95493e1b4))

##### Refactors

* **wijkagenten:**  Cleanup twitter.accountnaam ([dc38f7fa](https://github.com/fvdm/nodejs-politieapi/commit/dc38f7faa14d0a5f1a2343cbda3422a743f2efcf))

##### Tests

* **ci:**  Added dependabot config ([a9081495](https://github.com/fvdm/nodejs-politieapi/commit/a908149581209533fc7d2c354d821e96147a157b))
*  Increase delay to 1 sec ([570d4c4c](https://github.com/fvdm/nodejs-politieapi/commit/570d4c4c5d142dcd95bcb8e53543cb1419f8a8cd))
*  Added invalid UID checks ([aeac257a](https://github.com/fvdm/nodejs-politieapi/commit/aeac257a9140363ccc2243d304b44c209e2dc902))
*  Fixed syntax typo ([e2caa357](https://github.com/fvdm/nodejs-politieapi/commit/e2caa357094159fecff1c670cc1467a0bb93ca91))

## 1.0.0 (2021-10-12)

#### 0.1.1 (2021-10-12)

##### Documentation Changes

*  Describe functions and minor edits ([a9405604](https://github.com/fvdm/nodejs-politieapi/commit/a9405604614f0a8d020038c5bd9505dcaf25cc26))

##### Refactors

*  Allow defaults on constructor ([f6ee471e](https://github.com/fvdm/nodejs-politieapi/commit/f6ee471e76ba02a5d4c917d38e3b55773ac2580d))

### 0.1.0 (2021-10-12)

##### New Features

*  Add urgentpolitiebericht() ([b8604586](https://github.com/fvdm/nodejs-politieapi/commit/b86045866f8cb388f7afebb7eee7f5d8040ef6b9))
*  Add wijkagenten() ([edafce91](https://github.com/fvdm/nodejs-politieapi/commit/edafce912ba96fc8642ee25ad8ce099a0efc8ae8))
*  Add politiebureaus() ([06dd0c42](https://github.com/fvdm/nodejs-politieapi/commit/06dd0c42a989a7a35a47ffb036f04419b7ec4df4))
*  Add nieuws() ([4a7ea34f](https://github.com/fvdm/nodejs-politieapi/commit/4a7ea34f19bbe0e0465362f657b0ed1fd1cbdb12))

##### Bug Fixes

* **_talk:**  Bad data reference ([bde9fdc6](https://github.com/fvdm/nodejs-politieapi/commit/bde9fdc615cef88e501b0fce457eac33a81f717b))
*  Empty response handling ([69beac64](https://github.com/fvdm/nodejs-politieapi/commit/69beac649bd0c6a6ca2e80641e0d091ae814d43a))
*  Syntax typo ([f386aca0](https://github.com/fvdm/nodejs-politieapi/commit/f386aca0e6348e76e8cd45d88345b5cc35946617))
*  Bad ref invalidField ([ef603b7e](https://github.com/fvdm/nodejs-politieapi/commit/ef603b7e1dd64b27e50bbf772b705195f6285444))
*  Syntax typo ([48137dba](https://github.com/fvdm/nodejs-politieapi/commit/48137dbaa01c36e10036e798ee832bdf307298da))
*  Include parameters in request ([e42acad3](https://github.com/fvdm/nodejs-politieapi/commit/e42acad3d13b00341fbbe0e18da0eba68c432389))
*  Missing httpreq dependency ([2d558c73](https://github.com/fvdm/nodejs-politieapi/commit/2d558c73f546f4c56613c2b86d126cb2bb2a4ca0))
* **nieuws:**  Syntax typo ([bcdcd9e4](https://github.com/fvdm/nodejs-politieapi/commit/bcdcd9e4344fc340df4ac3d16e69e00cd99622ee))

##### Refactors

*  Temporarily disable JSON error handling ([29a8d0ea](https://github.com/fvdm/nodejs-politieapi/commit/29a8d0ea6cff422d2f2aa9075b623cf8de1bc0bb))
*  Handle API error in HTML ([9811b35f](https://github.com/fvdm/nodejs-politieapi/commit/9811b35f62ef6d69bb93ce3bc0cc63d57543f8ff))
*  Return expected default response ([306c0471](https://github.com/fvdm/nodejs-politieapi/commit/306c04714403d682ef167569d006a840e6666c2c))
*  Return the expected `data.key` ([f5d23e57](https://github.com/fvdm/nodejs-politieapi/commit/f5d23e57deaf31ce20f5e545d44564abbdc3fcdb))
*  Include User-Agent in request ([00412152](https://github.com/fvdm/nodejs-politieapi/commit/0041215215e58c2656f504978bbbc5e74e808a92))
*  Use main branch instead of master ([7f9836d3](https://github.com/fvdm/nodejs-politieapi/commit/7f9836d34ba06f80550049a9df44bced6cd8b434))
*  Basic coms ([91c032f3](https://github.com/fvdm/nodejs-politieapi/commit/91c032f345fd01b3ecb074b4200b61504a305c31))
* **_talk:**
  *  Indicate JSON or HTML error ([b0c17212](https://github.com/fvdm/nodejs-politieapi/commit/b0c172121b947d3a7cbf2d9cd4d7d6c5d13b364d))
  *  Default `error.code` to `0` ([85036c97](https://github.com/fvdm/nodejs-politieapi/commit/85036c97b75643138fda6ad5edb9eb14dc4285cd))
* **config:**  Changed timeout to 10000 ([8c6d92fe](https://github.com/fvdm/nodejs-politieapi/commit/8c6d92fe0a398b06ab7031d45e7fb2cee9a02d3a))

##### Code Style Changes

* **comments:**
  *  Add JSDoc for nieuws() ([2614d7b3](https://github.com/fvdm/nodejs-politieapi/commit/2614d7b3d6749b2a8367c61c20a00a8a65eca42e))
  *  Fixed config JSDoc ([4ea277af](https://github.com/fvdm/nodejs-politieapi/commit/4ea277af242cf13645ec23b9a66b35dec1f68582))
*  Minor whitespace tweak ([c234d003](https://github.com/fvdm/nodejs-politieapi/commit/c234d00300a7612604d50515e90b373fe095d4be))
* **lint:**  Removed trailing whitespace ([7a8d6c48](https://github.com/fvdm/nodejs-politieapi/commit/7a8d6c48ceb87abf5403aa234e03b3f7d4aa1aa6))

##### Tests

*  Better timeout fallback to code default ([2122e7c1](https://github.com/fvdm/nodejs-politieapi/commit/2122e7c154eefe75d7436168d27a713b85363f2c))
*  Promises are not that cool ([5ea33067](https://github.com/fvdm/nodejs-politieapi/commit/5ea33067da79c300fbed26532fd44cf21bfb50fc))
*  Added empty response checks ([9ae4c36d](https://github.com/fvdm/nodejs-politieapi/commit/9ae4c36dca5a9f95ae79a1c75423a2be8486f2b4))
*  Renamed 'API timeout' to 'Request timeout' ([6fa94579](https://github.com/fvdm/nodejs-politieapi/commit/6fa94579e0ee0aa41023b37c4fa81224ea698db1))
*  Added API timeout checks ([f1f55b54](https://github.com/fvdm/nodejs-politieapi/commit/f1f55b5457ef3434a1b0ff5ac62d43e43302228c))
*  Fixed API error input ([ae19e7f0](https://github.com/fvdm/nodejs-politieapi/commit/ae19e7f0da6bec2dfb2ea1da197d8a26513933f9))
*  Fixed bad error ref ([266a1ed0](https://github.com/fvdm/nodejs-politieapi/commit/266a1ed014037f7d4a5b57f8ecfcdd51f8f003af))
*  Added API error checks ([0edec52e](https://github.com/fvdm/nodejs-politieapi/commit/0edec52e16956511241b677899143fc41533e2f5))
*  Fixed timeout config ([a5d41a18](https://github.com/fvdm/nodejs-politieapi/commit/a5d41a18a5471242f0ac85b89be584472f574252))
* **API error:**
  *  Test on prop type ([17999fae](https://github.com/fvdm/nodejs-politieapi/commit/17999fae818add21789547ecb290377816eca207))
  *  Warn on missing props in HTML ([1b8830a2](https://github.com/fvdm/nodejs-politieapi/commit/1b8830a24ec72971311e9cc07f33513bf4d0f6b4))
  *  Check if invalidFields is not empty ([457fd4d7](https://github.com/fvdm/nodejs-politieapi/commit/457fd4d728537baad889c392525c7aaef657fd49))
  *  Fixed wrong check ([8a311f39](https://github.com/fvdm/nodejs-politieapi/commit/8a311f395cb97e3989880bd4b304f10c367bdcdd))
  *  Fail on undefined props ([049a30ae](https://github.com/fvdm/nodejs-politieapi/commit/049a30ae7791f8cbe97874ad8658b74688399668))
  *  Fail on missing invalidFields ([c2c2806a](https://github.com/fvdm/nodejs-politieapi/commit/c2c2806a9ed9bd15026a92bebff0c86e775b3aa2))
  *  Changed method input ([ed8a5adb](https://github.com/fvdm/nodejs-politieapi/commit/ed8a5adb0b235d57f4db10235701fd6bc96a68c1))
  *  Start with data check ([e06e88f1](https://github.com/fvdm/nodejs-politieapi/commit/e06e88f14b92a1688a75f7951a98a119dd5b95f3))
* **nieuws:**  Cleaner Promise handling ([8e64ceb9](https://github.com/fvdm/nodejs-politieapi/commit/8e64ceb9fed8fbe1768e9dc17c0c91a86f84fe1d))
* **ci:**
  *  Undo npm ci step ([6df41db1](https://github.com/fvdm/nodejs-politieapi/commit/6df41db1b7daad8baf50a214310aef230babd14c))
  *  Changed npm install to ci ([e3179b08](https://github.com/fvdm/nodejs-politieapi/commit/e3179b08a16c48bf510e0f20a1d5b0dde7bf6a41))
  *  Clarify finish job ([5cd580a5](https://github.com/fvdm/nodejs-politieapi/commit/5cd580a5f86ad867a38b992e5688db44ac30ff2f))

