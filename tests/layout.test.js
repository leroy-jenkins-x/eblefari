import test from 'node:test';
import assert from 'node:assert/strict';
import {storyFrames,splitParagraph} from '../layout.js';
import {STORY} from '../story.js';
import {hydrate,newState,advanceState} from '../engine.js';
const normalize=s=>s.replace(/\s+/gu,' ').trim();
test('pagination keeps every narrative sentence and every line of dialogue',()=>{
 for(const step of STORY){const frames=storyFrames(step);assert.equal(normalize(frames.flatMap(f=>f.text).join(' ')),normalize(step.text.join(' ')));assert.deepEqual(frames.flatMap(f=>f.dialogue),step.dialogue||[]);for(const frame of frames)if(frame.text.length)assert.ok(frame.text.join(' ').split(/\s+/u).length<=44);}
});
test('choices are on their own screen and a preceding outcome is preserved',()=>{
 const step=STORY.find(s=>s.choices),frames=storyFrames(step,'Отличный выбор. Шмиззи!');assert.equal(frames[0].type,'outcome');assert.equal(frames.at(-1).type,'choice');assert.deepEqual(frames.at(-1).text,[]);assert.equal(frames.filter(f=>f.type==='choice').length,1);
});
test('old saves migrate with page zero and advancing a scene resets the page',()=>{
 const old=newState();delete old.page;delete old.endingPage;old.started=true;old.step=8;const migrated=hydrate(JSON.stringify(old),STORY.length);assert.equal(migrated.page,0);assert.equal(migrated.step,8);const next=advanceState({...migrated,page:3},STORY[8],STORY[8].choices[0]);assert.equal(next.page,0);assert.equal(next.step,9);
});
test('a single long sentence also gets readable pages without losing words',()=>{
 const text=Array.from({length:100},(_,i)=>'слово'+i).join(' ')+'.';const chunks=splitParagraph(text);assert.equal(normalize(chunks.join(' ')),text);assert.ok(chunks.every(s=>s.split(/\s+/u).length<=44));
});
