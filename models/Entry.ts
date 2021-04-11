export interface Entry {
  slug: string
  title: string
  content: string
  date: string
}

const DIR = './public/entries'

export function retrieveEntries(): Entry[] {
  const entries: Entry[] = []
  const fs = require('fs')
  fs.readdirSync(DIR).forEach((path: string) => {
    const matched = path.match(/^(\d{4}-\d{2}-\d{2})-(.*)\.(?:markdown|md)$/)
    const content = fs.readFileSync(`${DIR}/${path}`).toString()
    const title = extractTitle(content)

    if (matched == null || matched[1] == null || matched[2] == null) return

    entries.push({
      slug: matched[2],
      title,
      content,
      date: matched[1],
    })
  })
  return entries.reverse()
}

function extractTitle(content: string) {
    const matched = content.match(/#\s*(.*)\n/)
    if (matched == null || matched[1] == null) return 'No Title'
    return matched[1]
}
