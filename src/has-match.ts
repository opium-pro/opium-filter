import { isEqual } from 'lodash'
import hasSubstring from './has-substring'

export default function hasMatch(
  origin: any,
  filter?: any,
  options?: {
    exact?: boolean,
    deep?: boolean,
  }
): boolean {

  if (options?.exact) {
    return isEqual(origin, filter)
  }
  const forceExactOff = options?.exact === false
  const forceDeepOff = options?.deep === false

  if (origin === filter) {
    return true
  }

  if ([undefined, '', null].includes(origin) || [undefined, '', null].includes(filter)) {
    return false
  }

  if (Array.isArray(filter)) {
    for (let filterItem of filter) {
      if (hasMatch(origin, filterItem, {...options, exact: forceExactOff ? false : true})) {
        return true
      }
    }
    return false
  }

  if (Array.isArray(origin)) {
    for (let originItem of origin) {
      if (hasMatch(originItem, filter, options)) {
        return true
      }
    }
    return false
  }

  if (['string', 'number', 'boolean'].includes(typeof filter)) {
    if (['string', 'number', 'boolean'].includes(typeof origin)) {
      return hasSubstring(origin, filter)
    }

    if (options?.deep) {
      for (const key in origin) {
        if (hasMatch(origin[key], filter, options)) {
          return true
        }
      }
    }

    return false
  }

  // If filter is an object
  let match = {}
  for (const key in filter) {
    if (hasMatch(origin[key], filter[key], options)) {
      match[key] = true
      continue
    }

    if (!forceDeepOff && !origin[key] && typeof origin === 'object') {
      for (const subKey in origin) {
        if (hasMatch(origin[subKey], {[key]: filter[key]}, options)) {
          match[key] = true
          break
        }
      }
    }

    if (!match[key]) {
      return false
    }
  }

  if (Object.keys(filter).length === Object.keys(match).length) {
    return true
  }

  return false
}
