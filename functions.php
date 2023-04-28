<?php
/**
 * Astra functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Define Constants
 */
define( 'ASTRA_THEME_VERSION', '4.1.3' );
define( 'ASTRA_THEME_SETTINGS', 'astra-settings' );
define( 'ASTRA_THEME_DIR', trailingslashit( get_template_directory() ) );
define( 'ASTRA_THEME_URI', trailingslashit( esc_url( get_template_directory_uri() ) ) );
define( 'ASTRA_PRO_UPGRADE_URL', 'https://wpastra.com/pro/?utm_source=wp&utm_medium=dashboard' );

/**
 * Minimum Version requirement of the Astra Pro addon.
 * This constant will be used to display the notice asking user to update the Astra addon to the version defined below.
 */
define( 'ASTRA_EXT_MIN_VER', '4.1.0' );

/**
 * Setup helper functions of Astra.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-theme-options.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-theme-strings.php';
require_once ASTRA_THEME_DIR . 'inc/core/common-functions.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-icons.php';

/**
 * Update theme
 */
require_once ASTRA_THEME_DIR . 'inc/theme-update/astra-update-functions.php';
require_once ASTRA_THEME_DIR . 'inc/theme-update/class-astra-theme-background-updater.php';

/**
 * Fonts Files
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-font-families.php';
if ( is_admin() ) {
	require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts-data.php';
}

require_once ASTRA_THEME_DIR . 'inc/lib/webfont/class-astra-webfont-loader.php';
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-fonts.php';

require_once ASTRA_THEME_DIR . 'inc/dynamic-css/custom-menu-old-header.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/container-layouts.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/astra-icons.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-walker-page.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-enqueue-scripts.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-gutenberg-editor-css.php';
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-wp-editor-css.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/block-editor-compatibility.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/inline-on-mobile.php';
require_once ASTRA_THEME_DIR . 'inc/dynamic-css/content-background.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-dynamic-css.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-global-palette.php';

/**
 * Custom template tags for this theme.
 */
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-attr.php';
require_once ASTRA_THEME_DIR . 'inc/template-tags.php';

require_once ASTRA_THEME_DIR . 'inc/widgets.php';
require_once ASTRA_THEME_DIR . 'inc/core/theme-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/admin-functions.php';
require_once ASTRA_THEME_DIR . 'inc/core/sidebar-manager.php';

/**
 * Markup Functions
 */
require_once ASTRA_THEME_DIR . 'inc/markup-extras.php';
require_once ASTRA_THEME_DIR . 'inc/extras.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog-config.php';
require_once ASTRA_THEME_DIR . 'inc/blog/blog.php';
require_once ASTRA_THEME_DIR . 'inc/blog/single-blog.php';

/**
 * Markup Files
 */
require_once ASTRA_THEME_DIR . 'inc/template-parts.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-loop.php';
require_once ASTRA_THEME_DIR . 'inc/class-astra-mobile-header.php';

/**
 * Functions and definitions.
 */
require_once ASTRA_THEME_DIR . 'inc/class-astra-after-setup-theme.php';

// Required files.
require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-helper.php';

require_once ASTRA_THEME_DIR . 'inc/schema/class-astra-schema.php';

/* Setup API */
require_once ASTRA_THEME_DIR . 'admin/includes/class-astra-api-init.php';

if ( is_admin() ) {
	/**
	 * Admin Menu Settings
	 */
	require_once ASTRA_THEME_DIR . 'inc/core/class-astra-admin-settings.php';
	require_once ASTRA_THEME_DIR . 'admin/class-astra-admin-loader.php';
	require_once ASTRA_THEME_DIR . 'inc/lib/astra-notices/class-astra-notices.php';
}

/**
 * Metabox additions.
 */
require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-boxes.php';

require_once ASTRA_THEME_DIR . 'inc/metabox/class-astra-meta-box-operations.php';

/**
 * Customizer additions.
 */
require_once ASTRA_THEME_DIR . 'inc/customizer/class-astra-customizer.php';

/**
 * Astra Modules.
 */
require_once ASTRA_THEME_DIR . 'inc/modules/posts-structures/class-astra-post-structures.php';
require_once ASTRA_THEME_DIR . 'inc/modules/related-posts/class-astra-related-posts.php';

