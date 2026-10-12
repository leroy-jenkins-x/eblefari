export const PETS = [
  {
    "id": "dumpling",
    "name": "Кола",
    "kind": "big",
    "color": "#d3a578",
    "job": "любовь размером с диван",
    "bio": "Сорок пять килограммов карманной собачки. Считает гравитацию личным оскорблением. Умеет перекрыть дверной проём одной попой.",
    "quote": "Виззи! Энжики-красотулики, обнимашки сюда!",
    "care": "Кола получает завтрак и чмок от Энжи. Размер счастья: диван."
  },
  {
    "id": "moose",
    "name": "Марс",
    "kind": "big",
    "color": "#808a7a",
    "job": "начальник дверной охраны",
    "bio": "Охраняет семью от курьеров, листьев и самого понятия вторника. Втайне боится пластиковой лейки.",
    "quote": "Пиззи! Энжики, лист подозрительный. Ты — красотулики.",
    "care": "Марс завтракает. Проверка миски на второй завтрак продолжается."
  },
  {
    "id": "beans",
    "name": "Гемира",
    "kind": "small",
    "color": "#b48059",
    "job": "главный по крошкам",
    "bio": "Ходячая фасолина с очень высокой должностью. Считает каждую крошку собственностью компании.",
    "quote": "Шмиззи! Красотулики, крошки мои!",
    "care": "Гемира получает маленький пир. Аудит крошек завершён."
  },
  {
    "id": "miso",
    "name": "Юника",
    "kind": "small",
    "color": "#e9d4ac",
    "job": "инспектор одеял",
    "bio": "Инспектор пледов и креативный директор магазина. Плед без Энжи бракуется, фото без Юники считается недействительным.",
    "quote": "Энжики-красотулики! Укрой-поцелуй-покорми!",
    "care": "Юника завтракает и официально увольняется с должности бодрствующей."
  },
  {
    "id": "noodle",
    "name": "Лапша",
    "kind": "snake",
    "color": "#9bb273",
    "job": "длинный бухгалтер",
    "bio": "Единственный член семьи, способный буквально поместиться в таблицу. Немногословен. Большинство слов — «шмиззи».",
    "quote": "Сссшмиззи. Расходы длинные.",
    "care": "Террариум и расписание ухода Лапши проверены. Документация одобрена."
  },
  {
    "id": "linguine",
    "name": "Лингвини",
    "kind": "snake",
    "color": "#d8ad6b",
    "job": "горизонтальный философ",
    "bio": "Глубоко думает о тепле, ветках и о том, не приходится ли ему носок дальним родственником. Ни разу не платил аренду.",
    "quote": "Виззззи. Бытие — это лапша.",
    "care": "Проверки Лингвини завершены. Он возвращается к важной работе: быть длинным."
  },
  {
    "id": "spaghetti",
    "name": "Спагетти",
    "kind": "snake",
    "color": "#ca9789",
    "job": "очень тихий беспредел",
    "bio": "Выглядит мирно. Точно что-то замышляет. Вероятно, посидеть под одной и той же веткой семь часов.",
    "quote": "Пиззззи. Не воспринимайте меня.",
    "care": "Проверка жилья Спагетти завершена. Выражение лица великолепно бесполезное."
  },
  {
    "id": "antharas",
    "name": "Антарас",
    "kind": "lizard",
    "color": "#a4b889",
    "job": "домашний рейд-босс",
    "bio": "Великий дракон террариума. Его грозный рейд занимает три шага до салата. Лут: королевский морг.",
    "quote": "Энжики! Красотулики! Салатулики — дракону!",
    "care": "Антарас и три змеи: террариумы и расписания ухода проверены. Дракон одобряет королевским моргом."
  }
];
export const CARE_TARGETS=PETS.filter(p=>p.kind!=='snake');

