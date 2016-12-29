module.exports = {

    deployStrategy: 'rsync', //`rsync` or `ftp`

    livereload: true, //set to `true` to enable livereload

    styleguideDriven: false, //will rebuild the styleguide whenever stylesheets change

    buildOnly: false, //set to `true` when paired with Phing

    viewmatch: '*.html', //for php projects use: '*.{html,php,phtml}'

    phpBin: 'C:\\php-56\\php.exe', //binary for php execution

    vendors: [
        "/jquery/dist/jquery.min.js",
        "/threejs/build/three.min.js",
        "/gsap/src/minified/jquery.gsap.min.js",
        "/gsap/src/minified/TweenMax.min.js",
        "/gsap/src/minified/TimelineMax.min.js",
        "/gsap/src/minified/plugins/ColorPropsPlugin.min.js",
        "/scrollmagic/scrollmagic/minified/ScrollMagic.min.js",
        "/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js",
        "/scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js",
    ]

};



