import React from 'react';
import { Icon } from './Icon.jsx';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function Button({variant='primary',size='md',arrow=false,icon,iconRight,fullWidth,href,className,children,type='button',...rest}){
  const cls=cx('mx-btn','mx-btn--'+variant,size!=='md'&&'mx-btn--'+size,fullWidth&&'mx-btn--full',className);
  const inner=[icon&&React.createElement(Icon,{key:'i',name:icon,size:size==='sm'?15:17}),React.createElement('span',{key:'t'},children),(arrow||iconRight)&&React.createElement(Icon,{key:'a',name:iconRight||'arrow-right',size:size==='sm'?15:17,className:'mx-btn__arrow'})];
  if(href)return React.createElement('a',{href,className:cls,...rest},inner);
  return React.createElement('button',{type,className:cls,...rest},inner);
}