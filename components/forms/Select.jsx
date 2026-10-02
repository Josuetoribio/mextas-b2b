import React from 'react';
import { Icon } from '../core/Icon.jsx';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function Select({label,id,options=[],placeholder,hint,error,required,className,...rest}){
  const fid=id||('s-'+(label||'').toLowerCase().replace(/[^a-z0-9]+/g,'-'));
  return React.createElement('div',{className:cx('mx-field',className)},
    label&&React.createElement('label',{htmlFor:fid,className:'mx-field__label'},label,required&&React.createElement('span',{className:'mx-field__req','aria-hidden':true},'*')),
    React.createElement('div',{className:'mx-select'},
      React.createElement('select',{id:fid,required,className:cx('mx-input',error&&'mx-input--error'),...rest},
        placeholder&&React.createElement('option',{value:''},placeholder),
        options.map(o=>{const v=typeof o==='string'?{value:o,label:o}:o;return React.createElement('option',{key:v.value,value:v.value},v.label)})),
      React.createElement(Icon,{name:'chevron-down',size:16,className:'mx-select__chev'})),
    (error||hint)&&React.createElement('span',{className:error?'mx-field__error':'mx-field__hint'},error||hint));
}