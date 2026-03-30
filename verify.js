const fs=require('fs');
let code = fs.readFileSync('data_selatan.js','utf8').replace('const ','var ');
eval(code);
code = fs.readFileSync('data_utara.js','utf8').replace('const ','var ');
eval(code);

function calcItem(i){if(i[0]==='_')return 0;if(i[5]==='x'||i[5]==='o')return 0;return(i[2]||0)*(i[4]||0);}
function calcItems(items){return items.reduce((s,i)=>s+calcItem(i),0);}
function calcDiv(d){let t=0;for(const k in d)t+=calcItems(d[k].items);return t;}

const sp=calcItems(DATA_SELATAN.preliminaries);
const ss=calcDiv(DATA_SELATAN.structure);
const sa=calcDiv(DATA_SELATAN.architecture);
const sm=calcDiv(DATA_SELATAN.mep);
const st=sp+ss+sa+sm;

const up=calcItems(DATA_UTARA.preliminaries);
const us=calcDiv(DATA_UTARA.structure);
const ua=calcDiv(DATA_UTARA.architecture);
const um=calcDiv(DATA_UTARA.mep);
const ut=up+us+ua+um;

console.log('=== SELATAN (125.58 m2) ===');
console.log('Prelim:', (sp/1e6).toFixed(1), 'jt');
console.log('Structure:', (ss/1e6).toFixed(1), 'jt');
console.log('Architecture:', (sa/1e6).toFixed(1), 'jt');
console.log('MEP:', (sm/1e6).toFixed(1), 'jt');
console.log('TOTAL:', (st/1e6).toFixed(1), 'jt');
console.log('Per m2:', Math.round(st/125.58).toLocaleString(), '/m2');
console.log();
console.log('=== UTARA (111.87 m2) ===');
console.log('Prelim:', (up/1e6).toFixed(1), 'jt');
console.log('Structure:', (us/1e6).toFixed(1), 'jt');
console.log('Architecture:', (ua/1e6).toFixed(1), 'jt');
console.log('MEP:', (um/1e6).toFixed(1), 'jt');
console.log('TOTAL:', (ut/1e6).toFixed(1), 'jt');
console.log('Per m2:', Math.round(ut/111.87).toLocaleString(), '/m2');
