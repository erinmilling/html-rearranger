var $h1Below = $('<h1>');
var $ulBelow = $('<ul>');
var $h1Above = $('<h1>');
var $ulAbove = $('<ul>');

$h1Below.html('Below Ground Veggies');

$('body').append($h1Below);
$('body').append($ulBelow);

$h1Above.html('Above Ground Veggies');

$('body').append($h1Above);
$('body').append($ulAbove);
});
