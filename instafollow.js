
//scrape followers
//go to your profile and click Followers
//run this to auto-scroll
var scrolldiv = document.getElementsByClassName("j6cq2");
var follower_elem = document.getElementsByClassName('FPmhX notranslate zsYNt ')

var intrv = setInterval(
					function() {scrolldiv[0].scrollTop = scrolldiv[0].scrollHeight; console.log(follower_elem.length)},
	 				1000);
//wait until scrolling finishes and run this:
clearInterval(intrv)
var follower = []
for (index = 0; index < follower_elem.length; ++index) {
	follower.push(follower_elem[index].getAttribute('href').slice(1,-1));
}

//scrape following
//close Following dialog and click Followers in profile
//don't reload the page
////run this to auto-scroll
var scrolldiv = document.getElementsByClassName("j6cq2");
var following_elem = document.getElementsByClassName('FPmhX notranslate zsYNt ')

var intrv = setInterval(
					function() {scrolldiv[0].scrollTop = scrolldiv[0].scrollHeight; console.log(following_elem.length)},
	 				1000);
//wait until scrolling finishes and run this:
clearInterval(intrv)
var following = []
for (index = 0; index < following_elem.length; ++index) {
	following.push(following_elem[index].getAttribute('href').slice(1,-1));
}


var follower = []
for (index = 0; index < follower_elem.length; ++index) {
	follower.push(follower_elem[index].getAttribute('href').slice(1,-1));
}


//
for (index = 0; index < following.length; ++index) {
	if (follower.includes(following_elem[index].getAttribute('href').slice(1,-1))){
		following_elem[index].innerHTML += '    FOLLOWS YOU'
	}
	else{following_elem[index].innerHTML += '    DOES NOT FOLLOW YOU'};
}