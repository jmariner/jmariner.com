$(function(){
	var header = document.querySelector("header");
	var headerHeight = header.getBoundingClientRect().height;
	var fixedHeader = $(header.cloneNode(true)).addClass("fixed").get(0);
	document.body.insertBefore(fixedHeader, header);

	var fixedVisible = false;

	$(document).scroll(function() {
		var top = this.body.scrollTop;
		var bottom = top + window.innerHeight;

		if (fixedVisible && top < headerHeight) {
			fixedHeader.classList.remove("active");
			fixedVisible = false;
		}
		if (!fixedVisible && top >= headerHeight) {
			fixedHeader.classList.add("active");
			fixedVisible = true;
		}
	});
});