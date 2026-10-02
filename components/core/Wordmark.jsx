import React from 'react';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function Wordmark({size=22,href,className,...rest}){
  const kids=['Mextas',React.createElement('span',{key:'d',className:'mx-wordmark__dot'},'.')];
  const p={className:cx('mx-wordmark',className),style:{fontSize:size},...rest};
  return href?React.createElement('a',{href,'aria-label':'Mextas — inicio',...p},kids):React.createElement('span',p,kids);
}