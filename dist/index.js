"use strict";var c=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var F=c(function(yr,P){
var T=require('@stdlib/ndarray-base-vind2bind/dist'),V="throw";function rr(a,r,e,u,v){var s,t,n,i,d,f,o,m,y,g,b,w,q,D,M,B,G,H,k,E,j,J,K,N,l;if(M=a.length,w=a.shape,q=r.shape,D=e.shape,s=a.data,t=r.data,n=e.data,B=a.strides,G=r.strides,H=e.strides,k=a.offset,E=r.offset,j=e.offset,i=a.order,d=r.order,f=e.order,o=a.accessors[0],m=r.accessors[0],y=e.accessors[1],g=a.ref,b=r.ref,w.length===0&&q.length===0){y(n,j,u.call(v,o(s,k),m(t,E),0,[g,b]));return}for(l=M-1;l>=0;l--)J=T(w,B,k,i,l,V),K=T(q,G,E,d,l,V),N=T(D,H,j,f,l,V),y(n,N,u.call(v,o(s,J),m(t,K),l,[g,b]))}P.exports=rr
});var I=c(function(gr,Q){
function ar(a,r,e,u,v){var s,t,n,i,d,f,o;for(s=a.data,t=r.data,n=e.data,i=a.accessors[0],d=r.accessors[0],f=e.accessors[1],o=s.length-1;o>=0;o--)f(n,o,u.call(v,i(s,o),d(t,o),o,[s,t]))}Q.exports=ar
});var Z=c(function(br,Y){
var U=require('@stdlib/assert-is-array-like-object/dist'),W=require('@stdlib/assert-is-ndarray-like/dist'),er=require('@stdlib/assert-is-function/dist'),tr=require('@stdlib/array-base-zeros/dist'),R=require('@stdlib/ndarray-base-ndarraylike2object/dist'),z=require('@stdlib/array-base-arraylike2object/dist'),ir=require('@stdlib/ndarray-zeros/dist'),nr=require('@stdlib/ndarray-base-broadcast-shapes/dist'),X=require('@stdlib/ndarray-base-maybe-broadcast-array/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),sr=F(),ur=I();function or(a,r,e,u){var v,s,t,n,i;if(!er(e))throw new TypeError(p('1VV2H',e));if(v=W(a),s=W(r),v){if(!s)throw new TypeError(p('1VVBI',r));if(i=nr([a.shape,r.shape]),i===null)throw new Error(format('1VV1j'));return n=R(X(a,i)),n.ref=a,a=n,n=R(X(r,i)),n.ref=r,r=n,t=ir(i,{dtype:"generic",order:a.order}),sr(a,r,R(t),e,u),t}if(U(a)){if(s||!U(r))throw new TypeError(p('1VVBK',r));if(r.length!==a.length)throw new RangeError(format('1VVD3'));return t=tr(a.length),ur(z(a),z(r),z(t),e,u),t}throw new TypeError(p('1VVBH',a))}Y.exports=or
});var A=c(function(wr,$){
var O=require('@stdlib/assert-is-array-like-object/dist'),L=require('@stdlib/assert-is-ndarray-like/dist'),vr=require('@stdlib/assert-is-function/dist'),S=require('@stdlib/ndarray-base-ndarraylike2object/dist'),C=require('@stdlib/array-base-arraylike2object/dist'),_=require('@stdlib/ndarray-base-maybe-broadcast-array/dist'),dr=require('@stdlib/ndarray-base-assert-is-read-only/dist'),h=require('@stdlib/error-tools-fmtprodmsg/dist'),lr=F(),hr=I();function fr(a,r,e,u,v){var s,t,n,i,d;if(!vr(u))throw new TypeError(h('1VV32',u));if(s=L(a),t=L(r),n=L(e),s){if(!t)throw new TypeError(h('1VVBI',r));if(!n)throw new TypeError(h('1VVBJ',e));if(dr(e))throw new Error(format('1VV1g'));return e=S(e),d=e.shape,i=S(_(a,d)),i.ref=a,a=i,i=S(_(r,d)),i.ref=r,r=i,lr(a,r,e,u,v),e.ref}if(O(a)){if(t||!O(r))throw new TypeError(h('1VVBK',r));if(n||!O(e))throw new TypeError(h('1VVBL',e));if(a.length!==r.length||r.length!==e.length)throw new RangeError(format('1VV1h'));return hr(C(a),C(r),C(e),u,v),e}throw new TypeError(h('1VVBH',a))}$.exports=fr
});var cr=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=Z(),pr=A();cr(x,"assign",pr);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
