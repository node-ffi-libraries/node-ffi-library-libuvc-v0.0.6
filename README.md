<p align="center">
  <a href="https://github.com/node-ffi-packager"><img src="https://raw.githubusercontent.com/node-ffi-packager/resources/master/logotype/node-ffi-libraries.svg?sanitize=true" alt="node-ffi-libraries logotype, impossible cubes in orange" width="256" border="0" /></a>
</p>

# [@ffi-libraries/libuvc-v0.0.6](https://github.com/node-ffi-libraries/node-ffi-library-libuvc-v0.0.6)

[Automatically generated](https://github.com/node-ffi-packager) [Node.js](https://nodejs.org/en/) [Foreign Function Interface (FFI)](https://en.wikipedia.org/wiki/Foreign_function_interface) package for [`libuvc`](https://github.com/libuvc/libuvc) v0.0.6. It is meant as a base to build feature-rich packages on top of &mdash; without the hassle of writing library bindings and building native dependencies.

> **`libuvc`**: A cross-platform library for USB video devices

[Bugs? Report them!](https://github.com/node-ffi-packager)

## Platforms supported in this package

<details>

<summary>linux-x86_64</summary>

Conan package id `5059f61390311ebcb390fdf8ccdb55883b02a431`.

### Library dependencies

- [`libjpeg` v9d](https://github.com/node-ffi-libraries/node-ffi-library-libjpeg-v9d) (branch/tag matching `^v2.0.1`)

- [`libusb` v1.0.23](https://github.com/node-ffi-libraries/node-ffi-library-libusb-v1.0.23) (branch/tag matching `^v2.0.1`)

### Header files

- [`./include/libuvc/libuvc.h`](./platforms/linux-x86_64/include/libuvc/libuvc.h) ([`.js`](./platforms/linux-x86_64/include/libuvc/libuvc.h.js))

- [`./include/libuvc/libuvc_config.h`](./platforms/linux-x86_64/include/libuvc/libuvc_config.h) ([`.js`](./platforms/linux-x86_64/include/libuvc/libuvc_config.h.js))

### Library files

- [`./lib/libuvc.so`](./platforms/linux-x86_64/lib/libuvc.so)

</details>

<details>

<summary>macos-armv8</summary>

Conan package id `4a6b69ad4662b73171fc6aa328f5465e9e2baee5`.

### Library dependencies

- [`libjpeg` v9d](https://github.com/node-ffi-libraries/node-ffi-library-libjpeg-v9d) (branch/tag matching `^v2.0.1`)

- [`libusb` v1.0.23](https://github.com/node-ffi-libraries/node-ffi-library-libusb-v1.0.23) (branch/tag matching `^v2.0.1`)

### Header files

- [`./include/libuvc/libuvc.h`](./platforms/macos-armv8/include/libuvc/libuvc.h) ([`.js`](./platforms/macos-armv8/include/libuvc/libuvc.h.js))

- [`./include/libuvc/libuvc_config.h`](./platforms/macos-armv8/include/libuvc/libuvc_config.h) ([`.js`](./platforms/macos-armv8/include/libuvc/libuvc_config.h.js))

### Library files

- [`./lib/libuvc.dylib`](./platforms/macos-armv8/lib/libuvc.dylib)

</details>

<details>

<summary>macos-x86_64</summary>

Conan package id `fd3a12e9fb10dddd2d7131da2f6920cb125f879d`.

### Library dependencies

- [`libjpeg` v9d](https://github.com/node-ffi-libraries/node-ffi-library-libjpeg-v9d) (branch/tag matching `^v2.0.1`)

- [`libusb` v1.0.23](https://github.com/node-ffi-libraries/node-ffi-library-libusb-v1.0.23) (branch/tag matching `^v2.0.1`)

### Header files

- [`./include/libuvc/libuvc.h`](./platforms/macos-x86_64/include/libuvc/libuvc.h) ([`.js`](./platforms/macos-x86_64/include/libuvc/libuvc.h.js))

- [`./include/libuvc/libuvc_config.h`](./platforms/macos-x86_64/include/libuvc/libuvc_config.h) ([`.js`](./platforms/macos-x86_64/include/libuvc/libuvc_config.h.js))

### Library files

- [`./lib/libuvc.dylib`](./platforms/macos-x86_64/lib/libuvc.dylib)

</details>

## Installation

```shell
npm install --save github:node-ffi-libraries/node-ffi-library-libuvc-v0.0.6#semver:^2.0.1
```

## Example

```javascript
const { load } = require("@ffi-libraries/libuvc-v0.0.6");

async function main() {
  // Lazy-loading the library and all dependencies.
  const library = await load();

  // A library might have more than one header file.
  console.dir(library);

  // Lazy-load an individual header file (random example, see output from above).
  const headerLoader = library.headers["./include/libuvc/libuvc.h"];
  const header = await headerLoader();

  // You can now use the functions and types exported by the header file.
  console.dir(header);

  // Properly unload when done.
  await library.unload();
}

main();
```

## Usage

- Used from [Node.js](https://nodejs.org/) (Javascript) to call the `libuvc` dynamic library (C/C++).
  - No compilation required. All available binaries are included in the package and are loaded automatically.
  - Library header files are included, but most other documentation is not. See instead documentation for [`libuvc`](https://github.com/libuvc/libuvc).
- The `header` variable in the above example contains a Javascript object generated from the C/C++ header file.
  - C/C++ constants.
  - FFI typedefs.
  - Bindings to C/C++ functions.
- See the [Node.js FFI tutorial](https://github.com/node-ffi/node-ffi/wiki/Node-FFI-Tutorial) to get started.
  - Using [N-API](https://nodejs.org/dist/latest/docs/api/n-api.html) (`-napi`) versions of FFI libraries is required.
  - See [ffi-napi](https://github.com/node-ffi-napi/node-ffi-napi), [ref-napi](https://github.com/node-ffi-napi/ref-napi), and [related `-napi` packages](https://github.com/node-ffi-napi).

## Package information

- Repository/package automatically generated by [`@ffi-packager/ffi-packager`](https://github.com/node-ffi-packager):
  - Version: v2.0.1
  - Generator run by: [Joel Purra](https://joelpurra.com/)
- Repository published to [Github](https://github.com/):
  - Branch: [`v2.0.1`](https://github.com/node-ffi-libraries/node-ffi-library-libuvc-v0.0.6/tree/v2.0.1)
  - Repository: [`node-ffi-library-libuvc-v0.0.6`](https://github.com/node-ffi-libraries/node-ffi-library-libuvc-v0.0.6)
  - Organization: [`node-ffi-libraries`](https://github.com/node-ffi-libraries)
- Package was _not_ published to [NPM](https://npmjs.com/).
  - Version: `2.0.1` (based on the package generator version)
  - Name: `@ffi-libraries/libuvc-v0.0.6`
  - Organization/scope: `ffi-libraries`
- Library binaries made available by [Conan.io](https://conan.io/):
  - Package reference: [`libuvc/0.0.6@`](https://github.com/conan-io/conan-center-index)
  - Conan remote: `conan-center`
- The library is [`libuvc`](https://github.com/libuvc/libuvc):
  - Version: v0.0.6
  - Description: "A cross-platform library for USB video devices"
  - License: <a href="https://spdx.org/licenses/BSD-3-Clause.html">BSD-3-Clause</a>
  - Topics: libuvc, libusb, usb, video

---

[@ffi-libraries/libuvc-v0.0.6](https://github.com/node-ffi-libraries/node-ffi-library-libuvc-v0.0.6) Copyright &copy; 2021 [Joel Purra](https://joelpurra.com/). License: <a href="https://spdx.org/licenses/MIT.html">MIT</a>.
