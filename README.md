# The fastest way to filter an array of objects

```js
npm i opium-filter
```

Returns a new object with filtered items
```js
filter(dataset, filter, [options])
```


## Examples
```js
import filter from 'opium-filter'

// Demo dataset
const data = [
  {name: "name1", value: "Value #1"},
  {name: "name2", value: "Value #2"},
  {name: "name3", value: "Value #3"},
  {name: "name4", value: "Value #4"},
  {name: "name5", value: {deepValue: "Deep Value #5"}},
  {name: "name6", value: [{deepValue: "Deep Value #6"}]},
]
```


## Partial match
Returns any object that contains '2' in name
```js
filter(data, {name: '2'})

// returns [{name: "name2", value: "Value #2"}]
```

## Exact match
If set filter value in array, in returns only the exact match of any item
```js
filter(data, {name: ['name2', 'name3']})

//returns [
//  {name: "name2", value: "Value #2"},
//  {name: "name3", value: "Value #3"},
//]
```


## Matching values from inner objects
If filter can't find a key on top level, it will try to find it deeper
```js
filter(data, {deepValue: "#5"})

// returns [{name: "name5", value: {deepValue: "Deep Value #5"}}]
```

You can turn this off by passing {deep: false} into options
```js
filter(data, {deepValue: "#5"}, {deep: false})

// returns []
```

Or you can make it look only by value with no need of key, just pass {deep: true}
```js
filter(data, "#5", {deep: true})

// returns [{name: "name5", value: {deepValue: "Deep Value #5"}}]
```


## Match any value inside of a specific key
```js
filter(data, {value: {deepValue: "#5"}})

// returns [{name: "name5", value: {deepValue: "Deep Value #5"}}]
```

Or pass {deep: true} to look deeper with no neet to specify a key
```js
filter(data, {value: "#5"}, {deep: true})

// returns [{name: "name5", value: {deepValue: "Deep Value #5"}}]
```


## Match a value inside of array
Finding values inside of an array doesn't requere any additional actions

```js
filter(data, {deepValue: "#6"})

// returns [{name: "name6", value: [{deepValue: "Deep Value #6"}]}]
```


## Limit number of returned objects
```js
filter(data, {name: "n"}, {limit: 2})

// returns [
//  {name: "name1", value: "Value #1"},
//  {name: "name2", value: "Value #2"},
//]
```