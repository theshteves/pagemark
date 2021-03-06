// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 **/

function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://developer.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}


document.addEventListener('DOMContentLoaded', function() {

    // Tab switching (via click)
    document.getElementById("create-tab").addEventListener("click", function() {
	document.getElementById("load-tab").removeAttribute("class");
	document.getElementById("create-tab").setAttribute("class", "active");
	document.getElementById("markList").style.display = "none";
	document.getElementById("enterMark").style.display = "block";
	document.getElementById("save-button").style.display = "block";
    });
    document.getElementById("load-tab").addEventListener("click", function() {
	document.getElementById("create-tab").removeAttribute("class");
	document.getElementById("load-tab").setAttribute("class", "active");
	document.getElementById("save-button").style.display = "none";
	document.getElementById("markList").style.display = "block";
	document.getElementById("enterMark").style.display = "none";

	*/
	// Get stored pagemarks
	chrome.storage.sync.get(function (items) {
	    //console.log(items);
	    if (document.getElementById(items.name + "-link")) {
	    } else {
		var mark = document.createElement("A");
		mark.appendChild(document.createTextNode(items.name));
		mark.setAttribute("href", items.link);
		mark.setAttribute("class", "list-group-item");
		mark.setAttribute("id", items.name + "-link");
		document.getElementById("markList").appendChild(mark);
	    }
	});


    });

    /*
    // Tab switching (via arrow keys)
    document.body.addEventListener("keypress", function(e) {
	if (e.keyCode == 37 || e.keyCode == 39) {
	    if (document.getElementById("load-tab").classList.contains("active")) {
		document.getElementById("create-tab").click();
	    } else {
		document.getElementById("load-tab").click();
	    }
	}
    });
    */


    // Save pagemark on 'save-button' click
    document.getElementById("save-button").addEventListener("click", function() {
	var markName = document.getElementById("inputName").value;
	if (markName == "" && !document.getElementById("alert")) {
	    var alert = document.createElement("DIV");
	    var message = document.createElement("STRONG");
	    message.appendChild(document.createTextNode("Woops!"));
	    alert.appendChild(message);
	    alert.appendChild(document.createTextNode(" Name Required."));
	    alert.setAttribute("class", "alert alert-danger");
	    alert.setAttribute("role", "alert");
	    alert.setAttribute("id", "alert");
	    document.getElementById("enterMark").appendChild(alert);
	} else if (markName == "") {
	} else {
	    var markLink = "http://www.google.com/"; //getCurrentTabUrl();
	    chrome.storage.sync.set({"name": markName, "value": markLink});
	    document.getElementById("load-tab").click();
	}
    });

});
