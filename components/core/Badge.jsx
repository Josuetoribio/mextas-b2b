import React from 'react';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function Badge({children,tone='neutral',dot=false,className}){
  return React.createElement('span',{className:cx('mx-badge',tone!=='neutral'&&'mx-badge--'+tone,className)},dot&&React.createElement('span',{className:'mx-badge__dot'}),children);
}