const eyes = '<g class="blink"><circle cx="37" cy="39" r="3" fill="#3f4540"/><circle cx="63" cy="39" r="3" fill="#3f4540"/></g>';
export function petDrawing(pet){
 const c=pet.color;
 if(pet.kind==='snake') return `<g stroke="#485b40" stroke-width="1.4" stroke-linecap="round"><path d="M21 69C1 50 71 37 73 63S24 89 30 66S90 66 75 35" stroke="${c}" stroke-width="13" fill="none"/><ellipse cx="69" cy="27" rx="15" ry="12" fill="${c}"/><circle cx="64" cy="25" r="2" fill="#3f4540"/><circle cx="75" cy="25" r="2" fill="#3f4540"/><path d="M71 34v7m0 0-4 3m4-3 4 3" stroke="#d47970"/><circle cx="58" cy="30" r="3" fill="#eaa99b" opacity=".8"/></g>`;
 if(pet.kind==='lizard') return `<g stroke="#506344" stroke-width="1.2"><path d="M54 62Q99 58 78 86" fill="none" stroke="${c}" stroke-width="9"/><ellipse cx="50" cy="62" rx="24" ry="19" fill="${c}"/><path d="m31 65-13 9m14-1-14 7m51-13 11 7m-10-1 11 6" stroke="${c}" stroke-width="7" stroke-linecap="round"/><path d="M28 31 22 21 36 23 40 14 50 20 62 16 65 25 78 25 72 38" fill="${c}"/><ellipse cx="50" cy="36" rx="25" ry="19" fill="${c}"/>${eyes}<path d="M42 48q8 6 16 0" fill="none"/><ellipse cx="29" cy="43" rx="5" ry="3" fill="#eeac96"/><ellipse cx="70" cy="43" rx="5" ry="3" fill="#eeac96"/><ellipse cx="48" cy="63" rx="13" ry="11" fill="#f5dfab" stroke="none"/></g>`;
 const ears=pet.kind==='big'?`<path d="M27 28C-1 0 10 61 27 49M73 28C101 0 90 61 73 49" fill="${c}" stroke="#6c6757" stroke-width="1.3"/>`:`<path d="m29 29-9-23 22 15m17 0 20-15-8 24" fill="${c}" stroke="#6c6757" stroke-width="1.3"/>`;
 return `<g stroke="#6c6757" stroke-width="1.3" stroke-linejoin="round"><path class="wag" d="M74 67q25-24 14-29" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/><ellipse cx="51" cy="67" rx="26" ry="21" fill="${c}"/>${ears}<rect x="25" y="17" width="50" height="42" rx="20" fill="${c}"/><ellipse cx="49" cy="49" rx="18" ry="11" fill="#f9eed8" stroke="none"/>${eyes}<path d="M44 44q6-6 12 0l-6 6z" fill="#3f4540" stroke="none"/><path d="M50 50v5m-7-1q7 8 14 0" fill="none"/><circle cx="31" cy="47" r="4" fill="#efab9b" stroke="none"/><circle cx="69" cy="47" r="4" fill="#efab9b" stroke="none"/><path d="M31 63v19q9 6 16 0V69m7 0v14q9 5 17-1V62" fill="${c}"/><path d="M28 60q22 8 46 0" stroke="#d17466" stroke-width="5"/><circle cx="50" cy="63" r="4" fill="#f5d47e" stroke="none"/></g>`;
}
export function petSVG(pet){return `<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">${petDrawing(pet)}</svg>`;}

