
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '你快给我回来';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '你可真是个大帅哥' ;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });