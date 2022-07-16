/*! @license DOMPurify 2.3.9 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.9/LICENSE */function k(r){return k=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},k(r)}function Ne(r,a){return Ne=Object.setPrototypeOf||function(s,f){return s.__proto__=f,s},Ne(r,a)}function wt(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ae(r,a,o){return wt()?ae=Reflect.construct:ae=function(f,b,N){var M=[null];M.push.apply(M,b);var B=Function.bind.apply(f,M),W=new B;return N&&Ne(W,N.prototype),W},ae.apply(null,arguments)}function y(r){return Lt(r)||Ct(r)||It(r)||xt()}function Lt(r){if(Array.isArray(r))return Me(r)}function Ct(r){if(typeof Symbol!="undefined"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function It(r,a){if(!!r){if(typeof r=="string")return Me(r,a);var o=Object.prototype.toString.call(r).slice(8,-1);if(o==="Object"&&r.constructor&&(o=r.constructor.name),o==="Map"||o==="Set")return Array.from(r);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return Me(r,a)}}function Me(r,a){(a==null||a>r.length)&&(a=r.length);for(var o=0,s=new Array(a);o<a;o++)s[o]=r[o];return s}function xt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var kt=Object.hasOwnProperty,et=Object.setPrototypeOf,Ft=Object.isFrozen,Pt=Object.getPrototypeOf,Ut=Object.getOwnPropertyDescriptor,A=Object.freeze,O=Object.seal,Ht=Object.create,ot=typeof Reflect!="undefined"&&Reflect,ie=ot.apply,we=ot.construct;ie||(ie=function(a,o,s){return a.apply(o,s)});A||(A=function(a){return a});O||(O=function(a){return a});we||(we=function(a,o){return ae(a,y(o))});var zt=g(Array.prototype.forEach),tt=g(Array.prototype.pop),V=g(Array.prototype.push),ne=g(String.prototype.toLowerCase),Gt=g(String.prototype.match),C=g(String.prototype.replace),Bt=g(String.prototype.indexOf),Wt=g(String.prototype.trim),_=g(RegExp.prototype.test),be=$t(TypeError);function g(r){return function(a){for(var o=arguments.length,s=new Array(o>1?o-1:0),f=1;f<o;f++)s[f-1]=arguments[f];return ie(r,a,s)}}function $t(r){return function(){for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return we(r,o)}}function l(r,a,o){o=o||ne,et&&et(r,null);for(var s=a.length;s--;){var f=a[s];if(typeof f=="string"){var b=o(f);b!==f&&(Ft(a)||(a[s]=b),f=b)}r[f]=!0}return r}function x(r){var a=Ht(null),o;for(o in r)ie(kt,r,[o])&&(a[o]=r[o]);return a}function te(r,a){for(;r!==null;){var o=Ut(r,a);if(o){if(o.get)return g(o.get);if(typeof o.value=="function")return g(o.value)}r=Pt(r)}function s(f){return console.warn("fallback value for",f),null}return s}var rt=A(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Se=A(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Oe=A(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),jt=A(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Re=A(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Yt=A(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),at=A(["#text"]),nt=A(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),De=A(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),it=A(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),re=A(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Vt=O(/\{\{[\w\W]*|[\w\W]*\}\}/gm),qt=O(/<%[\w\W]*|[\w\W]*%>/gm),Xt=O(/^data-[\-\w.\u00B7-\uFFFF]/),Kt=O(/^aria-[\-\w]+$/),Zt=O(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Jt=O(/^(?:\w+script|data):/i),Qt=O(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),er=O(/^html$/i),tr=function(){return typeof window=="undefined"?null:window},rr=function(a,o){if(k(a)!=="object"||typeof a.createPolicy!="function")return null;var s=null,f="data-tt-policy-suffix";o.currentScript&&o.currentScript.hasAttribute(f)&&(s=o.currentScript.getAttribute(f));var b="dompurify"+(s?"#"+s:"");try{return a.createPolicy(b,{createHTML:function(M){return M}})}catch{return console.warn("TrustedTypes policy "+b+" could not be created."),null}};function lt(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:tr(),a=function(e){return lt(e)};if(a.version="2.3.9",a.removed=[],!r||!r.document||r.document.nodeType!==9)return a.isSupported=!1,a;var o=r.document,s=r.document,f=r.DocumentFragment,b=r.HTMLTemplateElement,N=r.Node,M=r.Element,B=r.NodeFilter,W=r.NamedNodeMap,st=W===void 0?r.NamedNodeMap||r.MozNamedAttrMap:W,ut=r.HTMLFormElement,ft=r.DOMParser,ct=r.trustedTypes,q=M.prototype,mt=te(q,"cloneNode"),pt=te(q,"nextSibling"),dt=te(q,"childNodes"),oe=te(q,"parentNode");if(typeof b=="function"){var le=s.createElement("template");le.content&&le.content.ownerDocument&&(s=le.content.ownerDocument)}var w=rr(ct,o),Le=w?w.createHTML(""):"",X=s,se=X.implementation,vt=X.createNodeIterator,ht=X.createDocumentFragment,Tt=X.getElementsByTagName,_t=o.importNode,Ce={};try{Ce=x(s).documentMode?s.documentMode:{}}catch{}var S={};a.isSupported=typeof oe=="function"&&se&&typeof se.createHTMLDocument!="undefined"&&Ce!==9;var ue=Vt,fe=qt,At=Xt,Et=Kt,yt=Jt,Ie=Qt,ce=Zt,m=null,xe=l({},[].concat(y(rt),y(Se),y(Oe),y(Re),y(at))),d=null,ke=l({},[].concat(y(nt),y(De),y(it),y(re))),c=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),$=null,me=null,Fe=!0,pe=!0,Pe=!1,F=!1,I=!1,de=!1,ve=!1,P=!1,K=!1,Z=!1,Ue=!0,he=!0,j=!1,U={},H=null,He=l({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),ze=null,Ge=l({},["audio","video","img","source","image","track"]),Te=null,Be=l({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),_e="http://www.w3.org/1998/Math/MathML",Ae="http://www.w3.org/2000/svg",L="http://www.w3.org/1999/xhtml",J=L,Ee=!1,z,gt=["application/xhtml+xml","text/html"],bt="text/html",p,G=null,St=s.createElement("form"),We=function(e){return e instanceof RegExp||e instanceof Function},ye=function(e){G&&G===e||((!e||k(e)!=="object")&&(e={}),e=x(e),z=gt.indexOf(e.PARSER_MEDIA_TYPE)===-1?z=bt:z=e.PARSER_MEDIA_TYPE,p=z==="application/xhtml+xml"?function(t){return t}:ne,m="ALLOWED_TAGS"in e?l({},e.ALLOWED_TAGS,p):xe,d="ALLOWED_ATTR"in e?l({},e.ALLOWED_ATTR,p):ke,Te="ADD_URI_SAFE_ATTR"in e?l(x(Be),e.ADD_URI_SAFE_ATTR,p):Be,ze="ADD_DATA_URI_TAGS"in e?l(x(Ge),e.ADD_DATA_URI_TAGS,p):Ge,H="FORBID_CONTENTS"in e?l({},e.FORBID_CONTENTS,p):He,$="FORBID_TAGS"in e?l({},e.FORBID_TAGS,p):{},me="FORBID_ATTR"in e?l({},e.FORBID_ATTR,p):{},U="USE_PROFILES"in e?e.USE_PROFILES:!1,Fe=e.ALLOW_ARIA_ATTR!==!1,pe=e.ALLOW_DATA_ATTR!==!1,Pe=e.ALLOW_UNKNOWN_PROTOCOLS||!1,F=e.SAFE_FOR_TEMPLATES||!1,I=e.WHOLE_DOCUMENT||!1,P=e.RETURN_DOM||!1,K=e.RETURN_DOM_FRAGMENT||!1,Z=e.RETURN_TRUSTED_TYPE||!1,ve=e.FORCE_BODY||!1,Ue=e.SANITIZE_DOM!==!1,he=e.KEEP_CONTENT!==!1,j=e.IN_PLACE||!1,ce=e.ALLOWED_URI_REGEXP||ce,J=e.NAMESPACE||L,e.CUSTOM_ELEMENT_HANDLING&&We(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(c.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&We(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(c.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(c.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),F&&(pe=!1),K&&(P=!0),U&&(m=l({},y(at)),d=[],U.html===!0&&(l(m,rt),l(d,nt)),U.svg===!0&&(l(m,Se),l(d,De),l(d,re)),U.svgFilters===!0&&(l(m,Oe),l(d,De),l(d,re)),U.mathMl===!0&&(l(m,Re),l(d,it),l(d,re))),e.ADD_TAGS&&(m===xe&&(m=x(m)),l(m,e.ADD_TAGS,p)),e.ADD_ATTR&&(d===ke&&(d=x(d)),l(d,e.ADD_ATTR,p)),e.ADD_URI_SAFE_ATTR&&l(Te,e.ADD_URI_SAFE_ATTR,p),e.FORBID_CONTENTS&&(H===He&&(H=x(H)),l(H,e.FORBID_CONTENTS,p)),he&&(m["#text"]=!0),I&&l(m,["html","head","body"]),m.table&&(l(m,["tbody"]),delete $.tbody),A&&A(e),G=e)},$e=l({},["mi","mo","mn","ms","mtext"]),je=l({},["foreignobject","desc","title","annotation-xml"]),Ot=l({},["title","style","font","a","script"]),Q=l({},Se);l(Q,Oe),l(Q,jt);var ge=l({},Re);l(ge,Yt);var Rt=function(e){var t=oe(e);(!t||!t.tagName)&&(t={namespaceURI:L,tagName:"template"});var n=ne(e.tagName),u=ne(t.tagName);return e.namespaceURI===Ae?t.namespaceURI===L?n==="svg":t.namespaceURI===_e?n==="svg"&&(u==="annotation-xml"||$e[u]):Boolean(Q[n]):e.namespaceURI===_e?t.namespaceURI===L?n==="math":t.namespaceURI===Ae?n==="math"&&je[u]:Boolean(ge[n]):e.namespaceURI===L?t.namespaceURI===Ae&&!je[u]||t.namespaceURI===_e&&!$e[u]?!1:!ge[n]&&(Ot[n]||!Q[n]):!1},R=function(e){V(a.removed,{element:e});try{e.parentNode.removeChild(e)}catch{try{e.outerHTML=Le}catch{e.remove()}}},Ye=function(e,t){try{V(a.removed,{attribute:t.getAttributeNode(e),from:t})}catch{V(a.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!d[e])if(P||K)try{R(t)}catch{}else try{t.setAttribute(e,"")}catch{}},Ve=function(e){var t,n;if(ve)e="<remove></remove>"+e;else{var u=Gt(e,/^[\r\n\t ]+/);n=u&&u[0]}z==="application/xhtml+xml"&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var E=w?w.createHTML(e):e;if(J===L)try{t=new ft().parseFromString(E,z)}catch{}if(!t||!t.documentElement){t=se.createDocument(J,"template",null);try{t.documentElement.innerHTML=Ee?"":E}catch{}}var h=t.body||t.documentElement;return e&&n&&h.insertBefore(s.createTextNode(n),h.childNodes[0]||null),J===L?Tt.call(t,I?"html":"body")[0]:I?t.documentElement:h},qe=function(e){return vt.call(e.ownerDocument||e,e,B.SHOW_ELEMENT|B.SHOW_COMMENT|B.SHOW_TEXT,null,!1)},Dt=function(e){return e instanceof ut&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof st)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function")},Y=function(e){return k(N)==="object"?e instanceof N:e&&k(e)==="object"&&typeof e.nodeType=="number"&&typeof e.nodeName=="string"},D=function(e,t,n){!S[e]||zt(S[e],function(u){u.call(a,t,n,G)})},Xe=function(e){var t;if(D("beforeSanitizeElements",e,null),Dt(e)||_(/[\u0080-\uFFFF]/,e.nodeName))return R(e),!0;var n=p(e.nodeName);if(D("uponSanitizeElement",e,{tagName:n,allowedTags:m}),e.hasChildNodes()&&!Y(e.firstElementChild)&&(!Y(e.content)||!Y(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent)||n==="select"&&_(/<template/i,e.innerHTML))return R(e),!0;if(!m[n]||$[n]){if(!$[n]&&Ze(n)&&(c.tagNameCheck instanceof RegExp&&_(c.tagNameCheck,n)||c.tagNameCheck instanceof Function&&c.tagNameCheck(n)))return!1;if(he&&!H[n]){var u=oe(e)||e.parentNode,E=dt(e)||e.childNodes;if(E&&u)for(var h=E.length,v=h-1;v>=0;--v)u.insertBefore(mt(E[v],!0),pt(e))}return R(e),!0}return e instanceof M&&!Rt(e)||(n==="noscript"||n==="noembed")&&_(/<\/no(script|embed)/i,e.innerHTML)?(R(e),!0):(F&&e.nodeType===3&&(t=e.textContent,t=C(t,ue," "),t=C(t,fe," "),e.textContent!==t&&(V(a.removed,{element:e.cloneNode()}),e.textContent=t)),D("afterSanitizeElements",e,null),!1)},Ke=function(e,t,n){if(Ue&&(t==="id"||t==="name")&&(n in s||n in St))return!1;if(!(pe&&!me[t]&&_(At,t))){if(!(Fe&&_(Et,t))){if(!d[t]||me[t]){if(!(Ze(e)&&(c.tagNameCheck instanceof RegExp&&_(c.tagNameCheck,e)||c.tagNameCheck instanceof Function&&c.tagNameCheck(e))&&(c.attributeNameCheck instanceof RegExp&&_(c.attributeNameCheck,t)||c.attributeNameCheck instanceof Function&&c.attributeNameCheck(t))||t==="is"&&c.allowCustomizedBuiltInElements&&(c.tagNameCheck instanceof RegExp&&_(c.tagNameCheck,n)||c.tagNameCheck instanceof Function&&c.tagNameCheck(n))))return!1}else if(!Te[t]){if(!_(ce,C(n,Ie,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&Bt(n,"data:")===0&&ze[e])){if(!(Pe&&!_(yt,C(n,Ie,"")))){if(n)return!1}}}}}}return!0},Ze=function(e){return e.indexOf("-")>0},Je=function(e){var t,n,u,E;D("beforeSanitizeAttributes",e,null);var h=e.attributes;if(!!h){var v={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:d};for(E=h.length;E--;){t=h[E];var ee=t,T=ee.name,Qe=ee.namespaceURI;if(n=T==="value"?t.value:Wt(t.value),u=p(T),v.attrName=u,v.attrValue=n,v.keepAttr=!0,v.forceKeepAttr=void 0,D("uponSanitizeAttribute",e,v),n=v.attrValue,!v.forceKeepAttr&&(Ye(T,e),!!v.keepAttr)){if(_(/\/>/i,n)){Ye(T,e);continue}F&&(n=C(n,ue," "),n=C(n,fe," "));var Mt=p(e.nodeName);if(!!Ke(Mt,u,n))try{Qe?e.setAttributeNS(Qe,T,n):e.setAttribute(T,n),tt(a.removed)}catch{}}}D("afterSanitizeAttributes",e,null)}},Nt=function i(e){var t,n=qe(e);for(D("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)D("uponSanitizeShadowNode",t,null),!Xe(t)&&(t.content instanceof f&&i(t.content),Je(t));D("afterSanitizeShadowDOM",e,null)};return a.sanitize=function(i,e){var t,n,u,E,h;if(Ee=!i,Ee&&(i="<!-->"),typeof i!="string"&&!Y(i)){if(typeof i.toString!="function")throw be("toString is not a function");if(i=i.toString(),typeof i!="string")throw be("dirty is not a string, aborting")}if(!a.isSupported){if(k(r.toStaticHTML)==="object"||typeof r.toStaticHTML=="function"){if(typeof i=="string")return r.toStaticHTML(i);if(Y(i))return r.toStaticHTML(i.outerHTML)}return i}if(de||ye(e),a.removed=[],typeof i=="string"&&(j=!1),j){if(i.nodeName){var v=p(i.nodeName);if(!m[v]||$[v])throw be("root node is forbidden and cannot be sanitized in-place")}}else if(i instanceof N)t=Ve("<!---->"),n=t.ownerDocument.importNode(i,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!P&&!F&&!I&&i.indexOf("<")===-1)return w&&Z?w.createHTML(i):i;if(t=Ve(i),!t)return P?null:Z?Le:""}t&&ve&&R(t.firstChild);for(var ee=qe(j?i:t);u=ee.nextNode();)u.nodeType===3&&u===E||Xe(u)||(u.content instanceof f&&Nt(u.content),Je(u),E=u);if(E=null,j)return i;if(P){if(K)for(h=ht.call(t.ownerDocument);t.firstChild;)h.appendChild(t.firstChild);else h=t;return d.shadowroot&&(h=_t.call(o,h,!0)),h}var T=I?t.outerHTML:t.innerHTML;return I&&m["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&_(er,t.ownerDocument.doctype.name)&&(T="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+T),F&&(T=C(T,ue," "),T=C(T,fe," ")),w&&Z?w.createHTML(T):T},a.setConfig=function(i){ye(i),de=!0},a.clearConfig=function(){G=null,de=!1},a.isValidAttribute=function(i,e,t){G||ye({});var n=p(i),u=p(e);return Ke(n,u,t)},a.addHook=function(i,e){typeof e=="function"&&(S[i]=S[i]||[],V(S[i],e))},a.removeHook=function(i){if(S[i])return tt(S[i])},a.removeHooks=function(i){S[i]&&(S[i]=[])},a.removeAllHooks=function(){S={}},a}var nr=lt();export{nr as default};