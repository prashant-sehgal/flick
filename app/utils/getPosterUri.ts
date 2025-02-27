export default function getPosterUri(filename: string) {
  return (process.env.NEXT_PUBLIC_MEDIA_URI || '').replace(
    '<blobname>',
    `/posters/${filename}`
  )
}
