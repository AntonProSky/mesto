(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e,n){var r=this,o=e.data,i=e.handleCardClick,u=e.handleClickLike,a=e.handleClickRemove,c=e.userId;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=o._id,this._title=o.name,this._link=o.link,this._owner=o.owner._id===c,this._likes=o.likes.length,this._arrayLikes=o.likes,this._templateSelector=n,this._handleCardClick=i,this._handleClickLike=u,this._handleClickRemove=a,this._isLiked=!1,o.likes.forEach((function(t){t._id===c&&(r._isLiked=!0)}))}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){var t=document.querySelector(this._templateSelector).content.querySelector(".elements__element").cloneNode(!0);return this._owner||t.querySelector(".elements__delete-button").classList.remove("element__delete-button_active"),t}},{key:"generateCard",value:function(){return this._elementCard=this._getTemplate(),this._imageCard=this._elementCard.querySelector(".elements__mask-group"),this._imageCard.src=this._link,this._imageCard.alt=this._title,this._usersLikes=this._elementCard.querySelector(".elements__likes-counter"),this._usersLikes.textContent=this._likes,this._likeButton=this._elementCard.querySelector(".elements__button-like"),this._isLiked&&this._likeButton.classList.add("elements__button-like_active"),this._elementCard.querySelector(".elements__title").textContent=this._title,this._setEventListeners(),this._elementCard}},{key:"_setEventListeners",value:function(){var t=this;this._imageCard.addEventListener("click",(function(){t._handleCardClick()})),this._likeButton.addEventListener("click",(function(e){t._handleLike(e)})),this._elementCard.querySelector(".elements__delete-button").addEventListener("click",(function(){t._handleClickRemove(t)}))}},{key:"handleLike",value:function(t){t.target.classList.toggle("elements__button-like_active"),this._handleClickLike()}},{key:"handleDelete",value:function(){this._elementCard.remove(),this._elementCard=null}},{key:"setLikes",value:function(t){this._likes=t,this._usersLikes.textContent=this._likes}},{key:"statusLikes",value:function(){this._isLiked=!this._isLiked}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function i(t,e,n){return(e=u(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:String(e)}var a=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,"_hideError",(function(t){t.textContent="",t.classList.remove(r._options.inputErrorClass)})),i(this,"_showError",(function(t,e){t.innerText=e,t.classList.add(r._options.inputErrorClass)})),this._options=e,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._options.inputSelector)),this._errorMessage=this._formElement.querySelector(this._options.inputErrorSelector),this._buttonSubmit=this._formElement.querySelector(this._options.buttonSelector)}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",(function(t){return t.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){var n=t._formElement.querySelector("#".concat(e.name,"-error"));t._toggleInputState(e,n),t._toggleButtonState()}))}))}},{key:"resetValidationState",value:function(){var t=this;this._toggleButtonState(),this._inputList.forEach((function(e){var n=t._formElement.querySelector("#".concat(e.name,"-error"));t._hideError(n)}))}},{key:"disabledButton",value:function(){this._buttonSubmit.setAttribute("disabled","true"),this._buttonSubmit.classList.add(this._options.disabledButtonClass)}},{key:"_toggleInputState",value:function(t,e){t.validity.valid?this._hideError(e):this._showError(e,t.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._buttonSubmit.classList.add(this._options.disabledButtonClass),this._buttonSubmit.setAttribute("disabled","true")):(this._buttonSubmit.classList.remove(this._options.disabledButtonClass),this._buttonSubmit.removeAttribute("disabled"))}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==c(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===c(o)?o:String(o)),r)}var o}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&t.close()}))}}])&&s(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===f(o)?o:String(o)),r)}var o}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=h(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},y.apply(this,arguments)}function d(t,e){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},d(t,e)}function h(t){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},h(t)}var v=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=h(r);if(o){var n=h(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===f(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._submitCallback=e,n._form=n._popup.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n._buttonSave=n._form.querySelector(".popup__save"),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;y(h(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){t._submitCallback(e,t._getInputValues())}))}},{key:"close",value:function(){y(h(u.prototype),"close",this).call(this),this._form.reset()}},{key:"saveLoading",value:function(t){this._buttonSave.innerText=t?"Сохранение...":"Сохранить"}}])&&p(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function m(t,e){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},m(t,e)}function b(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=k(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},S.apply(this,arguments)}function k(t){return k=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},k(t)}function g(t){var e=function(t,e){if("object"!==_(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==_(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===_(e)?e:String(e)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&m(t,e)}(i,t);var e,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=k(n);if(r){var o=k(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return b(t)}(this,t)});function i(t){var e,n,r,u,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),r=b(n=o.call(this,t)),a=function(t,r){n._popupImagePhoto.src=r,n._popupImagePhoto.alt=t,n._popupImageTitle.textContent=t,S((e=b(n),k(i.prototype)),"open",e).call(e)},(u=g(u="open"))in r?Object.defineProperty(r,u,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[u]=a,n._popupImagePhoto=n._popup.querySelector(".popup__image"),n._popupImageTitle=n._popup.querySelector("#popup__title"),n}return e=i,Object.defineProperty(e,"prototype",{writable:!1}),e}(l);function E(t){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},E(t)}function L(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==E(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==E(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===E(o)?o:String(o)),r)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},C.apply(this,arguments)}function j(t,e){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},j(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&j(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function u(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._saveButton=n._popup.querySelector(".popup__save"),n._handleCardClick=e,n}return e=u,(n=[{key:"open",value:function(t){this._card=t,C(O(u.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){var t=this;C(O(u.prototype),"setEventListeners",this).call(this),this._saveButton.addEventListener("click",(function(e){t._handleCardClick(e,t._card)}))}}])&&L(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(l);function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function T(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var R=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"addItem",value:function(t){this._container.prepend(t)}},{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}}])&&T(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function B(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==I(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===I(o)?o:String(o)),r)}var o}var x=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(e),this._userStatus=document.querySelector(n),this._userAvatar=document.querySelector(r),this._userId=""}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userStatus.textContent,avatar:this._userAvatar.src,id:this._userId}}},{key:"setUserInfo",value:function(t,e,n){void 0!==t&&(this._userName.textContent=t),void 0!==e&&(this._userStatus.textContent=e),void 0!==n&&(this._userId=n)}},{key:"setUserAvatar",value:function(t){void 0!==t&&(this._profileAvatar.style.backgroundImage="url('".concat(t,"')"))}}])&&B(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==A(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===A(o)?o:String(o)),r)}var o}var G=function(){function t(e){var n=e.address,r=e.token,o=e.idGroup;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._address=n,this._token=r,this._idGroup=o}var e,n;return e=t,(n=[{key:"_checkResponse",value:function(t){return t.ok?t.json():Promise.reject("Ошибка ".concat(t.status))}},{key:"_get",value:function(t){return fetch(t,{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"_patch",value:function(t,e){return fetch(t,{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:e}).then(this._checkResponse)}},{key:"_post",value:function(t,e){return fetch(t,{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:e}).then(this._checkResponse)}},{key:"_put",value:function(t){return fetch(t,{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"_delete",value:function(t){return fetch(t,{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"getCards",value:function(){var t="".concat(this._address).concat(this._idGroup,"/cards");return this._get(t)}},{key:"getUserInfo",value:function(){var t="".concat(this._address).concat(this._idGroup,"/users/me");return this._get(t)}},{key:"setProfile",value:function(t,e){var n="".concat(this._address).concat(this._idGroup,"/users/me"),r=JSON.stringify({name:t,about:e});return this._patch(n,r)}},{key:"setAvatar",value:function(t){var e="".concat(this._address).concat(this._idGroup,"/users/me/avatar"),n=JSON.stringify({avatar:t});return this._patch(e,n)}},{key:"postCard",value:function(t,e){var n="".concat(this._address).concat(this._idGroup,"/cards"),r=JSON.stringify({name:t,link:e});return this._post(n,r)}},{key:"deletelLike",value:function(t){var e="".concat(this._address).concat(this._idGroup,"/cards/likes/").concat(t);return this._delete(e)}},{key:"deleteCard",value:function(t){var e="".concat(this._address).concat(this._idGroup,"/cards/").concat(t);return this._delete(e)}},{key:"showLike",value:function(t){var e="".concat(this._address).concat(this._idGroup,"/cards/").concat(t);return this._get(e).then((function(t){console.log(t)}))}},{key:"setLike",value:function(t){var e="".concat(this._address).concat(this._idGroup,"/cards/likes/").concat(t);return this._put(e)}}])&&D(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),U=(document.querySelector(".elements"),document.querySelector("#template-card"),document.querySelector("#popup__form_create-profile"),document.querySelector("#popup__form_create-card"),document.querySelector(".profile__edit-button")),V=document.querySelector("#popup-profile"),N=document.querySelector(".popup__input_type_name"),z=document.querySelector(".popup__input_type_job"),J=(document.querySelector(".profile__title"),document.querySelector(".profile__subtitle"),document.querySelector("#popup__input_type_placename"),document.querySelector("#popup__input_type_href"),document.querySelector(".profile__avatar")),M=document.querySelector(".profile__add-button"),H=document.querySelector("#popup-card"),F=document.querySelector("#popup-avatar"),K=(document.querySelector("#popup-image"),document.querySelector(".popup__image"),document.querySelector("#popup__title"),document.querySelectorAll(".popup__close"),{formSelector:".popup__form",buttonSelector:".popup__save",inputSelector:".popup__input",inputSectionSelector:".popup__section",inputErrorSelector:".popup__input-error",disabledButtonClass:"popup__save_inactive",inputErrorClass:"popup__input-error_active"}),Q=new a(K,V);Q.enableValidation(),Q.disabledButton();var W=new a(K,H);W.enableValidation(),W.disabledButton();var X=new a(K,F);X.enableValidation(),X.disabledButton();var Y=new w("#popup-image");Y.setEventListeners();var Z=new x(".profile__title",".profile__subtitle",".profile__avatar"),$=new v("#popup-card",(function(t,e){t.preventDefault(),$.saveLoading(!0),ut.postCard(e.placename,e.href).then((function(t){rt.addItem(ot(t)),$.close()})).catch((function(t){console.log(t)})).finally((function(){$.saveLoading(!1)}))}));$.setEventListeners();var tt=new v("#popup-profile",(function(t,e){t.preventDefault(),tt.saveLoading(!0),ut.setProfile(e.name,e.job).then((function(t){Z.setUserInfo(t.name,t.about),tt.close()})).catch((function(t){console.log(t)})).finally((function(){tt.saveLoading(!1)}))})),et=new v("#popup-avatar",(function(t,e){t.preventDefault(),et.saveLoading(!0),ut.setAvatar(e.avatar).then((function(t){Z.setUserAvatar(t.avatar),et.close()})).catch((function(t){console.log(t)})).finally((function(){et.saveLoading(!1)}))}));et.setEventListeners();var nt=new P(".popup_delete-card",(function(t,e){t.preventDefault(),ut.deleteCard(e.id).then((function(){e.deleteCard(),nt.close()})).catch((function(t){console.log(t)}))}));nt.setEventListeners();var rt=new R({items:function(t){cardList.addItem(ot(t))}},".elements__element");function ot(t){var e=Z.getUserInfo().id,r=new n({data:t,userId:e,handleClickRemove:function(t){nt.open(t)},handleClickCard:function(){Y.open({name:t.name,link:t.link})},handleClickLike:function(){r._isLiked?ut.deleteLike(r.id).then((function(t){r.setLikes(t.likes.length),r.statusLikes()})).catch((function(t){console.log(t)})):ut.setLike(r.id).then((function(t){r.setLikes(t.likes.length),r.statusLikes()})).catch((function(t){console.log(t)}))}},"#template-card");return r.generateCard()}tt.setEventListeners(),J.addEventListener("click",(function(){X.disabledButton(),et.open()})),U.addEventListener("click",(function(){var t=Z.getUserInfo();N.value=t.name,z.value=t.about,tt.open()})),M.addEventListener("click",(function(){W.disabledButton(),$.open()}));var it,ut=new G({address:"https://mesto.nomoreparties.co/v1/",token:"079c0d85-f73b-4e02-b6ad-ea3e78ed3d95",idGroup:"cohort-72"});ut.getUserInfo().then((function(t){it=t._id,Z.setUserInfo(t.name,t.about,it),Z.setUserAvatar(t.avatar)})).then((function(){ut.getCards().then((function(t){rt.renderItems(t,it)})).catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))})();