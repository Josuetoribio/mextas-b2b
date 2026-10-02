import React from 'react';
import { IconButton } from '../core/IconButton.jsx';
const cx=(...a)=>a.filter(Boolean).join(' ');
export function Dialog({open,onClose,title,size='lg',variant='modal',label,children,className}){
  const ref=React.useRef(null);
  React.useEffect(()=>{if(!open)return;const prev=document.activeElement;const k=(e)=>{if(e.key==='Escape')onClose&&onClose();if(e.key==='Tab'&&ref.current){const f=ref.current.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');if(!f.length)return;const a=f[0],b=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();b.focus();}else if(!e.shiftKey&&document.activeElement===b){e.preventDefault();a.focus();}}};document.addEventListener('keydown',k);const o=document.body.style.overflow;document.body.style.overflow='hidden';setTimeout(()=>{ref.current&&ref.current.focus();},20);return()=>{document.removeEventListener('keydown',k);document.body.style.overflow=o;prev&&prev.focus&&prev.focus();};},[open]);
  if(!open)return null;
  return React.createElement('div',{className:cx('mx-dialog-backdrop mx-root',variant==='drawer'&&'mx-dialog-backdrop--drawer'),onMouseDown:(e)=>{if(e.target===e.currentTarget)onClose&&onClose();}},
    React.createElement('div',{ref,role:'dialog','aria-modal':true,'aria-label':label||(typeof title==='string'?title:undefined),tabIndex:-1,className:cx('mx-dialog','mx-dialog--'+size,className)},
      React.createElement(IconButton,{icon:'x',label:'Cerrar',size:'sm',className:'mx-dialog__close',onClick:onClose}),
      title&&React.createElement('div',{className:'mx-dialog__head'},React.createElement('h2',{className:'mx-dialog__title'},title)),
      title?React.createElement('div',{className:'mx-dialog__body'},children):children));
}