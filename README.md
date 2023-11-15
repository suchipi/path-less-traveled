# path-less-traveled

Utility that makes it easier to reference paths relative to some base dir throughout your codebase.

## Usage Example

`root-dir.js`

```js
const { pathMarker } = require("path-less-traveled");

module.exports = pathMarker(__dirname);
```

`some-other-file.js`

```js
const rootDir = require("./root-dir");

console.log(rootDir()); // "/home/suchipi/my-project"
console.log(rootDir("src")); // "/home/suchipi/my-project/src"
console.log(rootDir("src", "index.js")); // "/home/suchipi/my-project/src/index.js"

const absolutePathToSomething = rootDir("dist/index.js");
console.log(rootDir.relative(absolutePathToSomething)); // dist/index.js

// You can also create child path markers via `concat`:
const srcDir = rootDir.concat("src");
console.log(srcDir()); // "/home/suchipi/my-project/src"
console.log(srcDir("index.js")); // "/home/suchipi/my-project/src/index.js"
```

## Notes

If you use `NODE_PATH` or a monorepo, you can make your `root-dir.js` file importable from anywhere without needing to know its relative path, which means you can always reference things relative to the root dir without caring about where the referencing file is.

## License

MIT
