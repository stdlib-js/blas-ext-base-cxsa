"use strict";var c=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var m=c(function(I,x){
var w=require('@stdlib/strided-base-reinterpret-complex64/dist'),E=require('@stdlib/complex-float32-real/dist'),M=require('@stdlib/complex-float32-imag/dist'),o=5;function O(a,i,s,n,g){var e,t,u,r,q,f,v;if(a<=0||(t=E(i),u=M(i),t===0&&u===0))return s;if(e=w(s,0),r=g*2,q=n*2,n===1){if(f=a%o,f>0)for(v=0;v<f;v++)e[r]-=t,e[r+1]-=u,r+=q;if(a<o)return s;for(v=f;v<a;v+=o)e[r]-=t,e[r+1]-=u,e[r+2]-=t,e[r+3]-=u,e[r+4]-=t,e[r+5]-=u,e[r+6]-=t,e[r+7]-=u,e[r+8]-=t,e[r+9]-=u,r+=o*2;return s}for(v=0;v<a;v++)e[r]-=t,e[r+1]-=u,r+=q;return s}x.exports=O
});var d=c(function(J,y){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=m();function z(a,i,s,n){return k(a,i,s,n,b(a,n))}y.exports=z
});var R=c(function(K,l){
var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=d(),B=m();A(j,"ndarray",B);l.exports=j
});var C=require("path").join,D=require('@stdlib/utils-try-require/dist'),F=require('@stdlib/assert-is-error/dist'),G=R(),p,_=D(C(__dirname,"./native.js"));F(_)?p=G:p=_;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
