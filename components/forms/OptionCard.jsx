import React from 'react';
import { Icon } from '../core/Icon.jsx';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function OptionCard({type='radio',name,value,checked,onChange,label,description,icon,className}){
  return React.createElement('label',{className:cx('mx-option',type==='checkbox'&&'mx-option--checkbox',checked&&'mx-option--checked',className)},
    React.createElement('input',{type,name,value,checked:!!checked,onChange:(e)=>onChange&&onChange(value,e)}),
    React.createElement('span',{className:'mx-option__ind','aria-hidden':true}),
    icon&&React.createElement(Icon,{name:icon,size:18,className:'mx-option__icon'}),
    React.createElement('span',{className:'mx-option__body'},React.createElement('span',null,label),description&&React.createElement('span',{className:'mx-option__desc'},description)));
}