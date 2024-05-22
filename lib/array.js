/**
 * Remove item has same value from the list
 * arr.removeByValue(item)
 *
 * @returns new array and the current array also be changed
 */
Array.prototype.removeByValue = function () {
  var what, a = arguments, L = a.length, ax
  while (L && this.length) {
    what = a[--L]
    while ((ax = this.indexOf(what)) !== -1) {
      this.splice(ax, 1)
    }
  }
  return this
}

/**
 * Sort array based on value of item in array
 *
 * cars = [{ type: "Volvo", year: 2016 },{ type: "Saab", year: 2001 },{ type: "BMW", year: 2010 }]
 * cars.sortByProperty('type')
 * cars.sortByProperty('type', true, true)
 * cars.sortByProperty('year', bReversed=true)
 *
 * @param {string} name : name of property
 * @param {boolean} bIgnoreCase : compare in lowew case if property's value is string
 * @param {boolean} bReversed
 * @returns
 *   new array and the current array also be changed
 *   undefined : if item don't have property
 */
Array.prototype.sortByProperty = function (name, bIgnoreCase = true, bReversed = false) {
  if (this.length === 0) return undefined
  let bCheckProperty = this.every(function (elem) {
    return elem.hasOwnProperty(name)
  })
  if (!bCheckProperty) return undefined
  return this.sort(function (a, b) {
    let aValue = a[name]
    let bValue = b[name]
    if (typeof aValue === 'string' && typeof bValue === 'string' && bIgnoreCase) {
      aValue = a[name].toLowerCase()
      bValue = b[name].toLowerCase()
    }
    if (aValue < bValue) {
      return !bReversed ? -1 : 1
    } else if (aValue > bValue) {
      return !bReversed ? 1 : -1
    } else {
      return 0
    }
  })
}
