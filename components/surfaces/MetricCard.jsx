import React from 'react';
import { Icon } from '../core/Icon.jsx';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function MetricCard({label,value,caption,icon,className,style}){
  return React.createElement('div',{className:cx('mx-card mx-card--glass mx-metric',className),style},
    icon&&React.createElement('span',{className:'mx-metric__icon'},React.createElement(Icon,{name:icon,size:19})),
    React.createElement('div',null,React.createElement('div',{className:'mx-metric__label'},label),React.createElement('div',{className:'mx-metric__value'},value),caption&&React.createElement('div',{className:'mx-metric__caption'},caption)));
}