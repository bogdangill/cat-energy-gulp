'use strict';

import './config/jqueryLoad';
import '../blocks/components/burger/burger.js';
import '../blocks/components/main-nav/main-nav.js';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';
import '../blocks/components/dropdown/dropdown.js';

// Если js включен в браузере

var tagHtml = document.querySelector('html');
tagHtml.classList.add('js');

// Если js включен в браузере

// Плавный скол с навигации

/* $(".scrollto > a").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
}); */

// Плавный скол с навигации
