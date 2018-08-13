<div class="full slide">
  <div id="homeslider" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div rel="#6dccfd" class="carousel-item relative active">
        <img class="d-block w-100" src="/assets/images/slider.png" alt="First slide">
        <div class="absolute language d-none d-sm-block">
          <div class="d-flex bd-highlight">
  
            <span class="p-2 flex-fill bd-highlight text-center" onclick="select_en();">Tiếng Anh<br><img src="/assets/images/en.png"> </span>
            <span class="p-2 flex-fill bd-highlight text-center" onclick="select_vn();">Tiếng Việt<br><img src="/assets/images/vn.png"></span>
            <span class="p-2 flex-fill bd-highlight text-center" onclick="select_ev();">Song ngữ <br><img src="/assets/images/ev.png"> </span>
          </div>

        </div>
        <div class="absolute language-xs d-block d-sm-none">
          <div class="d-flex bd-highlight">
  
            <span class="p-2 flex-fill bd-highlight text-center" onclick="select_en();">Tiếng Anh<br><img src="/assets/images/en.png"> </span>
            <span class="p-2 flex-fill bd-highlight text-center" onclick="select_vn();">Tiếng Việt<br><img src="/assets/images/vn.png"></span>
            <span class="p-2 flex-fill bd-highlight text-center" onclick="select_ev();">Song ngữ <br><img src="/assets/images/ev.png"> </span>
          </div>

        </div>
      </div>
      <div rel="#fcb7d5" class="carousel-item">
        <img class="d-block w-100" src="/assets/images/slider42.png" alt="Second slide">
      </div>
      <div rel="#7bc646" class="carousel-item">
        <img class="d-block w-100" src="/assets/images/slider3.png" alt="Third slide">
      </div>
       <div rel="#73bee9" class="carousel-item">
        <img class="d-block w-100" src="/assets/images/slider2.png" alt="Four slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#homeslider" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#homeslider" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>

<script type="text/javascript">
 
  var clearId = setInterval(function(){
      var color = jQuery('#homeslider').find('.active').attr('rel');
    
      jQuery('.header').css('background', color);
  }, 100);

 
</script>
