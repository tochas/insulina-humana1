import fs from 'node:fs';import assert from 'node:assert/strict';
const read=f=>fs.readFileSync(`public/models/${f}`,'utf8').split(/\r?\n/).filter(s=>s.startsWith('ATOM  ')||s.startsWith('HETATM')).map(s=>({record:s.slice(0,6).trim(),atom:s.slice(12,16).trim(),resn:s.slice(17,20).trim(),chain:s[21],resi:+s.slice(22,26),x:+s.slice(30,38),y:+s.slice(38,46),z:+s.slice(46,54)}));
const sequences={A:'GIVEQCCTSICSLYQLENYCN',B:'FVNQHLCGSHLVEALYLVCGERGFFYTPKT'};
const letters={GLY:'G',ILE:'I',VAL:'V',GLU:'E',GLN:'Q',CYS:'C',THR:'T',SER:'S',LEU:'L',TYR:'Y',ASN:'N',PHE:'F',HIS:'H',ALA:'A',ARG:'R',PRO:'P',LYS:'K'};
const report={};const d=(a,b)=>Math.hypot(a.x-b.x,a.y-b.y,a.z-b.z);
for(const [name,file,count]of [['monomer','insulin-monomer.pdb',2],['dimer','insulin-dimer.pdb',4],['hexamer','insulin-hexamer.pdb',12]]){
 const atoms=read(file),chains=[...new Set(atoms.filter(a=>a.record==='ATOM').map(a=>a.chain))];assert.equal(chains.length,count);
 const residues={};for(const chain of chains){const cas=atoms.filter(a=>a.chain===chain&&a.atom==='CA');const role='ACEGIK'.includes(chain)?'A':'B';assert.equal(cas.map(a=>letters[a.resn]).join(''),sequences[role]);assert.deepEqual(cas.map(a=>a.resi),Array.from({length:sequences[role].length},(_,i)=>i+1));residues[chain]=cas.length;}
 const bridges=[];for(let i=0;i<chains.length;i+=2){const a=chains[i],b=chains[i+1];for(const [c,n,e,m]of [[a,6,a,11],[a,7,b,7],[a,20,b,19]]){const left=atoms.find(x=>x.chain===c&&x.resi===n&&x.atom==='SG'),right=atoms.find(x=>x.chain===e&&x.resi===m&&x.atom==='SG');assert(left&&right);const distance=d(left,right);assert(distance>1.8&&distance<2.3);bridges.push({pair:`${c}${n}–${e}${m}`,angstroms:+distance.toFixed(3)});}}
 const zinc=atoms.filter(a=>a.resn==='ZN');const coordination=zinc.map(z=>atoms.filter(a=>a.resn==='HIS'&&a.atom==='NE2'&&d(z,a)<2.7).map(a=>({chain:a.chain,resi:a.resi,distance:+d(z,a).toFixed(3)})));
 if(name==='hexamer'){assert.equal(zinc.length,2);coordination.forEach(c=>assert.equal(c.length,3));}
 report[name]={file,atoms:atoms.length,chains:residues,residues:Object.values(residues).reduce((a,b)=>a+b,0),bridges,zinc:zinc.length,coordination};
}
fs.writeFileSync('evidence/molecular-audit.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
