export default function limitString(str: string, length: number) {
  if (str.length < length) return str

  return `${str.split('').slice(0, length).join('')}...`
}
