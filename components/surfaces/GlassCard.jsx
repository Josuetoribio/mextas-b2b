import React from 'react';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function GlassCard({as='div',glass=false,glow=false,interactive=false,padding='md',className,children,...rest}){
  return React.createElement(as,{className:cx('mx-card',glass&&'mx-card--glass',glow&&'mx-card--glow',interactive&&'mx-card--interactive',padding!=='none'&&'mx-card--pad-'+padding,className),...rest},children);
}