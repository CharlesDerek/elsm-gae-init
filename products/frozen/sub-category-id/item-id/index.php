<?php include $_SERVER['DOCUMENT_ROOT']."/includes/header.php"; ?>


  <div id="coverSection" class="coversectioncategory1">
    <div class="covercontainerprimary w-container">
      <h1 data-ix="cover-title-appear" id="fz-jumbo" class="cover-title-secondary">{Item_name}</h1>
    </div>
    <div class="headingnavlinks" data-ix="cover-title-appear">
      <div class="navmenunest"><a href="/index.php" class="tablinknavmenuleft w-button">Home</a><a href="/products/frozen/index.php" class="tablinknavmenumiddle w-button">{category_name}</a><a href="/products/frozen/sub-category-id/index.php" class="tablinknavmenumiddle w-button">{Sub_category}</a><a href="/products/frozen/sub-category-id/item-id/index.php" class="tablinknavmenulast w-button w--current">{Item_name} || {last_Item}</a></div>
    </div>
    <div class="cattabsmenuwrapper w-clearfix">
      <div class="categorywrapper">
        
       <?php CategoriesSectionLoop(); ?>
       
      </div>
      <div class="itemlightbwrapper">


                                        <?php /*JSON IMAGE RENDERING*/ 
                                            echo "<a href=\"#\" class=\"itemlightbox w-inline-block w-lightbox\"><img class='itemmainimage' src=\"/images/coco-rallado-pulpa-140z-2.jpg\" alt=\"\"><script type=\"application/json\" class=\"w-json\">{
                                                  \"items\": [
                                                    {
                                                      \"type\": \"image\",
                                                      \"width\": 96,
                                                      \"height\": 96,
                                                      \"url\": \"/images/coco-rallado-pulpa-140z-2.jpg\"
                                                    },
                                                    {
                                                        \"caption\"     : \"Gourmet fruits for entire family!\",
                                                        \"height\"      : 387,
                                                        \"type\"        : \"image\",
                                                        \"url\"         : \"https://media.mnn.com/assets/images/2016/02/fresh-fruits-market.jpg.653x0_q80_crop-smart.jpg\",
                                                        \"width\"       : 640
                                                    }, {
                                                        \"height\"      : 800,
                                                        \"type\"        : \"image\",
                                                        \"url\"         : \"https://images.agoramedia.com/everydayhealth/gcms/Best-Fruits-for-a-Diabetes-Friendly-Diet-03-1440x810.jpg\",
                                                        \"width\"       : 940
                                                    }
                                                  ]
                                                }</script></a>"; ?>
                                                
                                                </div>
    </div>
    <div class="headingcountwrapper">
      <h4 class="itemcountheader">Available in: {(Item_ounces} oz.), (<em>{item_lbs} Lb.), (</em><em>{item_Grams} g). </em></h4>
    </div>
    <div class="cattabsmenuwrapper">
      <div class="producttabwrapper">
        <div data-duration-in="300" data-duration-out="100" class="w-tabs">
          <div class="prodtabmenu w-tab-menu">
            <a data-w-tab="overview" class="tablinkproduct w-inline-block w-tab-link w--current">
              <div>Overview</div>
            </a>
            <a data-w-tab="more" class="tablinkproduct w-inline-block w-tab-link">
              <div>More</div>
            </a>
            <a data-w-tab="nutritional" class="tablinkproduct nutritionaltab w-inline-block w-tab-link">
              <div>Nutritional</div>
            </a>
          </div>
          <div class="w-tab-content">
            <div data-w-tab="overview" class="w-tab-pane w--tab-active">
              <div class="producttabwrap">
                <div class="proddescwrap">
                  <h1 class="itemtabheading">Product Description:</h1>
                  <div class="prodpwrapper">
                    <p class="prodparagraph">Frozen Yuca by El Sembrador has established a reputation as one of the best Yuca in the Hispanic market. Available in 3 sizes from 1-4 pounds, also our family of yuca products with Pan de Yuca, Masa, Mojo para yuca or fried yuca. El Sembrador has built a name as one of the largest Hispanic frozen food distributors in the United States offering over 1,000 products from frozen fruit pulp, vegetables, yuca, rice, and beans. Hispanic specialties from our fields to your table.</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="more" class="w-tab-pane">
              <div class="producttabwrap">
                <div class="proddescwrap">
                  <h1 class="itemtabheading">Cooking Directions:</h1>
                  <div class="prodpwrapper">
                    <p class="prodparagraph"><strong>Cooking Tips:</strong> Traditional Method: In a large pot, add 6 cups cold water to each pound of drained and rinsed soaked beans. Add 2 tsp. shortening or oil and 2 tsp. salt. Boil gently with lid tilted until desired tenderness is reached, adding water to keep beans covered. Savory Method: Follow traditional method above, but substitute 2 tsp. onion salt and 1/4 tsp. garlic salt for the plain salt. Add 1 tsp. chicken stock base or 3 or 4 chicken bouillon cubes and 1/4 tsp. white pepper. Cooking Dry Beans in the Microwave: Wash and sort beans. For each pound of beans, add 8 cups of water in a 5-qt. casserole along with any seasonings called for in the recipe. Microwave at full power for 8-10 minutes or until boiling. Cover with plastic wrap and/or casserole lid. Let stand 1 hour. Stir several times and add hot water as needed to keep beans covered. Cook at full power for 8-10 minutes or until boiling; reduce power level 50% and cook another 15-20 minutes or until tender. Beans may also be soaked overnight and then cooked at full power for 15-20 minutes or until tender. Wattage and cooking temperature of microwaves vary. Always consult the recipes and temperature directions developed for your microwave by the manufacturer.</p>
                  </div>
                </div>
              </div>
            </div>
            <div data-w-tab="nutritional" class="w-tab-pane">
              <div class="producttabwrap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
<?php include $_SERVER['DOCUMENT_ROOT']."/includes/footer.php" ?>


<!--BELOW ITEM WILL CREATE A FILE WHEN RAN-->

<!--// $file = fopen("test.txt","w");-->
<!--// echo fwrite($file,"Hello World. Testing!");-->
<!--// fclose($file);-->
<!--// -->
<!--BELOW ITEM WILL DELETE A FILE WHEN RAN-->

<!--unlink("test.txt");-->
