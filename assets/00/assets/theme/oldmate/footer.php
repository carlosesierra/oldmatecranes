<div class="container-fluid container-footer">
  <div>
    <?php if(is_active_sidebar('footer-copyright')) { echo ' <div>&#169;&nbsp;</div> '; dynamic_sidebar('footer-copyright'); echo '&nbsp;'; echo date("Y"); echo '&nbsp;'; } ?>
  </div>
  <div>
    <?php if(is_active_sidebar('footer')) { dynamic_sidebar('footer'); } ?>
  </div>
</div>
<?php wp_footer(); ?>
</body>
</html>
