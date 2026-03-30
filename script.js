// ═══════ RAB ENGINE — Format BOQ PT Rusira Ekatwa Zafar ═══════
const rp=v=>'Rp '+Math.round(v).toLocaleString('id-ID');
const PPN_RATE=0.11;

// ── Calculate helpers ──
function calcItem(item){
  if(item[0]==='_') return 0;
  const flag=item[5];
  if(flag==='x'||flag==='o') return 0;
  return (item[2]||0)*(item[4]||0);
}
function calcItems(items){ return items.reduce((s,i)=>s+calcItem(i),0); }
function calcDiv(div){
  let t=0; for(const k in div) t+=calcItems(div[k].items);
  return t;
}
function calcAll(d){
  const p=calcItems(d.preliminaries);
  const s=calcDiv(d.structure);
  const a=calcDiv(d.architecture);
  const m=calcDiv(d.mep);
  const sub=p+s+a+m;
  return {prelim:p,structure:s,architecture:a,mep:m,subtotal:sub,ppn:Math.round(sub*PPN_RATE),grand:Math.round(sub*(1+PPN_RATE))};
}

// ── Render Final Summary ──
function renderSummary(id,data){
  const totals=calcAll(data);
  const rows=[
    ['1.0',t('PRELIMINARIES'),totals.prelim],
    ['2.0',t('STRUCTURE'),totals.structure],
    ['3.0',t('ARCHITECTURE'),totals.architecture],
    ['4.0',t('MEP'),totals.mep],
  ];
  let h='';
  const total=totals.subtotal;
  rows.forEach(r=>{
    const w=total>0?((r[2]/total)*100).toFixed(1):'0.0';
    h+=`<tr><td class="code-col">${r[0]}</td><td>${r[1]}</td><td class="cur r">${rp(r[2])}</td><td><div class="wt-wrap"><div class="wt-bar"><div class="wt-fill" style="width:${Math.round(w/50*100)}%"></div></div><span class="wt-val">${w}%</span></div></td></tr>`;
  });
  h+=`<tr class="tot-row"><td colspan="2"><strong>${window.t('REAL COST')}</strong></td><td class="cur r"><strong>${rp(totals.subtotal)}</strong></td><td></td></tr>`;
  h+=`<tr class="tax-row"><td colspan="2">PPN 11%</td><td class="cur r">${rp(totals.ppn)}</td><td></td></tr>`;
  h+=`<tr class="grand-row"><td colspan="2"><strong>${window.t('GRAND TOTAL')}</strong></td><td class="cur r"><strong>${rp(totals.grand)}</strong></td><td></td></tr>`;
  h+=`<tr class="unit-row"><td colspan="2">${window.t('Biaya per m²')}</td><td class="cur r">${rp(Math.round(totals.subtotal/data.info.area))}/m²</td><td></td></tr>`;
  document.getElementById(id).innerHTML=h;
}

// ── Render Items Table ──
function renderItemsTable(items){
  let h='';
  items.forEach(item=>{
    if(item[0]==='_'){
      h+=`<tr class="grp-hdr"><td colspan="6">${window.t(item[1])}</td></tr>`;
      return;
    }
    const flag=item[5];
    const cls=flag==='x'?'ex-row':flag==='o'?'ow-row':'';
    const amt=calcItem(item);
    const badge=flag==='x'?`<span class="badge-ex">${t('Exclude')}</span>`:flag==='o'?`<span class="badge-ow">${t('By Owner')}</span>`:'';
    h+=`<tr class="${cls}"><td class="no-c">${item[0]}</td><td>${window.t(item[1])} ${badge}</td><td class="r mu">${item[3]||''}</td><td class="r mu">${item[2]||''}</td><td class="r cur">${item[4]?item[4].toLocaleString('id-ID'):'-'}</td><td class="r cur">${amt>0?amt.toLocaleString('id-ID'):'-'}</td></tr>`;
  });
  return h;
}

