$(function() {

$(".links-newtab a:not([target])").attr("target", "_blank");

$("[data-toggle='tooltip']").tooltip({
	container: "body"
});

});