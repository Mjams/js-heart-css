var $h1 = $('h1');
var $main = $('main');
var $pMain = $('main p:first-child');
var $h2 = $('h2');
var $ulMain = $('main ul');
var $img = $('img');
var $firstChild = $('ul li:lastChild');
var $lastChild = $('ul li:last-child');
var $dl = $('dl');
var $dt = $('dt');

$h1.addClass('masthead');
$h1.removeClass('big-heading', 'logo');
$main.addClass('wrapper');
$pMain.addClass('intro');
$h2.addClass('slug-head');
$ulMain.addClass('slug-list');
$img.addClass('slug-img');
$firstChild.addClass('slug-list-first');
$lastChild.addClass('slug-list-last');
$dl.addClass('classification');
$dt.removeClass('big-label');

$lastChild.show();
