//var nid; // global node id variable
  
//$('#main-article').live('pageshow',function() {
$(document).ready(function() {

  var htmlStr = '<ul><li class="dark"><strong>LOADING...</strong></li></ul>';
  $('#main-article').html(htmlStr);
  
  try {
    var urlto = "http://www.zino-tech.com/test.php?type=get&url=http://www.zino-tech.com/mobile/test&callback=?";
    
    $.ajax({
      type: 'POST',
      url: urlto,
      contentType: 'application/json',
      jsonpCallback: 'callback',
      dataType: 'jsonp',
      
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      success: function(data) {

  			$('#main-article').html('<ul><li class="dark"><strong>LATEST NEWS</strong></li>');

 			 	$.each(data.nodes, function(key, value) {
          $('#main-article').append($("<li></li>",{"html":"<a href='#second-article' id='" + value.node['nid'] + "' class='page_nide_pages_list_title'>" + value.node['title'] + "</a>"}));
          //'<li  class="feature"><strong>'+value.node['nid']+'</strong><br/>'+value.node['title']+'</li>'
        });
 			 	
 			 	
  		  $('#main-article').append('</ul>');
  		},
	  });
  }
  catch (error) { alert("page_dashboard - " + error); }
});


$('#link2').click(function() {
  var htmlStr = '<ul><li class="dark"><strong>LOADING...</strong></li></ul>';
  
  $('#second-article').html(htmlStr);
  
  try {
    var urlto = "http://www.zino-tech.com/test.php?type=get&url=http://www.zino-tech.com/mobile/testpoint/node/1.json&callback=?";
    
    $.ajax({
      type: 'POST',
      url: urlto,
      contentType: 'application/json',
      jsonpCallback: 'callback',
      dataType: 'jsonp',
      
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      success: function(data) {
        console.log(data);
  			$('#second-article').html('<ul><li class="dark"><strong>MAIN ARTICLE</strong></li>');

 			 	$('#second-article').append('<li  class="feature"><strong>'+data.title+'</strong><br/>'+data.body.und[0]['safe_value']+'</li>');

  		  $('#second-article').append('</ul>');
  		},
	  });
  }
  catch (error) { alert("page_dashboard - " + error); }
});