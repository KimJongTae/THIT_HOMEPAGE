import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { resolve, sep } from 'node:path'

const base = process.argv[2] || '/'
assert(base.startsWith('/') && base.endsWith('/'), 'Base path must start and end with /')
const output = resolve('dist')
const pages = ['', 'company/', 'services/', 'ai/', 'approach/', 'contact/']
const titles = new Set()
const scripts = new Set()
for (const page of pages) {
  const html = await readFile(resolve(output, page, 'index.html'), 'utf8')
  assert.match(html, /<html lang="ko">/, `${page}: Korean document must be emitted`)
  assert.match(html, /<div id="app"><\/div>/, `${page}: Vue application root must be emitted`)
  const title = html.match(/<title>(.*?)<\/title>/)?.[1]
  assert(title && !titles.has(title), `${page}: Each page must have a unique title`)
  titles.add(title)
  const assets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map(match => match[1]).filter(url => !/^(https?:|data:|#)/.test(url))
  assert(assets.some(url => url.endsWith('.js')), `${page}: JavaScript entry must be emitted`)
  assert(assets.some(url => url.endsWith('.css')), `${page}: Stylesheet must be emitted`)
  for (const url of assets) {
    assert(url.startsWith(base), `Asset is outside deployment base: ${url}`)
    const file = resolve(output, url.slice(base.length))
    assert(file.startsWith(output + sep), `Asset escapes build directory: ${url}`)
    assert((await stat(file)).size > 0, `Asset is empty: ${url}`)
    if (url.endsWith('.js')) scripts.add(file)
  }
}
assert((await stat(resolve(output, 'thit-logo.jpg'))).size > 0, 'Company logo must be deployed')
const bundles = (await Promise.all([...scripts].map(file => readFile(file, 'utf8')))).join('\n')
assert(bundles.includes(base + 'thit-logo.jpg'), 'Runtime logo URL must include the deployment base')
console.log(`Validated ${pages.length} independent pages, unique titles, assets and logo at ${base}`)
