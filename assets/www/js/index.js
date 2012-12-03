/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


/**
 * Test
 */
$("#link1").click(function(){
	var htmlStr = '<ul><li class="dark"><strong>LOADING...</strong></li></ul>';

	$('#main-article').html(htmlStr);
	
	$.ajax({
		type: 'GET',
		//url: 'http://www.zino-tech.com/test.php?param1=11&callback=json',
		url: 'http://www.onlinemanual.com/zino/json',
		async: false,
		cache: true,
		jsonpCallback: 'callback',
		contentType: "application/json",
		dataType: 'jsonp',
		success: function(json) {
		
			$('#main-article').html('<ul><li class="dark"><strong>MAIN ARTICLE</strong></li>');
			
			$.each(json, function(i, obj) {
			 	$('#main-article').append('<li  class="feature"><img src="http://www.zino-tech.com/sites/default/files/zino%20tech%20logo.png"><strong>'+i+'</strong><br/>'+obj.item_id+'</li>');
		  });
		  $('#main-article').append('</ul>');
		},
		error: function(e) {
			alert('error');
			console.log(e.message);
		}
	});
});


/**
 * Link 2
 */
$("#link2").click(function(){
	var htmlStr = '<ul><li class="highlight"><strong>Link 2 here</strong></li></ul>';
                
	$('#second-article').html(htmlStr);	
});