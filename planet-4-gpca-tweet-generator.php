<?php
/**
 * Plugin Name:     Tweet Generator
 * Description:     Generate tweets from a selection of drop down menus
 * Version:         0.0.1
 * Author:          Mohammad Rafey &lt;mrafey@greenpeace.org&gt;
 * License:         GPL-3.0-or-later
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:     tweetgenerator
 *
 * @package         tweet-generator-block
 */

function tweetgen_block_tweetgen_block_init() {
    $dir = __DIR__;

    $script_asset_path = "$dir/build/index.asset.php";
    if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "twitter/tweetgen" block first.'
		);
	}
    $script_asset = require($script_asset_path);

    $editor_script = 'build/index.js';
    wp_register_script(
        'tweetgen-block-editor',
        plugins_url($editor_script, __FILE__),
        $script_asset['dependencies'],
		$script_asset['version']
    );

    $editor_style = 'build/index.css';
    wp_register_style(
		'tweetgen-block-editor',
		plugins_url( $editor_style, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_style" )
	);

    $style = 'build/index.css';
	wp_register_style(
		'tweetgen-block',
		plugins_url( $style, __FILE__ ),
		array(),
		filemtime( "$dir/$style" )
	);

    register_block_type(
        'twitter/tweetgen',
        array(
            'editor_script' => 'tweetgen-block-editor',
            'editor_style'  => 'tweetgen-block-editor',
            'style'         => 'tweetgen-block'
        )
    );
}

add_action(
    'wp_enqueue_scripts',
    static function () {
        if(has_block('twitter/tweetgen')) {
            $asset = include(plugin_dir_path(__FILE__) . 'build/client.asset.php');
            wp_enqueue_script(
                'tweetgen-block',
                plugins_url('build/client.js', __FILE__),
                $asset['dependencies'],
                $asset['version'],
                true
            );
        }
    }
);

function p4_child_theme_gpca_whitelist_blocks( $allowed_blocks, $post ) {
	$allowed = is_array($allowed_blocks) ? $allowed_blocks : array();
	array_push($allowed, 'twitter/tweetgen');
	return $allowed;
}

add_action('init', 'tweetgen_block_tweetgen_block_init');
add_filter('allowed_block_types_all', 'p4_child_theme_gpca_whitelist_blocks', 11, 2);
add_action( 'wp_headers', static function ( $headers ): array {
	if ( empty( $headers['Content-Security-Policy'] ) ) {
		return $headers;
	}
	$headers['Content-Security-Policy'] .= '; worker-src blob: ; child-src * blob: ; img-src data: blob: http: https: ';
	return $headers;
}, 11, 1);
