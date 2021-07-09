# The fastest way to filter an array of objects

`npm i opium-filter`

Returns a new object with filtered items
`filter(dataset, filter, [options])`

## Examples
```
import filter from 'opium-filter'

const data = [
  {name: "name1", value: "Value #1"},
  {name: "name2", value: "Value #2"},
  {name: "name3", value: "Value #3"},
  {name: "name4", value: "Value #4"},
  {name: "name5", value: {deepValue: "Deep Value #5"}},
  {name: "name6", value: [{deepValue: "Deep Value #6"}]},
]
```

### Partial match
Returns any object that contains '2' in name
```
filter(data, {name: '2'})
// returns [{name: "name2", value: "Value #2"}]
```

### Exact match
Rerutns only the objects with names 'name2' and 'name3'
```
filter(data, {name: ['name2', 'name3']})
// returns [
  {name: "name2", value: "Value #2"},
  {name: "name3", value: "Value #3"},
]
```

### Matching values from inner objects
If filter can't find a key on top level, it will try to find it deeper
```
filter(data, {deepValue: "#5"})
// returns [{name: "name5", value: {deepValue: "Deep Value #5"}}]
```

You can turn this off by passing {deep: false} in options
```
filter(data, {deepValue: "#5"}, {deep: false})
// returns []
```

Or you can make it look only by value with no need of key, just pass {deep: true}
```
filter(data, "#5", {deep: true})
// returns [{name: "name5", value: {deepValue: "Deep Value #5"}}]
```

### Match any value inside of a specific key
```
filter(data, {value: {deepValue: "#5"}})
// returns [{name: "name5", value: {deepValue: "Deep Value #5"}}]
```

Or pass {deep: true} to look deeper with no neet to specify a key
```
filter(data, {value: "#5"}, {deep: true})
// returns [{name: "name5", value: {deepValue: "Deep Value #5"}}]
```

### Match a value inside of array
Finding values inside of an array doesn't requere any additional actions
```
filter(data, {deepValue: "#6"})
// returns [{name: "name6", value: [{deepValue: "Deep Value #6"}]}]
```

## Limit number of returned objects
```
filter(data, {name: "n"}, {limit: 2})
// returns [
  {name: "name1", value: "Value #1"},
  {name: "name2", value: "Value #2"},
]
```