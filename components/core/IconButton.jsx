import React from 'react';
import { Icon } from './Icon.jsx';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function IconButton({icon,label,variant='glass',size='md',className,...rest}){
  return React.createElement('button',{type:'button','aria-label':label,title:label,className:cx('mx-iconbtn',variant==='solid'&&'mx-iconbtn--solid',size!=='md'&&'mx-iconbtn--'+size,className),...rest},React.createElement(Icon,{name:icon,size:size==='sm'?15:size==='lg'?20:17}));
}