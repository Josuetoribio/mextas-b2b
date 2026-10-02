import React from 'react';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function Tabs({tabs=[],value,onChange,variant='pill',label,className}){
  const ref=React.useRef(null);const [ind,setInd]=React.useState({x:0,w:0});
  React.useLayoutEffect(()=>{const el=ref.current&&ref.current.querySelector('[aria-selected="true"]');if(el)setInd({x:el.offsetLeft,w:el.offsetWidth});},[value,tabs.length]);
  const onKey=(e)=>{const i=tabs.findIndex(t=>t.id===value);let n=i;if(e.key==='ArrowRight')n=(i+1)%tabs.length;else if(e.key==='ArrowLeft')n=(i-1+tabs.length)%tabs.length;else return;e.preventDefault();onChange&&onChange(tabs[n].id);const b=ref.current.querySelectorAll('[role=tab]')[n];b&&b.focus();};
  return React.createElement('div',{ref,role:'tablist','aria-label':label,className:cx('mx-tabs',variant==='underline'&&'mx-tabs--underline',className),onKeyDown:onKey},
    React.createElement('span',{className:'mx-tabs__ind',style:{transform:'translateX('+ind.x+'px)',width:ind.w},'aria-hidden':true}),
    tabs.map(t=>React.createElement('button',{key:t.id,type:'button',role:'tab','aria-selected':t.id===value,tabIndex:t.id===value?0:-1,className:'mx-tab',onClick:()=>onChange&&onChange(t.id)},t.label)));
}