export function plantDrawing(type='monstera',color='#79a073'){
 const leaves=type==='cactus'?`<path d="M46 55V22q8-15 16 0v35M45 39H31V24m31 15h13V22" stroke="${color}" stroke-width="12" fill="none" stroke-linecap="round"/>`:type==='flower'?`<path d="M52 63V28" stroke="#729566" stroke-width="4"/><g fill="#de9f91"><circle cx="52" cy="21" r="10"/><circle cx="38" cy="32" r="10"/><circle cx="65" cy="32" r="10"/><circle cx="44" cy="45" r="10"/><circle cx="60" cy="45" r="10"/></g><circle cx="52" cy="33" r="8" fill="#f2d486"/>`:`<path d="M51 66V24m0 26L30 34m21 2 20-18" stroke="#486b4b" stroke-width="2" fill="none"/><path d="M45 42C6 48 8 15 30 18q22 3 15 24ZM56 34c-2-29 31-35 27-14-1 12-14 20-27 14ZM53 55c32-36 45-6 23 6-10 5-18 4-23-6Z" fill="${color}" stroke="#486b4b" stroke-width="1.2"/><path d="m20 27 17 7m-12 5 17 1m26-24-4 14m13-10-7 11m-1 15-9 10" stroke="#e8efd5" stroke-width="2" fill="none"/>`;
 return `<g>${leaves}<path d="M31 62h41l-5 27H36z" fill="#d99979" stroke="#946b52" stroke-width="1.3"/><rect x="28" y="58" width="47" height="9" rx="3" fill="#e4b69a" stroke="#946b52" stroke-width="1.3"/><path d="M41 73v10" stroke="#f9dfc5" stroke-width="3" stroke-linecap="round"/></g>`;
}
export function plantSVG(type){return `<svg viewBox="0 0 100 100" aria-hidden="true">${plantDrawing(type)}</svg>`;}
function person(x,y,which){
 const fari=which===1,skin=fari?'#efc4a2':'#ddba8f',shirt=fari?'#55585a':'#f2d34f';
 const dreads=fari?`<path d="M11 21C8-8 57-13 62 23l7 41H5z" fill="#735347"/><g fill="none" stroke-linecap="round" stroke-width="6"><path d="M23 7Q5 11 8 58" stroke="#d8c7a6"/><path d="M20 10Q4 26 13 67" stroke="#c6bca6"/><path d="M29 5Q12 17 18 64" stroke="#ead7b2"/><path d="M19 8Q9 27 4 55" stroke="#a66c69"/><path d="M37 4Q16 9 19 35" stroke="#965b60"/><path d="M45 7Q28 9 27 20" stroke="#c9998c"/><path d="M50 9Q61 26 59 66" stroke="#d3c1a3"/><path d="M56 16Q65 28 64 56" stroke="#e2d2af"/><path d="M61 29L68 59" stroke="#b88078"/></g>`:'';
 const beard=!fari?`<path d="M11 38Q14 53 24 48Q35 43 47 49Q56 45 61 36L60 52Q55 77 35 80Q15 73 11 53Z" fill="#514b40" stroke="#403f38" stroke-width="1.1"/><path d="M24 48q11-7 22 0" fill="none" stroke="#373b34" stroke-width="5" stroke-linecap="round"/><path d="M29 53q7 4 13-1" stroke="#d7aa89" stroke-width="1.7" fill="none"/><path d="M20 58l4 11m5-9 2 13m13-13-2 13m10-16-4 12" stroke="#78715f" stroke-width="1" opacity=".6"/>`:'';
 return `<g transform="translate(${x} ${y})" data-character="${fari?'fari-dreadlocks':'eble-bald-beard'}"><g class="bob ${fari?'slow':''}"><path d="M22 99 18 125m35-26 5 26" stroke="#51594d" stroke-width="13" stroke-linecap="round"/><path d="M11 58q25-18 49 0l8 48H7z" fill="${shirt}" stroke="#61705b" stroke-width="1.3"/><path d="m14 63-17 30m61-30 16 26" stroke="${skin}" stroke-width="12" stroke-linecap="round"/>${dreads}<ellipse cx="35" cy="33" rx="${fari?22:26}" ry="${fari?25:30}" fill="${skin}" stroke="#a17c61" stroke-width="1"/>${!fari?'<path d="M14 27q8-6 15-2m12 0q8-5 15 1" stroke="#544c3f" stroke-width="4" stroke-linecap="round" fill="none"/><path d="M28 9q8-3 15 0" stroke="#f0d2ad" stroke-width="2" fill="none"/>':'<path d="m22 29 9 1m9 0 9-3" stroke="#735347" stroke-width="2" stroke-linecap="round"/><path d="M11 17q6-10 19-13" fill="none" stroke="#b67c72" stroke-width="5" stroke-linecap="round"/>'}<g class="blink"><circle cx="27" cy="36" r="2" fill="#454b3f"/><circle cx="44" cy="36" r="2" fill="#454b3f"/></g><path d="M34 39q-3 5 2 5" fill="none" stroke="#b4886d" stroke-width="1.3"/><ellipse cx="20" cy="44" rx="4" ry="2.5" fill="#e5a190"/><ellipse cx="51" cy="44" rx="4" ry="2.5" fill="#e5a190"/>${beard}${fari?'<path d="M28 47q7 6 15-1" fill="none" stroke="#ae736c" stroke-width="2" stroke-linecap="round"/><path d="M25 5Q9 22 15 64" stroke="#e5d2b0" stroke-width="6" stroke-linecap="round" fill="none"/><path d="M54 17Q63 35 59 63" stroke="#c9baa2" stroke-width="6" stroke-linecap="round" fill="none"/>':'<path d="M49 88q-7-10-15 0l7 8z" fill="none" stroke="#827443" stroke-width="1.5"/>'}</g></g>`;
}
const sceneTitles={home:'Утренний бунт: четыре собаки требуют завтрак',plants:'Горшечная мастерская: пара выращивает растения',raid:'Lineage II: пара, замок и дракон в собачьей короне',orders:'Упаковочный штаб: коробки, посылки и пушистый директор',greenhouse:'Зелёная империя: большая теплица и море растений',rich:'Счастливый финал: сад, новый дом и вся любимая семья'};
const scenePet=(i,x,y,scale=.6,knight=false)=>`<g transform="translate(${x} ${y}) scale(${scale})"><g class="bob ${i%2?'slow':''}">${petDrawing(PETS[i])}${knight?'<path d="M22 24 50 5 78 24v8H22z" fill="#a6bbc9" stroke="#596b86" stroke-width="2"/><path d="M50 5v24" stroke="#e2eef0" stroke-width="3"/>':''}</g></g>`;
const scenePlant=(type,x,y,scale=.6)=>`<g transform="translate(${x} ${y}) scale(${scale})">${plantDrawing(type)}</g>`;
const scenePerson=(x,y,which,scale=1)=>`<g transform="translate(${x} ${y}) scale(${scale})">${person(0,0,which)}</g>`;
const sceneBox=(x,y,w=52,h=43)=>`<g transform="translate(${x} ${y})"><rect width="${w}" height="${h}" rx="4" fill="#dab58b" stroke="#aa855e" stroke-width="2"/><path d="M${w/2} 0v${h}" stroke="#f1dac0" stroke-width="8"/><rect x="6" y="9" width="20" height="12" rx="2" fill="#fff6df"/><path d="m10 13 7 4 5-4" fill="none" stroke="#72936d" stroke-width="2"/></g>`;
const sceneText=(text,x,y,color='#54705a',size=13)=>`<text x="${x}" y="${y}" text-anchor="middle" fill="${color}" font-family="Nunito,system-ui,sans-serif" font-size="${size}" font-weight="800">${text}</text>`;
export function sceneSVG(theme='home',options={}){
 if(!sceneTitles[theme])theme='home';
 const dark=theme==='raid',bg=dark?'#29354e':theme==='rich'?'#eaf0db':'#e9ecd9';
 let art=`<rect width="440" height="300" fill="${bg}"/><path d="M0 226h440v74H0z" fill="${dark?'#56627b':'#d8d2b2'}"/><ellipse cx="220" cy="274" rx="194" ry="20" fill="${dark?'#788097':'#f6e9c7'}"/>`;
 if(theme==='home'){
  art+=`<rect x="146" y="16" width="146" height="112" rx="53" fill="#fff7df" stroke="#a8b596" stroke-width="3"/><path d="M218 19v105m-67-55h137" stroke="#a8b596" stroke-width="3"/><circle cx="256" cy="45" r="14" fill="#f3d183"/><rect x="114" y="167" width="210" height="69" rx="23" fill="#deb2a2" stroke="#b68f83" stroke-width="2"/><path d="M10 55h105m224 24h91" stroke="#ad9878" stroke-width="7"/>${scenePlant('flower',37,6,.55)}${scenePlant('monstera',354,14,.65)}<rect x="332" y="111" width="99" height="89" rx="12" fill="#b9c9af" stroke="#8f9f83" stroke-width="3"/>${scenePet(4,337,138,.46)}${scenePet(7,379,141,.43)}${scenePerson(150,90,1)}${scenePerson(225,88,0)}`;
  [[47,169,.99],[318,171,.97],[145,228,.66],[237,228,.66]].forEach((p,i)=>art+=scenePet(i,...p));
  art+=`<g fill="#f4d8b5" stroke="#b59468" stroke-width="1.5"><path d="M37 272h48l-6 15H43z"/><path d="M354 272h48l-6 15h-36z"/></g>${sceneText('ЗАВТРАК — СВЯЩЕНЕН',220,32,'#9b7460',10)}`;
 }else if(theme==='plants'){
  art+=`<path d="M16 95h113m179-24h116m-116 64h116" stroke="#a48f6f" stroke-width="7"/>${scenePlant('monstera',15,7,.9)}${scenePlant('cactus',79,45,.57)}${scenePlant('flower',309,15,.59)}${scenePlant('monstera',362,2,.77)}${scenePlant('flower',358,86,.68)}<rect x="132" y="19" width="166" height="40" rx="11" fill="#faf4df" stroke="#b4c09f"/>${sceneText('ЛИСТИКИ & ЛЮБОВЬ',215,45)}${scenePerson(139,84,1,.98)}${scenePerson(229,80,0,.98)}<rect x="100" y="196" width="230" height="18" rx="5" fill="#aa8062"/><path d="M119 214v75m196-75v75" stroke="#977258" stroke-width="10"/>${scenePlant('monstera',129,128,.82)}${scenePlant('flower',222,144,.64)}<ellipse cx="282" cy="189" rx="17" ry="7" fill="#78604f"/><path d="m283 190 8-29" stroke="#8b795f" stroke-width="4"/>${scenePet(2,38,214,.75)}${scenePet(3,331,204,.85)}${scenePet(5,183,225,.57)}<path d="M62 210q5-22 24-22" stroke="#8cadbc" stroke-width="7" fill="none"/><rect x="61" y="204" width="26" height="24" rx="5" fill="#9ebcc8"/>`;
 }else if(theme==='raid'){
  art+=`<g fill="#dbe4cf"><circle cx="29" cy="35" r="2"/><circle cx="313" cy="22" r="2"/><circle cx="408" cy="57" r="2"/><path class="sparkle" d="m336 74 3-7 3 7 7 3-7 3-3 7-3-7-7-3"/></g><circle cx="55" cy="65" r="21" fill="#f0e2b8"/><path d="M58 29h58v27H58zm-8 27h75v148H50zm275 11h59v139h-59zm-12-18h16v23h-16zm29 0h16v23h-16zm29 0h16v23h-16z" fill="#768298"/><path d="M115 143h214v65H115" fill="#64718b"/><path d="M53 80h65m210 27h54" stroke="#8f9caf" stroke-width="3"/>${sceneText('LINEAGE II',221,36,'#f4dda2',24)}${sceneText('КЛАН «ВИЗЗИ» · РЕЙД НА УЖИН',222,56,'#c6dcd3',9)}<g class="dragon-float ${options.raidPhase>=2?'boss-defeated':''}"><path d="M301 181q-16-35 15-58l-3-37 23 20 24-11-2 34q22 18 6 49l35 13-21 11-10-17-9 21-50-4-9-23-17 12-15-13z" fill="#96aa87" stroke="#576d62" stroke-width="2"/><path d="m311 133-32-31-3 50 29 12m58-32 37-27-2 45-29 15" fill="#c1bc99" stroke="#738573" stroke-width="2"/><circle cx="327" cy="137" r="3" fill="#364c44"/><circle cx="349" cy="137" r="3" fill="#364c44"/><path d="M329 151q10 10 19 0" fill="none" stroke="#56685a" stroke-width="2"/><path d="m316 107-3-16 12 7 13-16 10 16 12-5-4 17z" fill="#f1d58c"/>${sceneText('Босс: ГОЛОД',338,216,'#dce5ce',10)}</g><path d="M130 139q-28 23-21 79l60-9z" fill="#b994b1"/><path d="M209 134q-10 22-8 80l59-9z" fill="#8baac1"/>${scenePerson(124,89,1,.83)}${scenePerson(204,86,0,.87)}<path d="M112 142v74" stroke="#c6ad7f" stroke-width="5"/><path class="sparkle" d="m112 133-9 8 9 8 9-8z" fill="#e9f2c0" stroke="#b3d2b1" stroke-width="2"/><path d="m266 171 25-36 7 5-23 36z" fill="#dce7ed" stroke="#879cae"/><path d="m265 172 14 10" stroke="#e3cf8e" stroke-width="5"/>${scenePet(0,27,205,.83,true)}${scenePet(3,251,222,.61,true)}<rect x="116" y="241" width="132" height="40" rx="5" fill="#303f57" stroke="#899aaf" stroke-width="2"/><rect x="123" y="247" width="118" height="25" rx="2" fill="#789a88"/>${sceneText('HP ♥♥♥   МАНА ✦✦✦',182,264,'#ecf1d9',9)}<path d="M104 284h159l-12 8H117z" fill="#a1afbb"/>`;
 }else if(theme==='orders'){
  art+=`<rect x="109" y="14" width="228" height="42" rx="12" fill="#fbf3dc" stroke="#c5b590"/>${sceneText('ШМИЗЗИ · ДОСТАВКА С ЛЮБОВЬЮ',223,41,'#856f56',11)}${sceneBox(17,100,72,65)}${sceneBox(30,56,56,43)}${sceneBox(349,97,77,65)}${sceneBox(363,53,56,43)}${scenePerson(138,85,1,.92)}${scenePerson(230,85,0,.92)}<rect x="97" y="200" width="244" height="16" rx="4" fill="#b08c70"/><path d="M112 216v70m213-70v70" stroke="#94775e" stroke-width="9"/>${sceneBox(147,160,59,40)}${scenePlant('flower',221,125,.79)}${sceneBox(31,234,65,53)}${sceneBox(342,239,69,44)}${scenePet(2,170,216,.78)}${scenePet(1,333,163,.81)}<path d="m209 232 20 4-9 11-20-5z" fill="#fff9e6"/>${sceneText('ДИРЕКТОР',210,279,'#987e60',8)}<rect x="15" y="175" width="63" height="48" rx="6" fill="#b1c6b4"/><rect x="22" y="180" width="49" height="31" fill="#eff3df"/>${sceneText('99+ ♡',46,200,'#d38274',12)}`;
 }else if(theme==='greenhouse'){
  art+=`<path d="M22 229V73Q220-37 418 73v156z" fill="#d1e3cf" stroke="#97b49a" stroke-width="5"/><path d="M111 42v190M220 17v217M330 42v190M25 104h390M23 176h394" fill="none" stroke="#a0bea4" stroke-width="3"/><path d="M180 233V101q40-33 80 0v132" fill="#f0f2dc" stroke="#a1b99a" stroke-width="3"/><circle cx="370" cy="50" r="18" fill="#f1d68e"/><path d="M220 232 136 300h164l-70-68" fill="#ece4c7"/>`;
  for(const [x,y,k] of [[22,105,1],[78,114,0],[297,98,0],[347,108,1],[18,193,0],[78,207,1],[307,194,1],[365,209,0]])art+=scenePlant(k?'flower':'monstera',x,y,.75);
  art+=`${scenePerson(144,109,1,.88)}${scenePerson(221,105,0,.9)}${scenePet(3,127,239,.6)}${scenePet(2,235,241,.61)}<rect x="137" y="30" width="166" height="26" rx="9" fill="#faf5dc"/>${sceneText('ТЕПЛИЦА МЕЧТЫ',220,48,'#628969',11)}<g class="bee-flight"><ellipse cx="337" cy="168" rx="10" ry="6" fill="#e8c673"/><path d="M334 163v10m6-10v10" stroke="#7d7351" stroke-width="2"/><ellipse cx="332" cy="160" rx="6" ry="4" fill="#faf5de"/><ellipse cx="343" cy="160" rx="6" ry="4" fill="#faf5de"/></g>`;
 }else{
  art+=`<path d="M83 116V69l58-31 60 31v47" fill="#faf2da" stroke="#c1bb98" stroke-width="3"/><path d="m73 69 68-43 71 43" fill="#b6c7a1" stroke="#8ea883" stroke-width="3"/><rect x="119" y="73" width="41" height="45" rx="18" fill="#a6c4b4"/><path d="M262 198V74q61-69 120 0v125" stroke="#98af84" stroke-width="8" fill="none"/><g fill="#e6b5a3"><circle cx="268" cy="79" r="7"/><circle cx="287" cy="49" r="7"/><circle cx="316" cy="40" r="7"/><circle cx="349" cy="48" r="7"/><circle cx="377" cy="79" r="7"/></g><path d="M15 200q21-27 55 0t67 0t68 0t66 0t71 0t68 0v31H15" fill="#b7c8a0"/>${scenePerson(151,102,1)}${scenePerson(226,101,0)}<path d="M31 172h75m-62 0 9 33h31l10-33" fill="#abc9c1" stroke="#82a59d" stroke-width="3"/><path class="fountain-water" d="M53 171q-4-32 16-33t17 33m-17-33v36" stroke="#c9e4db" stroke-width="3" fill="none"/>${sceneText('ВСЕ ДОМА. ВСЕ ЛЮБИМЫ.',226,25,'#718b65',12)}`;
  [[30,208,.92],[318,207,.92],[145,242,.61],[241,242,.61]].forEach((p,i)=>art+=scenePet(i,...p));
  art+=`${scenePet(6,346,121,.43)}${scenePet(7,311,128,.45)}${scenePlant('flower',15,93,.69)}<path class="sparkle" d="M224 64c-12-17-31 4 0 22 31-18 12-39 0-22" fill="#d98b80"/>`;
 }
 if(theme==='raid'&&options.raidPhase>=1)art+=`<g class="raid-shield"><path d="M117 106q35-18 71 0l-5 58q-17 26-30 33-22-12-32-33z" fill="#b0ebc530" stroke="#b9efce" stroke-width="4"/><path d="m138 145 10 9 20-22" fill="none" stroke="#e7ffe9" stroke-width="4" stroke-linecap="round"/></g>`;
 if(theme==='raid'&&options.raidPhase>=2)art+=`<g class="raid-impact">${sceneText('БОНК!',331,110,'#ffe9ad',24)}<path d="m284 125-14-8m88 21 16-6m-47 25 1 14" stroke="#ffe9ad" stroke-width="4" stroke-linecap="round"/></g>`;
 if(options.bomb)art+=scenePet(3,280,177,1.22);
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 ${options.compact?12:0} 440 ${options.compact?288:300}" data-theme="${theme}" role="img" aria-label="${sceneTitles[theme]}. Энжи со светлыми цветными дредами, герой лысый и бородатый в жёлтой футболке.">${art}</svg>`;
}
