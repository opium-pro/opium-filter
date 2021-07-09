const filter = require('../dist').default

const data = [
  {name: "name1", value: "value1"},
  {name: "name2", value: "value2"},
  {name: "name3", value: "value3"},
  {name: "name4", value: "value4"},
  {name: "name5", value: "value5", object: {name: "sub"}},
  {name: ["name6", {subname: "subname1"}], value: {subval: "value6"}, object: {subobj: "sub"}},
]

console.log(
  filter(data, {subname: 'n', name: ["6", "3"]}, {exact: false})
)