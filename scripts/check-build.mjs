import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'
import { resolve, sep } from 'node:path'

const base = process.argv[2] || '/'
assert(base.startsWith('/') && base.endsWith('/'), 'Base path must start and end with /')
const output = resolve('dist')
const html = await readFile(resolve(output, 'index.html'), 'utf8')
assert.match(html, /<html lang="ko">/, 'Korean document must be emitted')
assert.match(html, /<div id="app"><\/div>/, 'Vue application root must be emitted')
const assets = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map(match => match[1]).filter(url => !/^(https?:|data:|#)/.test(url))
assert(assets.some(url => url.endsWith('.js')), 'JavaScript entry must be emitted')
assert(assets.some(url => url.endsWith('.css')), 'Stylesheet must be emitted')
for (const url of assets) {
  assert(url.startsWith(base), `Asset is outside deployment base: ${url}`)
  const file = resolve(output, url.slice(base.length))
  assert(file.startsWith(output + sep), `Asset escapes build directory: ${url}`)
  assert((await stat(file)).size > 0, `Asset is empty: ${url}`)
}
assert((await stat(resolve(output, 'thit-logo.jpg'))).size > 0, 'Company logo must be deployed')
const entry = assets.find(url => url.endsWith('.js'))
const js = await readFile(resolve(output, entry.slice(base.length)), 'utf8')
assert(js.includes(base + 'thit-logo.jpg'), 'Runtime logo URL must include the deployment base')
console.log(`Validated ${assets.length} entry assets and company logo at ${base}`)
