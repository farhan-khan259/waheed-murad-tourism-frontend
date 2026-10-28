import '@testing-library/jest-dom';
window.scrollTo=()=>{};
window.matchMedia=window.matchMedia||(()=>({matches:false,addListener:()=>{},removeListener:()=>{},addEventListener:()=>{},removeEventListener:()=>{},dispatchEvent:()=>false}));
global.IntersectionObserver=class { observe(){} unobserve(){} disconnect(){} };
