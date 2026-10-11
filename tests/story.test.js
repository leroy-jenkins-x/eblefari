import test from 'node:test';
import assert from 'node:assert/strict';
import {STORY,CHAPTERS} from '../story.js';
import {PETS,sceneSVG,petSVG} from '../art.js';
import {newState,advanceState,hydrate,applyEffect,escapeHTML,interpolate,RAID,ORDERS} from '../engine.js';

test('the household has exactly two big dogs, five small dogs, multiple snakes and reptiles',()=>{
 assert.equal(PETS.filter(p=>p.kind==='big').length,2);assert.equal(PETS.filter(p=>p.kind==='small').length,5);assert.equal(PETS.filter(p=>p.kind==='snake').length,3);assert.equal(PETS.filter(p=>p.kind==='lizard').length,2);assert.equal(new Set(PETS.map(p=>p.id)).size,PETS.length);
});
test('all six chapters are complete and ordered, with unique story beats',()=>{
 assert.equal(CHAPTERS.length,6);assert.equal(new Set(STORY.map(s=>s.id)).size,STORY.length);let prev=0;for(const s of STORY){assert.ok(s.chapter>=prev&&s.chapter<6);assert.ok(s.title&&s.text.length>=2);prev=s.chapter;}for(let i=0;i<6;i++)assert.ok(STORY.filter(s=>s.chapter===i).length>=6);assert.equal(STORY.at(-1).finish,true);
});
test('every choice route reaches the promised prosperous ending',()=>{
 let paths=[newState()];for(const step of STORY){const next=[];for(const state of paths){if(step.choices)step.choices.forEach((choice,i)=>next.push(advanceState(state,step,choice,i)));else next.push(advanceState(state,step));}paths=next;}
 assert.ok(paths.length>=1000);for(const state of paths){assert.equal(state.step,STORY.length);assert.ok(state.cash>2000000);assert.ok(state.energy>=0&&state.energy<=100);assert.ok(state.love>=100);}
});
test('malformed or future save data recovers to a fresh game',()=>{
 for(const raw of ['{bad','null',JSON.stringify({version:2}),JSON.stringify({...newState(),step:999}),JSON.stringify({...newState(),cash:-9})])assert.deepEqual(hydrate(raw,STORY.length),newState());
 const saved={...newState(),started:true,step:8,names:['Good','People'],activities:{care:{done:['dumpling']}}};assert.deepEqual(hydrate(JSON.stringify(saved),STORY.length),saved);
});
test('custom names and saved result text cannot inject HTML',()=>{
 assert.equal(escapeHTML('<img src=x onerror="alert(1)">'),'&lt;img src=x onerror=&quot;alert(1)&quot;&gt;');assert.equal(interpolate('{E} loves {F}',{...newState(),names:['<script>','A&B']}),'&lt;script&gt; loves A&amp;B');
});
test('effects are immutable and energy stays within bounds',()=>{
 const original=newState();const next=applyEffect(original,{energy:900,cash:-100,love:5});assert.equal(original.cash,38);assert.equal(next.cash,0);assert.equal(next.energy,100);assert.equal(next.love,105);
});
test('the raid and packing tasks have explicit correct answers',()=>{
 assert.deepEqual(RAID.map(r=>r.correct),['tank','heal','buff']);assert.equal(ORDERS.length,4);for(const o of ORDERS)assert.ok(['monstera','flower','cactus'].includes(o.plant));
});
test('every illustration is inline and has no remote image dependencies',()=>{
 assert.equal(new Set(CHAPTERS.map(c=>c.theme)).size,6);assert.equal(new Set(CHAPTERS.map(c=>sceneSVG(c.theme))).size,6);assert.match(sceneSVG('raid'),/LINEAGE II/);for(const c of CHAPTERS){const art=sceneSVG(c.theme);assert.ok(art.startsWith('<svg'));assert.ok(art.endsWith('</svg>'));assert.ok(art.includes('aria-label'));assert.ok(!art.includes('<image'));}for(const p of PETS)assert.ok(petSVG(p).includes('viewBox'));
});
