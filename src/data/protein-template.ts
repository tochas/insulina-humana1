import type {ProteinConfig} from '../types';
/** Empty authoring template. Disabled until a verified technical sheet and real coordinates exist.
 * The nine station slots preserve the museum's shared presentation contract.
 * Never copy insulin's residues, assembly or claims into a different protein.
 */
export const proteinTemplate:ProteinConfig={
 id:'pending',name:'Próxima proteína',species:'',type:'',enabled:false,pdb:'',assembly:0,
 models:{monomer:'',dimer:'',hexamer:''},chains:[],chainRoles:{},secondaryAnnotations:[],
 levels:[{id:'primary',title:'Primaria',applicable:false,text:'',selection:[]},{id:'secondary',title:'Secundaria',applicable:false,text:'',selection:[]},{id:'tertiary',title:'Terciaria',applicable:false,text:'',selection:[]},{id:'quaternary',title:'Cuaternaria',applicable:false,text:'',selection:[]}],
 bridges:[],regions:[],functionalGroups:[],function:'',interactions:[],
 application:{name:'',steps:[],sourceIds:[]},
 stations:[['identity','Identidad'],['chains','Cadenas'],['structure','De la secuencia a la estructura'],['bridges','Reto estructural'],['organization','Organización'],['zinc','Cofactores o interacciones'],['receptor','¿Dónde interactúa?'],['function','Función'],['application','Aplicación biomédica']].map(([id,title],i)=>({id,title,kicker:`${String(i+1).padStart(2,'0')} / ${title.toUpperCase()}`,text:'',detail:'',sources:[]})),
 questions:[],activities:[],audios:{},tour:{durationSeconds:90,idleSeconds:20,steps:[]},sources:[],digitalSheetUrl:'',evaluationCriteria:[]
};
