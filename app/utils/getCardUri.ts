export default function getCardUri(filename: string) {
  return process.env.NEXT_PUBLIC_MEDIA_URI?.replace(
    '<blobname>',
    `/cards/${filename}`
  )
}
