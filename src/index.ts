import hasMatch from './has-match'
import filterChild from './filter-child'

export default function filter (
  dataset?: Array<any>,
  filter?: any,
  options?: {
    filterChild?: string,
    limit?: number,
    exact?: boolean,
    deep?: boolean,
  }
): Array<any> | undefined {
  if (!dataset || !Array.isArray(dataset)) {return dataset}
  if (!filter) {return dataset}

  if (options && options.filterChild) {
    return filterChild(dataset, filter, options.filterChild)
  }

  let result = [...dataset].filter((item) => hasMatch(item, filter, {
    exact: options && options.exact,
    deep: options && options.deep,
  }))

  if (options && options.limit) {
    result = result.slice(0, options.limit)
  }

  return result
}