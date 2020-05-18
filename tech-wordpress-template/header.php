<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 */

?>
<?php
$headerHideBlog = false;
$headerHidePost = false;
$pagePost = is_single();
$pageBlog = is_home(); ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js" style="font-size:<?php echo apply_filters('theme_base_font_size', '16'); ?>px">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <?php endif; ?>
    <?php wp_head(); ?>
    
    
    
</head>

<body <?php body_class(); ?><?php body_style_attribute(); ?>>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'techwordpress' ); ?></a>
    <?php if (!$pageBlog && !$pagePost || $pageBlog && !$headerHideBlog || $pagePost && !$headerHidePost) { ?>
    <header class="u-clearfix u-header u-header" id="sec-20b9">
  <div class="u-clearfix u-sheet u-sheet-1">
    <?php $logo = theme_get_logo(array(
            'default_src' => "/images/default-logo.png",
            'default_url' => home_url('/'),
            'default_width' => '0'
        )); ?><a <?php if (is_customize_preview()) echo 'data-default-src="' . esc_url($logo['default_src']) . '" '; ?>href="<?php echo esc_url($logo['url']); ?>" class="u-image u-logo u-image-1 custom-logo-link">
      <img <?php if ($logo['svg']) {echo 'style="width:'.$logo['width'].'px"';} else {echo 'style="width:auto"';}?>src="<?php echo esc_url($logo['src']); ?>" class="u-logo-image u-logo-image-1">
    </a>
    <?php
            ob_start();
            ?><nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
      <div class="menu-collapse" style="font-size: 1rem; letter-spacing: 0; font-weight: 700; text-transform: uppercase;">
        <a class="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-white u-text-body-alt-color u-text-hover-palette-4-base" href="#" style="padding: 4px 0; font-size: calc(1em + 8px);">
          <svg><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menu-hamburger"></use></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="menu-hamburger" viewBox="0 0 16 16" style="width: 16px; height: 16px;"><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>
</symbol>
</defs></svg>
        </a>
      </div>
      <div class="u-custom-menu u-nav-container">
        {menu}
      </div>
      <div class="u-custom-menu u-nav-container-collapse">
        <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
          <div class="u-menu-close"></div>
          {responsive_menu}
        </div>
        <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
      </div>
    </nav><?php
            $menu_template = ob_get_clean();
            echo Theme_NavMenu::getMenuHtml(array(
                'container_class' => 'u-menu u-menu-dropdown u-offcanvas u-menu-1',
                'menu' => array(
                    'menu_class' => 'u-nav u-spacing-0 u-unstyled u-nav-1',
                    'item_class' => 'u-nav-item',
                    'link_class' => 'u-button-style u-nav-link u-text-active-white u-text-body-alt-color u-text-hover-palette-4-base',
                    'link_style' => 'padding: 10px 20px;',
                    'submenu_class' => 'u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-block-e722-19',
                    'submenu_item_class' => 'u-nav-item',
                    'submenu_link_class' => 'u-button-style u-nav-link u-white',
                    'submenu_link_style' => '',
                ),
                'responsive_menu' => array(
                    'menu_class' => 'u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2',
                    'item_class' => 'u-nav-item',
                    'link_class' => 'u-button-style u-nav-link',
                    'link_style' => 'padding: 10px 20px;',
                    'submenu_class' => 'u-h-spacing-20 u-nav u-unstyled u-v-spacing-10 u-block-e722-20',
                    'submenu_item_class' => 'u-nav-item',
                    'submenu_link_class' => 'u-button-style u-nav-link',
                    'submenu_link_style' => '',
                ),
                'theme_location' => 'primary-navigation-1',
                'template' => $menu_template,
            )); ?>
  </div>
</header>
    <?php } ?>
    <div id="content">
