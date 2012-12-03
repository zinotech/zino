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
      
      error: function (e) {
        console.log(e);
      },
      success: function(data) {

  			$('#main-article').html('<ul><li class="dark"><strong>LATEST NEWS</strong></li>');

 			 	$.each(data.nodes, function(key, value) {

          $('#main-article ul').append("<li><a href='#second' data-router='section' id='"+ value.node['nid'] +"' data-label='Section' class='view-node'>" + value.node['title'] + "</a></li>");
          //'<li  class="feature"><strong>'+value.node['nid']+'</strong><br/>'+value.node['title']+'</li>'
        });
 			 	
 			 	
  		  $('#main-article').append('</ul>');
  		},
	  });
  }
  catch (error) { alert("page_dashboard - " + error); }
});



$('a.view-node').live("click", function() {
  
  var nid = $(this).attr('id');
  
  $('#second span.title').text('LOADING..');
  $('#second article').text('');

  try {
    var urlto = "http://www.zino-tech.com/test.php?type=get&url=http://www.zino-tech.com/mobile/testpoint/node/"+nid+".json&callback=?";
    
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
        
  			$('#second span.title').text(data.title);

 			 	$('#second article').append('<p>'+data.body.und[0]['safe_value']+'</p>');
  		},
	  });
  }
  catch (error) { alert("page_dashboard - " + error); }

});