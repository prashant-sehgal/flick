export default function limitWords(message: string, noOfWords: number ) {
  const words = message.split(' ')
  if (words.length < noOfWords) return words.join(' ')
  return `${words.slice(0, noOfWords).join(' ')}...`
}
