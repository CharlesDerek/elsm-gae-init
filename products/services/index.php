<?php include $_SERVER['DOCUMENT_ROOT']."/includes/header.php"; ?>


  <div data-delay="7000" data-animation="slide" data-autoplay="1" data-nav-spacing="5" data-duration="2000" data-infinite="1" class="homeslider w-slider">
    <div class="mask w-slider-mask">
      <div class="slide1 w-slide">
        <div class="covercontainerprimaryslider w-container">
          <h1 data-ix="cover-title-appear" class="cover-title-primaryslider w-hidden-tiny">Food Services Page</h1>
          <h1 data-ix="cover-title-appear" class="cover-title-primaryslidermobile w-hidden-main w-hidden-medium w-hidden-small">FROM OUR FIELDS TO YOUR TABLE</h1>
          <div data-ix="new-interaction-2" class="cover-cta-in-slider"><a href="#" class="button-cta-slider secondary sliderbtn w-button" data-ix="cover-title-appear"><strong class="bold-text-3">View Delicious CTA..</strong></a><a href="#" data-ix="new-interaction-2" class="go-down-link paddingfixforarrow w-inline-block"><img src="../../images/5a0df63d70c9e80001f55fed_white-down-arrow-png-211-compressor.png" width="50" data-ix="arrowhovereffect" alt=""></a></div>
          <div data-ix="new-interaction" class="cover-subtitleslider"><strong class="boldtext2secondaryslider" data-ix="cover-title-appear">IT&#x27;S WHAT&#x27;S ON THE INSIDE  THAT COUNTS.</strong></div>
        </div>
      </div>
      <div class="slide2 w-slide">
        <div class="covercontainerprimaryslider w-container">
          <h1 data-ix="cover-title-appear" class="cover-title-primaryslider w-hidden-tiny"><em>FOOD SERVICES PAGE</em></h1>
          <h1 data-ix="cover-title-appear" class="cover-title-primaryslidermobile w-hidden-main w-hidden-medium w-hidden-small">FROM OUR FIELDS TO YOUR TABLE</h1>
          <div data-ix="new-interaction-2" class="cover-cta-in-slider"><a href="#" class="button-cta-slider secondary sliderbtn w-button" data-ix="cover-title-appear"><strong class="bold-text-3">View More</strong></a><a href="#" data-ix="new-interaction-2" class="go-down-link paddingfixforarrow w-inline-block"><img src="../../images/5a0df63d70c9e80001f55fed_white-down-arrow-png-211-compressor.png" width="50" data-ix="arrowhovereffect" alt=""></a></div>
          <div data-ix="new-interaction" class="cover-subtitleslider"><strong class="boldtext2secondaryslider" data-ix="cover-title-appear">Pastas &amp; Sauces</strong></div>
        </div>
      </div>
      <div class="slide3 w-slide">
        <div class="covercontainerprimaryslider w-container">
          <h1 data-ix="cover-title-appear" class="cover-title-primaryslider w-hidden-tiny"><em>FOOD SERVICES PAGE</em></h1>
          <h1 data-ix="cover-title-appear" class="cover-title-primaryslidermobile w-hidden-main w-hidden-medium w-hidden-small">FROM OUR FIELDS TO YOUR TABLE</h1>
          <div data-ix="new-interaction-2" class="cover-cta-in-slider"><a href="#" class="button-cta-slider secondary sliderbtn w-button" data-ix="cover-title-appear"><strong class="bold-text-3">View Delicious CTA..</strong></a><a href="#" data-ix="new-interaction-2" class="go-down-link paddingfixforarrow w-inline-block"><img src="../../images/5a0df63d70c9e80001f55fed_white-down-arrow-png-211-compressor.png" width="50" data-ix="arrowhovereffect" alt=""></a></div>
          <div data-ix="new-interaction" class="cover-subtitleslider"><strong class="boldtext2secondaryslider" data-ix="cover-title-appear">THAT COUNTS.</strong></div>
        </div>
      </div>
      <div class="slide4 w-slide">
        <div class="covercontainerprimaryslider w-container">
          <h1 data-ix="cover-title-appear" class="cover-title-primaryslider w-hidden-tiny"><em>FOOD SERVICES PAGE</em></h1>
          <h1 data-ix="cover-title-appear" class="cover-title-primaryslidermobile w-hidden-main w-hidden-medium w-hidden-small">FROM OUR FIELDS TO YOUR TABLE</h1>
          <div data-ix="new-interaction-2" class="cover-cta-in-slider"><a href="#" class="button-cta-slider secondary sliderbtn w-button" data-ix="cover-title-appear"><strong class="bold-text-3">Caribbean Specialties</strong></a><a href="#" data-ix="new-interaction-2" class="go-down-link paddingfixforarrow w-inline-block"><img src="../../images/5a0df63d70c9e80001f55fed_white-down-arrow-png-211-compressor.png" width="50" data-ix="arrowhovereffect" alt=""></a></div>
          <div data-ix="new-interaction" class="cover-subtitleslider"><strong class="boldtext2secondaryslider" data-ix="cover-title-appear">IT&#x27;S WHAT&#x27;S ON THE INSIDE  THAT COUNTS.</strong></div>
        </div>
      </div>
    </div>
    <div class="w-slider-arrow-left">
      <div class="icon w-icon-slider-left"></div>
    </div>
    <div class="w-slider-arrow-right">
      <div class="icon-2 w-icon-slider-right"></div>
    </div>
    <div class="slidenavfade w-slider-nav w-round"></div>
  </div>
  <div id="coverSection" class="coversectioncategory1">
    <div class="covercontainerprimary w-container">
      <h1 data-ix="cover-title-appear" id="svc-jumbo" class="cover-title-secondary">El Sembrador Services</h1>
    </div>
    <div class="headingnavlinks" data-ix="cover-title-appear">
      <div class="navmenunest"><a href="../../index.php" class="tablinknavmenuleft w-button">Home</a><a href="../../products/frozen/index.php" class="tablinknavmenumiddle w-button">{category_name}</a><a href="../../products/frozen/sub-category-id/index.php" class="tablinknavmenumiddle w-button">{Sub_category}</a><a href="../../products/frozen/sub-category-id/item-id/index.php" class="tablinknavmenulast w-button">{Item_name} || {last_Item}</a></div>
    </div>
    <div class="cattabsmenuwrapper w-clearfix">
      <div class="categorywrapper">
       <?php CategoriesSectionLoop(); ?>
      </div>
      <div class="categoryjumbotwrapper">
        <div class="jumboimagewrapper">
          <h1 class="jumbotronheadline"><em>{SUB_CATEGORY_Description}</em></h1>
        </div>
      </div>
    </div>
    <div class="headingcountwrapper">
      <h4 class="itemcountheader">Please Choose from the following {PrimaryCategory_Count} Categories of { PrimaryCategory_Name} Items</h4>
    </div>
    <div class="dynamicgrid" data-ix="cardfloat">
      <div class="tag-wrapperflex">
        <div class="card card4-content">
          <div class="tagline tagline-promo-40"><em>{CATEGORY_TITLE} </em></div>
          <h3 class="card-headlinefst"><strong>{SUB_CATEGORY_TITLE}</strong></h3>
          <h3 class="card-headline2nd dark-card-headline _6col-card"></h3><a href="../../products/frozen/sub-category-id/index.php" class="button default-button card-cta w-button" data-ix="cardanimate">14 Items</a></div>
      </div>
      <div class="tag-wrapperflex">
        <div class="card card4-content">
          <div class="tagline tagline-promo-40"><em>{CATEGORY_TITLE} </em></div>
          <h3 class="card-headlinefst"><strong>{SUB_CATEGORY_TITLE}</strong></h3>
          <h3 class="card-headline2nd dark-card-headline _6col-card"></h3><a href="../../products/frozen/sub-category-id/index.php" class="button default-button card-cta w-button" data-ix="cardanimate">14 Items</a></div>
      </div>
      <div class="tag-wrapperflex">
        <div class="card card4-content">
          <div class="tagline tagline-promo-40"><em>{CATEGORY_TITLE} </em></div>
          <h3 class="card-headlinefst"><strong>{SUB_CATEGORY_TITLE}</strong></h3>
          <h3 class="card-headline2nd dark-card-headline _6col-card"></h3><a href="../../products/frozen/sub-category-id/index.php" class="button default-button card-cta w-button" data-ix="cardanimate">14 Items</a></div>
      </div>
      <div class="tag-wrapperflex">
        <div class="card card4-content">
          <div class="tagline tagline-promo-40"><em>{CATEGORY_TITLE} </em></div>
          <h3 class="card-headlinefst"><strong>{SUB_CATEGORY_TITLE}</strong></h3>
          <h3 class="card-headline2nd dark-card-headline _6col-card"></h3><a href="../../products/frozen/sub-category-id/index.php" class="button default-button card-cta w-button" data-ix="cardanimate">14 Items</a></div>
      </div>
    </div>
  </div>
  
<?php include $_SERVER['DOCUMENT_ROOT']."/includes/footer.php" ?>
  
  