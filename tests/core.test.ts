import {describe,it,expect} from 'vitest';import {insulin,rooms} from '../src/proteins';
import {buttonMap,deadzone,smooth,parseResidue,validResidue,connectBridge,bridgeKey,toggleOrganization,tourIndex,shouldAttract,validateProtein,missingResources,MuseumClock} from '../src/core';
describe('Controles estándar',()=>{
 it('respeta los doce controles digitales Xbox',()=>expect(buttonMap).toEqual({0:'confirm',1:'back',2:'labels',3:'organization',4:'previousRepresentation',5:'nextRepresentation',8:'reset',9:'pause',12:'previousOption',13:'nextOption',14:'previousStation',15:'nextStation'}));
 it('filtra deriva, conserva signo y limita el rango',()=>{for(const x of [-.16,-.05,0,.15,.16])expect(deadzone(x)).toBe(0);expect(deadzone(-1)).toBe(-1);expect(deadzone(1.2)).toBe(1);expect(deadzone(.58)).toBeCloseTo(.5);});
 it('suaviza sin depender del número de cuadros',()=>{expect(smooth(0,1,.1)).toBeGreaterThan(0);expect(smooth(0,1,.1)).toBeLessThan(1);expect(smooth(smooth(0,1,.05),1,.05)).toBeCloseTo(smooth(0,1,.1));});
});
describe('Identidad y residuos',()=>{
 it('mapea todas las posiciones sin aceptar posiciones inexistentes',()=>{expect(parseResidue('A21')).toEqual({chain:'A',resi:21});expect(parseResidue('fake')).toBeNull();for(const id of ['A1','A21','B1','B30'])expect(validResidue(insulin,id)).toBe(true);for(const id of ['A0','A22','B31','Z1'])expect(validResidue(insulin,id)).toBe(false);});
 it('conserva 21+30, tres enlaces y cuatro espacios sin proteínas inventadas',()=>{expect(insulin.chains.map(c=>c.sequence.length)).toEqual([21,30]);expect(insulin.chains.map(c=>[...c.sequence].filter(a=>a==='C').length)).toEqual([4,2]);expect(rooms.length).toBe(4);expect(rooms.filter(r=>r.enabled).length).toBe(1);expect(validateProtein(insulin)).toEqual([]);});
 it('rechaza una configuración incompleta y admite niveles no aplicables',()=>{expect(validateProtein({...insulin,chains:[]})).not.toEqual([]);expect(validateProtein({...insulin,levels:insulin.levels.map(l=>({...l,applicable:false}))})).toEqual([]);});
});
describe('Reto de disulfuros',()=>{
 it('rechaza parejas erróneas y selecciones repetidas',()=>{expect(connectBridge(insulin,[],'A6','B7').status).toBe('wrong');expect(connectBridge(insulin,[],'A6','A6').status).toBe('same');});
 it('completa tres puentes sin permitir duplicados ni depender del orden',()=>{let done:string[]=[];let result=connectBridge(insulin,done,'A11','A6');expect(result.status).toBe('correct');done=result.done;expect(connectBridge(insulin,done,'A6','A11').status).toBe('duplicate');result=connectBridge(insulin,done,'B7','A7');result=connectBridge(insulin,result.done,'A20','B19');expect(result.status).toBe('complete');expect(result.done.length).toBe(3);expect(result.done).toContain(bridgeKey('A20','B19'));});
});
describe('Organización y tiempo',()=>{
 it('alterna vistas sin cambiar identidades moleculares',()=>{expect(toggleOrganization('monomer')).toBe('hexamer');expect(toggleOrganization('hexamer')).toBe('monomer');expect(toggleOrganization('dimer')).toBe('hexamer');});
 it('inicia a los 20 segundos e interrumpe con cualquier actividad',()=>{const c=new MuseumClock();c.interact(1000);expect(c.tick(20999,11)).toBe(-1);expect(c.tick(21000,11)).toBe(0);expect(c.tick(28000,11)).toBe(1);c.interact(28001);expect(c.tick(28002,11)).toBe(-1);c.paused=true;expect(c.tick(100000,11)).toBe(-1);});
 it('permite duración configurable y pausa',()=>{expect(tourIndex(77000,77,11)).toBe(0);expect(tourIndex(14000,154,11)).toBe(1);expect(shouldAttract(20000,0,20,true)).toBe(false);});
});
describe('Recursos offline',()=>{
 it('detecta errores HTTP y archivos sin conexión',async()=>{const fake=(async(p:string)=>{if(p==='error')throw Error('offline');return {ok:p==='ok'} as Response;}) as typeof fetch;expect(await missingResources(['ok','missing','error'],fake)).toEqual(['missing','error']);});
});
