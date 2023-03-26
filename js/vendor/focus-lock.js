const SELECTORS=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'];export class FocusLock{constructor(){this._lockedSelector=null,this._focusableElements=null,this._endElement=null,this._selectors=SELECTORS,this._documentKeydownHandler=this._documentKeydownHandler.bind(this)}_documentKeydownHandler(e){const t=document.activeElement;if("Tab"===e.key){if(!this._focusableElements.length)return e.preventDefault(),void t.blur();if(1===this._focusableElements.length)return e.preventDefault(),void this._focusableElements[0].focus();if(this._focusableElements.length>1&&!t.closest(this._lockedSelector))return e.preventDefault(),void this._focusableElements[0].focus()}"Tab"!==e.key||e.shiftKey||t!==this._focusableElements[this._focusableElements.length-1]||(e.preventDefault(),this._focusableElements[0].focus()),"Tab"===e.key&&e.shiftKey&&t===this._focusableElements[0]&&(e.preventDefault(),this._focusableElements[this._focusableElements.length-1].focus())}lock(e,t=!0){this.unlock(),this._lockedSelector=e;const n=document.querySelector(this._lockedSelector);if(!n)return;this._focusableElements=n.querySelectorAll(this._selectors),this._endElement=document.activeElement;const s=n.querySelector("[data-focus]")||this._focusableElements[0];this._endElement&&this._endElement.blur(),s&&t&&s.focus(),document.addEventListener("keydown",this._documentKeydownHandler)}unlock(e=!0){this._endElement&&e&&this._endElement.focus(),this._lockedSelector=null,this._focusableElements=null,this._endElement=null,document.removeEventListener("keydown",this._documentKeydownHandler)}}window.focusLock=new FocusLock;