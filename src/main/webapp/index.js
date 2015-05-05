$(function(){
	$("form").submit(function (event) {
		event.preventDefault();
		
		var data = {
			a: $("#a").val(),
			b: $("#b").val()
		};
		
		var settings = {
				url: 'api/calculator/sum',
				type: 'POST',
				data: JSON.stringify(data),
				contentType: 'application/json'
		};
		
		Calculator.sum(data).done(sumOk);
	});
});

function sumOk(data) {
	$("#result").val(data);
}