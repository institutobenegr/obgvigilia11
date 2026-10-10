const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
function setup({reduced=false,observer=true,invalidCheckout=false}={}){
 const classes=new Set();const shown=new Set();const observed=[];const unobserved=[];let callback;
 const links=['group','group','checkout','checkout','support'].map(type=>({dataset:{link:type},href:'html-fallback-'+type}));
 const block={classList:{add:value=>shown.add(value)}};
 const context={URL,window:{matchMedia:()=>({matches:reduced})},document:{documentElement:{classList:{add:value=>classes.add(value)}},querySelectorAll:selector=>selector==='[data-link]'?links:[block]}};
 if(observer)context.window.IntersectionObserver=class{constructor(fn){callback=fn;}observe(el){observed.push(el);}unobserve(el){unobserved.push(el);}};
 vm.createContext(context);
 vm.runInContext(fs.readFileSync('config.js','utf8'),context);
 if(invalidCheckout)context.window.VIGILIA_OBRIGADO={...context.window.VIGILIA_OBRIGADO,checkoutUrl:'javascript:alert(1)'};
 vm.runInContext(fs.readFileSync('script.js','utf8'),context);
 return {links,classes,shown,observed,unobserved,block,callback};
}
let env=setup();
assert.equal(env.links[0].href,'https://chat.whatsapp.com/CY70fQHPCHnFihdlZTp3QD');
assert.equal(env.links[1].href,env.links[0].href);
assert.equal(env.links[2].href,'https://pay.kiwify.com.br/mjIZGaO');
assert.equal(env.links[3].href,env.links[2].href);
assert.equal(env.links[4].href,'https://wa.me/5583999935710');
assert.equal(env.observed.length,1);
env.callback([{target:env.block,isIntersecting:true}]);
assert.equal(env.shown.has('is-visible'),true);assert.equal(env.unobserved.length,1);
env=setup({reduced:true});assert.equal(env.classes.has('motion'),false);assert.equal(env.observed.length,0);
env=setup({observer:false});assert.equal(env.classes.has('motion'),false);
env=setup({invalidCheckout:true});assert.equal(env.links[2].href,'html-fallback-checkout');
console.log('PASS: checkout e grupo independentes, movimento uma vez, movimento reduzido, fallback sem observador e URL inválida.');