// ── Render Preliminaries ──
function renderPrelim(containerId,data){
  const items=data.preliminaries;
  const sub=calcItems(items);
  let h=`<div class="div-section"><div class="div-hdr" onclick="togDiv(this)"><span class="div-code">1.0</span><span class="div-name">${t('PRELIMINARIES')}</span><span class="div-total cur">${rp(sub)}</span><span class="chv">▼</span></div>`;
  h+=`<div class="div-body"><table class="boq-tbl"><thead><tr><th style="width:36px">${t('No.')}</th><th>${t('Description')}</th><th class="r" style="width:48px">${t('Unit')}</th><th class="r" style="width:60px">${t('Qty')}</th><th class="r" style="width:110px">${t('Rate (Rp)')}</th><th class="r" style="width:120px">${t('Amount (Rp)')}</th></tr></thead><tbody>`;
  h+=renderItemsTable(items);
  h+=`<tr class="sub-row"><td colspan="5" class="r"><strong>${t('PRELIMINARIES')} — ${window.currentLang==='id'?'Dibawa ke Rekapitulasi Akhir':'Carried to Final Summary'}</strong></td><td class="r cur"><strong>${sub.toLocaleString('id-ID')}</strong></td></tr>`;
  h+=`</tbody></table></div></div>`;
  document.getElementById(containerId).innerHTML+=h;
}

// ── Render Division (Structure/Arch/MEP) ──
function renderDivision(containerId,divCode,divName,divData){
  const divTotal=calcDiv(divData);
  let h=`<div class="div-section"><div class="div-hdr" onclick="togDiv(this)"><span class="div-code">${divCode}</span><span class="div-name">${t(divName)}</span><span class="div-total cur">${rp(divTotal)}</span><span class="chv">▼</span></div><div class="div-body">`;
  for(const k in divData){
    const sec=divData[k];
    const secTotal=calcItems(sec.items);
    const secId=`${containerId}-${divCode}-${k}`;
    h+=`<div class="sub-section"><div class="sub-hdr" onclick="togSub('${secId}',this)"><span class="sub-code">${k}</span><span class="sub-name">${t(sec.name)}</span><span class="sub-total cur">${rp(secTotal)}</span><span class="chv2">▶</span></div>`;
    h+=`<div class="sub-body collapsed" id="${secId}"><table class="boq-tbl"><thead><tr><th style="width:36px">${t('No.')}</th><th>${t('Description')}</th><th class="r" style="width:48px">${t('Unit')}</th><th class="r" style="width:60px">${t('Qty')}</th><th class="r" style="width:110px">${t('Rate (Rp)')}</th><th class="r" style="width:120px">${t('Amount (Rp)')}</th></tr></thead><tbody>`;
    h+=renderItemsTable(sec.items);
    h+=`<tr class="sub-row"><td colspan="5" class="r"><strong>Subtotal ${k}</strong></td><td class="r cur"><strong>${secTotal.toLocaleString('id-ID')}</strong></td></tr>`;
    h+=`</tbody></table></div></div>`;
  }
  // Collection
  h+=`<div class="collection"><strong>${currentLang==='id'?'Kumpulan':'Collection'} — ${t(divName)}</strong><table class="coll-tbl">`;
  for(const k in divData){
    h+=`<tr><td class="code-col">${k}</td><td>${t(divData[k].name)}</td><td class="cur r">${rp(calcItems(divData[k].items))}</td></tr>`;
  }
  h+=`<tr class="tot-row"><td colspan="2"><strong>TOTAL ${t(divName)}</strong></td><td class="cur r"><strong>${rp(divTotal)}</strong></td></tr>`;
  h+=`</table></div></div></div>`;
  document.getElementById(containerId).innerHTML+=h;
}

// ── Render Comparison ──
function renderCompare(){
  const ts=calcAll(DATA_SELATAN), tu=calcAll(DATA_UTARA);
  const cats=[
    ['1.0',t('PRELIMINARIES'),ts.prelim,tu.prelim],
    ['2.0',t('STRUCTURE'),ts.structure,tu.structure],
    ['3.0',t('ARCHITECTURE'),ts.architecture,tu.architecture],
    ['4.0',t('MEP'),ts.mep,tu.mep],
  ];
  let h='';
  cats.forEach(c=>{
    const d=c[2]-c[3];
    const ds=d>0?`<span class="d-plus">+${rp(d)}</span>`:`<span class="d-min">${rp(d)}</span>`;
    h+=`<tr><td class="code-col">${c[0]}</td><td>${c[1]}</td><td class="cur r">${rp(c[2])}</td><td class="cur r">${rp(c[3])}</td><td class="r">${ds}</td></tr>`;
  });
  const dd=ts.subtotal-tu.subtotal;
  h+=`<tr class="tot-row"><td colspan="2"><strong>${t('REAL COST')}</strong></td><td class="cur r"><strong>${rp(ts.subtotal)}</strong></td><td class="cur r"><strong>${rp(tu.subtotal)}</strong></td><td class="r"><span class="d-plus">+${rp(dd)}</span></td></tr>`;
  h+=`<tr class="grand-row"><td colspan="2"><strong>${t('GRAND TOTAL (Inc. PPN)')}</strong></td><td class="cur r"><strong>${rp(ts.grand)}</strong></td><td class="cur r"><strong>${rp(tu.grand)}</strong></td><td class="r"><span class="d-plus">+${rp(ts.grand-tu.grand)}</span></td></tr>`;
  document.getElementById('compare-table').innerHTML=h;
  // Update cards
  document.getElementById('cs-total').textContent=rp(ts.subtotal);
  document.getElementById('cs-ppn').textContent=rp(ts.ppn);
  document.getElementById('cs-grand').textContent=rp(ts.grand);
  document.getElementById('cs-m2').textContent=rp(Math.round(ts.subtotal/DATA_SELATAN.info.area))+'/m²';
  document.getElementById('cu-total').textContent=rp(tu.subtotal);
  document.getElementById('cu-ppn').textContent=rp(tu.ppn);
  document.getElementById('cu-grand').textContent=rp(tu.grand);
  document.getElementById('cu-m2').textContent=rp(Math.round(tu.subtotal/DATA_UTARA.info.area))+'/m²';
}

