/*! Built with http://stenciljs.com */
App.loadBundle("dvinjver",["exports"],function(e){var t=window.App.h,r=function(){function e(){var e=this;this.hideButton=!1,this.scrollIntoView=function(){e.scrollElement.scrollIntoView({behavior:"smooth",block:"start"})}}return e.prototype.componentDidLoad=function(){this.hideButton&&(document.getElementsByClassName("btn btn-primary btn-arrow")[0].style.visibility="hidden");try{this.scrollElement=document.querySelector(this.linkUrl)}catch(e){console.log("app-header error ",e)}},e.prototype.render=function(){return t("header",{class:"header d-flex flex-column justify-content-center",style:{backgroundImage:"url('"+this.backgroundUrl+"')"}},t("slot",{name:"header"}),t("slot",{name:"subheader"}),this.hideButton?null:t("a",{class:"btn btn-primary btn-arrow",onClick:this.scrollIntoView},t("i",{class:"fa fa-arrow-down","aria-hidden":"true"}),t("span",{class:"sr-only"},"Scroll to content")))},Object.defineProperty(e,"is",{get:function(){return"app-header"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{backgroundUrl:{type:String,attr:"background-url"},hideButton:{type:Boolean,attr:"hide-button"},linkUrl:{type:String,attr:"link-url"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"header.header{background-color:#171719;background-position:top center;background-size:cover;padding:10rem 1rem;position:relative;text-align:center}\@media (max-width:575.98px){header.header{height:calc(100vh - 120px)}}header.header h2{color:#fff;font-size:4rem}\@media (max-width:1399.98px){header.header h2{font-size:3rem}}\@media (max-width:767.98px){header.header{padding:5rem 1rem}header.header h2{font-size:2.2rem}}header.header p{color:#fff;font-size:1.5rem;font-weight:300;margin:0}\@media (max-width:767.98px){header.header p{font-size:1rem}}header.header .btn-arrow{bottom:-23px;left:calc(50% - 23px);padding:.375rem 1rem;position:absolute}header.header .btn-arrow i,header.header .btn-arrow span{color:#fff}"},enumerable:!0,configurable:!0}),e}();e.AppHeader=r,Object.defineProperty(e,"__esModule",{value:!0})});