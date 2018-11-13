<?php 


function CategoriesSectionLoop() {
    global $connection;
          $query = "SELECT * FROM categories";
          $select_all_categories_query = mysqli_query($connection, $query);
          ?>
          <a href="/products/index.php" class="link-block-2 w-inline-block">
            <div class="categoriesthumnail">
              <h1 class="categoriesheader">Categories</h1>
            </div>
          </a>
        <?php
        
          while($row = mysqli_fetch_assoc($select_all_categories_query)) {
            $cat_id = $row['cat_id'];
            $cat_title = $row['cat_title'];
            $cat_path = $row['cat_path'];
            
            ?>
            <a href="<?php echo $cat_path;?>" class="link-block w-inline-block">
              <h1 class="categoriessecondary"><?php echo $cat_title;?></h1>
            </a>
            <?php
          }
}


function SubCatCardsLoop() {
    global $connection;
          $cat_id_temp_var = 1; /*POINTS TO FROZEN CATEGORY currently*/
          $cat_id_temp_title_name = "Frozen"; /*POINTS TO FROZEN CATEGORY NAME currently waiting to make sessions and routing*/
          
          
          $query = "SELECT * FROM subcategories WHERE main_cat_id = {$cat_id_temp_var} ";
          $select_all_sub_cats_query = mysqli_query($connection, $query);
          
        echo "<div class=\"dynamicgrid\" data-ix=\"cardfloat\">";
        
          
          while($row = mysqli_fetch_assoc($select_all_sub_cats_query)) {
            $sub_cat_id = $row['sub_cat_id'];
            $main_cat_id = $row['main_cat_id'];
            $sub_item_count = $row['sub_item_count'];
            $sub_cat_title = $row['sub_cat_title'];
            $sub_cat_desc = $row['sub_cat_desc'];
            $sub_cat_path = $row['sub_cat_path'];
            $sub_cat_img = $row['sub_cat_img'];
            
                ?>
                <div class="tag-wrapperflex">
                  <div style="background-image: -webkit-linear-gradient(-90deg, transparent, #000), url(<?php echo "{$sub_cat_img}"; ?>)" class="card card4-content">
                    <div class="tagline tagline-promo-40"><em><?php echo "{$cat_id_temp_title_name}"?></em></div>
                    <img src="">
                    <h3 class="card-headlinefst"><strong><?php echo "{$sub_cat_title}"?></strong></h3>
                    <h3 class="card-headline2nd dark-card-headline _6col-card"></h3><a href="<?php echo "{$sub_cat_path}"?>" class="button default-button card-cta w-button" data-ix="cardanimate"><?php echo $sub_item_count?> Items</a></div>
                  </div>
                
                  <?php
                    }
          ?>
          </div>
        </div>
        <?php
}



?>
       
       