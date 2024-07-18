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
 * This function is support for Array.prototype.sortByProperty
 * Find the value by properties in object
 * cars = [{ type: "Volvo", year: 2016, user:{id:1} },{ type: "Saab", year: 2001, user:{id:5} },{ type: "BMW", year: 2010, user:{id:2} }]
 * getChildItem('user.id', cars[0]) = 1
 * getChildItem('user.id', cars[1]) = 5
 *
 * @param {string} name
 * @param {object} orgItem
 * @returns
 */
function getChildItem(name, orgItem) {
  let names = name.split(".")
  let item = orgItem
  for (let tmpName of names) {
    if (item.hasOwnProperty(tmpName)) {
      item = item[tmpName]
    } else {
      return undefined
    }
  }
  return item
}

/**
 * Sort array based on value of item in array
 *
 * cars = [{ type: "Volvo", year: 2016, user:{id:1} },{ type: "Saab", year: 2001, user:{id:5} },{ type: "BMW", year: 2010, user:{id:2} }]
 * cars.sortByProperty('type')
 * cars.sortByProperty('type', true, true)
 * cars.sortByProperty('year', bReversed=true)
 * cars.sortByProperty('user.id')
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
  // let bCheckProperty = this.every(function (elem) {
  //   return elem.hasOwnProperty(name)
  // })
  let bCheckProperty = this.every(function (elem) {
    return getChildItem(name, elem) !== undefined
  })
  if (!bCheckProperty) return undefined
  return this.sort(function (a, b) {
    let aValue = getChildItem(name, a)
    let bValue = getChildItem(name, b)
    if (typeof aValue === 'string' && typeof bValue === 'string' && bIgnoreCase) {
      aValue = aValue.toLowerCase()
      bValue = bValue.toLowerCase()
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
