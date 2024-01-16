<nav class="navbar navbar-dark fixed-top container-fluid sidebar">
	<a class="navbar-brand  float-left" href="<?php echo home_url(); ?>"/>
		<img src="<?php header_image(); ?>" height="<?php echo get_custom_header()->height; ?>" width="<?php echo get_custom_header()->width; ?>" alt="" />
	</a>
	<button class="navbar-toggler collapsed float-right" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
		<span class="icon-bar top-bar"></span>
		<span class="icon-bar middle-bar"></span>
		<span class="icon-bar bottom-bar"></span>
  </button>
  <div class="navbar-collapse collapse" id="navbars" style="">
    <div class="navbar-nav mr-auto list-group">
			<?php wp_nav_menu(array('theme_location'=>'primary')); ?>
    	<?php wp_nav_menu(array('theme_location'=>'social')); ?>
    </div>
  </div>
</nav>
