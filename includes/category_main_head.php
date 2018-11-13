
                <?php
                    $query = "SELECT * FROM categories";
                    /* This was modified in sec 15 Lect: 135 Adjustments for comments and displaying post based on status*/
                     $select_all_categories_query = mysqli_query($connection,$query);
                        
        
                        while($row = mysqli_fetch_assoc($select_all_categories_query)) {
                            $cat_id = $row['cat_id'];
                            $cat_title = $row['cat_title'];
                            $cat_path = $row['cat_path'];
                            $sub_count = $row['cat_count'];
                            $cat_desc = $row['cat_desc'];
                            
                                  ?>
                                  FILE SEPARATION CAT Main HEAD
                                  
                                  