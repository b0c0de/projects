<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 */
?>
<?php
$footerHideBlog = false;
$footerHidePost = false;
$pagePost = is_single();
$pageBlog = is_home(); ?>
		</div><!-- #content -->
<?php if (!$pageBlog && !$pagePost || $pageBlog && !$footerHideBlog || $pagePost && !$footerHidePost) { ?>
        <footer class="u-align-center u-clearfix u-footer u-palette-4-base u-footer" id="sec-a78f">
  <div class="u-clearfix u-sheet u-sheet-1">
    <p class="u-small-text u-text u-text-variant u-text-1">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
  </div>
</footer>
<?php } ?>
        <?php $showBackLink = get_option('np_hide_backlink') ? false : true; ?>
<?php if ($showBackLink) : ?>
<section class="u-backlink u-clearfix u-grey-80">
            <a class="u-link" href="https://nicepage.com/wordpress-themes" target="_blank">
        <span>WordPress Theme</span>
            </a>
        <p class="u-text"><span>created with</span></p>
        <a class="u-link" href="https://nicepage.com/wordpress-themes" target="_blank"><span>Nicepage</span></a>.
    </section>
<?php endif; ?>
        
	</div><!-- .site-inner -->
</div><!-- #page -->

<?php wp_footer(); ?>
<?php back_to_top(); ?>
</body>
</html>
