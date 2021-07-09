const filter = require('../dist').default

const data = [
  {name: "name1", value: "Value #1"},
  {name: "name2", value: "Value #2"},
  {name: "name3", value: "Value #3"},
  {name: "name4", value: "Value #4"},
  {name: "name5", value: {deepValue: "Deep Value #5"}},
  {name: "name6", value: [{deepValue: "Deep Value #6"}]},
]

console.log(
  filter(data, {value: {deepValue: "#5"}})
)