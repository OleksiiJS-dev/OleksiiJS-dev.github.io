/*
Plugin Name: My Custom Plugin
Plugin URI: http://mywebsite.com
Description: This is my custom plugin.
Version: 1.0.0
Author: My Name
Author URI: http://mywebsite.com
License: GPL2
*/

function my_custom_plugin_scripts() {
  wp_enqueue_script( 'my-script', plugin_dir_url( __FILE__ ) . '../converter.js', array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'my_custom_plugin_scripts' );