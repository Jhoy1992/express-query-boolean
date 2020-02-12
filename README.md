# express-query-null

> Convert query strings to null for express/connect applications.

## Installation

    npm install --save express-query-null

## Getting Started

The module will recursively attempt to parse every property in `req.query`.

Load it right after `bodyParser`:

```js
var nullParser = require("express-query-null");

// [...]

app.use(bodyParser.json());
app.use(nullParser());
```

#### Without

```js
// ?a=null&b[c]=null
console.log(req.query);
// => { a: null, b: { c: null } }
```

#### With

```js
// ?a=null&b[c]=null
console.log(req.query);
// => { a: null, b: { c: null } }
```

## License

Copyright (c) 2020 Jhonatan Pirolli Ascari. Licensed under the MIT license.
