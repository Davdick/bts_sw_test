if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const b=e=>i(e,c),n={module:{uri:c},exports:f,require:b};s[c]=Promise.all(a.map((e=>n[e]||b(e)))).then((e=>(r(...e),f)))}}define(["./workbox-f1c8abb3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"css/bootstrap.css",revision:"c7cd92241382f300952c5a0b85603aa4"},{url:"css/responsive.css",revision:"03dff482298a2ea56be54535c5a584c2"},{url:"css/style.css",revision:"5895e890651351b58f14a3d66aaf9564"},{url:"images/banner bts.jpg",revision:"c6d17a3f7544f606000ba970323f5321"},{url:"images/bts frase.jpg",revision:"8c6ad107bf5ad4f9508fea7b19864b3e"},{url:"images/bts jimin.jfif",revision:"6345280a0b10d5bc027cf41d3c6388da"},{url:"images/bts jin.jpg",revision:"5d2e09bdc7ae4a30bfc1d945a79802ac"},{url:"images/bts junkok.jpg",revision:"3cc31e58c76e29f583ce7eddebbe86f4"},{url:"images/bts love 1.jfif",revision:"ea271f79fa11884831b9bf84b1f9950f"},{url:"images/bts love 2.jpg",revision:"56fdeff72c3647136e95ec21a5f56eca"},{url:"images/Bts map 7.jpg",revision:"f35e911d5341307f2a3033a2c7a20639"},{url:"images/bts Rm.jpg",revision:"3c50e516fc27f5059fa71c5e3e404615"},{url:"images/bts suga.jpg",revision:"e3d8db87c2c5849abb2342ea71086038"},{url:"images/bts v.jpg",revision:"fb035e813a7ac1783f5f54097066aecd"},{url:"images/BtsImagen1.png",revision:"846aff40ea37195cb49c7c1d90c9bf0b"},{url:"images/left-black-arrow.png",revision:"8352a5e4b1f2b1934e6ee31d558c47f5"},{url:"images/LogoBts.png",revision:"b84415780f90f8a73d25c87bc5bbde71"},{url:"images/logoBts1.jpg",revision:"6072cc49b871cc42d160a47e48a1b57f"},{url:"images/logoBts2.png",revision:"b84415780f90f8a73d25c87bc5bbde71"},{url:"images/logoBts3.jpg",revision:"bc19ab85cb73224bfe8b97007cdb4c8e"},{url:"images/menu.png",revision:"663d0241ef27916c3087082dd3ffcaa1"},{url:"images/next.png",revision:"0951fe16bd87206830fee20409600ad8"},{url:"images/prev.png",revision:"92c158e948c3c90b29eeae185f29140b"},{url:"images/right-black-arrow.png",revision:"968e13e4b2ce870421b1f5cb024b66da"},{url:"index.html",revision:"628dec4ffc476d3b109ade8928da6209"},{url:"js/bootstrap.js",revision:"d169b01291a4c213b16e869cde8fae8e"},{url:"js/jquery-3.4.1.min.js",revision:"2f772fed444d5489079f275bd01e26cc"},{url:"js/name.js",revision:"e2410cdaa16b6a7baf54e949057401c3"},{url:"manifest.json",revision:"1635b211a53b0905bc0e2894423047c1"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
