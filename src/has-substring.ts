export default function hasSubstring(origin: any, target: any): boolean {
  if (origin === target) {
    return true
  }

  if (origin === undefined) {
    return false
  }

  if (target === undefined) {
    return true
  }

  origin = origin.toString() && origin.toString().toLowerCase()
  target = target.toString() && target.toString().toLowerCase()

  if (origin.indexOf && origin.indexOf(target) >= 0) {
    return true
  }

  return false
}