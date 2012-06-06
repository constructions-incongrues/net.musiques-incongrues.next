<?php
/**
 * Extension Name: CiTwigBridge
 * Extension Url: https://github.com/contructions-incongrues/net.musiques-incongrues.next/tree/master/src/forum/extensions/CiTwigBridge
 * Description: Makes it possible to use the Twig (http://twig.sensiolabs.org/) templating engine
 * Author: Constructions Incongrues
 * Author Url: http://www.constructions-incongrues.net
 */

/**
 * Renders theme Twig template for currently executed file.
 *
 * It makes it possible to use theme's .php files as controllers and corresponding
 * templates files in theme's views/ directory as views. 
 *
 * @example <php>echo CiTwigBridgeRender($this->Context, $this, __FILE__);</php>
 * @see http://twig.sensiolabs.org/doc/intro.html#basic-api-usage
 * 
 * @param Context    $context       Current context
 * @param Delegation $delegation    Delegator instance
 * @param string     $pathThemeFile Current theme file filepath
 * @param array      $vars          Template variables
 * 
 * @return string Rendered template
 */
function ciTwigBridgeRender(Context $context, Delegation $delegation, $pathThemeFile, array $vars = array())
{
    // Setup autoloading
    require $context->Configuration['APPLICATION_PATH'].'/../vendor/autoload.php';

    // Setup template loader so that it searches templates in theme's directory
    $loader = new Twig_Loader_Filesystem(dirname($pathThemeFile).'/views');

    // Setup Twig environment
    $twig = new Twig_Environment($loader, array(
        'cache' => $context->Configuration['APPLICATION_PATH'].'/cache/twig',
        'debug' => $context->Configuration['TWIG_DEBUG']
    ));

    // Add default vars
    // TODO : factorise this using array merging
    if (!isset($vars['vanilla']['context'])) {
        $vars['vanilla']['context'] = $context;
    }
    if (!isset($vars['vanilla']['delegation'])) {
        $vars['vanilla']['delegation'] = $delegation;   
    }
    if (!isset($vars['php']['server'])) {
        $vars['php'] = array('server' => $_SERVER);
    }

    // Render template and return result
    return $twig->render(basename($pathThemeFile, '.php').'.html', $vars);
}