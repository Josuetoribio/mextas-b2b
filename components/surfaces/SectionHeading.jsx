import React from 'react';
import { Eyebrow } from '../core/Eyebrow.jsx';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function SectionHeading({eyebrow,title,accent,description,align='left',size='lg',as='h2',className,id}){
  return React.createElement('div',{className:cx('mx-heading',align==='center'&&'mx-heading--center',className)},
    eyebrow&&React.createElement(Eyebrow,null,eyebrow),
    React.createElement(as,{className:cx('mx-heading__title',size==='xl'&&'mx-heading__title--xl'),id},title,accent&&React.createElement('span',{className:'mx-heading__accent'},accent)),
    description&&React.createElement('p',{className:'mx-heading__desc'},description));
}