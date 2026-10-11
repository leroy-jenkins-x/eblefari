import test from 'node:test';
import assert from 'node:assert/strict';
import {STORY} from '../story.js';
import {PETS} from '../art.js';
import {SAVE_KEY,RAID,ORDERS} from '../engine.js';

// A small DOM port exercises the actual app event handlers and rendered output.
// It does not claim browser layout, device or audio verification.
class Element{
 constructor(){this.innerHTML='';this.textContent='';this.value='';this.open=false;this.style={};this.handlers={};this.attributes={};this.classList={add(){},remove(){}};}
 addEventListener(name,fn){this.handlers[name]=fn;}
 setAttribute(name,value){this.attributes[name]=value;}
 querySelector(){return new Element();}
 replaceChildren(){} appendChild(){} focus(){} showModal(){this.open=true;} close(){this.open=false;}
 getBoundingClientRect(){return {left:0,right:400,top:0,bottom:900};}
}
test('a complete playthrough handles all activities, errors, saves, names and restart',async()=>{
 const elements=new Map(),handlers={},storage=new Map();
 globalThis.document={hidden:false,querySelector:s=>{if(!elements.has(s))elements.set(s,new Element());return elements.get(s);},addEventListener:(name,fn)=>handlers[name]=fn,createElement:()=>new Element()};
 globalThis.window={location:{href:'https://example.test/eblefari/'},scrollTo(){},matchMedia:()=>({matches:true})};
 globalThis.localStorage={getItem:key=>storage.get(key)||null,setItem:(key,value)=>storage.set(key,value)};
 const originalTimeout=globalThis.setTimeout;globalThis.setTimeout=()=>0;
 try{
  await import('../app.js');
  const html=()=>elements.get('#app').innerHTML;
  const state=()=>JSON.parse(storage.get(SAVE_KEY));
  const click=(action,data={})=>handlers.click({target:{closest:()=>({dataset:{action,...data}})}});
  assert.match(html(),/Да начнётся беспредел/);click('names');document.querySelector('#name-1').value='Ada <3';document.querySelector('#name-2').value='Finn & Fern';handlers.submit({target:{id:'names-form'},preventDefault(){}});click('start');assert.match(html(),/Ada &lt;3/);
  for(const step of STORY){
   assert.equal(state().step,STORY.indexOf(step));assert.ok(html().includes(step.title));
   if(step.game){
    click('next');assert.equal(state().step,STORY.indexOf(step),'incomplete games cannot be skipped');
    if(step.game==='care'){for(const p of PETS)click('care',{id:p.id});click('care',{id:PETS[0].id});assert.equal(state().activities.care.done.length,12);}
    if(step.game==='potting'){click('pot',{id:'cactus'});assert.equal(state().activities.potting.count,0);for(const id of ['monstera','flower','cactus'])click('pot',{id});}
    if(step.game==='photo'){click('photo-style',{id:'chaos'});click('photobomb');assert.match(html(),/Пригласить креативного директора|Опубликовать эту красоту/);click('photo-post');}
    if(step.game==='raid'){click('raid',{id:'heal'});assert.equal(state().activities.raid.round,0);for(const r of RAID)click('raid',{id:r.correct});}
    if(step.game==='packing'){click('pack',{id:'cactus'});assert.equal(state().activities.packing.count,0);for(const o of ORDERS)click('pack',{id:o.plant});}
    if(step.game==='decorate'){click('decorate',{id:'sofa'});click('decorate',{id:'gaming'});click('decorate',{id:'thrones'});assert.deepEqual(state().activities.decorate.selected,['sofa','gaming']);click('decorate',{id:'sofa'});click('decorate',{id:'thrones'});}
    click('next');
   }else if(step.choices)click('choose',{index:'0'});else click('next');
  }
  assert.equal(state().finished,true);assert.ok(state().cash>2000000);assert.match(html(),/и жили они долго и шмиззи/);assert.match(html(),/Крошечные троны рептилиям/);
  click('home');assert.match(html(),/Продолжить приключение/);click('resume');assert.match(html(),/Семейный отчёт/);
  click('restart-confirm');assert.equal(elements.get('#modal').open,true);click('restart');assert.equal(state().step,0);assert.equal(state().finished,false);assert.deepEqual(state().names,['Ada <3','Finn & Fern']);assert.match(html(),/Да начнётся беспредел/);
 }finally{globalThis.setTimeout=originalTimeout;}
});
