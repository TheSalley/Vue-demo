/**
 * @function
 * @name useNumberFormat 对数字格式化
 */
export function useNumberFormat(number: number): string | number {
  // 亿
  if (number > 100000000) {
    return (number / 100000000).toFixed(1) + " 亿";
  }
  // 千万
  else if (number > 10000000) {
    return (number / 10000000).toFixed(1) + " 千万";
  }
  // 万
  else if (number > 10000) {
    return (number / 10000).toFixed(1) + " 万";
  }
  return number;
}
