if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const o={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return o;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-a9938592"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404/index.html",revision:"cad84c4e6b486883752317856180a269"},{url:"about/index.html",revision:"52d9bb093faac61ed8fc87b5984808a6"},{url:"assets/css/bootstrap-iso.less",revision:"534f0fd20c01f1da926702e294641828"},{url:"assets/css/main.css",revision:"b3a6837ec1a4ec826415d385d85b3e72"},{url:"assets/css/vendor/bootstrap-iso.css",revision:"fb752cd1a5379fdc700b302fcca29b01"},{url:"assets/css/vendor/bootstrap-iso.min.css",revision:"28d665e19fccf0bdf06c5bbd88dfd566"},{url:"assets/css/vendor/bootstrap.css",revision:"317bd00bb12fb80c9dab11c4f9f40e6c"},{url:"assets/data/search.json",revision:"013df8a82073a70a095d7332874f7ca4"},{url:"assets/fonts/font-awesome/fa-brands-400.eot",revision:"d28c96cabe5302f1b2c90275cd3f4e69"},{url:"assets/fonts/font-awesome/fa-brands-400.svg",revision:"5d10d00980077f67990f73b1961bc46e"},{url:"assets/fonts/font-awesome/fa-brands-400.ttf",revision:"dfe5aa4344a2d8a29aec8d83fb3fb14e"},{url:"assets/fonts/font-awesome/fa-brands-400.woff",revision:"0ce1e868452204695c8ac1c70f693c2d"},{url:"assets/fonts/font-awesome/fa-brands-400.woff2",revision:"0c9f225e8f69c622f681cf1ed973cc3d"},{url:"assets/fonts/font-awesome/fa-regular-400.eot",revision:"0232fe8b09de812c88e6cc27f57a3a88"},{url:"assets/fonts/font-awesome/fa-regular-400.svg",revision:"d0fdc7c20b0b0b1aaf27327547735fa3"},{url:"assets/fonts/font-awesome/fa-regular-400.ttf",revision:"398be22b2308585b84da8e858e2d7b60"},{url:"assets/fonts/font-awesome/fa-regular-400.woff",revision:"3cace4a04d941b5981ba32c6ce9afae1"},{url:"assets/fonts/font-awesome/fa-regular-400.woff2",revision:"847712aaabbeba674afdda86d31cab17"},{url:"assets/fonts/font-awesome/fa-solid-900.eot",revision:"00bb62bc33034479d5e82a0fd1c5efe3"},{url:"assets/fonts/font-awesome/fa-solid-900.svg",revision:"2306f642b31b774ba1d8b6b784539e19"},{url:"assets/fonts/font-awesome/fa-solid-900.ttf",revision:"260d033f79f75d670fd09d8cf7c8bf8d"},{url:"assets/fonts/font-awesome/fa-solid-900.woff",revision:"4bfbf7eb4b19d9ff9293eb177b6d0070"},{url:"assets/fonts/font-awesome/fa-solid-900.woff2",revision:"9ae050d1876ac1763eb6afe4264e6d5a"},{url:"assets/fonts/katex/KaTeX_AMS-Regular.ttf",revision:"342a61e0c4dee016881d00d9fa69c335"},{url:"assets/fonts/katex/KaTeX_AMS-Regular.woff",revision:"3392cf39311b42f70073c2732b99a24c"},{url:"assets/fonts/katex/KaTeX_AMS-Regular.woff2",revision:"2c50d7a0caadcdd36b063bd9f9268291"},{url:"assets/fonts/katex/KaTeX_Caligraphic-Bold.ttf",revision:"b27e354b9a940cfabb1cdad2f5d35eb9"},{url:"assets/fonts/katex/KaTeX_Caligraphic-Bold.woff",revision:"9ae9058d9d744f501b41d1fe1236ed57"},{url:"assets/fonts/katex/KaTeX_Caligraphic-Bold.woff2",revision:"0f0d0935d51deac6c1f7f0dea7ffe886"},{url:"assets/fonts/katex/KaTeX_Caligraphic-Regular.ttf",revision:"bd18bae257a88cfa6a36310cd585d0a0"},{url:"assets/fonts/katex/KaTeX_Caligraphic-Regular.woff",revision:"f7eb2b22569f8c8a9ad8b6d299d4f6a4"},{url:"assets/fonts/katex/KaTeX_Caligraphic-Regular.woff2",revision:"8a3d1df80c7d8618896f166336d89dce"},{url:"assets/fonts/katex/KaTeX_Fraktur-Bold.ttf",revision:"359e1e974d07f534d0665dc5add72209"},{url:"assets/fonts/katex/KaTeX_Fraktur-Bold.woff",revision:"314623ce54a8a2654fb5df3c9cec01aa"},{url:"assets/fonts/katex/KaTeX_Fraktur-Bold.woff2",revision:"e2c9ac8504a2e0f1ec22e5904087174f"},{url:"assets/fonts/katex/KaTeX_Fraktur-Regular.ttf",revision:"6b53a2db48b3bbde91ec9c85590ccc44"},{url:"assets/fonts/katex/KaTeX_Fraktur-Regular.woff",revision:"98d5da581ba8efea0934c92794c6c56c"},{url:"assets/fonts/katex/KaTeX_Fraktur-Regular.woff2",revision:"a2be00f37608cf99fb1c0351dc4e9342"},{url:"assets/fonts/katex/KaTeX_Main-Bold.ttf",revision:"ed829b5fabfded4f5f943df1012da1b1"},{url:"assets/fonts/katex/KaTeX_Main-Bold.woff",revision:"316611c7a4afe59d3bcbe9e0f1a41613"},{url:"assets/fonts/katex/KaTeX_Main-Bold.woff2",revision:"233f218ee616854f491c7195cd8fffcf"},{url:"assets/fonts/katex/KaTeX_Main-BoldItalic.ttf",revision:"ca23ba4b607268345b1f0b22bff41292"},{url:"assets/fonts/katex/KaTeX_Main-BoldItalic.woff",revision:"cd5eb9a8d163f765f01c4b1a44567f4c"},{url:"assets/fonts/katex/KaTeX_Main-BoldItalic.woff2",revision:"09fa2c8f6a5a787648fcf62022b9e5c6"},{url:"assets/fonts/katex/KaTeX_Main-Italic.ttf",revision:"14ff9c98a820d988c169e27ca3eb78b8"},{url:"assets/fonts/katex/KaTeX_Main-Italic.woff",revision:"4eee467e52c8113a7c48549dec426808"},{url:"assets/fonts/katex/KaTeX_Main-Italic.woff2",revision:"4dc3271d3627578d951ecd3fcdb7f762"},{url:"assets/fonts/katex/KaTeX_Main-Regular.ttf",revision:"c89c643655fabf99f2b78eb9cc5cf4b0"},{url:"assets/fonts/katex/KaTeX_Main-Regular.woff",revision:"ab80a08c3c6915afb4b4a3300a55ef8f"},{url:"assets/fonts/katex/KaTeX_Main-Regular.woff2",revision:"6c094af9274ceccdc817400fdf49c5af"},{url:"assets/fonts/katex/KaTeX_Math-BoldItalic.ttf",revision:"7b481bb892d872c27234188b59ca8f10"},{url:"assets/fonts/katex/KaTeX_Math-BoldItalic.woff",revision:"e1a2ff93bd15ea54164340e3d1b2f901"},{url:"assets/fonts/katex/KaTeX_Math-BoldItalic.woff2",revision:"8bdd60921916168d5c53c2caf3931e86"},{url:"assets/fonts/katex/KaTeX_Math-Italic.ttf",revision:"f677173e00e38ef3151aa3156ef87507"},{url:"assets/fonts/katex/KaTeX_Math-Italic.woff",revision:"68f671df4bc4ab87b9f3e5111c28c49a"},{url:"assets/fonts/katex/KaTeX_Math-Italic.woff2",revision:"1aa96e4e339118aad4153041adbd9947"},{url:"assets/fonts/katex/KaTeX_SansSerif-Bold.ttf",revision:"362d94c68887ef3079e3fa04abc7b505"},{url:"assets/fonts/katex/KaTeX_SansSerif-Bold.woff",revision:"f1cea170c77d231b4ce249fcf850f3f4"},{url:"assets/fonts/katex/KaTeX_SansSerif-Bold.woff2",revision:"f9ae435239a0933219b7dba4480141cc"},{url:"assets/fonts/katex/KaTeX_SansSerif-Italic.ttf",revision:"2c74297808a50220aa64d435d69006bc"},{url:"assets/fonts/katex/KaTeX_SansSerif-Italic.woff",revision:"07ffaec68ea2d7c3428eec8b12969925"},{url:"assets/fonts/katex/KaTeX_SansSerif-Italic.woff2",revision:"e7aabbc7a3b86d947d8ad4436a81b348"},{url:"assets/fonts/katex/KaTeX_SansSerif-Regular.ttf",revision:"6087fc040fbe6c4e83da5ee2c1f8a803"},{url:"assets/fonts/katex/KaTeX_SansSerif-Regular.woff",revision:"e8735df90d494a81dfc1568c352b21bc"},{url:"assets/fonts/katex/KaTeX_SansSerif-Regular.woff2",revision:"6f7840dc539b8786da712dc43a57051c"},{url:"assets/fonts/katex/KaTeX_Script-Regular.ttf",revision:"781730b2f066b5268a8fb75b4f7c479b"},{url:"assets/fonts/katex/KaTeX_Script-Regular.woff",revision:"ced4ee620859978fa1921c87d6dbd774"},{url:"assets/fonts/katex/KaTeX_Script-Regular.woff2",revision:"5921f5ba7c02f3aeb478e4e87d2187bf"},{url:"assets/fonts/katex/KaTeX_Size1-Regular.ttf",revision:"54a80b37e92f14f32a33165c571f8e95"},{url:"assets/fonts/katex/KaTeX_Size1-Regular.woff",revision:"aec6c2103821f67bc9f53dee3fbad982"},{url:"assets/fonts/katex/KaTeX_Size1-Regular.woff2",revision:"3a5edc1620fc7a7a2e25112b7a8e6cf8"},{url:"assets/fonts/katex/KaTeX_Size2-Regular.ttf",revision:"24cbe093e557076be8c6c5ffee4aa61b"},{url:"assets/fonts/katex/KaTeX_Size2-Regular.woff",revision:"0d72ed102d351b453046ee3d9c4600fb"},{url:"assets/fonts/katex/KaTeX_Size2-Regular.woff2",revision:"963980610d2663b7c04355bcf17d5bb8"},{url:"assets/fonts/katex/KaTeX_Size3-Regular.ttf",revision:"ee3e5bf4b1e08bb325312348661c276b"},{url:"assets/fonts/katex/KaTeX_Size3-Regular.woff",revision:"34ab65d6e933eaa143598aa54b5832d6"},{url:"assets/fonts/katex/KaTeX_Size3-Regular.woff2",revision:"920b3023bec41ddd8a7d79ff9da70643"},{url:"assets/fonts/katex/KaTeX_Size4-Regular.ttf",revision:"b78c75bb4d0c95e4a87e006e83f187e4"},{url:"assets/fonts/katex/KaTeX_Size4-Regular.woff",revision:"04dc70fcc38cd220b3129133310717ca"},{url:"assets/fonts/katex/KaTeX_Size4-Regular.woff2",revision:"83af4078518f26c4b62160f6565d6d86"},{url:"assets/fonts/katex/KaTeX_Typewriter-Regular.ttf",revision:"90f78c1075e0cdb56287589112f56011"},{url:"assets/fonts/katex/KaTeX_Typewriter-Regular.woff",revision:"b636fa487ef5e2f56bb3529bc9168be0"},{url:"assets/fonts/katex/KaTeX_Typewriter-Regular.woff2",revision:"8073cf012f453ddf47d5b8776f6bb1e5"},{url:"assets/fonts/Pacifico/original-pacifico-regular.ttf",revision:"842052b80671ec7ef6f5e482853be4f4"},{url:"assets/fonts/Pacifico/Pacifico.eot",revision:"048c57923ee6ee550ddd78f3fe9791b0"},{url:"assets/fonts/Pacifico/Pacifico.svg",revision:"3c3ee368a19af940789100939a3770ef"},{url:"assets/fonts/Pacifico/Pacifico.ttf",revision:"842052b80671ec7ef6f5e482853be4f4"},{url:"assets/fonts/Pacifico/Pacifico.woff",revision:"be4c8c35a9556899a0338fac425cdd8f"},{url:"assets/fonts/Pacifico/Pacifico.woff2",revision:"d8a5308012a58929ef7e29d454910aab"},{url:"assets/fonts/source-sans-pro/source-sans-pro-bold-italic.woff2",revision:"47664e9b0fbb97d18ec3f77d4fa74c4c"},{url:"assets/fonts/source-sans-pro/source-sans-pro-bold.woff2",revision:"e487d5cf73709fc227c5b5fdf70f85ad"},{url:"assets/fonts/source-sans-pro/source-sans-pro-italic.woff2",revision:"958112606ab27c2ea188141962593c80"},{url:"assets/fonts/source-sans-pro/source-sans-pro-regular.woff2",revision:"fbefd76e823b1848d7b0a267b2b46f05"},{url:"assets/gulpfile.js",revision:"0f3916eb2d2ded63ba99a7cb9db5ad09"},{url:"assets/img/about.jpg",revision:"06eb5d8196e0d6ee742eda6504c9434f"},{url:"assets/img/articles/other-boys/eboys.jpg",revision:"9a8d6ff8d12e3c6efc91837e0b459997"},{url:"assets/img/feature-img/creating-content.jpg",revision:"1e14263622a0523ab164538a6aad6fe0"},{url:"assets/img/feature-img/other-boys.jpg",revision:"bdd1b21b08bf3f911c77bf44c9e7ce18"},{url:"assets/img/feature-img/studying-religion.jpg",revision:"e318e55094cbc7d4a243e6c1eca9231a"},{url:"assets/img/header.jpg",revision:"8faaac705576d469009195cfeeba82de"},{url:"assets/img/icons/appleicon.png",revision:"050bef62d8993ac14f5ef146051e65e1"},{url:"assets/img/icons/favicon.ico",revision:"63ebbaa47115c0d7498f778d07d6f414"},{url:"assets/img/icons/moonicon144.png",revision:"fd8ab2dbd56e6c983aa626c50f498e79"},{url:"assets/img/icons/moonicon168.png",revision:"51922a441388cdeff6a784bf0cae3139"},{url:"assets/img/icons/moonicon192.png",revision:"c0bf8d04af3cc71eaf8d8b994cbf4f5a"},{url:"assets/img/icons/moonicon48.png",revision:"7dcc3e3777214730367ee0c6f5c9702a"},{url:"assets/img/icons/moonicon512.png",revision:"1883c4f238e1987ed38abd8af640edff"},{url:"assets/img/icons/moonicon72.png",revision:"ac3509016fe6df16145e2b472010401c"},{url:"assets/img/icons/moonicon96.png",revision:"83b38dfe6406f5b6d01eb04ed8b98b16"},{url:"assets/img/map.jpg",revision:"acad504f91291a3355079aaba5640fb4"},{url:"assets/img/moon_icon.webp",revision:"acc3e0eb8c5b509459eb5da8e5c30d1d"},{url:"assets/img/profile.webp",revision:"de337f5563ca94162e4b6b548f072a22"},{url:"assets/img/search.jpg",revision:"b3c7e503c8ad9ab3a1edfa46c74d9115"},{url:"assets/js/main.min.js",revision:"d1c77332252925925eb53987414686a3"},{url:"assets/js/partials/cookie_consent_init.js",revision:"1c9508f57ae5216334f998b3d73858e6"},{url:"assets/js/partials/dark-mode.js",revision:"fbe7a3a2a264d9267045d3a63a9b2485"},{url:"assets/js/partials/masonry_init.js",revision:"c47bb30c826a9120bf8a7d7d4f72e573"},{url:"assets/js/partials/navbar.js",revision:"8b3fe54d0e3b77dfeeb4805d22f7d71c"},{url:"assets/js/vendor/auto-render.min.js",revision:"6b29ca79b4fbfd15f3bd260e542d2a86"},{url:"assets/js/vendor/imagesloaded.min.js",revision:"e2c1a80b99251b7b94726b41312fb160"},{url:"assets/js/vendor/katex.min.js",revision:"c25c41d1489c17c1f0d3794a5d2b4865"},{url:"assets/js/vendor/masonry.pkgd.min.js",revision:"520e46df77727aaf3d5e799ef241be02"},{url:"assets/js/vendor/mermaid.min.js",revision:"ac3bddcd79f3ff1e5c7c8e503feef84c"},{url:"assets/js/vendor/simple-jekyll-search.min.js",revision:"3ce8a966a194ff95da68a9bd2482d8c8"},{url:"assets/package.json",revision:"e6b686f283005440cfabebcf8095ae5f"},{url:"feed.xml",revision:"28c54db9693b22cb2a6f2e4fa1708920"},{url:"index.html",revision:"5755a03a5620a058a87f495ba290d647"},{url:"licenses/index.html",revision:"771b66be6d5eeb65155151b4de8bd52c"},{url:"manifest.json",revision:"3429e87a59a0246713b0c598c55c4a54"},{url:"not-like-the-other-boys/index.html",revision:"2a019d46b730587da6efc74645100a08"},{url:"on-creating-content/index.html",revision:"6d69c69bb8923462c021697f05753f4f"},{url:"privacy/index.html",revision:"dd8b5774675217debbffedd6f8d101a9"},{url:"pwa-test/index.html",revision:"958e9d59b9f08e18fcc058eb77ba65fc"},{url:"README.md",revision:"a361b1074018cc18ec3ae086252ee3a2"},{url:"robots.txt",revision:"8896234194304f81af9e71f90935866b"},{url:"search/index.html",revision:"cc58b67442911c58dce22d6e9883c2e8"},{url:"sitemap.xml",revision:"ead45dc2e7d73586aeae564643066df7"},{url:"sitemap/index.html",revision:"0f09317af5e9ed65ad042d951f7d6ea5"},{url:"studying-religion/index.html",revision:"efdf9b51cca56cf302ccc650e04be552"},{url:"tags/index.html",revision:"120a4e123e2e3845db9aad9649665ff5"},{url:"type-on-strap.gemspec",revision:"c936bc86176e73c6e5179b1e1db53445"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
