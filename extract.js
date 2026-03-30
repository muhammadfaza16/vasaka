const fs=require('fs');
let code = fs.readFileSync('data_selatan.js','utf8').replace('const ','var ');
eval(code);
code = fs.readFileSync('data_utara.js','utf8').replace('const ','var ');
eval(code);

const dict = new Set();
function extractItems(items) {
    items.forEach(i => {
        if(i[0]==='_') dict.add(i[1]);
        else dict.add(i[1]);
    });
}
function extractDiv(d) {
    for(const k in d) {
        dict.add(d[k].name);
        extractItems(d[k].items);
    }
}
function extractAll(data) {
    extractItems(data.preliminaries);
    extractDiv(data.structure);
    extractDiv(data.architecture);
    extractDiv(data.mep);
}

extractAll(DATA_SELATAN);
extractAll(DATA_UTARA);

// Sort dictionary alphabetically for easier reading
const sorted = Array.from(dict).sort();
// Convert to JSON
const obj = {};
sorted.forEach(k => obj[k] = "");

fs.writeFileSync('dict_template.json', JSON.stringify(obj, null, 2));
console.log('Extracted ' + sorted.length + ' unique terms.');
