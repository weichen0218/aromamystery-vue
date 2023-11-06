export const cash = (num) => {
  const n = parseInt(num, 10)
  const formattedNumber = n.toLocaleString()
  return `${formattedNumber}`
}
export function date(time) {
  const localDate = new Date(time * 1000)
  return localDate.toLocaleDateString()
}
