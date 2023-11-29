<?php
/*
Plugin Name: PopXit
Description: Emulates an exit intent popup on all pages of the website.
Version: 1.0
Author: John Abelardo Manangan II
Author Uri: https://github.com/johnabelardom
*/

if (!defined('ABSPATH')) exit; // Exit if accessed directly

function popxit_enqueue_scripts() {
    wp_enqueue_style('popxit', plugin_dir_url(__FILE__) . 'assets/popxit.css');
    wp_enqueue_script('popxit', plugin_dir_url(__FILE__) . 'assets/popxit.js', array('jquery'), null, true);

    wp_localize_script('popxit', 'popxitParams', array(
        'cookieName' => 'popxit_displayed'
    ));
}
add_action('wp_enqueue_scripts', 'popxit_enqueue_scripts');


function popxit_footer_html() {
    include 'popup.php';
}

add_action('wp_footer', 'popxit_footer_html');

