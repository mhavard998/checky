// Check your ECMAScript privilege
// This isn't ECMAScript, you dingus.  It's JavaScript, which is an implementation of ECMAScript.  ActionScript is a superset of ECMAScript.  

var checkbox = document.getElementById('checkbox');
var thanks = document.querySelector('aside');

var adaptFontSize = function(e){
    var ems = window.innerWidth / 256;
    document.body.setAttribute('style', 'font-size: ' + ems + 'em');
    var last = localStorage.privCheckTime;
    var dayInMilliseconds = 1000 * 60 * 60 * 24;
    if (last && Date.now() - last <= dayInMilliseconds)
	checkPrivilege();
}

var checkPrivilege = function(e){
    checkbox.querySelector('i').innerHTML = '&#10003;';
    checkbox.setAttribute('aria-checked', 'true');
    checkbox.setAttribute('class', 'privilege-checked');
    thanks.setAttribute('class', 'privilege-checked');
    localStorage.privCheckTime = Date.now();
}

adaptFontSize();

window.addEventListener('resize', adaptFontSize);
checkbox.addEventListener('click', checkPrivilege);
