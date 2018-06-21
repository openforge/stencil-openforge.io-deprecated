importScripts('workbox-v3.2.0/workbox-sw.js');

self.workbox.skipWaiting();
self.workbox.clientsClaim();

// Insert custom code here

self.workbox.precaching.precacheAndRoute([
  {
    "url": "assets/graphic-home-code.png",
    "revision": "360ca286208e5dbc524f36e9a29c948a"
  },
  {
    "url": "assets/graphic-home-computer.png",
    "revision": "9da46ec2a14fc41369f61587d59f9c7e"
  },
  {
    "url": "assets/graphic-home-consulting.png",
    "revision": "3a4987369866e4a99f712cc533612427"
  },
  {
    "url": "assets/graphic-home-deployment.png",
    "revision": "44019a9df21566db33f5a87cc3f90a6c"
  },
  {
    "url": "assets/graphic-home-design.png",
    "revision": "5c602e66ac2e2c24050cb3e0ab01aba0"
  },
  {
    "url": "assets/graphic-home-development.png",
    "revision": "7d08f7712bea11078d3f9dbd7c7a91cd"
  },
  {
    "url": "assets/graphic-home-devices.png",
    "revision": "bde9753b6d6034e8806b7ef9b3dcfd6a"
  },
  {
    "url": "assets/graphic-home-discovery.png",
    "revision": "e7d9d0d8471c8bb9f9af45fa220f5f36"
  },
  {
    "url": "assets/graphic-home-enterprise.png",
    "revision": "3083d583523f689b7373787968d899a1"
  },
  {
    "url": "assets/graphic-home-feedback.png",
    "revision": "46e6d4b748ffcb866e2284bef3037e9d"
  },
  {
    "url": "assets/graphic-home-icons.png",
    "revision": "3fa953f3c5552490183df0077026348e"
  },
  {
    "url": "assets/graphic-home-lighbulb.png",
    "revision": "3813b9bd154593b158653d864bc5e8fc"
  },
  {
    "url": "assets/graphic-home-monitor.png",
    "revision": "b19c4a61ea402ee71c0f2031b037d484"
  },
  {
    "url": "assets/graphic-home-process.png",
    "revision": "4bed7b9460f49b0b63c9a917d2cdfd6a"
  },
  {
    "url": "assets/graphic-home-startup.png",
    "revision": "b19bf41d68a1d8d9f3f62c5f089299fe"
  },
  {
    "url": "assets/graphic-opportunities-phone1.png",
    "revision": "3cbf314140f9d4d448f502c758270afa"
  },
  {
    "url": "assets/graphic-opportunities-phone2.png",
    "revision": "3d6d311b12f2e59bcbb50ff84de85ba7"
  },
  {
    "url": "assets/graphic-opportunities-phone3.png",
    "revision": "2153c164c442175c5ece438c35a82620"
  },
  {
    "url": "assets/graphic-opportunities-phone4.png",
    "revision": "aca7744ffe588405b0b465ee19f005d2"
  },
  {
    "url": "assets/graphic-opportunities-robot.png",
    "revision": "a1733ce21bd1a63985298ca16d4c1990"
  },
  {
    "url": "assets/graphic-opportunities-sword.png",
    "revision": "74e272b1d0e85897526602a93218f368"
  },
  {
    "url": "assets/graphic-services-enterprise.png",
    "revision": "36f3cf77cddc5089b67c954714634629"
  },
  {
    "url": "assets/graphic-services-midsize.png",
    "revision": "3dc39dc4deef303053bf907a6cd2b0bb"
  },
  {
    "url": "assets/graphic-services-small.png",
    "revision": "8440ed1973bb739e3e5ebf488a892d2c"
  },
  {
    "url": "assets/graphic-services-startup.png",
    "revision": "01a69751afacefc8736f9b1dffdb0ecb"
  },
  {
    "url": "assets/icon/favicon.ico",
    "revision": "be4214672ca2ffe4f22927df69370717"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "7ebac395164f5dbf6c61d4a95a0afa62"
  },
  {
    "url": "assets/logo-215marketing.png",
    "revision": "71339e200a0636e92b6a8258ef1ac9dd"
  },
  {
    "url": "assets/logo-angular-black.png",
    "revision": "83834626ddccb5528e5b034528da9449"
  },
  {
    "url": "assets/logo-aws-black.png",
    "revision": "88e8f5692c050add54ac7163dcefa0ef"
  },
  {
    "url": "assets/logo-capacitor-black.png",
    "revision": "5108ee58b068aaac3787fc5f332b50fc"
  },
  {
    "url": "assets/logo-goemerchant.png",
    "revision": "5dcd75f01f2367007b2614cd3f4034c1"
  },
  {
    "url": "assets/logo-ionic-black.png",
    "revision": "42eec89452c6eebd57ccc3d978eb22ff"
  },
  {
    "url": "assets/logo-ionic.png",
    "revision": "524bb24b5bb043c2911bcc6a300e319a"
  },
  {
    "url": "assets/logo-mongodb-black.png",
    "revision": "e656f37beea4fd96d382ed25be2cf11d"
  },
  {
    "url": "assets/logo-mysql-black.png",
    "revision": "23066daecf9d5aba448482f51644497b"
  },
  {
    "url": "assets/logo-nodejs-black.png",
    "revision": "a2104d6c97be11965bac68dd288a02b0"
  },
  {
    "url": "assets/logo-openforge-icon.png",
    "revision": "c7768db226b9c64da0eca0d023c83a78"
  },
  {
    "url": "assets/logo-openforge.png",
    "revision": "334891342b2f64d38573aaa786fcb707"
  },
  {
    "url": "assets/logo-stencil-black.png",
    "revision": "e878573bee2d03c0891b72d7da6952ef"
  },
  {
    "url": "assets/ruler.png",
    "revision": "016bb36069714d4981b54eab89a2b4fe"
  },
  {
    "url": "build/app.js",
    "revision": "1b7ce0eb8fc27afee3b6069a0fee0f95"
  },
  {
    "url": "build/app/5jffiobg.es5.js",
    "revision": "82a4b2dd5caaa5561ee7a2d4f121273e"
  },
  {
    "url": "build/app/5jffiobg.js",
    "revision": "55a0f13de9e0affb888fe1843595c67c"
  },
  {
    "url": "build/app/app.hepen9v6.js",
    "revision": "2031f8afdbada09d58e028059d26d94f"
  },
  {
    "url": "build/app/app.mjs71ypv.js",
    "revision": "ce35d73321f9f935061c51fdb0c11b10"
  },
  {
    "url": "build/app/chunk-1fa7ed7c.js",
    "revision": "7c4a8912bd5f62135c2eba4055bb7939"
  },
  {
    "url": "build/app/chunk-abed0fce.es5.js",
    "revision": "f5a45ce600641b4c7925f0bb8e109e8d"
  },
  {
    "url": "build/app/csndfjsr.es5.js",
    "revision": "ce5f7a00d11f6d11938a85a8714dfd22"
  },
  {
    "url": "build/app/csndfjsr.js",
    "revision": "33e3482dd4e213b942b40db3c925a1fb"
  },
  {
    "url": "build/app/dvinjver.es5.js",
    "revision": "4082c22f415b99082c7de32e4a632458"
  },
  {
    "url": "build/app/dvinjver.js",
    "revision": "b87b34c19fd3060b2f4cd5213a6ec9c0"
  },
  {
    "url": "build/app/e3d5akmu.es5.js",
    "revision": "26bfd8667b2321992ae25f0848cf8b94"
  },
  {
    "url": "build/app/e3d5akmu.js",
    "revision": "f42b9beec5e488711adb3d2b0b68f1bf"
  },
  {
    "url": "build/app/eza2dcb3.es5.js",
    "revision": "e1fec936908b4e072e3bcbbe06f38bff"
  },
  {
    "url": "build/app/eza2dcb3.js",
    "revision": "f5c89966e1942772861e620c5252d40d"
  },
  {
    "url": "build/app/hkdx4yt1.es5.js",
    "revision": "1a08275308b0305ea41c970410bc8516"
  },
  {
    "url": "build/app/hkdx4yt1.js",
    "revision": "b35446138085b98aef69d7bcbb13589c"
  },
  {
    "url": "build/app/kehxa912.es5.js",
    "revision": "b720b5487ee322ba9fb5f40e8b5276c2"
  },
  {
    "url": "build/app/kehxa912.js",
    "revision": "2549ea637e062984e84608a632097969"
  },
  {
    "url": "build/app/n1sjoee1.es5.js",
    "revision": "c9d2759e0747a79d4a7c4fcc8d9a933b"
  },
  {
    "url": "build/app/n1sjoee1.js",
    "revision": "0c48f97ed8098cc152c73b41d6683dcc"
  },
  {
    "url": "build/app/o9hbiai1.es5.js",
    "revision": "132942a04632b45526ae091a1503ba3f"
  },
  {
    "url": "build/app/o9hbiai1.js",
    "revision": "5fff66748b57f046e908991420940d5a"
  },
  {
    "url": "build/app/uqm08pto.es5.js",
    "revision": "dc20df843945772db0b8785eab13a1fc"
  },
  {
    "url": "build/app/uqm08pto.js",
    "revision": "3d78b52e297e1f4c9be54d7e447c861d"
  },
  {
    "url": "build/app/veh3qlrq.es5.js",
    "revision": "ead2e500965762f2f4432d7d71284b52"
  },
  {
    "url": "build/app/veh3qlrq.js",
    "revision": "f4d6c96c274bf98c2761398dde39abca"
  },
  {
    "url": "build/app/zfwj7rd9.es5.js",
    "revision": "3a9fdac64470754aa56faa9e3bfd376f"
  },
  {
    "url": "build/app/zfwj7rd9.js",
    "revision": "fe14cda37dceba9c3f470da0c2441278"
  },
  {
    "url": "build/app/zfwj7rd9.sc.es5.js",
    "revision": "0295fdf28f2bfafe46f699cf753f9461"
  },
  {
    "url": "build/app/zfwj7rd9.sc.js",
    "revision": "0bf4096267d121ac2f277d5ac400e06a"
  },
  {
    "url": "index.html",
    "revision": "08f0bed8193e685e2a95794fcc70a19b"
  },
  {
    "url": "manifest.json",
    "revision": "0802902f1e2573114882e9848aa2d857"
  }
]);