// ── Toggle helpers ──
window.togDiv=function(el){el.parentElement.classList.toggle('collapsed');};
window.togSub=function(id,el){document.getElementById(id).classList.toggle('collapsed');el.querySelector('.chv2').textContent=document.getElementById(id).classList.contains('collapsed')?'▶':'▼';};
window.switchTab=function(tab){document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));document.getElementById('tab-'+tab).classList.add('active');event.target.classList.add('active');};

// ── Build all ──
function buildTab(containerId,data){
  const el=document.getElementById(containerId);
  el.innerHTML='';
  renderPrelim(containerId,data);
  renderDivision(containerId,'2.0','STRUCTURE HOUSE CLUSTER EVARA',data.structure);
  renderDivision(containerId,'3.0','ARCHITECTURE HOUSE CLUSTER EVARA',data.architecture);
  renderDivision(containerId,'4.0','MECHANICAL ELECTRICAL & PLUMBING',data.mep);
}

// Init
renderSummary('summary-selatan',DATA_SELATAN);
renderSummary('summary-utara',DATA_UTARA);
buildTab('boq-selatan',DATA_SELATAN);
buildTab('boq-utara',DATA_UTARA);
renderCompare();
// ── Excel Export (Styled with xlsx-js-style) ──
window.exportExcel = function(data, filename) {
  const wb = XLSX.utils.book_new();
  const tot = calcAll(data);
  const isID = currentLang === 'id';

  const L = {
    no:'No.', desc:isID?'Uraian Pekerjaan':'Description', unit:isID?'Satuan':'Unit',
    vol:isID?'Volume':'Qty', rate:isID?'Harga Satuan (Rp)':'Unit Rate (Rp)',
    amount:isID?'Jumlah Harga (Rp)':'Amount (Rp)', status:'Status',
    subtotal:'SUBTOTAL', realcost:isID?'BIAYA KONSTRUKSI':'REAL COST',
    ppn:'PPN 11%', grand:isID?'TOTAL KESELURUHAN':'GRAND TOTAL',
    perm2:isID?'Biaya per m²':'Cost per m²', area:isID?'Luas Bangunan':'Building Area',
    weight:isID?'Bobot (%)':'Weight (%)', summary:isID?'REKAPITULASI AKHIR':'FINAL SUMMARY',
    exclude:isID?'Tidak Termasuk':'Exclude', byowner:isID?'Oleh Owner':'By Owner',
    carried:isID?'Dibawa ke Rekapitulasi':'Carried to Summary',
  };

  // ── STYLE PRESETS ──
  const bdr = {top:{style:'thin',color:{rgb:'D0D0D0'}},bottom:{style:'thin',color:{rgb:'D0D0D0'}},left:{style:'thin',color:{rgb:'D0D0D0'}},right:{style:'thin',color:{rgb:'D0D0D0'}}};
  const bdrBold = {top:{style:'medium',color:{rgb:'8B4513'}},bottom:{style:'medium',color:{rgb:'8B4513'}},left:{style:'thin',color:{rgb:'D0D0D0'}},right:{style:'thin',color:{rgb:'D0D0D0'}}};
  const sTitle  = {font:{bold:true,sz:14,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'1A1612'}},alignment:{horizontal:'left'}};
  const sHeader = {font:{bold:true,sz:9,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'3D3428'}},border:bdr,alignment:{horizontal:'center'}};
  const sHeaderL = {...sHeader, alignment:{horizontal:'left'}};
  const sNormal = {font:{sz:10},border:bdr,alignment:{vertical:'top'}};
  const sRight  = {font:{sz:10},border:bdr,alignment:{horizontal:'right',vertical:'top'}};
  const sNum    = {font:{sz:10},border:bdr,alignment:{horizontal:'right'},numFmt:'#,##0'};
  const sGrpHdr = {font:{bold:true,sz:9,color:{rgb:'8B4513'}},fill:{fgColor:{rgb:'FAF6E8'}},border:bdr};
  const sSubTot = {font:{bold:true,sz:10},fill:{fgColor:{rgb:'FFF8E7'}},border:bdrBold,alignment:{horizontal:'right'}};
  const sSubTotN= {font:{bold:true,sz:10},fill:{fgColor:{rgb:'FFF8E7'}},border:bdrBold,alignment:{horizontal:'right'},numFmt:'#,##0'};
  const sGrandL = {font:{bold:true,sz:11,color:{rgb:'FFFFFF'}},fill:{fgColor:{rgb:'1A1612'}},border:bdr};
  const sGrandN = {font:{bold:true,sz:11,color:{rgb:'C9A94E'}},fill:{fgColor:{rgb:'1A1612'}},border:bdr,alignment:{horizontal:'right'},numFmt:'#,##0'};
  const sSecHdr = {font:{bold:true,sz:10,color:{rgb:'1A1612'}},fill:{fgColor:{rgb:'E8E0D4'}},border:bdr};
  const sExclude= {font:{sz:10,color:{rgb:'AAAAAA'},strike:true},border:bdr};
  const sExclR  = {...sExclude, alignment:{horizontal:'right'}};

  function n(v) { return typeof v==='number' ? Math.round(v) : 0; }
  function pct(v) { return tot.subtotal>0 ? ((v/tot.subtotal)*100).toFixed(1)+'%' : ''; }
  function stFlag(f) { return f==='x'?L.exclude:f==='o'?L.byowner:''; }

  // ── Apply styles to a worksheet rows ──
  function styleWs(ws, styleMap) {
    for (const addr in styleMap) {
      if (!ws[addr]) ws[addr] = {v:'',t:'s'};
      ws[addr].s = styleMap[addr];
    }
  }

  function colLetter(c) { let s=''; c++; while(c>0){c--;s=String.fromCharCode(65+c%26)+s;c=Math.floor(c/26);} return s; }

  // ═══ SHEET 1: SUMMARY ═══
  const s1 = [
    ['BILL OF QUANTITIES','','',''],
    [data.info.name,'','',''],
    [data.info.owner,'','',''],
    [data.info.loc,'','',''],
    [L.area+': '+data.info.area+' m²','','',''],
    ['','','',''],
    [L.summary,'','',''],
    [L.no, L.desc, L.amount, L.weight],
    ['1.0', t('PRELIMINARIES'), n(tot.prelim), pct(tot.prelim)],
    ['2.0', t('STRUCTURE'), n(tot.structure), pct(tot.structure)],
    ['3.0', t('ARCHITECTURE'), n(tot.architecture), pct(tot.architecture)],
    ['4.0', t('MEP'), n(tot.mep), pct(tot.mep)],
    ['', L.realcost, n(tot.subtotal), '100.0%'],
    ['', L.ppn, n(tot.ppn), ''],
    ['', L.grand, n(tot.grand), ''],
    ['', L.perm2, 'Rp '+Math.round(tot.subtotal/data.info.area).toLocaleString('id-ID'), ''],
  ];
  const ws1 = XLSX.utils.aoa_to_sheet(s1);
  ws1['!cols'] = [{wch:7},{wch:44},{wch:22},{wch:14}];
  ws1['!merges'] = [{s:{r:0,c:0},e:{r:0,c:3}},{s:{r:1,c:0},e:{r:1,c:3}},{s:{r:6,c:0},e:{r:6,c:3}}];
  // Style summary
  const sm = {};
  for(let c=0;c<4;c++){sm[colLetter(c)+'1']=sTitle;sm[colLetter(c)+'2']={font:{bold:true,sz:11},fill:{fgColor:{rgb:'1A1612'}},alignment:{horizontal:'left'},font:{bold:true,sz:11,color:{rgb:'C9A94E'}}};}
  for(let c=0;c<4;c++){sm[colLetter(c)+'3']={font:{sz:10,color:{rgb:'E8E0D4'}},fill:{fgColor:{rgb:'1A1612'}}};sm[colLetter(c)+'4']={font:{sz:10,color:{rgb:'E8E0D4'}},fill:{fgColor:{rgb:'1A1612'}}};sm[colLetter(c)+'5']={font:{sz:10,color:{rgb:'E8E0D4'}},fill:{fgColor:{rgb:'1A1612'}}};}
  for(let c=0;c<4;c++) sm[colLetter(c)+'7']={font:{bold:true,sz:11,color:{rgb:'8B4513'}},fill:{fgColor:{rgb:'FAF6E8'}},border:bdr};
  for(let c=0;c<4;c++) sm[colLetter(c)+'8']=sHeader;
  sm['A8']=sHeaderL; sm['B8']=sHeaderL;
  for(let r=9;r<=12;r++){sm['A'+r]=sNormal;sm['B'+r]=sNormal;sm['C'+r]=sNum;sm['D'+r]=sRight;}
  for(let c=0;c<4;c++) sm[colLetter(c)+'13']=sSubTot;
  sm['C13']=sSubTotN;
  sm['B14']=sNormal;sm['C14']=sNum;sm['D14']=sNormal;
  for(let c=0;c<4;c++) sm[colLetter(c)+'15']=sGrandL;
  sm['C15']=sGrandN;
  sm['B16']=sNormal;sm['C16']=sRight;
  styleWs(ws1,sm);
  XLSX.utils.book_append_sheet(wb, ws1, isID?'Rekapitulasi':'Summary');

  // ═══ BUILD DETAIL SHEETS ═══
  function buildStyledSheet(title, buildRowsFn) {
    const {rows, styles} = buildRowsFn();
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = [{wch:7},{wch:52},{wch:8},{wch:10},{wch:16},{wch:18},{wch:14}];
    styleWs(ws, styles);
    // merge title row
    if(rows.length>0) ws['!merges'] = [{s:{r:0,c:0},e:{r:0,c:6}}];
    XLSX.utils.book_append_sheet(wb, ws, title.substring(0,31));
  }

  // ── Prelim builder ──
  function buildPrelimRows() {
    const rows = [];
    const styles = {};
    let r = 0;
    rows.push([t('PRELIMINARIES'),'','','','','','']); for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=sTitle; r++;
    rows.push(['','','','','','','']); r++;
    rows.push([L.no,L.desc,L.unit,L.vol,L.rate,L.amount,L.status]);
    for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=c<2?sHeaderL:sHeader; r++;
    let sub = 0;
    data.preliminaries.forEach(item => {
      if(item[0]==='_'){
        rows.push(['',t(item[1]),'','','','','']);
        for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=sGrpHdr; r++;
      } else {
        const fl=item[5]; const amt=calcItem(item); sub+=amt;
        const isEx=fl==='x'||fl==='o';
        rows.push([item[0],t(item[1]),item[3]||'',item[2]||'',n(item[4])||'',n(amt)||'',stFlag(fl)]);
        for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=isEx?(c>=3?sExclR:sExclude):(c>=3?sNum:sNormal);
        styles[colLetter(0)+(r+1)]={...sNormal,alignment:{horizontal:'center'}};
        r++;
      }
    });
    rows.push(['','','','','','','']); r++;
    rows.push(['','','','',L.subtotal,n(sub),'']);
    for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=c===5?sSubTotN:sSubTot; r++;
    return {rows, styles};
  }

  // ── Division builder ──
  function buildDivRows(divName, divData) {
    const rows = [];
    const styles = {};
    let r = 0;
    rows.push([t(divName),'','','','','','']); for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=sTitle; r++;
    rows.push(['','','','','','','']); r++;
    let divTotal = 0;
    for(const k in divData){
      const sec=divData[k]; const secTotal=calcItems(sec.items); divTotal+=secTotal;
      rows.push(['','','','','','','']); r++;
      rows.push([k+'.',t(sec.name).toUpperCase(),'','','','','']);
      for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=sSecHdr; r++;
      rows.push([L.no,L.desc,L.unit,L.vol,L.rate,L.amount,L.status]);
      for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=c<2?sHeaderL:sHeader; r++;
      sec.items.forEach(item=>{
        if(item[0]==='_'){
          rows.push(['',t(item[1]),'','','','','']);
          for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=sGrpHdr; r++;
        } else {
          const fl=item[5]; const amt=calcItem(item);
          const isEx=fl==='x'||fl==='o';
          rows.push([item[0],t(item[1]),item[3]||'',item[2]||'',n(item[4])||'',n(amt)||'',stFlag(fl)]);
          for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=isEx?(c>=3?sExclR:sExclude):(c>=3?sNum:sNormal);
          styles[colLetter(0)+(r+1)]={...sNormal,alignment:{horizontal:'center'}};
          r++;
        }
      });
      rows.push(['','','','','Subtotal '+k,n(secTotal),'']);
      for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=c===5?sSubTotN:sSubTot; r++;
    }
    // Collection
    rows.push(['','','','','','','']); r++;
    rows.push(['','COLLECTION — '+t(divName),'','','','','']);
    for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=sSecHdr; r++;
    for(const k in divData){
      rows.push([k,t(divData[k].name),'','','',n(calcItems(divData[k].items)),'']);
      for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=c===5?sNum:sNormal; r++;
    }
    rows.push(['','','','','TOTAL '+t(divName),n(divTotal),'']);
    for(let c=0;c<7;c++) styles[colLetter(c)+(r+1)]=c===5?sGrandN:sGrandL; r++;
    return {rows, styles};
  }

  buildStyledSheet(t('PRELIMINARIES'), ()=>buildPrelimRows());
  buildStyledSheet(t('STRUCTURE'), ()=>buildDivRows('STRUCTURE', data.structure));
  buildStyledSheet(t('ARCHITECTURE'), ()=>buildDivRows('ARCHITECTURE', data.architecture));
  buildStyledSheet(t('MEP'), ()=>buildDivRows('MEP', data.mep));

  XLSX.writeFile(wb, filename+'.xlsx');
};

