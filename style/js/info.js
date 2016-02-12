$(function () {
	
	function render(tmpl_name, tmpl_data) {
		if ( !render.tmpl_cache ) { 
			render.tmpl_cache = {};
		}
		if ( ! render.tmpl_cache[tmpl_name] ) {
			var tmpl_dir = 'static/templates';
			var tmpl_url = tmpl_dir + '/' + tmpl_name + '.html';
			//var tmpl_url = tmpl_name + '.html';
			var tmpl_string;
			$.ajax({
				url: tmpl_url,
				method: 'GET',
				async: false,
				success: function(data) {
					tmpl_string = data;
				}
			});
			render.tmpl_cache[tmpl_name] = _.template(tmpl_string);
		}
		return render.tmpl_cache[tmpl_name](tmpl_data);
	}
	
	var rendered_html_navBarTemplate = render('navbarTemplate', {});
	var rendered_html_postFooter = render('post-footer', {});
		
  // Add the compiled html to the page
  $('.navbar').html(rendered_html_navBarTemplate);
  $('.post-footer').html(rendered_html_postFooter);
  
});
// And this is the definition of the custom function ​

