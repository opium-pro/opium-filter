import hasMatch from './has-match'

export default function filterChild(dataset: Array<any>, filter: object, target: string) {
  const result: any[] = []

  for (const item of [...dataset]) {
    if (!dataset.length) {
      continue
    }

    if (hasMatch(item, filter) && (!item[target].length || !filterChild(item[target], filter, target).length)) {
      result.push(item)
      continue
    }

    if (Array.isArray(item[target])) {
      const newItem = {...item}
      newItem[target] = filterChild(item[target], filter, target)

      if (newItem[target].length) {
        result.push(newItem)
        continue
      }
    }
  }

  return result
}