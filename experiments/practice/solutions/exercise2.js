export function sortedArray(names, heights) {
  const arrayNamesHeights = names.map((element, index) => {
    return element = [element, heights[index]]
  });
  const sortedArrayNamesHeights = arrayNamesHeights.sort(([, height1], [, height2]) => height2 - height1)
  return sortedArrayNamesHeights.map(([name]) => name)
}

