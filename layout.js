// Short scenes share one screen with their choice and the preceding result.
const words=text=>text.trim().split(/\s+/u).filter(Boolean).length;
export function splitParagraph(text,limit=34){
 const sentences=text.match(/[^.!?…]+(?:[.!?…]+[»”]?|$)/gu)||[text];
 const chunks=[];let current='';
 for(const sentence of sentences){const clean=sentence.trim();if(!clean)continue;if(words(clean)>limit){if(current){chunks.push(current);current='';}const tokens=clean.split(/\s+/u);while(tokens.length)chunks.push(tokens.splice(0,limit).join(' '));continue;}
  if(current&&words(current+' '+clean)>limit){chunks.push(current);current='';}current=current?current+' '+clean:clean;
 }if(current)chunks.push(current);return chunks.length?chunks:[text];
}
export function storyFrames(step,result=''){
 const frames=[];let frame={type:'reading',text:[],dialogue:[]};
 const flush=()=>{if(frame.text.length||frame.dialogue.length)frames.push(frame);frame={type:'reading',text:[],dialogue:[]};};
 const addText=(text,isResult=false)=>{for(const chunk of splitParagraph(text)){if(words([...frame.text,...frame.dialogue.map(d=>d.line),chunk].join(' '))>34)flush();frame.text.push(chunk);if(isResult){frame.outcome=true;frame.outcomeCount=(frame.outcomeCount||0)+1;}}};
 if(result)addText(result,true);
 for(const paragraph of step.text)addText(paragraph);
 for(const line of step.dialogue||[]){if(frame.dialogue.length>=2||words([...frame.text,...frame.dialogue.map(d=>d.line),line.line].join(' '))>34)flush();frame.dialogue.push(line);}flush();
 if(step.choices){if(!frames.length)frames.push({type:'reading',text:[],dialogue:[]});frames.at(-1).type='choice';}
 return frames;
}
