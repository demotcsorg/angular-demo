(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{lMRr:function(e,t,n){"use strict";n.r(t);var o=n("ofXK"),r=n("tyNb"),c=n("LRne"),a=n("lJxs"),i=n("JIr8"),l=n("3Pt+"),d=n("fXoL"),s=n("HDdC");function g(e=0,t,n){return new s.a(o=>{void 0===t&&(t=e,e=0);let r=0,c=e;if(n)return n.schedule(b,0,{index:r,count:t,start:e,subscriber:o});for(;;){if(r++>=t){o.complete();break}if(o.next(c++),o.closed)break}})}function b(e){const{start:t,index:n,count:o,subscriber:r}=e;n>=o?r.complete():(r.next(t),r.closed||(e.index=n+1,e.start=t+1,this.schedule(e)))}var u=n("IAdc");let S=(()=>{class e{constructor(){}getAll(){return g(localStorage.length).pipe(Object(a.a)(e=>{const t=localStorage.key(e);return{key:t,value:localStorage.getItem(t)}}),Object(u.a)())}updateItem(e,t){localStorage.setItem(e,t)}deleteItem(e){localStorage.removeItem(e)}clear(){localStorage.clear()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=d.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),m=(()=>{class e{constructor(){}getAll(){return g(sessionStorage.length).pipe(Object(a.a)(e=>{const t=sessionStorage.key(e);return{key:t,value:sessionStorage.getItem(t)}}),Object(u.a)())}updateItem(e,t){sessionStorage.setItem(e,t)}deleteItem(e){sessionStorage.removeItem(e)}clear(){sessionStorage.clear()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=d.Jb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var v=n("E3Zs"),p=n("kmnG"),O=n("qFsG"),C=n("bTqV"),f=n("NFeN");function M(e,t){1&e&&(d.Tb(0,"mat-error"),d.vc(1,"Item key is required"),d.Sb())}function P(e,t){1&e&&(d.Tb(0,"mat-error"),d.vc(1,"Item key is required"),d.Sb())}let _=(()=>{class e{constructor(e,t,n){this.localStorage=e,this.sessionStorage=t,this.logger=n,this.addInputKeyField=new l.f("",l.w.required),this.addInputValueField=new l.f(""),this.deleteInputKeyField=new l.f("",l.w.required)}ngOnInit(){}get localStorageState(){return this.localStorage.getAll().pipe(Object(a.a)(e=>{const t={};for(const n of e)t[n.key]=n.value;return t}),Object(i.a)(e=>(this.logger.warn("WebStorageModule.WebStorageComponent.localStorageState: Unexpected error occurred ",e),Object(c.a)({}))))}get sessionStorageState(){return this.sessionStorage.getAll().pipe(Object(a.a)(e=>{const t={};for(const n of e)t[n.key]=n.value;return t}),Object(i.a)(e=>(this.logger.warn("WebStorageModule.WebStorageComponent.sessionStorageState: Unexpected error occurred ",e),Object(c.a)({}))))}updateLocalStorage(){try{this.addInputKeyField.valid&&this.addInputValueField.valid&&this.localStorage.updateItem(this.addInputKeyField.value,this.addInputValueField.value)}catch(e){this.logger.warn("WebStorageModule.WebStorageComponent.updateLocalStorage: Error has occurred ",e),alert("Error occurred")}}updateSessionStorage(){try{this.addInputKeyField.valid&&this.addInputValueField.valid&&this.sessionStorage.updateItem(this.addInputKeyField.value,this.addInputValueField.value)}catch(e){this.logger.warn("WebStorageModule.WebStorageComponent.updateSessionStorage: Error has occurred ",e),alert("Error occurred")}}clearLocalStorage(){this.localStorage.clear()}clearSessionStorage(){this.sessionStorage.clear()}deleteItemFromLocalStorage(){this.localStorage.deleteItem(this.deleteInputKeyField.value)}deleteItemFromSessionStorage(){this.sessionStorage.deleteItem(this.deleteInputKeyField.value)}}return e.\u0275fac=function(t){return new(t||e)(d.Nb(S),d.Nb(m),d.Nb(v.b))},e.\u0275cmp=d.Hb({type:e,selectors:[["app-storage"]],decls:56,vars:19,consts:[[1,"row","container"],[1,"column","controls-div"],[1,"column","add-controls-div"],["matInput","",3,"formControl"],[4,"ngIf"],[1,"add-buttons-div","row"],["mat-flat-button","","color","primary",3,"disabled","click"],[1,"column","delete-controls-div"],["mat-flat-button","","color","warn",3,"disabled","click"],[1,"column","session-storage-div"],[1,"row","title"],["mat-icon-button","","color","warn",3,"click"],[1,"column","local-storage-div"]],template:function(e,t){1&e&&(d.Tb(0,"div",0),d.Tb(1,"div",1),d.Tb(2,"div",2),d.Tb(3,"h2"),d.vc(4,"Add/Update An Item"),d.Sb(),d.Tb(5,"mat-form-field"),d.Tb(6,"label"),d.vc(7,"Item Key"),d.Sb(),d.Ob(8,"input",3),d.tc(9,M,2,0,"mat-error",4),d.Sb(),d.Tb(10,"mat-form-field"),d.Tb(11,"label"),d.vc(12,"Item Value"),d.Sb(),d.Ob(13,"input",3),d.Sb(),d.Tb(14,"div",5),d.Tb(15,"button",6),d.bc("click",(function(){return t.updateSessionStorage()})),d.vc(16," Add To Session Storage "),d.Sb(),d.Tb(17,"button",6),d.bc("click",(function(){return t.updateLocalStorage()})),d.vc(18," Add To Local Storage "),d.Sb(),d.Sb(),d.Sb(),d.Tb(19,"div",7),d.Tb(20,"h2"),d.vc(21,"Delete An Item"),d.Sb(),d.Tb(22,"mat-form-field"),d.Tb(23,"label"),d.vc(24,"Item Key"),d.Sb(),d.Ob(25,"input",3),d.tc(26,P,2,0,"mat-error",4),d.Sb(),d.Tb(27,"div",5),d.Tb(28,"button",8),d.bc("click",(function(){return t.deleteItemFromSessionStorage()})),d.vc(29," Delete From Session Storage "),d.Sb(),d.Tb(30,"button",8),d.bc("click",(function(){return t.deleteItemFromLocalStorage()})),d.vc(31," Delete From Local Storage "),d.Sb(),d.Sb(),d.Sb(),d.Sb(),d.Tb(32,"div",9),d.Tb(33,"div",10),d.Tb(34,"h2"),d.vc(35,"Session Storage State"),d.Sb(),d.Tb(36,"button",11),d.bc("click",(function(){return t.clearSessionStorage()})),d.Tb(37,"mat-icon"),d.vc(38,"delete"),d.Sb(),d.Sb(),d.Sb(),d.Tb(39,"pre"),d.Tb(40,"code"),d.vc(41),d.ec(42,"json"),d.ec(43,"async"),d.Sb(),d.Sb(),d.Sb(),d.Tb(44,"div",12),d.Tb(45,"div",10),d.Tb(46,"h2"),d.vc(47,"Local Storage State"),d.Sb(),d.Tb(48,"button",11),d.bc("click",(function(){return t.clearLocalStorage()})),d.Tb(49,"mat-icon"),d.vc(50,"delete"),d.Sb(),d.Sb(),d.Sb(),d.Tb(51,"pre"),d.Tb(52,"code"),d.vc(53),d.ec(54,"json"),d.ec(55,"async"),d.Sb(),d.Sb(),d.Sb(),d.Sb()),2&e&&(d.Bb(8),d.ic("formControl",t.addInputKeyField),d.Bb(1),d.ic("ngIf",t.addInputKeyField.hasError("required")),d.Bb(4),d.ic("formControl",t.addInputValueField),d.Bb(2),d.ic("disabled",t.addInputKeyField.invalid),d.Bb(2),d.ic("disabled",t.addInputKeyField.invalid),d.Bb(8),d.ic("formControl",t.deleteInputKeyField),d.Bb(1),d.ic("ngIf",t.deleteInputKeyField.hasError("required")),d.Bb(2),d.ic("disabled",t.deleteInputKeyField.invalid),d.Bb(2),d.ic("disabled",t.deleteInputKeyField.invalid),d.Bb(11),d.wc(d.fc(42,11,d.fc(43,13,t.sessionStorageState))),d.Bb(12),d.wc(d.fc(54,15,d.fc(55,17,t.localStorageState))))},directives:[p.b,O.a,l.b,l.q,l.g,o.o,C.b,f.a,p.a],pipes:[o.i,o.b],styles:[".container[_ngcontent-%COMP%]{padding:1em;width:calc(100% - 2em)}.container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .local-storage-div[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .session-storage-div[_ngcontent-%COMP%]{flex:1}.container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .local-storage-div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .session-storage-div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{align-items:center}.container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .local-storage-div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .session-storage-div[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:0;margin-right:.5em}.container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]{align-items:start;margin-right:1em}.container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]   .add-controls-div[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]   .delete-controls-div[_ngcontent-%COMP%]{border:1pt solid rgba(0,0,0,.6);border-radius:1em;margin-bottom:1em}.container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]   .add-controls-div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]   .delete-controls-div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{align-self:center;margin-top:1em;margin-bottom:0}.container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{align-self:stretch;margin:1em 4em}.container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-top:.5em}.container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 2em}.container[_ngcontent-%COMP%]   .controls-div[_ngcontent-%COMP%]   .add-buttons-div[_ngcontent-%COMP%]{margin-bottom:1em;align-items:center}"]}),e})();n.d(t,"WebStorageModule",(function(){return h}));const I=[{path:"",component:_}];let h=(()=>{class e{}return e.\u0275mod=d.Lb({type:e}),e.\u0275inj=d.Kb({factory:function(t){return new(t||e)},imports:[[o.c,r.c.forChild(I),p.d,O.b,C.c,l.u,f.b]]}),e})()}}]);