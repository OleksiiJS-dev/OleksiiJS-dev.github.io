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
    .small-give__label {
        height: 30px;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 25px;
        line-height: 80%;
        color: white;
        position: absolute;
        right: 42px;
    }
    .small-give__label img {
        height: 30px;
        margin: 0 7px;
    }
    .small-get__label {
        height: 30px;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 25px;
        line-height: 80%;
        color: white;
        position: absolute;
        right: 15px;
    }
    .small-get__label img {
        height: 30px;
        margin: 0 7px;
    }
    .small {
        border-radius: 4px !important;
        height: 40px !important;
        transition: height, border-radius, 0.5s ease;
        padding-bottom: 141px !important;
    }
    .wrapper {
        height: 100%;       
    }
</style>
<link rel="stylesheet" href="https://www.konvert.gg/wp-content/uploads/converter/css/styles14.css">
<div class="wrapper converter-wrapper">
    <div class="block converter-block">
        <div class="block converter-block-side converter-give">
            <div id="converter-give-title" class="side-title">Отдаёте</div>
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
        <div id="converter-button__reverse" class="converter-button__reverse"></div>
    </div>
    <div class="block form-block">
        <Form id="MyForm" >
            <div class="form-block__title">Дополнительная информация о заявке</div>
            <div class="form-block__form">
                <div class="form-block__left">
                    <div class="form-block__data">
                        <label for="name">Ваше ФИО латиницей</label>
                        <input class="form-block__input" id="name" placeholder="Ivanov Ivan Ivanovich" type="name" required>
                    </div>
                    <div class="form-block__data">
                        <label for="tel">Ваш номер телефона</label>
                        <input class="form-block__input" id="tel" placeholder="+ХХХ…" type="tel" required>
                    </div>
                    <div class="form-block__data">
                        <label for="card-number">Карта, на которую вы хотите получить выбранную валюту</label>
                        <input class="form-block__input"
                            placeholder="Для получения наличных укажите город, страну" id="card-number" name="card-number" type="card-number" required>
                    </div>
                </div>
                <div class="form-block__right"> 
                    <div class="form-block__data">
                        <div class="form-block__messenger-title">Удобный менеджер для связи</div>
                            <div class="form-block__messenger-list">
                                <div class="form-block__messenger"><img src="https://www.konvert.gg/wp-content/uploads/converter/images/whatsapp.svg" alt="">
                                    <input type="checkbox" id="myCheckboxWhatsapp" name="messenger" required>
                                    <label for="myCheckboxWhatsapp" ></label></div>
                                <div class="form-block__messenger"><img src="https://www.konvert.gg/wp-content/uploads/converter/images/telegram.svg" alt="">
                                    <input type="checkbox" id="myCheckboxTelegram" name="messenger" required>
                                    <label for="myCheckboxTelegram" ></label></div>
                                <div class="form-block__messenger"><img src="https://www.konvert.gg/wp-content/uploads/converter/images/viber.svg" alt="">
                                    <input type="checkbox" id="myCheckboxViber" name="messenger" required>
                                    <label for="myCheckboxViber" ></label></div>
                        </div>
                    </div>
                    <div class="form-block__data">
                        <label for="promocode">Промокод</label>
                        <input class="form-block__input"
                            placeholder="Необязательно" id="promocode" name="promocode" type="promocode">
                    </div>
                    <div class="form-block__data">
                        <label for="commentary">Комментарии</label>
                        <input class="form-block__input"
                            placeholder="Необязательно" id="commentary" name="commentary" type="commentary">
                    </div>
                </div>
            </div>
            <div class="form-block__send">
                <div class="form-block__checkbox"> <input type="checkbox" required> Я соглашаюсь с <span
                        class="form-block__policy"><a>Политикой</a></span></div>
                <button  type="submit"  class="form-block__button disabled" id="submit-btn" value="Отправить заявку">Отправить заявку</button>
                <div class="form-block__division">ЛИБО</div>
                <a class="form-block__help" href="https://t.me/Konvert_Main" target="_blank"><div class="form-block__button">Помощь менеджера</div></a>
            </div>
        </Form>
    </div>
</div>
<div class="popup popup-hidden">
        <p class="popup-header">
            ВАША ЗАЯВКА ПРИНЯТА
        </p>
        <p class="popup-content">
            Ожидайте, с вами свяжется менеджер для уточнения деталей
        </p>
    </div>
    <script src="https://www.konvert.gg/wp-content/uploads/converter/js/converterSt.js"></script>
    <script src="https://www.konvert.gg/wp-content/uploads/converter/js/formPostSt.js"></script>
    <script src="https://www.konvert.gg/wp-content/uploads/converter/js/buttons.js"></script>
<?php
$output = ob_get_clean();
return $output;
}
add_shortcode( 'convertergg', 'my_converter' );