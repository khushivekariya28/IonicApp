"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4171],{4171:(_,d,t)=>{t.r(d),t.d(d,{ion_infinite_scroll:()=>u,ion_infinite_scroll_content:()=>E});var f=t(467),e=t(8393),r=t(909),s=t(4921),h=t(464);const u=(()=>{let l=class{constructor(i){(0,e.r)(this,i),this.ionInfinite=(0,e.d)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.onScroll=()=>{const n=this.scrollEl;if(!n||!this.canStart())return 1;const o=this.el.offsetHeight;if(0===o)return 2;const c=n.scrollTop,g=n.offsetHeight,p=0!==this.thrPc?g*this.thrPc:this.thrPx;return("bottom"===this.position?n.scrollHeight-o-c-p-g:c-o-p)<0&&!this.didFire?(this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3):4},this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}thresholdChanged(){const i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}disabledChanged(){const i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}connectedCallback(){var i=this;return(0,f.A)(function*(){const n=(0,r.f)(i.el);n?(i.scrollEl=yield(0,r.g)(n),i.thresholdChanged(),i.disabledChanged(),"top"===i.position&&(0,e.w)(()=>{i.scrollEl&&(i.scrollEl.scrollTop=i.scrollEl.scrollHeight-i.scrollEl.clientHeight)})):(0,r.p)(i.el)})()}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}complete(){var i=this;return(0,f.A)(function*(){const n=i.scrollEl;if(i.isLoading&&n)if(i.isLoading=!1,"top"===i.position){i.isBusy=!0;const o=n.scrollHeight-n.scrollTop;requestAnimationFrame(()=>{(0,e.e)(()=>{const a=n.scrollHeight-o;requestAnimationFrame(()=>{(0,e.w)(()=>{n.scrollTop=a,i.isBusy=!1,i.didFire=!1})})})})}else i.didFire=!1})()}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const i=(0,s.b)(this);return(0,e.h)(e.f,{key:"1444429a86950c449953cbf578436cc8cabf40ec",class:{[i]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}})}get el(){return(0,e.i)(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};return l.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}",l})(),E=(()=>{let l=class{constructor(i){(0,e.r)(this,i),this.customHTMLEnabled=s.c.get("innerHTMLTemplatesEnabled",h.E),this.loadingSpinner=void 0,this.loadingText=void 0}componentDidLoad(){if(void 0===this.loadingSpinner){const i=(0,s.b)(this);this.loadingSpinner=s.c.get("infiniteLoadingSpinner",s.c.get("spinner","ios"===i?"lines":"crescent"))}}renderLoadingText(){const{customHTMLEnabled:i,loadingText:n}=this;return i?(0,e.h)("div",{class:"infinite-loading-text",innerHTML:(0,h.a)(n)}):(0,e.h)("div",{class:"infinite-loading-text"},this.loadingText)}render(){const i=(0,s.b)(this);return(0,e.h)(e.f,{key:"060278bf9cb0321e182352f9613be4ebbb028259",class:{[i]:!0,[`infinite-scroll-content-${i}`]:!0}},(0,e.h)("div",{key:"07d3cada920145f979ad315bd187fb878e0c3da3",class:"infinite-loading"},this.loadingSpinner&&(0,e.h)("div",{key:"6254f175d7543d09f3dd47cd0589a2809182cd8c",class:"infinite-loading-spinner"},(0,e.h)("ion-spinner",{key:"a6a816d1c65b60b786333b209b63492aa716a283",name:this.loadingSpinner})),void 0!==this.loadingText&&this.renderLoadingText()))}};return l.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, var(--ion-text-color-step-400, #666666))}"},l})()}}]);