// ── PDF Export (Print-friendly) ──
window.exportPDF = function(data, filename) {
  const tot = calcAll(data);
  const isID = currentLang === 'id';

  const L = {
    no: 'No.', desc: isID ? 'Uraian Pekerjaan' : 'Description',
    unit: isID ? 'Satuan' : 'Unit', vol: isID ? 'Volume' : 'Qty',
    rate: isID ? 'Harga Satuan (Rp)' : 'Unit Rate (Rp)',
    amount: isID ? 'Jumlah Harga (Rp)' : 'Amount (Rp)',
    summary: isID ? 'REKAPITULASI AKHIR' : 'FINAL SUMMARY',
    realcost: isID ? 'BIAYA KONSTRUKSI' : 'REAL COST',
    grand: isID ? 'TOTAL KESELURUHAN' : 'GRAND TOTAL',
    perm2: isID ? 'Biaya per m²' : 'Cost per m²',
    exclude: isID ? 'Tidak Termasuk' : 'Exclude',
    byowner: isID ? 'Oleh Owner' : 'By Owner',
  };

  function rp(v) { return 'Rp ' + Math.round(v).toLocaleString('id-ID'); }
  function pct(v) { return tot.subtotal > 0 ? ((v / tot.subtotal) * 100).toFixed(1) + '%' : ''; }
  function badge(flag) {
    if (flag === 'x') return '<span style="background:#e74c3c;color:#fff;font-size:9px;padding:1px 4px;border-radius:2px">' + L.exclude + '</span>';
    if (flag === 'o') return '<span style="background:#2563eb;color:#fff;font-size:9px;padding:1px 4px;border-radius:2px">' + L.byowner + '</span>';
    return '';
  }

  function renderItems(items) {
    let h = '';
    items.forEach(item => {
      if (item[0] === '_') {
        h += '<tr style="background:#f4f1ec"><td colspan="6" style="font-weight:600;font-size:10px;text-transform:uppercase;color:#8b4513;padding:4px 6px">' + t(item[1]) + '</td></tr>';
      } else {
        const flag = item[5];
        const cls = flag === 'x' ? 'opacity:.4;text-decoration:line-through' : flag === 'o' ? 'opacity:.5' : '';
        const amt = calcItem(item);
        h += '<tr style="' + cls + '"><td style="text-align:center;color:#888">' + item[0] + '</td><td>' + t(item[1]) + ' ' + badge(flag) + '</td><td class="r">' + (item[3] || '') + '</td><td class="r">' + (item[2] || '') + '</td><td class="r">' + (item[4] ? item[4].toLocaleString('id-ID') : '-') + '</td><td class="r">' + (amt > 0 ? amt.toLocaleString('id-ID') : '-') + '</td></tr>';
      }
    });
    return h;
  }

  function renderDiv(divName, divData) {
    let h = '<h2 style="color:#8b4513;border-bottom:2px solid #8b4513;padding-bottom:4px;margin:24px 0 12px">' + t(divName) + '</h2>';
    let divTotal = 0;
    for (const k in divData) {
      const sec = divData[k];
      const secTotal = calcItems(sec.items);
      divTotal += secTotal;
      h += '<h3 style="background:#faf6e8;padding:6px 10px;border-left:3px solid #c9a94e;margin:16px 0 8px;font-size:12px">' + k + '. ' + t(sec.name) + ' <span style="float:right;color:#2d6a4f">' + rp(secTotal) + '</span></h3>';
      h += '<table><thead><tr><th style="width:30px">' + L.no + '</th><th>' + L.desc + '</th><th style="width:40px">' + L.unit + '</th><th style="width:50px">' + L.vol + '</th><th style="width:90px">' + L.rate + '</th><th style="width:100px">' + L.amount + '</th></tr></thead><tbody>';
      h += renderItems(sec.items);
      h += '<tr style="background:#faf6e8;border-top:2px solid #c9a94e"><td colspan="5" style="text-align:right;font-weight:700">Subtotal ' + k + '</td><td class="r" style="font-weight:700">' + secTotal.toLocaleString('id-ID') + '</td></tr>';
      h += '</tbody></table>';
    }
    // Collection
    h += '<div style="background:#faf8f4;border:1px solid #ebe6de;border-radius:6px;padding:12px 16px;margin:16px 0"><strong>Collection — ' + t(divName) + '</strong><table style="margin-top:8px">';
    for (const k in divData) {
      h += '<tr><td style="width:30px;color:#8b4513;font-weight:600">' + k + '</td><td>' + t(divData[k].name) + '</td><td class="r">' + rp(calcItems(divData[k].items)) + '</td></tr>';
    }
    h += '<tr style="background:#faf6e8;border-top:2px solid #c9a94e"><td colspan="2" style="font-weight:700">TOTAL ' + t(divName) + '</td><td class="r" style="font-weight:700">' + rp(divTotal) + '</td></tr>';
    h += '</table></div>';
    return h;
  }

  // Build full HTML
  let html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' + filename + '</title>';
  html += '<style>';
  html += 'body{font-family:"Segoe UI",system-ui,sans-serif;font-size:11px;color:#1a1612;max-width:800px;margin:0 auto;padding:20px}';
  html += 'h1{font-size:16px;margin:0} h2{font-size:14px;margin:20px 0 8px} h3{font-size:12px}';
  html += 'table{width:100%;border-collapse:collapse;margin-bottom:12px;font-size:10px}';
  html += 'th{background:#1a1612;color:#e8e0d4;padding:5px 6px;font-size:9px;text-transform:uppercase;letter-spacing:.3px;text-align:left}';
  html += 'td{padding:4px 6px;border-bottom:1px solid #f0ece6;vertical-align:top}';
  html += '.r{text-align:right;font-variant-numeric:tabular-nums}';
  html += '.header-block{background:#1a1612;color:#e8e0d4;padding:20px 24px;border-radius:8px;margin-bottom:20px}';
  html += '.header-block h1{color:#c9a94e} .header-block p{margin:2px 0;opacity:.8;font-size:11px}';
  html += '.summary-tbl th{background:#1a1612;color:#c9a94e}';
  html += '.tot-row{background:#faf6e8} .tot-row td{font-weight:700;border-top:2px solid #c9a94e}';
  html += '.grand-row{background:#1a1612} .grand-row td{color:#c9a94e!important;font-weight:700}';
  html += '.sig-strip{display:flex;justify-content:space-between;margin-top:40px;padding-top:20px;border-top:2px solid #e8e0d4}';
  html += '.sig-cell{text-align:center;flex:1} .sig-lbl{font-size:9px;text-transform:uppercase;color:#888;margin-bottom:50px}';
  html += '.sig-name{font-weight:600;border-top:1px solid #1a1612;padding-top:6px;display:inline-block;min-width:140px}';
  html += '@media print{body{padding:10px;max-width:100%} .no-print{display:none}}';
  html += '</style></head><body>';

  // Header
  html += '<div class="header-block"><h1>BILL OF QUANTITIES</h1>';
  html += '<p style="font-size:13px;margin-top:4px"><strong>' + data.info.name + '</strong></p>';
  html += '<p>' + data.info.owner + '</p>';
  html += '<p>' + data.info.loc + '</p>';
  html += '<p>' + (isID ? 'Luas' : 'Area') + ': <strong>' + data.info.area + ' m²</strong></p>';
  html += '<p>Quantity Surveyor: <strong>Ratio Construction</strong></p></div>';

  // Print button
  html += '<div class="no-print" style="text-align:center;margin-bottom:20px"><button onclick="window.print()" style="background:#8b4513;color:#fff;border:none;padding:10px 24px;border-radius:6px;font-size:13px;cursor:pointer">🖨️ Print / Save as PDF</button></div>';

  // Summary
  html += '<h2 style="color:#8b4513;border-bottom:2px solid #8b4513;padding-bottom:4px">' + L.summary + '</h2>';
  html += '<table class="summary-tbl"><thead><tr><th style="width:40px">' + L.no + '</th><th>' + L.desc + '</th><th style="width:160px">' + L.amount + '</th><th style="width:80px">%</th></tr></thead><tbody>';
  html += '<tr><td>1.0</td><td>' + t('PRELIMINARIES') + '</td><td class="r">' + rp(tot.prelim) + '</td><td class="r">' + pct(tot.prelim) + '</td></tr>';
  html += '<tr><td>2.0</td><td>' + t('STRUCTURE') + '</td><td class="r">' + rp(tot.structure) + '</td><td class="r">' + pct(tot.structure) + '</td></tr>';
  html += '<tr><td>3.0</td><td>' + t('ARCHITECTURE') + '</td><td class="r">' + rp(tot.architecture) + '</td><td class="r">' + pct(tot.architecture) + '</td></tr>';
  html += '<tr><td>4.0</td><td>' + t('MEP') + '</td><td class="r">' + rp(tot.mep) + '</td><td class="r">' + pct(tot.mep) + '</td></tr>';
  html += '<tr class="tot-row"><td colspan="2">' + L.realcost + '</td><td class="r">' + rp(tot.subtotal) + '</td><td class="r">100%</td></tr>';
  html += '<tr><td colspan="2">PPN 11%</td><td class="r">' + rp(tot.ppn) + '</td><td></td></tr>';
  html += '<tr class="grand-row"><td colspan="2">' + L.grand + '</td><td class="r">' + rp(tot.grand) + '</td><td></td></tr>';
  html += '<tr><td colspan="2">' + L.perm2 + '</td><td class="r"><strong>' + rp(Math.round(tot.subtotal / data.info.area)) + '/m²</strong></td><td></td></tr>';
  html += '</tbody></table>';

  // Preliminaries
  html += '<h2 style="color:#8b4513;border-bottom:2px solid #8b4513;padding-bottom:4px;margin-top:32px">1.0 ' + t('PRELIMINARIES') + '</h2>';
  html += '<table><thead><tr><th style="width:30px">' + L.no + '</th><th>' + L.desc + '</th><th style="width:40px">' + L.unit + '</th><th style="width:50px">' + L.vol + '</th><th style="width:90px">' + L.rate + '</th><th style="width:100px">' + L.amount + '</th></tr></thead><tbody>';
  html += renderItems(data.preliminaries);
  const prelimSub = calcItems(data.preliminaries);
  html += '<tr class="tot-row"><td colspan="5" style="text-align:right">' + t('PRELIMINARIES') + ' — ' + L.realcost + '</td><td class="r">' + prelimSub.toLocaleString('id-ID') + '</td></tr>';
  html += '</tbody></table>';

  // Structure, Architecture, MEP
  html += renderDiv('STRUCTURE', data.structure);
  html += '<div style="page-break-before:always"></div>';
  html += renderDiv('ARCHITECTURE', data.architecture);
  html += '<div style="page-break-before:always"></div>';
  html += renderDiv('MEP', data.mep);

  // Signature
  html += '<div class="sig-strip">';
  html += '<div class="sig-cell"><div class="sig-lbl">' + (isID ? 'Dibuat oleh' : 'Prepared by') + '</div><div class="sig-name">Quantity Surveyor</div><div style="font-size:10px;color:#888">Ratio Construction</div></div>';
  html += '<div class="sig-cell"><div class="sig-lbl">' + (isID ? 'Diperiksa oleh' : 'Checked by') + '</div><div class="sig-name">Project Manager</div><div style="font-size:10px;color:#888">Contractor</div></div>';
  html += '<div class="sig-cell"><div class="sig-lbl">' + (isID ? 'Disetujui oleh' : 'Approved by') + '</div><div class="sig-name">Owner Representative</div><div style="font-size:10px;color:#888">PT. Waskita Karya Realty</div></div>';
  html += '</div>';

  html += '</body></html>';

  // Open in new tab
  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
};
