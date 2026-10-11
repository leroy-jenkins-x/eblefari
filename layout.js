// Story pages preserve every sentence while keeping each reading screen short.
const words=text=>text.trim().split(/\s+/u).filter(Boolean).length;
export function splitParagraph(text,limit=44){
 const sentences=text.match(/[^.!?…]+(?:[.!?…]+[»”]?|$)/gu)||[text];
 const chunks=[];let current='';
 for(const sentence of sentences){const clean=sentence.trim();if(!clean)continue;if(words(clean)>limit){if(current){chunks.push(current);current='';}const tokens=clean.split(/\s+/u);while(tokens.length)chunks.push(tokens.splice(0,limit).join(' '));continue;}
  if(current&&words(current+' '+clean)>limit){chunks.push(current);current='';}current=current?current+' '+clean:clean;
 }if(current)chunks.push(current);return chunks.length?chunks:[text];
}
export function storyFrames(step,result=''){
 const frames=[];if(result)frames.push({type:'outcome',text:[result],dialogue:[]});
 let frame={type:'reading',text:[],dialogue:[]};const flush=()=>{if(frame.text.length||frame.dialogue.length)frames.push(frame);frame={type:'reading',text:[],dialogue:[]};};
 for(const paragraph of step.text)for(const chunk of splitParagraph(paragraph)){if(frame.text.length&&words([...frame.text,chunk].join(' '))>44)flush();frame.text.push(chunk);}flush();
 for(const line of step.dialogue||[]){if(frame.dialogue.length&&words([...frame.dialogue.map(d=>d.line),line.line].join(' '))>32)flush();frame.dialogue.push(line);}flush();
 if(step.choices)frames.push({type:'choice',text:[],dialogue:[]});return frames;
}