/**
 * Compatibility
 */
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-gutenberg.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-jetpack.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/woocommerce/class-astra-woocommerce.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/edd/class-astra-edd.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/lifterlms/class-astra-lifterlms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/learndash/class-astra-learndash.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bb-ultimate-addon.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-contact-form-7.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-visual-composer.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-site-origin.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-gravity-forms.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-bne-flyout.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-ubermeu.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-divi-builder.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-amp.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-yoast-seo.php';
require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-starter-content.php';
require_once ASTRA_THEME_DIR . 'inc/addons/transparent-header/class-astra-ext-transparent-header.php';
require_once ASTRA_THEME_DIR . 'inc/addons/breadcrumbs/class-astra-breadcrumbs.php';
require_once ASTRA_THEME_DIR . 'inc/addons/scroll-to-top/class-astra-scroll-to-top.php';
require_once ASTRA_THEME_DIR . 'inc/addons/heading-colors/class-astra-heading-colors.php';
require_once ASTRA_THEME_DIR . 'inc/builder/class-astra-builder-loader.php';

// Elementor Compatibility requires PHP 5.4 for namespaces.
if ( version_compare( PHP_VERSION, '5.4', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-elementor-pro.php';
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-web-stories.php';
}

// Beaver Themer compatibility requires PHP 5.3 for anonymus functions.
if ( version_compare( PHP_VERSION, '5.3', '>=' ) ) {
	require_once ASTRA_THEME_DIR . 'inc/compatibility/class-astra-beaver-themer.php';
}

require_once ASTRA_THEME_DIR . 'inc/core/markup/class-astra-markup.php';

/**
 * Load deprecated functions
 */
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-filters.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-hooks.php';
require_once ASTRA_THEME_DIR . 'inc/core/deprecated/deprecated-functions.php';


function my_converter() {
    ob_start();
    ?>
    <style>
    @charset "UTF-8";
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;700&display=swap");
*,
** {
  margin: 0;
  padding: 0;
  list-style: none;
}

body {
  height: 2000px;
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
  margin-top: 100px;
  color: #FFFFFF;
  background: #555659;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.converter-block {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  position: relative;
}
.converter-block .converter-block-side {
  height: 520px;
  position: relative;
  background: #3e4046;
  border-radius: 10px;
  padding-bottom: 100px;
}
.converter-block .converter-block-side .side-title {
  font-size: 25px;
  line-height: 80%;
  color: #FFFFFF;
  margin-bottom: 17px;
  padding: 15px;
  display: inline-block;
  background: #3e4046;
  margin-top: -10px;
  border-radius: 10px;
}
.converter-block .converter-block-side .converter-input {
  font-size: 20px;
  margin-top: -37px;
  padding: 15px;
  position: relative;
  display: flex;
  align-items: center;
}
.converter-block .converter-block-side .converter-input .input-give__label {
  position: absolute;
  right: 42px;
}
.converter-block .converter-block-side .converter-input .input-give__label img {
  width: 30px;
  margin: 0 7px;
  opacity: 1 !important;
}
.converter-block .converter-block-side .converter-input .input-get__label {
  position: absolute;
  right: 15px;
}
.converter-block .converter-block-side .converter-input .input-get__label img {
  width: 30px;
  margin: 0 7px;
  opacity: 1 !important;
}
.converter-block .converter-block-side .converter-input .input-get__label,
.converter-block .converter-block-side .converter-input .input-give__label {
  font-weight: 700;
  font-size: 18px;
  line-height: 100%;
  color: #757575;
}
.converter-block .converter-block-side .converter-input input {
  border: none;
  box-shadow: none;
  background: #3e4046;
  padding: 15px 10px;
  padding-right: 40px;
  font-size: 20px;
  color: #fff;
  outline: none;
  border-bottom: 1px solid #fff;
  width: 100%;
}
.converter-block .converter-block-side .converter-input input:focus-within {
  border-bottom: 1px solid #05bbc4;
  transition: 0.5s linear;
}
.converter-block .converter-block-side .converter-input__give {
  padding-right: 42px;
}
.converter-block .converter-block-side .converter-input__get {
  padding-left: 35px;
}
.converter-block .converter-block-side .converter-give-currency li {
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #505050;
  position: relative;
}
.converter-block .converter-block-side .converter-give-currency li .converter-give-currency__icon {
  background: #e0e0e0;
  border-radius: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.converter-block .converter-block-side .converter-give-currency li .converter-give-currency__name {
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin-left: 10px;
  text-transform: uppercase;
}
.converter-block .converter-block-side .converter-give-currency li img {
  border: 5px;
  height: 25px;
  width: 25px;
}
.converter-block .converter-block-side .converter-give-currency li:hover {
  cursor: pointer;
  transition: 0.5s ease;
  border-left: 3px solid #05bbc4;
  background: #565b69;
}
.converter-block .converter-block-side .converter-get-currency li {
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #505050;
  position: relative;
}
.converter-block .converter-block-side .converter-get-currency li .converter-give-currency__icon {
  background: #e0e0e0;
  border-radius: 50px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.converter-block .converter-block-side .converter-get-currency li .converter-give-currency__name {
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin-left: 10px;
  text-transform: uppercase;
}
.converter-block .converter-block-side .converter-get-currency li img {
  border: 5px;
  height: 25px;
  width: 25px;
}
.converter-block .converter-block-side .converter-get-currency li:hover {
  cursor: pointer;
  transition: 0.5s ease;
  border-left: 3px solid #05bbc4;
  background: #565b69;
}
.converter-block .converter-block-side .converter-get-currency,
.converter-block .converter-block-side .converter-give-currency {
  padding: 0;
  height: 398px;
  overflow: auto;
}
.converter-block .converter-block-side .converter-get-currency::-webkit-scrollbar,
.converter-block .converter-block-side .converter-give-currency::-webkit-scrollbar {
  width: 8px;
  background-color: #36373C;
  opacity: 0.33;
  border-radius: 10px;
}
.converter-block .converter-block-side .converter-get-currency::-webkit-scrollbar-thumb,
.converter-block .converter-block-side .converter-give-currency::-webkit-scrollbar-thumb {
  width: 2px;
  border: 1px solid #36373C;
  background-color: #128c92;
  border-radius: 10px;
}
.converter-block .converter-block-side .converter-button-container {
  display: flex;
  justify-content: flex-end;
  padding: 0 15px;
  position: absolute;
  bottom: 20px;
  width: 100%;
  box-sizing: border-box;
}
.converter-block .converter-block-side .converter-button-container .converter-button {
  cursor: pointer;
  padding: 15px 35px;
  border-radius: 3px;
  background: #148d93;
  font-size: 18px;
  line-height: 22px;
}
.converter-block .converter-block-side .converter-button-container .converter-button:hover {
  transition: 0.5s ease;
  background: #00696e;
}
.converter-block .converter-button__reverse {
  position: absolute;
  transform: translateX(0%);
  top: 34px;
  width: 55px;
  height: 55px;
  border-radius: 100px;
  border: 7px solid #555659;
  background: url("white-gray switch.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 57px;
}
.converter-block .second-block {
  opacity: 0;
}

.form-block {
  margin: 0 auto;
  margin-top: 15px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #3e4046;
  visibility: hidden;
  opacity: 0;
  box-sizing: border-box;
}
.form-block .form-block__title {
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  text-transform: uppercase;
  color: #fff;
}
.form-block .form-block__form {
  display: flex;
  justify-content: space-between;
}
.form-block .form-block__form .form-block__left {
  width: 48%;
}
.form-block .form-block__form .form-block__right {
  width: 48%;
  padding-top: 20px;
}
.form-block .form-block__form .form-block__data {
  flex-basis: 50%;
  box-sizing: border-box;
}
.form-block .form-block__form .form-block__data .form-block__input {
  width: 100%;
  padding: 15px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 17px;
  border-radius: 3px;
  background: #555659;
  box-sizing: border-box;
  border: none;
  color: #fff;
}
.form-block .form-block__form .form-block__data .form-block__input:focus {
  outline: none;
}
.form-block .form-block__form .form-block__messenger-title {
  padding-bottom: 25px;
}
.form-block .form-block__form .form-block__messenger-list {
  display: flex;
  gap: 10px;
  padding-bottom: 40px;
}
.form-block .form-block__form .form-block__messenger {
  display: flex;
  flex-direction: column;
}
.form-block .form-block__form .form-block__messenger img {
  width: 55px;
}
.form-block .form-block__form .form-block__messenger input[type=checkbox] {
  display: none;
}
.form-block .form-block__form .form-block__messenger label {
  display: inline-block;
  cursor: pointer;
  font-size: 16px;
  position: relative;
  padding-left: 30px;
  /* Ширина чекбокса + отступ слева */
  margin-right: 15px;
  /* Отступ между чекбоксом и текстом */
}
.form-block .form-block__form .form-block__messenger label:before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid grey;
  position: absolute;
  left: 15px;
  top: 12px;
}
.form-block .form-block__form .form-block__messenger input[type=checkbox]:checked + label:before {
  background-color: #007bff;
  border-color: #007bff;
  content: "✓";
  /* Символ галочки */
  color: #fff;
  text-align: center;
  line-height: 20px;
  font-size: 16px;
}
.form-block .form-block__send {
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-block .form-block__send .form-block__button {
  border-radius: 3px;
  padding: 15px 35px;
  text-align: center;
  color: #fff;
  background: #148d93;
  font-size: 18px;
  line-height: 22px;
  width: 200px;
}
.form-block .form-block__send .form-block__policy {
  color: red;
}
.form-block .form-block__send .form-block__division {
  padding-top: 35px;
  padding-bottom: 35px;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  text-transform: uppercase;
  color: #fff;
}
.form-block .form-block__send .form-block__checkbox {
  padding-bottom: 13px;
  color: grey;
}

.form-block__button.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.active {
  border-left: 3px solid #05bbc4;
  background: #565b69;
}

.active:before {
  position: absolute;
  width: 22px;
  height: 22px;
  content: "";
  right: 20px;
  background-color: #05bbc4;
  border-radius: 50%;
  background-image: url("../images/done1.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.visible {
  visibility: visible;
  opacity: 1;
  transition: opacity, 0.5s ease;
}

.display {
  opacity: 0;
  transition: opacity, 0.2s ease;
  display: none;
}

.small {
  border-radius: 4px !important;
  height: 40px !important;
  transition: height, border-radius, 0.5s ease;
}

.small-ul {
  height: 0px !important;
  transition: height, opacity, margin 0.5s ease;
  opacity: 0;
  margin: 0;
}

.input-second-block {
  border-radius: 3px !important;
  border-bottom: none !important;
  background-color: #555659 !important;
  transition: border-radius, background-color, border, 0.5s ease;
}

.title-get-second-block {
  text-align: end !important;
  display: block !important;
  border-radius: 4px !important;
  margin-bottom: 31px !important;
  margin-top: -20px !important;
  transition: border-radius, margin-bottom, margin-top 0.5s ease;
  text-transform: uppercase;
}

.title-give-second-block {
  display: block !important;
  border-radius: 4px !important;
  margin-bottom: 30px !important;
  margin-top: -20px !important;
  transition: border-radius, margin-bottom, margin-top 0.5s ease;
  text-transform: uppercase;
}

@media (min-width: 1200px) {
  .converter-block-side {
    flex-basis: 520px;
  }
  .form-block {
    min-width: 1060px;
  }
}
@media (max-width: 1200px) {
  .converter-block-side {
    flex-basis: 430px;
  }
  .form-block {
    min-width: 880px;
  }
}
@media (max-width: 992px) {
  .converter-block-side {
    flex-basis: 310px;
  }
  .form-block {
    min-width: 640px;
  }
}
@media (max-width: 674px) {
  .converter-block-side {
    flex-basis: 210px;
  }
  .converter-block .converter-block-side .converter-button-container {
    display: flex;
    justify-content: center;
    padding: 0 15px;
    position: absolute;
    bottom: 20px;
    width: 100%;
    box-sizing: border-box;
  }
  .form-block {
    min-width: 440px;
  }
}
@media (max-width: 474px) {
  .converter-block-side {
    flex-basis: 146px;
  }
  .converter-block-side .converter-button {
    width: 146px;
    padding: 7px 12px;
  }
  .converter-block-side .side-title {
    text-align: center;
    width: 100%;
    padding: 15px 0px;
  }
  .converter-block-side .converter-get-title {
    padding: 15px 0px;
  }
  .converter-block .converter-block-side .side-title {
    font-size: 25px;
    line-height: 80%;
    color: #FFFFFF;
    margin-bottom: 17px;
    padding: 15px 0;
    display: inline-block;
    background: #3e4046;
    margin-top: -10px;
    border-radius: 10px;
  }
  .converter-block .converter-block-side .converter-button-container .converter-button {
    cursor: pointer;
    padding: 10px 8px;
    border-radius: 3px;
    background: #148d93;
    font-size: 18px;
    line-height: 22px;
  }
  .form-block {
    min-width: 302px;
  }
}
@media (max-width: 346px) {
  .converter-block {
    gap: 5px;
  }
  .converter-block-side {
    flex-basis: 140px;
  }
}


    </style>
    <div class="wrapper converter-wrapper">
        <div class="block converter-block">
            <div class="block converter-block-side converter-give">
                <div class="converter-give-title side-title">Отдаёте</div>
                <div class="converter-input__give converter-input">
                    <div id="input-give__label" class="input-give__label">USDT</div>
                    <input id="input-give-amount" class="" type="text">
                </div>
                <ul id="converter-give-currency" class="converter-give-currency">
                </ul>
            </div>
            <div class="block converter-block-side converter-get">
                <div class="converter-get-title side-title">Получаете</div>
                <div class="converter-input__get converter-input">
                    <div id="input-get__label" class="input-get__label">USDT</div>
                    <input id="input-get-amount" class="" type="text">
                </div>
                <ul id="converter-get-currency" class="converter-get-currency">

                </ul>
                <div class="converter-button-container">
                    <div id="converter-button" class="converter-button">Продолжить</div>
                </div>
            </div>
            <div id="" class="converter-button__reverse"></div>
        </div>
        <div class="block form-block">
            <Form id="MyForm">
                <div class="form-block__title">ВВОД ДАННЫХ</div>
                <div class="form-block__form">
                    <div class="form-block__left">
                        <div class="form-block__data">
                            <input class="form-block__input" id="name" placeholder="ФИО" type="name" required>
                        </div>
                        <div class="form-block__data">
                            <input class="form-block__input" id="tel" placeholder="номер телефона" type="tel" required>
                        </div>
                        <div class="form-block__data">
                            <input class="form-block__input"
                                placeholder="карта на которую нужно вывести итоговую валюту" pattern="[0-9]{16}" id="card-number" name="card-number" type="card-number" required>
                        </div>
                    </div>
                    <div class="form-block__right"> 
                        <div class="form-block__data">
                            <div class="form-block__messenger-title">удобный менеджер для связи</div>
                            <div class="form-block__messenger-list">
                                <div class="form-block__messenger"><img src="./converter/images/whatsapp.svg" alt=""><input
                                        type="checkbox" id="myCheckboxWhatsapp" name="messenger"><label
                                        for="myCheckboxWhatsapp"></label></div>
                                <div class="form-block__messenger"><img src="./converter/images/telegram.svg" alt=""><input
                                        type="checkbox" id="myCheckboxTelegram" name="messenger"><label
                                        for="myCheckboxTelegram"></label></div>
                                <div class="form-block__messenger"><img src="./converter/images/viber.svg" alt=""><input
                                        type="checkbox" id="myCheckboxViber" name="messenger"><label
                                        for="myCheckboxViber"></label></div>
                            </div>
                        </div>
                        <div class="form-block__data"> <input class="form-block__input" id="comments" placeholder="комментарии"
                                type="text">
                        </div>
                    </div>
                </div>
                <div class="form-block__send">
                    <div class="form-block__checkbox"> <input type="checkbox"> Я соглашаюсь с <span
                            class="form-block__policy"><a>Политикой</a></span></div>
                    <div class="form-block__button disabled" id="submit-btn">Отправить заявку</div>
                    <div class="form-block__division">ЛИБО</div>
                    <div class="form-block__button disabled">Помощь менеджера</div>
                </div>
            </Form>
        </div>
    </div>
    <script></script>
    <?php
    $output = ob_get_clean();
    return $output;
}
add_shortcode( 'convertergg', 'my_converter' );