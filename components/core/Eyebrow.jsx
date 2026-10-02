import React from 'react';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function Eyebrow({children,tone='accent',mark=true,className}){
  return React.createElement('span',{className:cx('mx-eyebrow',tone==='muted'&&'mx-eyebrow--muted',className)},mark&&React.createElement('span',{className:'mx-eyebrow__mark','aria-hidden':true}),children);
}