export default function limitString(str: string, limit: number) {
  return str.length < limit
    ? str
    : `${str.split(' ').slice(0, limit).join(' ')}...`
}
