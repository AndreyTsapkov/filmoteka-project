!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=n.parcelRequire37c5;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequire37c5=l),l("7MDoz");var i=l("bpxeT"),o=l("2TvXO"),r=l("l5bVx"),c=e(l("WMajR")).template({1:function(n,t,a,l,i){var o,c=null!=t?t:n.nullContext||{},s=n.hooks.helperMissing,d="function",u=n.escapeExpression,m=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'  <li class="films__item" data-id='+u((void 0===(o=null!=(o=m(a,"id")||(null!=t?m(t,"id"):t))?o:s)?"undefined":e(r)(o))===d?o.call(c,{name:"id",hash:{},data:i,loc:{start:{line:2,column:34},end:{line:2,column:40}}}):o)+'>\n\n    <a href="" class="films__wrapper">\n      <div class="films__img-wrapper">\n        <img class="films__img" src="'+u((void 0===(o=null!=(o=m(a,"img")||(null!=t?m(t,"img"):t))?o:s)?"undefined":e(r)(o))===d?o.call(c,{name:"img",hash:{},data:i,loc:{start:{line:6,column:37},end:{line:6,column:44}}}):o)+'" alt="'+u((void 0===(o=null!=(o=m(a,"title")||(null!=t?m(t,"title"):t))?o:s)?"undefined":e(r)(o))===d?o.call(c,{name:"title",hash:{},data:i,loc:{start:{line:6,column:51},end:{line:6,column:60}}}):o)+'" loading="lazy" />\n      </div>\n\n      <div class="films__info">\n        <p class="films__name">'+u((void 0===(o=null!=(o=m(a,"title")||(null!=t?m(t,"title"):t))?o:s)?"undefined":e(r)(o))===d?o.call(c,{name:"title",hash:{},data:i,loc:{start:{line:10,column:31},end:{line:10,column:40}}}):o)+'</p>\n\n        <p class="films__description">\n          '+u((void 0===(o=null!=(o=m(a,"genre")||(null!=t?m(t,"genre"):t))?o:s)?"undefined":e(r)(o))===d?o.call(c,{name:"genre",hash:{},data:i,loc:{start:{line:13,column:10},end:{line:13,column:19}}}):o)+"\n          |\n          "+u((void 0===(o=null!=(o=m(a,"releaseDate")||(null!=t?m(t,"releaseDate"):t))?o:s)?"undefined":e(r)(o))===d?o.call(c,{name:"releaseDate",hash:{},data:i,loc:{start:{line:15,column:10},end:{line:15,column:25}}}):o)+'<span class="rating-on-library-card">'+u((void 0===(o=null!=(o=m(a,"vote")||(null!=t?m(t,"vote"):t))?o:s)?"undefined":e(r)(o))===d?o.call(c,{name:"vote",hash:{},data:i,loc:{start:{line:15,column:62},end:{line:15,column:70}}}):o)+"</span>\n        </p>\n      </div>\n    </a>\n    \n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var i;return null!=(i=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,l,0),inverse:e.noop,data:l,loc:{start:{line:1,column:0},end:{line:21,column:9}}}))?i:""},useData:!0}),s=l("3cGbf"),d=l("dyT35"),u=(s=l("3cGbf"),d=l("dyT35"),l("4x3lN")),m=l("j0bx3"),p=document.querySelector(".films__container"),_=document.querySelector(".js-films-list-library"),v=document.querySelector(".library__watched-btn");window.addEventListener("load",f),v.addEventListener("click",f);var g=(0,s.load)("allWatchedMovies");function f(e){var n=(0,s.load)("allWatchedMovies");if(void 0===n||0===n.length)return p.innerHTML="",emptyLibraryImg='<div>\n      <img class="empty-library-img" src="https://images.everyeye.it/img-notizie/pulp-fiction-cosa-vincent-vega-amsterdam-scopriamolo-insieme-v4-465501-1280x960.jpg" alt="empty-img">\n    </div>\n    <p class="empty-library-text">Vincent can\'t find your watched films :(</p>\n    ',void p.insertAdjacentHTML("beforeend",emptyLibraryImg);h(n)}function h(e){var n=e.map((function(e){return e.genre.length<=3?e.genre=e.genre.join(", "):e.genre=[e.genre[0],e.genre[1],"Other"].join(", "),e}));_.innerHTML="",_.insertAdjacentHTML("beforeend",c(n))}u.default.IMG_URL;function y(){return(y=e(i)(e(o).mark((function n(t){var a,l,i,r,c,u,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p=function(e){var n=e.id,t=e.img,a=e.title,l=e.popularity,i=e.vote,o=e.votes,r=e.about,c=e.genre,s=d.create('\n    <div class="modal__container">\n      <div class="modal__close">\n        <div class="modal__close-first"></div>\n        <div class="modal__close-second"></div>\n      </div>\n      <div class="modal-wrap">\n        <div class="modal__picture-wrap">\n          <img\n          class="modal__picture"\n          src="'.concat(t,'"\n          alt="film-picture"\n          />\n          <button class="modal__button-play trailer-button" data-id="').concat(n,'">\n            <img class="modal__img-play" src="https://www.freepnglogos.com/uploads/play-button-png/play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-27.png" alt="play trailer" width="100" height="100" />\n\t\t\t\t\t</button>\n        </div>\n        <div class="modal__desc-wrap">\n          <h2 class="modal-heading">').concat(a,'</h2>\n          <div class="modal__rating-wrap">\n            <ul class="modal__rating-left-list">\n              <li class="modal__rating-left-item">Vote / Votes</li>\n              <li class="modal__rating-left-item">Popularity</li>\n              <li class="modal__rating-left-item">Original Title</li>\n              <li class="modal__rating-left-item">Genre</li>\n            </ul>\n            <ul class="modal__rating-right-list">\n              <li class="modal__rating-right-item">\n                <span class="modal__rating-right-item--color">').concat(i,'</span> /\n                <span class="modal__rating-right-item--shadow">').concat(o,'</span>\n              </li>\n              <li class="modal__rating-right-item">').concat(l,'</li>\n              <li class="modal__rating-right-item modal__rating-right-item--uppercase">').concat(a,'</li>\n              <li class="modal__rating-right-item">').concat(c,'</li>\n            </ul>\n          </div>\n          <div class="modal__content-wrap">\n            <h4 class="modal__content-heading">About</h4>\n            <p class="modal__content">\n              ').concat(r,'\n            </p>\n          </div>\n          <div class="modal__button-wrap" data-id="').concat(n,'">\n            <button class="modal__button btn-remove-watch" type="button">remove from Watched</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  '),{onShow:function(e){window.addEventListener("keydown",u),window.addEventListener("click",m),e.element().querySelector(".modal__close").onclick=e.close},onClose:function(e){window.removeEventListener("keydown",u),window.removeEventListener("click",m)}});function u(e){"Escape"===e.code&&(s.element().classList.contains("visually-hidden")||s.close())}function m(e){"basicLightbox__placeholder"===e.target.classList.value&&s.close()}s.show()},t.preventDefault(),"DIV"!==t.target.nodeName&&"UL"!==t.target.nodeName&&("IMG"===t.target.nodeName&&(a=Number(t.target.parentElement.parentElement.parentElement.dataset.id),l=(0,s.load)("allWatchedMovies"),i=l.find((function(e){return e.id===a})),p(i)),"P"===t.target.nodeName&&(r=Number(t.target.parentElement.parentElement.parentElement.dataset.id),c=(0,s.load)("allWatchedMovies"),u=c.find((function(e){return e.id===r})),p(u))),(0,m.addListener)(),document.querySelector(".btn-remove-watch").addEventListener("click",b);case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function b(e){var n;g.forEach((function(e,t){return e.id===fetch.id?n=t:t})),s.allWatched.splice(n,1),(0,s.save)("allWatchedMovies",s.allWatched),f()}({cardContainer:document.querySelector(".films__container")}).cardContainer.addEventListener("click",(function(e){return y.apply(this,arguments)}));i=l("bpxeT"),o=l("2TvXO"),s=l("3cGbf"),d=l("dyT35"),s=l("3cGbf"),d=l("dyT35"),u=l("4x3lN"),m=l("j0bx3"),document.querySelector(".js-films-list-library");var w=document.querySelector(".library__queue-btn"),L=(document.querySelector(".library__watched-btn"),document.querySelector(".films__container")),E=(0,s.load)("allQueueMovies");function k(){var e=(0,s.load)("allQueueMovies");if(void 0===e||0===e.length)return console.log(12),L.innerHTML="",emptyLibraryImg='<div>\n      <img class="empty-library-img" src="https://images.everyeye.it/img-notizie/pulp-fiction-cosa-vincent-vega-amsterdam-scopriamolo-insieme-v4-465501-1280x960.jpg" alt="empty-img">\n    </div>\n    <p class="empty-library-text">Vincent can\'t find your queue films :(</p>\n    ',void L.insertAdjacentHTML("beforeend",emptyLibraryImg);h(e)}w.addEventListener("click",k);u.default.IMG_URL;function M(){return(M=e(i)(e(o).mark((function n(t){var a,l,i,r,c,u,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p=function(e){var n=e.id,t=e.img,a=e.title,l=e.popularity,i=e.vote,o=e.votes,r=e.about,c=e.genre,s=d.create('\n    <div class="modal__container">\n      <div class="modal__close">\n        <div class="modal__close-first"></div>\n        <div class="modal__close-second"></div>\n      </div>\n      <div class="modal-wrap">\n        <div class="modal__picture-wrap">\n          <img\n          class="modal__picture"\n          src="'.concat(t,'"\n          alt="film-picture"\n          />\n          <button class="modal__button-play trailer-button" data-id="').concat(n,'">\n            <img class="modal__img-play" src="https://www.freepnglogos.com/uploads/play-button-png/play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-27.png" alt="play trailer" width="100" height="100" />\n\t\t\t\t\t</button>\n        </div>\n        <div class="modal__desc-wrap">\n          <h2 class="modal-heading">').concat(a,'</h2>\n          <div class="modal__rating-wrap">\n            <ul class="modal__rating-left-list">\n              <li class="modal__rating-left-item">Vote / Votes</li>\n              <li class="modal__rating-left-item">Popularity</li>\n              <li class="modal__rating-left-item">Original Title</li>\n              <li class="modal__rating-left-item">Genre</li>\n            </ul>\n            <ul class="modal__rating-right-list">\n              <li class="modal__rating-right-item">\n                <span class="modal__rating-right-item--color">').concat(i,'</span> /\n                <span class="modal__rating-right-item--shadow">').concat(o,'</span>\n              </li>\n              <li class="modal__rating-right-item">').concat(l,'</li>\n              <li class="modal__rating-right-item modal__rating-right-item--uppercase">').concat(a,'</li>\n              <li class="modal__rating-right-item">').concat(c,'</li>\n            </ul>\n          </div>\n          <div class="modal__content-wrap">\n            <h4 class="modal__content-heading">About</h4>\n            <p class="modal__content">\n              ').concat(r,'\n            </p>\n          </div>\n          <div class="modal__button-wrap" data-id="').concat(n,'">\n            <button class="modal__button btn-remove-queue">remove from Queue</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  '),{onShow:function(e){window.addEventListener("keydown",u),window.addEventListener("click",m),e.element().querySelector(".modal__close").onclick=e.close},onClose:function(e){window.removeEventListener("keydown",u),window.removeEventListener("click",m)}});function u(e){"Escape"===e.code&&s.close()}function m(e){"basicLightbox__placeholder"===e.target.classList.value&&s.close()}s.show()},t.preventDefault(),"DIV"!==t.target.nodeName&&"UL"!==t.target.nodeName&&("IMG"===t.target.nodeName&&(a=Number(t.target.parentElement.parentElement.parentElement.dataset.id),l=(0,s.load)("allQueueMovies"),console.log(l),i=l.find((function(e){return e.id===a})),console.log(i),p(i)),"P"===t.target.nodeName&&(r=t.target.parentElement.parentElement.parentElement.dataset.id,c=(0,s.load)("allQueueMovies"),u=c.find((function(e){return e.id===r})),console.log(u),p(u))),(0,m.addListener)(),document.querySelector(".btn-remove-queue").addEventListener("click",q);case 7:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function q(e){var n;E.forEach((function(e,t){return e.id===fetch.id?n=t:t})),s.allQueue.splice(n,1),(0,s.save)("allQueueMovies",s.allQueue),k()}({cardContainer:document.querySelector(".films__container")}).cardContainer.addEventListener("click",(function(e){return M.apply(this,arguments)})),l("ak33M");var x=document.querySelector(".library__watched-btn"),S=document.querySelector(".library__queue-btn");document.querySelector(".button-group").addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;if(e.target.classList.contains("library__watched-btn"))return x.classList.add("is-active"),void S.classList.remove("is-active");if(e.target.classList.contains("library__queue-btn"))return x.classList.remove("is-active"),void S.classList.add("is-active")})),l("iCklI"),l("7Sjfd"),document.querySelector(".nav__form-log-out").addEventListener("submit",(function(e){sessionStorage.removeItem("sign-in")}))}();
//# sourceMappingURL=library.47b18190.js.map
