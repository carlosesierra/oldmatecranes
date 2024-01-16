<?php
function oldmate_script_enqueue() {
	wp_enqueue_style('bootstrapcss', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css', array(), 'all');
	wp_enqueue_style('googlefonts', 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@100;300;700&display=swap', array(), '', 'all');
	wp_enqueue_style('customcss', get_template_directory_uri() . '/css/oldmate.css', array(), '1.0', 'all');
	wp_enqueue_script('jquery', 'https://code.jquery.com/jquery-3.6.0.min.js', array(), '3.6.0', true);
	wp_enqueue_script('bootstrapjs', 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js', array(), '4.4.1', true);
	wp_enqueue_script('customjs', get_template_directory_uri() . '/js/oldmate.js', array(), '1.0', true);
}
/*menus*/
add_action('wp_enqueue_scripts', 'oldmate_script_enqueue');
function oldmate_theme_setup(){
	add_theme_support('menus');
	register_nav_menu('primary','main menu');
	register_nav_menu('social','social menu');
}
add_action('init', 'oldmate_theme_setup');
add_theme_support( 'title-tag' );	/*document title*/
add_theme_support('custom-header');
add_theme_support('custom-background');
add_theme_support('post-thumbnails');	/*post thumbnails in post and pages*/
add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption') );
add_theme_support( 'post-formats', array('image', 'video', 'gallery' ) );
add_theme_support( 'automatic-feed-links' );/*add default posts and comments rss feed links to head*/
add_theme_support( 'editor_style');
set_post_thumbnail_size( 825, 510, true );
load_theme_textdomain( 'oldmate', get_template_directory() . '/languages' ); /*translations*/

/*sidebar*/
function oldmate_widget_setup() {
	register_sidebar(
		array(
			'name' => 'menu',
			'id' => 'menu',
			'description' => 'menu widget',
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '',
			'after_title'   => '',
		)
	);
	register_sidebar(
		array(
    'name' => 'footer',
    'id' => 'footer',
    'description' => 'footer widget',
    'before_widget' => '<div id="%1$s" class="widget %2$s">',
    'after_widget' => '</div>',
    'before_title' => '',
    'after_title' => '',
    )
	);
	register_sidebar(
		array(
    'name' => 'footer-copyright',
    'id' => 'footer-copyright',
    'description' => 'footer copyright widget',
    'before_widget' => '<div id="%1$s" class="widget %2$s">',
    'after_widget' => '</div>',
    'before_title' => '',
    'after_title' => '',
    )
	);
}
add_action('widgets_init','oldmate_widget_setup');

/*favicon*/
function favicon_link() {
    echo '<link rel="shortcut icon" type="image/x-icon" href="', get_stylesheet_directory_uri() . '/ico/favicon.ico" />'. "\n";
}
add_action( 'wp_head', 'favicon_link' );

/*home title*/
add_filter( 'wp_title', 'baw_hack_wp_title_for_home' );
function baw_hack_wp_title_for_home( $title )
{
  if( empty( $title ) && ( is_home() || is_front_page() ) ) {
    return __( '' ) . ' | ' . get_bloginfo( 'description' );
  }
  return $title;
}

/*content width*/
if ( ! isset( $content_width ) ) {
	$content_width = 1000;
}

/*google fonts*/
function wpb_add_google_fonts() {
wp_enqueue_style( 'wpb-google-fonts', 'http://fonts.googleapis.com/css?family=Josefin+Sans:300,400', false );
wp_enqueue_style( 'wpb-google-fonts', 'https://fonts.googleapis.com/css2?family=PT+Sans&display=swap', false );
}
add_action( 'wp_enqueue_scripts', 'wpb_add_google_fonts' );

/*comments reply*/
if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}

function oldmate_enqueue_comments_reply() {
if( get_option( 'thread_comments' ) ) {
wp_enqueue_script( 'comment-reply' );
}
}
add_action( 'comment_form_before', 'oldmate_enqueue_comments_reply' );

/*editor styles*/
function oldmate_add_editor_styles() {
    add_editor_style( 'custom-editor-style.css' );
}
add_action( 'admin_init', 'oldmate_add_editor_styles' );

/*remove empty p tags from wordpress posts*/
add_filter( 'the_content', 'remove_empty_p', 20, 1 );
function remove_empty_p( $content ){
	// clean up p tags around block elements
	$content = preg_replace( array(
		'#<p>\s*<(div|aside|section|article|header|footer)#',
		'#</(div|aside|section|article|header|footer)>\s*</p>#',
		'#</(div|aside|section|article|header|footer)>\s*<br ?/?>#',
		'#<(div|aside|section|article|header|footer)(.*?)>\s*</p>#',
		'#<p>\s*</(div|aside|section|article|header|footer)#',
	), array(
		'<$1',
		'</$1>',
		'</$1>',
		'<$1$2>',
		'</$1',
	), $content );

	return preg_replace('#<p>(\s|&nbsp;)*+(<br\s*/*>)*(\s|&nbsp;)*</p>#i', '', $content);
}

/*modify the read more link text*/
function modify_read_more_link() {
    return '<br/><a class="more-link" href="' . get_permalink() . '">more info</a>';
}
add_filter( 'the_content_more_link', 'modify_read_more_link' );

/*prevent page scroll when clicking the more link*/
function remove_more_link_scroll( $link ) {
	$link = preg_replace( '|#more-[0-9]+|', '', $link );
	return $link;
}
add_filter( 'the_content_more_link', 'remove_more_link_scroll' );

/*hide login errors*/
function no_wordpress_errors(){
  return 'Something is wrong!';
}
add_filter( 'login_errors', 'no_wordpress_errors' );
remove_filter ('the_content',  'wpautop');
