import React from 'react';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function Input({label,id,hint,error,required,multiline=false,className,...rest}){
  const fid=id||('f-'+(label||'').toLowerCase().replace(/[^a-z0-9]+/g,'-'));
  const ctl=React.createElement(multiline?'textarea':'input',{id:fid,required,'aria-invalid':!!error||undefined,'aria-describedby':(hint||error)?fid+'-d':undefined,className:cx('mx-input',error&&'mx-input--error'),...rest});
  return React.createElement('div',{className:cx('mx-field',className)},
    label&&React.createElement('label',{htmlFor:fid,className:'mx-field__label'},label,required&&React.createElement('span',{className:'mx-field__req','aria-hidden':true},'*')),
    ctl,(error||hint)&&React.createElement('span',{id:fid+'-d',className:error?'mx-field__error':'mx-field__hint'},error||hint));
}