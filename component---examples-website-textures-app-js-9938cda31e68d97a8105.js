(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{KnHi:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Tt})),r.d(t,"renderToDOM",(function(){return Rt}));var a,n=r("dI71"),s=r("q1tI"),o=r.n(s),c=r("i8i4"),i=r("iein"),u=r("OklE"),l=[{formatName:"Browser Native Formats (Uncompressed)",description:"Non-texture image formats. Compact on disk, but need to be fully decompressed into GPU texture memory, and mipmaps need to be generated by client.",codeSample:"load(url, ImageLoader)",images:[{format:"JPG",src:"shannon.jpg"},{format:"GIF",src:"shannon.gif"},{format:"PNG",src:"shannon.png"},{format:"BMP",src:"shannon.bmp"},{format:"WEBP",src:"shannon.webp"}]},{formatName:"S3 Texture Compression (WEBGL_compressed_texture_s3tc)",description:"S3 (aka DXTn, DXTC, or BCn).",availability:"Common on desktop GPUs. DXT5 is usually the preferred version",link:"https://en.wikipedia.org/wiki/S3_Texture_Compression",codeSample:"load(url, CompressedTextureLoader)",images:[{format:"DXT5",src:"shannon-dxt5.dds"},{format:"DXT3",src:"shannon-dxt3.dds"},{format:"DXT1",src:"shannon-dxt1.dds"}]},{formatName:"PowerVR Texture Compression (WEBGL_compressed_texture_pvrtc)",description:"Lossy, fixed-rate GPU texture compression format",availability:"Mobile devices with PowerVR chipsets, including iPhone, iPod Touch and iPad and certain Android devices.",link:"https://en.wikipedia.org/wiki/PVRTC",codeSample:"load(url, CompressedTextureLoader)",images:[{format:"PVRTC (2BPP RGB)",src:"shannon-pvrtc-2bpp-rgb.pvr"},{format:"PVRTC (2BPP RGBA)",src:"shannon-pvrtc-2bpp-rgba.pvr"},{format:"PVRTC (4BPP RGB)",src:"shannon-pvrtc-4bpp-rgb.pvr"},{format:"PVRTC (2BPP RGBA)",src:"shannon-pvrtc-4bpp-rgba.pvr"}]},{formatName:"ATC (WEBGL_compressed_texture_atc)",codeSample:"load(url, CompressedTextureLoader)",images:[{format:"ATC (RGB)",src:"shannon-atc-rgb.dds"},{format:"ATC (RGBA, Explicit)",src:"shannon-atc-rgba-explicit.dds"},{format:"ATC (RGBA, Interpolated)",src:"shannon-atc-rgba-interpolated.dds"}]},{formatName:"ASTC (WEBGL_compressed_texture_astc)",images:[{format:"ASTC 4x4",src:"shannon-astc-4x4.pvr"},{format:"ASTC 5x4",src:"shannon-astc-5x4.pvr"},{format:"ASTC 5x5",src:"shannon-astc-5x5.pvr"},{format:"ASTC 6x5",src:"shannon-astc-6x5.pvr"},{format:"ASTC 6x6",src:"shannon-astc-6x6.pvr"},{format:"ASTC 8x5",src:"shannon-astc-8x5.pvr"},{format:"ASTC 8x6",src:"shannon-astc-8x6.pvr"},{format:"ASTC 8x8",src:"shannon-astc-8x8.pvr"},{format:"ASTC 10x5",src:"shannon-astc-10x5.pvr"},{format:"ASTC 10x6",src:"shannon-astc-10x6.pvr"},{format:"ASTC 10x8",src:"shannon-astc-10x8.pvr"},{format:"ASTC 10x10",src:"shannon-astc-10x10.pvr"},{format:"ASTC 12x10",src:"shannon-astc-12x10.pvr"},{format:"ASTC 12x12",src:"shannon-astc-12x12.pvr"}]},{formatName:"ASTC (sRGB) (WEBGL_compressed_texture_astc)",images:[{format:"ASTC (sRGB) 4x4",src:"shannon-astc-srgb-4x4.pvr"},{format:"ASTC (sRGB) 5x4",src:"shannon-astc-srgb-5x4.pvr"},{format:"ASTC (sRGB) 5x5",src:"shannon-astc-srgb-5x5.pvr"},{format:"ASTC (sRGB) 6x5",src:"shannon-astc-srgb-6x5.pvr"},{format:"ASTC (sRGB) 6x6",src:"shannon-astc-srgb-6x6.pvr"},{format:"ASTC (sRGB) 8x5",src:"shannon-astc-srgb-8x5.pvr"},{format:"ASTC (sRGB) 8x6",src:"shannon-astc-srgb-8x6.pvr"},{format:"ASTC (sRGB) 8x8",src:"shannon-astc-srgb-8x8.pvr"},{format:"ASTC (sRGB) 10x5",src:"shannon-astc-srgb-10x5.pvr"},{format:"ASTC (sRGB) 10x6",src:"shannon-astc-srgb-10x6.pvr"},{format:"ASTC (sRGB) 10x8",src:"shannon-astc-srgb-10x8.pvr"},{format:"ASTC (sRGB) 10x10",src:"shannon-astc-srgb-10x10.pvr"},{format:"ASTC (sRGB) 12x10",src:"shannon-astc-srgb-12x10.pvr"},{format:"ASTC (sRGB) 12x12",src:"shannon-astc-srgb-12x12.pvr"}]},{formatName:"ETC1 (WEBGL_compressed_texture_etc1)",images:[{format:"ETC1",src:"shannon-etc1.pvr"}]},{formatName:"Crunch",description:"Advanced DXTn texture compression library.",link:"https://github.com/BinomialLLC/crunch",codeSample:"load(url, CrunchLoader)",images:[{format:"DXT1 (Crunch)",src:"shannon-dxt1.crn"},{format:"DXT5 (Crunch)",src:"shannon-dxt5.crn"}]},{formatName:"KTX",codeSample:"load(url, CompressedTextureLoader)",images:[{format:"DXT1",src:"shannon-dxt1.ktx2"},{format:"DXT3",src:"shannon-dxt3.ktx2"},{format:"DXT5",src:"shannon-dxt5.ktx2"}]},{formatName:"Basis Universal",description:"Supercompressed GPU Texture Codec",link:"https://github.com/BinomialLLC/basis_universal",codeSample:"load(url, BasisLoader)",images:[{format:"BASIS",src:"alpha3.basis"},{format:"BASIS",src:"kodim01.basis"},{format:"BASIS",src:"kodim18.basis"},{format:"BASIS",src:"kodim20_1024x1024.basis"},{format:"BASIS",src:"kodim20.basis"}]}],p=r("KQm4"),m=r("rePB"),d=r("o0o1"),_=r.n(d),f=(r("wcNg"),r("HaE+")),E=r("vOnD"),h=r("15R0"),S=r("kD43"),b=r("VLYs");function T(e){return R.apply(this,arguments)}function R(){return(R=Object(f.a)(_.a.mark((function e(t){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.modules||{}).basis){e.next=3;break}return e.abrupt("return",r.basis);case 3:return a=a||x(t),e.next=6,a;case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return C.apply(this,arguments)}function C(){return(C=Object(f.a)(_.a.mark((function e(t){var r,a,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=null,a=null,e.t0=Promise,e.next=5,Object(S.a)("basis_transcoder.js","textures",t);case 5:return e.t1=e.sent,e.next=8,Object(S.a)("basis_transcoder.wasm","textures",t);case 8:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.next=12,e.t0.all.call(e.t0,e.t3);case 12:return n=e.sent,r=n[0],a=n[1],r=r||b.a.BASIS,e.next=18,g(r,a);case 18:return e.abrupt("return",e.sent);case 19:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t){var r={};return t&&(r.wasmBinary=t),new Promise((function(t){e(r).then((function(e){var r=e.BasisFile;(0,e.initializeBasis)(),t({BasisFile:r})}))}))}var A={etc1:{basisFormat:0,compressed:!0},etc2:{basisFormat:1,compressed:!0},bc1:{basisFormat:2,compressed:!0,format:h.a.COMPRESSED_RGB_S3TC_DXT1_EXT},bc3:{basisFormat:3,compressed:!0,format:h.a.COMPRESSED_RGBA_S3TC_DXT5_EXT},bc4:{basisFormat:4,compressed:!0},bc5:{basisFormat:5,compressed:!0},"bc7-m6-opaque-only":{basisFormat:6,compressed:!0},"bc7-m5":{basisFormat:7,compressed:!0},"pvrtc1-4-rgb":{basisFormat:8,compressed:!0},"pvrtc1-4-rgba":{basisFormat:9,compressed:!0},"astc-4x4":{basisFormat:10,compressed:!0},"atc-rgb":{basisFormat:11,compressed:!0},"atc-rgba-interpolated-alpha":{basisFormat:12,compressed:!0},rgba32:{basisFormat:13,compressed:!1},rgb565:{basisFormat:14,compressed:!1},bgr565:{basisFormat:15,compressed:!1},rgba4444:{basisFormat:16,compressed:!1}};function v(){return(v=Object(f.a)(_.a.mark((function e(t,r){var a,n,s,o,c,i,u,l,p;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(r);case 2:if(a=e.sent,n=a.BasisFile,s=new n(new Uint8Array(t)),e.prev=5,s.startTranscoding()){e.next=8;break}return e.abrupt("return",null);case 8:for(o=s.getNumImages(),c=[],i=0;i<o;i++){for(u=s.getNumLevels(i),l=[],p=0;p<u;p++)l.push(P(s,i,p,r));c.push(l)}return e.abrupt("return",c);case 12:return e.prev=12,s.close(),s.delete(),e.finish(12);case 16:case"end":return e.stop()}}),e,null,[[5,,12,16]])})))).apply(this,arguments)}function P(e,t,r,a){var n=e.getImageWidth(t,r),s=e.getImageHeight(t,r),o=e.getHasAlpha(),c=function(e,t){var r=e&&e.basis&&e.basis.format;return"object"==typeof r&&(r=t?r.alpha:r.noAlpha),r=r.toLowerCase(),A[r]}(a,o),i=c.compressed,u=c.format,l=c.basisFormat,p=e.getImageTranscodedSizeInBytes(t,r,l),m=new Uint8Array(p);return e.transcodeImage(m,t,r,l,0,0)?{width:n,height:s,data:m,compressed:i,hasAlpha:o,format:u}:null}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y,B="undefined"!=typeof __VERSION__?__VERSION__:"latest",w=D(D({},{id:"basis",name:"Basis",version:B,extensions:["basis"],mimeTypes:["application/octet-stream"],tests:["sB"],binary:!0,options:{basis:{format:"rgb565",libraryPath:"libs/",workerUrl:"https://unpkg.com/@loaders.gl/textures@"+B+"/dist/basis-loader.worker.js"}}}),{},{parse:function(e,t){return v.apply(this,arguments)}}),G=r("+PVp"),M=r("ipMt");function L(e){return X.apply(this,arguments)}function X(){return(X=Object(f.a)(_.a.mark((function e(t){var r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.modules||{}).crunch){e.next=3;break}return e.abrupt("return",r.crunch);case 3:return e.abrupt("return",I(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return j.apply(this,arguments)}function j(){return(j=Object(f.a)(_.a.mark((function e(t){var r,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!y){e.next=2;break}return e.abrupt("return",y);case 2:return r=null,e.t0=Promise,e.next=6,Object(S.a)("crunch.js","textures",t);case 6:return e.t1=e.sent,e.t2=[e.t1],e.next=10,e.t0.all.call(e.t0,e.t2);case 10:return a=e.sent,r=(r=a[0])||b.a.LoadCrunchDecoder,y=r(),e.abrupt("return",y);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=r("P+ME"),H=r("L1hj"),F=r("LsZq"),N=1,U=2,K={};K[0]={pixelFormat:h.a.COMPRESSED_RGB_S3TC_DXT1_EXT,sizeFunction:H.a},K[N]={pixelFormat:h.a.COMPRESSED_RGBA_S3TC_DXT3_EXT,sizeFunction:H.b},K[U]={pixelFormat:h.a.COMPRESSED_RGBA_S3TC_DXT5_EXT,sizeFunction:H.b};var V=0,W=null;function z(){return(z=Object(f.a)(_.a.mark((function e(t,r){var a,n,s,o,c,i,u,l,p,m,d,f;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0===r&&(r={}),e.next=3,L(r);case 3:for(a=e.sent,n=t.byteLength,s=new Uint8Array(t),o=a._malloc(n),q(s,a.HEAPU8,o,n),c=a._crn_get_dxt_format(o,n),Object(k.a)(Boolean(K[c]),"Unsupported format"),i=a._crn_get_levels(o,n),u=a._crn_get_width(o,n),l=a._crn_get_height(o,n),p=K[c].sizeFunction,m=0,d=0;d<i;++d)m+=p(u>>d,l>>d);return V<m&&(W&&a._free(W),W=a._malloc(m),V=m),a._crn_decompress(o,n,W,m,0,i),a._free(o),f=new Uint8Array(a.HEAPU8.buffer,W,m).slice(),e.abrupt("return",Object(F.a)(f,{mipMapLevels:i,width:u,height:l,sizeFunction:p,internalFormat:K[c].pixelFormat}));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e,t,r,a){var n,s=r/4,o=a%4,c=new Uint32Array(e.buffer,0,(a-o)/4),i=new Uint32Array(t.buffer);for(n=0;n<c.length;n++)i[s+n]=c[n];for(n=a-o;n<a;n++)t[r+n]=e[n]}function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Q=Y(Y({},{id:"crunch",name:"Crunch",version:"undefined"!=typeof __VERSION__?__VERSION__:"latest",extensions:["crn"],mimeTypes:["application/octet-stream"],binary:!0,options:{crunch:{libraryPath:"libs/"}}}),{},{parse:function(e,t){return z.apply(this,arguments)}}),Z=r("gQyj"),$=r("tXnp"),ee=r("xlp0"),te=r("24Wh"),re=r("Ivtj"),ae=r("f5Sf");function ne(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=h.a.COMPRESSED_RGB_S3TC_DXT1_EXT,ce=h.a.COMPRESSED_RGBA_S3TC_DXT1_EXT,ie=h.a.COMPRESSED_RGBA_S3TC_DXT3_EXT,ue=h.a.COMPRESSED_RGBA_S3TC_DXT5_EXT,le=h.a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG,pe=h.a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG,me=h.a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG,de=h.a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG,_e=h.a.COMPRESSED_RGB_ATC_WEBGL,fe=h.a.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL,Ee=h.a.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL,he=h.a.COMPRESSED_RGB_ETC1_WEBGL,Se=h.a.COMPRESSED_RGBA_ASTC_4X4_KHR,be=h.a.COMPRESSED_RGBA_ASTC_5X4_KHR,Te=h.a.COMPRESSED_RGBA_ASTC_5X5_KHR,Re=h.a.COMPRESSED_RGBA_ASTC_6X5_KHR,xe=h.a.COMPRESSED_RGBA_ASTC_6X6_KHR,Ce=h.a.COMPRESSED_RGBA_ASTC_8X5_KHR,ge=h.a.COMPRESSED_RGBA_ASTC_8X6_KHR,Ae=h.a.COMPRESSED_RGBA_ASTC_8X8_KHR,ve=h.a.COMPRESSED_RGBA_ASTC_10X5_KHR,Pe=h.a.COMPRESSED_RGBA_ASTC_10X6_KHR,Oe=h.a.COMPRESSED_RGBA_ASTC_10X8_KHR,De=h.a.COMPRESSED_RGBA_ASTC_10X10_KHR,ye=h.a.COMPRESSED_RGBA_ASTC_12X10_KHR,Be=h.a.COMPRESSED_RGBA_ASTC_12X12_KHR,we=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_4X4_KHR,Ge=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_5X4_KHR,Me=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_5X5_KHR,Le=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_6X5_KHR,Xe=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_6X6_KHR,Ie=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_8X5_KHR,je=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_8X6_KHR,ke=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_8X8_KHR,He=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_10X5_KHR,Fe=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_10X6_KHR,Ne=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_10X8_KHR,Ue=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_10X10_KHR,Ke=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_12X10_KHR,Ve=h.a.COMPRESSED_SRGB8_ALPHA8_ASTC_12X12_KHR,We=h.a.COMPRESSED_R11_EAC,ze=h.a.COMPRESSED_SIGNED,qe=h.a.COMPRESSED_RG11_EAC,Je=h.a.COMPRESSED_SIGNED_RG11_EAC,Ye=h.a.COMPRESSED_RGB8_ETC2,Qe=h.a.COMPRESSED_RGBA8_ETC2_EAC,Ze=h.a.COMPRESSED_SRGB8_ETC2,$e=h.a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,et=h.a.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,tt=h.a.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,rt=h.a.COMPRESSED_RED_RGTC1_EXT,at=h.a.COMPRESSED_SIGNED_RED_RGTC1_EXT,nt=h.a.COMPRESSED_RED_GREEN_RGTC2_EXT,st=h.a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT,ot=h.a.COMPRESSED_SRGB_S3TC_DXT1_EXT,ct=h.a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,it=h.a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,ut=h.a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,lt=E.c.button.withConfig({displayName:"compressed-texture__TextureButton",componentId:"sc-1g38zwr-0"})(["height:256px;width:256px;border:1px solid black;margin:1em;position:relative;margin-left:0;"]),pt=E.c.h1.withConfig({displayName:"compressed-texture__ImageFormatHeader",componentId:"sc-1g38zwr-1"})(["position:absolute;top:0;left:0;margin:0;color:white;font-size:16px;"]),mt=E.c.h1.withConfig({displayName:"compressed-texture__ErrorFormatHeader",componentId:"sc-1g38zwr-2"})(["color:red;font-size:16px;"]),dt=E.c.ul.withConfig({displayName:"compressed-texture__TextureInfo",componentId:"sc-1g38zwr-3"})(["position:absolute;transition:opacity 0.2s;top:20px;display:flex;flex-flow:column nowrap;align-items:flex-start;padding:10px;opacity:0.8;background-color:black;color:white;border-radius:5px;min-width:200px;list-style:none;font-size:14px;"]);Object($.b)([w,G.a,Z.a]);var _t=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={supportedFormats:Object(M.a)(t.gl),loadOptions:{basis:{}},textureError:null,showStats:!1,stats:[]},r}Object(n.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=Object(f.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setupBasisLoadOptionsIfNeeded();case 2:return e.next=4,this.getTextureDataUrl();case 4:t=e.sent,this.setState({dataUrl:t});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),r.getExtension=function(e){var t=this.props.gl,r=["","WEBKIT_","MOZ_"],a=null;for(var n in r)if(a=Boolean(t.getExtension(r[n]+e)))break;return a},r.setupBasisLoadOptionsIfNeeded=function(){if(this.state.supportedFormats.has("dxt")){var e=se(se({},this.state.loadOptions),{},{basis:{format:{alpha:"BC3",noAlpha:"BC1"}}});this.setState({loadOptions:e})}},r.getTextureDataUrl=function(){var e=Object(f.a)(_.a.mark((function e(){var t,r,a,n,s,o,c,i,u,l,p,m,d;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.loadOptions,r=this.props,a=r.canvas,n=r.gl,s=r.program,o=r.image,e.prev=2,e.next=5,this.getLoadedData(o);case 5:return c=e.sent,i=c.arrayBuffer,u=c.length,l=c.src,e.next=11,Object(ee.a)(l,[G.a,Q,w,Z.a]);case 11:if(p=e.sent,e.t0=p,!e.t0){e.next=17;break}return e.next=16,Object(te.a)(i,p,t);case 16:e.t0=e.sent;case 17:m=e.t0,this.addStat("File Size",Math.floor(u/1024),"Kb"),e.t1=p&&p.name,e.next="Crunch"===e.t1||"CompressedTexture"===e.t1?22:"Images"===e.t1?25:"Basis"===e.t1?28:32;break;case 22:return this.renderEmptyTexture(n,s),this.renderCompressedTexture(n,s,m,p.name,l),e.abrupt("break",33);case 25:return this.renderEmptyTexture(n,s),this.renderImageTexture(n,s,m),e.abrupt("break",33);case 28:return d=m[0],this.renderEmptyTexture(n,s),this.renderCompressedTexture(n,s,d,p.name,l),e.abrupt("break",33);case 32:throw new Error("Unknown texture loader");case 33:e.next=40;break;case 35:e.prev=35,e.t2=e.catch(2),console.error(e.t2),this.renderEmptyTexture(n,s),this.setState({textureError:e.t2.message});case 40:return e.abrupt("return",a.toDataURL());case 41:case"end":return e.stop()}}),e,this,[[2,35]])})));return function(){return e.apply(this,arguments)}}(),r.getLoadedData=function(){var e=Object(f.a)(_.a.mark((function e(t){var r,a,n,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=null,a=0,n="",!(t instanceof File)){e.next=11;break}return e.next=6,t.arrayBuffer();case 6:r=e.sent,a=t.size,n=t.name,e.next=19;break;case 11:return n="https://raw.githubusercontent.com/visgl/loaders.gl/master/modules/textures/test/data/"+t.src,e.next=14,Object(re.a)(n);case 14:return s=e.sent,e.next=17,s.arrayBuffer();case 17:r=e.sent,a=r.byteLength;case 19:return e.abrupt("return",{arrayBuffer:r,length:a,src:n});case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.createCompressedTexture2D=function(e,t){var r;return new ae.a(e,{data:t,compressed:!0,parameters:(r={},r[e.TEXTURE_MAG_FILTER]=e.LINEAR,r[e.TEXTURE_MIN_FILTER]=t.length>1?e.LINEAR_MIPMAP_NEAREST:e.LINEAR,r[e.TEXTURE_WRAP_S]=e.CLAMP_TO_EDGE,r[e.TEXTURE_WRAP_T]=e.CLAMP_TO_EDGE,r)}).handle},r.renderEmptyTexture=function(e,t){var r,a=new Uint8Array([68,0,0,255]),n=new ae.a(e,{width:1,height:1,data:a,mipmaps:!0,parameters:(r={},r[e.TEXTURE_MAG_FILTER]=e.LINEAR,r[e.TEXTURE_MIN_FILTER]=e.LINEAR,r[e.TEXTURE_WRAP_S]=e.CLAMP_TO_EDGE,r[e.TEXTURE_WRAP_T]=e.CLAMP_TO_EDGE,r)}).handle;e.useProgram(t),e.bindTexture(e.TEXTURE_2D,n),e.drawArrays(e.TRIANGLE_STRIP,0,4)},r.renderImageTexture=function(e,t,r){var a,n=new ae.a(e,{data:r,parameters:(a={},a[e.TEXTURE_MAG_FILTER]=e.LINEAR,a[e.TEXTURE_MIN_FILTER]=e.LINEAR,a[e.TEXTURE_WRAP_S]=e.CLAMP_TO_EDGE,a[e.TEXTURE_WRAP_T]=e.CLAMP_TO_EDGE,a)});e.useProgram(t),e.bindTexture(e.TEXTURE_2D,n.handle);var s=new Date;e.drawArrays(e.TRIANGLE_STRIP,0,4);var o=Date.now()-s;this.addStat("Upload time",Math.floor(o)+" ms"),this.addStat("Dimensions",r.width+" x "+r.height),this.addStat("Size in memory (Lvl 0)",Math.floor(r.width*r.height*4/1024),"Kb")},r.renderCompressedTexture=function(e,t,r,a,n){if(!r||!r.length)throw new Error(a+" loader doesn't support texture "+n+" format");var s=r[0],o=s.format,c=s.width,i=s.height,u=s.levelSize;if(!this.isFormatSupported(o))throw new Error("Texture format "+o+" not supported by this GPU");var l=new Date,p=this.createCompressedTexture2D(e,r);e.bindTexture(e.TEXTURE_2D,p),e.useProgram(t),e.drawArrays(e.TRIANGLE_STRIP,0,4);var m=Date.now()-l;this.addStat("Upload time",Math.floor(m)+" ms"),this.addStat("Dimensions",c+" x "+i),u&&this.addStat("Size in memory (Lvl 0)",Math.floor(u/1024),"Kb")},r.isFormatSupported=function(e){if("number"!=typeof e)throw new Error("Invalid internal format of compressed texture");var t=this.state.supportedFormats;switch(e){case oe:case ie:case ue:case ce:return t.has("dxt");case le:case pe:case me:case de:return t.has("pvrtc");case _e:case fe:case Ee:return t.has("atc");case he:return t.has("etc1");case Se:case be:case Te:case Re:case xe:case Ce:case ge:case Ae:case ve:case Pe:case Oe:case De:case ye:case Be:case we:case Ge:case Me:case Le:case Xe:case Ie:case je:case ke:case He:case Fe:case Ne:case Ue:case Ke:case Ve:return t.has("astc");case We:case ze:case qe:case Je:case Ye:case Qe:case Ze:case $e:case et:case tt:return t.has("etc2");case rt:case at:case nt:case st:return t.has("rgtc");case ot:case ct:case it:case ut:return t.has("dxt-srgb");default:return!1}},r.addStat=function(e,t,r){void 0===r&&(r="");var a=[].concat(Object(p.a)(this.state.stats),[{name:e,value:t,units:r}]);this.setState({stats:a})},r.renderStats=function(){var e=this.state.stats;if(!e.length)return null;for(var t=[],r=0;r<e.length;r++)t.push(o.a.createElement("li",{key:r},e[r].name+": "+e[r].value+e[r].units));return o.a.createElement(dt,{style:{opacity:this.state.showStats?.8:0}},t)},r.render=function(){var e=this,t=this.state,r=t.dataUrl,a=t.textureError,n=this.props.image,s=n.format,c=n.name;return r?o.a.createElement(lt,{style:{backgroundImage:"url("+r+")"},onMouseEnter:function(){return e.setState({showStats:!0})},onMouseLeave:function(){return e.setState({showStats:!1})}},a?o.a.createElement(mt,{style:{color:"red"}},a):o.a.createElement(pt,null,s||c),this.renderStats()):null},t}(s.PureComponent);_t.defaultProps={canvas:null,image:null,gl:null,program:null};var ft=r("JX7q"),Et=E.c.div.withConfig({displayName:"textures-uploader__Container",componentId:"n9oi00-0"})(["display:flex;flex-flow:column nowrap;"]),ht=E.c.div.withConfig({displayName:"textures-uploader__TextureFrame",componentId:"n9oi00-1"})(["display:flex;width:256px;height:256px;align-items:center;justify-content:center;border:1px dashed black;"]),St=E.c.div.withConfig({displayName:"textures-uploader__ImageContainer",componentId:"n9oi00-2"})(["display:flex;flex-flow:column nowrap;align-items:center;width:270px;"]),bt=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={uploadedImage:null},r.handleLoadFile=r.handleLoadFile.bind(Object(ft.a)(r)),r.handleCleanTexture=r.handleCleanTexture.bind(Object(ft.a)(r)),r}Object(n.a)(t,e);var r=t.prototype;return r.handleLoadFile=function(e){var t=e.dataTransfer.files[0];this.setState({uploadedImage:t}),e.preventDefault()},r.handleCleanTexture=function(){this.setState({uploadedImage:null})},r.render=function(){var e=this.props,t=e.canvas,r=e.gl,a=e.program,n=this.state,s=n.uploadedImage,c=n.files;return o.a.createElement("div",null,!s&&o.a.createElement(Et,null,o.a.createElement(ht,{onDrop:this.handleLoadFile,onDragOver:function(e){return e.preventDefault()}},"Drag&Drop texture"),o.a.createElement("input",{style:{display:"none"},type:"file",id:"fileInput",files:c})),o.a.createElement(St,null,s&&o.a.createElement(_t,{image:s,canvas:t,gl:r,program:a}),s&&o.a.createElement("button",{onClick:this.handleCleanTexture},"Clean")))},t}(s.PureComponent);bt.defaultProps={canvas:null,gl:null,program:null};var Tt=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={canvas:null,gl:null,program:null},r}Object(n.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){var e=this.setupCanvas(),t=e.getContext("webgl");Object(i.d)(t),this.createAndFillBufferObject(t);var r=new u.a(t,{vs:"\nprecision highp float;\n\nattribute vec2 position;\nvarying vec2 uv;\n\nvoid main() {\n  gl_Position = vec4(position, 0.0, 1.0);\n  uv = vec2(position.x * .5, -position.y * .5) + vec2(.5, .5);\n}\n",fs:"\nprecision highp float;\n\nuniform sampler2D tex;\nvarying vec2 uv;\n\nvoid main() {\n  gl_FragColor = vec4(texture2D(tex, uv).rgb, 1.);\n}\n"});this.setState({canvas:e,gl:t,program:r.handle})},r.setupCanvas=function(){var e=document.createElement("canvas");return e.width=256,e.height=256,e},r.createAndFillBufferObject=function(e){var t=new Float32Array([-1,-1,-1,1,1,-1,1,1]),r=e.createBuffer();r||console.error("Failed to create the buffer object"),e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(0),e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0)},r.renderTexturesBlocks=function(){var e=this,t=this.state,r=t.canvas,a=t.gl,n=t.program;return l.map((function(t,s){return o.a.createElement("div",{key:s},e.renderTexturesHeader(t),e.renderTextures(a,r,n,t.images),e.renderTexturesDescription(t))}))},r.renderTexturesHeader=function(e){var t=e.formatName,r=e.link;return o.a.createElement("div",{style:{display:"flex",flexFlow:"column"}},o.a.createElement("h2",{style:{borderBottom:"1px solid black",marginBottom:0}},r?o.a.createElement("a",{style:{textDecoration:"none"},href:r},t):t))},r.renderTexturesDescription=function(e){var t=e.description,r=e.codeSample,a=e.availability;return o.a.createElement("div",null,t&&o.a.createElement("p",null,o.a.createElement("b",null,"Description: "),t),a&&o.a.createElement("p",null,o.a.createElement("b",null,"Availability: "),a),r&&o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement("code",null,r))))},r.renderTextures=function(e,t,r,a){return a.map((function(a,n){return o.a.createElement(_t,{key:n,image:a,canvas:t,gl:e,program:r})}))},r.renderDescription=function(){return o.a.createElement("div",null,o.a.createElement("h1",null,"Texture Loaders"),o.a.createElement("p",null,"This page loads every  ",o.a.createElement("a",{href:"https://loaders.gl/modules/textures/docs/using-compressed-textures"},"texture format")," ","  supported by loaders.gl and attempts to display them in WebGL using the"," ",o.a.createElement("a",{href:"https://luma.gl"},o.a.createElement("b",null,"luma.gl"))," ",o.a.createElement("code",null,"Texture2D")," class."),o.a.createElement("p",null,"The ",o.a.createElement("code",null,"@loaders.gl/textures"),"   module provides loaders for compressed textures stored in ",o.a.createElement("b",null,"KTX"),", ",o.a.createElement("b",null,"DDS")," and ",o.a.createElement("b",null,"PVR")," container files, plus ",o.a.createElement("b",null,"CRN")," ","(Crunch), and ",o.a.createElement("b",null,"Basis")," supercompressed textures."),o.a.createElement("p",null,"This page also shows which compressed texture types your device and browser supports."),o.a.createElement("p",null,o.a.createElement("i",null,"Note that multiple textures on this page will fail to display due to lack of GPU support (reported via WebGL extensions). For example: DXT formats are usually only supported on Desktops while PVRTC is typically only available on mobile devices with PowerVR chipsets.")),o.a.createElement("p",null,o.a.createElement("i",null,"Inspired by toji's awesome"," ",o.a.createElement("a",{href:"http://toji.github.io/texture-tester"},"texture-tester"))))},r.render=function(){var e=this.state,t=e.gl,r=e.canvas,a=e.program;return o.a.createElement("div",{style:{margin:30}},this.renderDescription(),t&&o.a.createElement(bt,{canvas:r,gl:t,program:a}),t&&this.renderTexturesBlocks())},t}(s.PureComponent);function Rt(e){Object(c.render)(o.a.createElement(Tt,null),e)}}}]);