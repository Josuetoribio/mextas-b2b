import React from 'react';
const toPascal=(n)=>n.replace(/(^|[-_ ])(\w)/g,(_,__,c)=>c.toUpperCase());
export function Icon({name,size=18,strokeWidth=1.75,className,style,label}){
  const lib=(typeof window!=='undefined'&&window.lucide&&window.lucide.icons)||{};
  let node=lib[toPascal(name||'')]||lib[name];
  if(node&&node[0]==='svg')node=node[2];
  const kids=(node||[]).map(([tag,attrs],i)=>React.createElement(tag,{...attrs,key:i}));
  return React.createElement('svg',{xmlns:'http://www.w3.org/2000/svg',width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth,strokeLinecap:'round',strokeLinejoin:'round',className,style:{flex:'none',...style},'aria-hidden':label?undefined:true,role:label?'img':undefined,'aria-label':label},kids);
}