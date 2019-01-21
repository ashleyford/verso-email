$(document).ready(function() {
	var clipboard = new Clipboard('.copyTextbtn');


	clipboard.on('success', function(e) {
		$('.copyTextbtn').removeClass('btn-primary').addClass('btn-success').text('Copied!');
		$('.copyText').addClass('flash');
	    e.clearSelection();
		setTimeout(function(){
			console.log('this');
		  $('.copyTextbtn').addClass('btn-primary').removeClass('btn-success').text('Copy to Clipboard');
		}, 3000);
	});

	clipboard.on('error', function(e) {
		$('.copyTextbtn').removeClass('btn-primary').addClass('btn-warning').text('Copy with Ctrl+C');
	});

	$('#InputName').keyup(function() {
		$('#YourName').text($(this).val());
	})

	$('#InputJob').keyup(function() {
		$('#YourJob').text($(this).val());
	})

	$('#InputLandlineAlt').keyup(function() {
		$('#YourLandline').text($(this).val());
	})

  $('#InputLandline').keyup(function() {
		$('#YourLandline').html('<span id="LandlineLabel"><b>P:</b>&nbsp;</span>'+'<a id="Number" href="" target="_blank">'+$(this).val()+'</a>');
		$('#YourLandline #Number').attr('href', 'tel:'+$(this).val());

		if ( $('#YourLandline #Number').text().length === 0 ) {
			$('#LandlineLabel').remove();
			$('.break').remove();
		}
	})

	$('#InputExt').keyup(function() {
		$('#YourExt').html('<span id="Number">'+$(this).val()+'<span id="Number">');
		$('#YourExt').prepend('<span id="Ext"><b>EXT:</b>&nbsp;&nbsp;</span>');
		if ( $('#YourExt #Number').text().length === 0 ) {
			$('#Ext').remove();
		}
	})

	$('#InputMobile').keyup(function() {
		$('#YourMobile').html('<br class="break"><span id="MobileLabel"><b>M:</b>&nbsp;</span>'+'<a id="Number" href="" target="_blank">'+$(this).val()+'</a>');
		$('#YourMobile #Number').attr('href', 'tel:'+$(this).val());

		if ( $('#YourMobile #Number').text().length === 0 ) {
			$('#MobileLabel').remove();
			$('.break').remove();
		}
	})

});
