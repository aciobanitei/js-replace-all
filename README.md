# js-replace-all
Function for replace all ocurence of a string for NodeJS versions older than 15

# `js-replace-all`

Function for replace all ocurence of a string for NodeJS versions older than 15

## Usage
The `replaceall ` function takes 3 arguments, one for the string in which the substitutions are made, one with the substring to be replaced and one with the substring that will replace the searched substring.

```javascript
const replaceall = require("js-replace-all");
replaceall.replaceall("Test abc test test abc test test test abc test test abc","abc","");
  // Output: Test  test test  test test test  test test 
```

```javascript
const diacritics = require("js-replace-all");
diacritics.traditional("123/123/123/123/123", "/", "-");
  // Output: 123-123-123-123-123
```
