$(function(){
	$("nav ."+$("body").attr("data-location")).addClass("current");


	$(".fit-title").each(function() {
		var words = $(this).text().trim().split(" ");
		if (words.length <= 5) {
			$(this).css({
				"word-spacing": "20px",
				"display": "initial"
			});
		}
		else {
			var spans = [];
			words.forEach(function(word){
				spans.push($("<span>").html(word));
			});
			$(this).html(spans);
		}
	});

	/*var oldBg = $(".header").css("background");

	$(".row.large-only nav .link").hover(
		function() {
			// calculate position relative to .header
			var rect = this.getBoundingClientRect();
			var x = rect.left + rect.width/2;
			var y = rect.top + rect.height/2;
			//var toCorner = Math.sqrt(Math.pow(rect.width/2, 2) + Math.pow(rect.height/2, 2));

			$(".header").css("background", function(i, bg){
				var oldColor = bg.split(" linear")[0];
				var oldGrad = "l"+bg.split(" repeat")[0].split(") l")[1];
				var oldGradColor = bg.split("gradient(")[1].split(" 50%")[0];
				var grad =
					"radial-gradient(farthest-corner at "+x+"px "+y+"px, transparent "+"1%"+", "
					+oldGradColor+""+""+")";
				console.log(oldColor + " " + grad);
				return oldColor + " " + grad;
			})
		},
		function() {
			$(".header").css("background", oldBg);
		});*/
});