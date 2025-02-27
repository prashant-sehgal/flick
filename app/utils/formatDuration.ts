export default function formatDuration(minutes: number) {
  if (isNaN(minutes) || minutes < 0) return 'Invalid input'

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  return `${hours > 0 ? hours + 'h ' : ''}${mins > 0 ? mins + 'm' : ''}`.trim()
}
