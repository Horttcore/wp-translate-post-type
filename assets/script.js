var $singular = $('#custom-post-type-name-singular'),
	$plural = $('#custom-post-type-name-plural'),
	$copy = $('.copy-to-clipboard');

$singular.keyup(function(){
	var val = '' == $singular.val() ? 'Post' : $singular.val();
	$('.post-type-name-singular.post-type-name-uppercase').text(val);
	$('.post-type-name-singular.post-type-name-lowercase').text(val.toLowerCase());
	$('input[data-translation*="%%Post%%"]').each(function(i,e){
		jQuery(this).val(jQuery(this).data('translation').replace('%%Post%%', val));
	});
	$('input[data-translation*="%%post%%"]').each(function(i,e){
		jQuery(this).val(jQuery(this).data('translation').replace('%%post%%', val.toLowerCase()));
	});
});

$plural.keyup(function(){
	var val = '' == $plural.val() ? 'Post' : $plural.val();
	$('.post-type-name-plural.post-type-name-uppercase').text(val);
	$('.post-type-name-plural.post-type-name-lowercase').text(val.toLowerCase());
	$('input[data-translation*="%%Posts%%"]').each(function(i,e){
		jQuery(this).val(jQuery(this).data('translation').replace('%%Posts%%', val));
	});
	$('input[data-translation*="%%posts%%"]').each(function(i,e){
		jQuery(this).val(jQuery(this).data('translation').replace('%%posts%%', val.toLowerCase()));
	});
});

$copy.click(function(e){
	e.preventDefault();
	jQuery(this).prev().find('input').select();
	try {
	    var successful = document.execCommand('copy');
	    var msg = successful ? 'successful' : 'unsuccessful';
	  } catch (err) {
	    console.log('Oops, unable to copy');
	  }
});
