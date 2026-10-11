import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('../dist/', import.meta.url));
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const source = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]));
for (const tag of ['div', 'section', 'article', 'main', 'figure', 'form']) {
  assert.equal((html.match(new RegExp(`<${tag}(?:\\s|>)`, 'g')) || []).length, (html.match(new RegExp(`</${tag}>`, 'g')) || []).length, `Unbalanced ${tag}`);
}
for (const [, target] of html.matchAll(/href="#([^"]+)"/g)) assert(ids.has(target), `Missing anchor ${target}`);
for (const [, asset] of html.matchAll(/src="(assets\/[^"]+)"/g)) assert(fs.existsSync(path.join(root, asset)), `Missing asset ${asset}`);
assert(ids.has('slide-total'));
const keys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
class Element {
  constructor() { this.innerHTML = ''; this.textContent = ''; this.dataset = {}; this.style = { setProperty() {} }; this.classList = { toggle() {} }; this.listeners = {}; this.clientWidth = 1200; }
  addEventListener(name, fn) { this.listeners[name] = fn; }
  querySelector() { return new Element(); }
  querySelectorAll() { return []; }
  setAttribute() {}
  contains() { return false; }
}
for (const reduced of [false, true]) {
  const frames = [];
  const elements = new Map();
  const localised = keys.map(key => { const el = new Element(); el.dataset.i18n = key; return el; });
  const document = { documentElement: {}, hidden: false, body: { style: {} }, querySelector: selector => { if (!elements.has(selector)) elements.set(selector, new Element()); return elements.get(selector); }, querySelectorAll: selector => selector === '[data-i18n]' ? localised : [] };
  const context = vm.createContext({ document, window: { addEventListener() {} }, matchMedia: query => ({ matches: query.includes('reduced-motion') && reduced, addEventListener() {} }), localStorage: { getItem() { return null; }, setItem() {} }, requestAnimationFrame(fn) { frames.push(fn); }, setTimeout() {}, Date, URL, Blob });
  vm.runInContext(source, context);
  for (const lang of ['pl', 'en']) {
    vm.runInContext(`setLanguage('${lang}', false)`, context);
    for (const key of keys) assert(vm.runInContext(`typeof copy.${lang}[${JSON.stringify(key)}] === 'string'`, context), `Missing ${lang} text: ${key}`);
    assert(localised.every(el => typeof el.innerHTML === 'string'));
    assert.equal(document.documentElement.lang, lang);
  }
  vm.runInContext('setLanguage("pl", false)', context);
  let prevented = false;
  elements.get('#contact-form').listeners.submit({ preventDefault() { prevented = true; } });
  assert(prevented, 'Demo contact form must not submit');
  assert.equal(elements.get('.status').textContent, vm.runInContext('copy.pl.formDemo', context));
  assert(!/\b(fetch|XMLHttpRequest|sendBeacon)\b/.test(source), 'Demo form must not send data');
  assert.equal(vm.runInContext('images.length', context), 5);
  for (const asset of vm.runInContext('images', context)) assert(fs.existsSync(path.join(root, asset)));
  const track = elements.get('#carousel-track');
  assert.equal((track.innerHTML.match(/<figure /g) || []).length, 15);
  const originalHtml = track.innerHTML;
  const initialPosition = track.style.transform;
  vm.runInContext('move(1); finishMovement()', context);
  assert.equal(vm.runInContext('current', context), 1);
  assert.notEqual(track.style.transform, initialPosition);
  assert.equal(track.innerHTML, originalHtml, 'Movement should translate existing slides');
  for (let i = 0; i < 4; i++) vm.runInContext('move(1); finishMovement()', context);
  assert.equal(vm.runInContext('current', context), 0);
  assert.equal(vm.runInContext('physical', context), 5);
  vm.runInContext('move(-1); finishMovement()', context);
  assert.equal(vm.runInContext('current', context), 4);
  assert.equal(vm.runInContext('physical', context), 9);
  vm.runInContext('current=0; renderCarousel(); paused=false; pointerInside=true; manualHold=0', context);
  const beforeAuto=track.style.transform;
  frames.shift()(0);frames.shift()(80);
  assert.notEqual(track.style.transform,beforeAuto,'Autoplay must move immediately without clicks or visibility observers');
  for(let i=2;i<250;i++)frames.shift()(i*80);
  assert.equal(vm.runInContext('current',context),1,'Continuous autoplay must pass into the next slide');
  vm.runInContext('paused=true',context);const pausedPosition=track.style.transform;frames.shift()(20000);
  assert.equal(track.style.transform,pausedPosition,'Explicit pause must stop movement');
}
const dataWindow={};vm.runInNewContext(fs.readFileSync(path.join(root,'page-data.js'),'utf8'),{window:dataWindow});
const pageData=dataWindow.TERREN_DATA;assert.equal(pageData.projects.length,5);assert.equal(pageData.services.length,4);
for(const key of Object.keys(pageData.copy.pl))assert.equal(typeof pageData.copy.en[key],'string',`Missing subpage EN text ${key}`);
for(const file of fs.readdirSync(root).filter(f=>f.endsWith('.html'))){const page=fs.readFileSync(path.join(root,file),'utf8');for(const [,key] of page.matchAll(/data-page-copy="([^"]+)"/g))assert.equal(typeof pageData.copy.pl[key],'string',`Missing page text ${key}`);for(const [,href] of page.matchAll(/href="([^"]+)"/g)){if(href.startsWith('#')||/^https?:/.test(href))continue;assert(fs.existsSync(path.join(root,href.split(/[?#]/)[0])),`Missing ${file} link ${href}`);}for(const [,src] of page.matchAll(/src="([^"]+)"/g)){if(/^https?:/.test(src))continue;assert(fs.existsSync(path.join(root,src.split('?')[0])),`Missing ${file} resource ${src}`);}}
console.log('Passed: bilingual homepage/subpages, links/assets, continuous autoplay without interaction, carousel wrap/pause, demo form. Browser layout was not checked.');

