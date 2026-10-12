import {PETS} from './art.js?v=portrait-10';
export const SAVE_KEY='eblefari-party-v1';
export const INITIAL={version:1,step:0,page:0,endingPage:0,started:false,finished:false,cash:38,energy:80,love:100,names:['Эбле','Энжи'],choices:{},activities:{},lastResult:'',sound:false,petVisits:[]};
export function newState(){return structuredClone(INITIAL);}
export function applyEffect(state,effect={}){const next=structuredClone(state);next.cash=Math.max(0,next.cash+(effect.cash||0));next.energy=Math.max(0,Math.min(100,next.energy+(effect.energy||0)));next.love=Math.max(0,Math.min(999,next.love+(effect.love||0)));return next;}
export function advanceState(state,step,choice,index=0){let next=applyEffect(state,choice?.effect||step.effect);if(choice){next.choices[step.id]=choice.key||String(index);next.lastResult=choice.result||'';}else next.lastResult='';next.step+=1;next.page=0;return next;}
export function hydrate(raw,total){try{
 const s=JSON.parse(raw);if(s?.version!==1||!Number.isInteger(s.step)||s.step<0||s.step>total)return newState();const base=newState();for(const key of ['cash','energy','love'])if(!Number.isFinite(s[key])||s[key]<0||s[key]>1e10)return base;
 const validIds=new Set(PETS.map(p=>p.id));const migrateIds=ids=>[...new Set((Array.isArray(ids)?ids:[]).map(id=>id==='sir-crumpet'||id==='lady-lasagna'?'antharas':id).filter(id=>validIds.has(id)))];
 const names=Array.isArray(s.names)&&s.names.length===2?s.names.map((n,i)=>typeof n==='string'&&n.trim()?n.trim().slice(0,24):base.names[i]):base.names;
 if(names[1]==='Фари')names[1]='Энжи';
 const activities=s.activities&&typeof s.activities==='object'?structuredClone(s.activities):{};
 if(activities.care&&typeof activities.care==='object'){activities.care.done=migrateIds(activities.care.done);}
 const renameText=text=>typeof text==='string'?text.replaceAll('Пельмешем','Колой').replaceAll('Пельмеша','Колы').replaceAll('Пельмеш','Кола').replaceAll('Фасольки','Гемиры').replaceAll('Фасолька','Гемира').replaceAll('Огурчик','Юника').replaceAll('Лось','Марс').replaceAll('Мисо','Юника').replaceAll('Сэр Крампет','Антарас'):'';
 if(activities.care?.feedback)activities.care.feedback=renameText(activities.care.feedback);
 return {...base,...s,names,choices:s.choices&&typeof s.choices==='object'?s.choices:{},activities,petVisits:migrateIds(s.petVisits),lastResult:renameText(s.lastResult)};
 }catch{return newState();}}

export function money(amount){return new Intl.NumberFormat('ru-RU',{maximumFractionDigits:0}).format(amount);}
export const escapeHTML=(s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function interpolate(text,state){return text.replaceAll('{E}',escapeHTML(state.names[0])).replaceAll('{F}',escapeHTML(state.names[1])).replaceAll('{cash}',money(state.cash));}
export const RAID=[
 {title:'Босс заметил твоего хрупкого друга.',hint:'Танк отвлечёт босса. Хрупкий друг предпочёл бы остаться не расплющенным.',correct:'tank',success:'Идеально! Танк принимает удар. Марс лает на экран, потому что тоже профессиональный танк.',wrong:'Друг временно стал блинчиком. Гильдия собирается снова. Никого не бросают. Попробуй защиту.'},
 {title:'Здоровье у пати выглядит… декоративно.',hint:'Хилер вернёт полоскам здоровья менее трагический вид.',correct:'heal',success:'Отличный хил! Пати жива. Лапша считает это финансово ответственным расходом маны.',wrong:'Босс провёл несанкционированное групповое объятие. Вдохни. Попробуй действие, возвращающее здоровье.'},
 {title:'Босс ослаб. Пора красиво закончить.',hint:'Баф усиливает всю пати, чтобы всем вместе нанести мощный урон.',correct:'buff',success:'БАФ. БОНК. ПОБЕДА! Две маленькие собаки уверены, что празднуют их заслуги.',wrong:'Босс ещё стоит и выглядит самодовольно. Пати нужно усиление, чтобы добить его вместе.'}
];
export const ORDERS=[
 {name:'ПовелительЛистьев',plant:'monstera',label:'Пышная монстера',note:'На стол. Моему персонажу нужен эмоциональный кислород.'},
 {name:'ХилыИЛепестки',plant:'flower',label:'Весёлое цветущее растение',note:'Что-нибудь похожее на заклинание лечения.'},
 {name:'ТанкВамСпасибо',plant:'cactus',label:'Один прекрасный кактус',note:'Танк на подоконник. Назовите его Денисом.'},
 {name:'БабушкаКритует',plant:'monstera',label:'Ещё одна пышная монстера',note:'Внук порекомендовал. Экипировка у меня лучше, чем у него.'}
];
export const CHATTER=['виззи!','пиззи!','шмиззи!','виззи-пиззи!','шмизнгтон!','пиззипокалипсис!','виззли-ваззли!','шмиззи-делюкс!','пиззи с двойным сыром!','виззи-бизнес!','шмиззическое поведение!','пиззи, с уважением.','физзи!','сплиззи!','шмиззен.','энжики!','красотулики!','энжики-красотулики!','энжики-обнимулики!','красотулики-чмокулики!'];
