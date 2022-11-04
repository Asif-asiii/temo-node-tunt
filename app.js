const _ = require("lodash");
const items = [2[3,[3,[4]]]];
const new_items = _.flattenDeep(items);
console.log(new_items);