console.log('Hi! We are printing on the console');

// change the main content
var element = document.getElementById('main content');
element.innerHTML = 'New content here!';

// move the image
var img = document.getElementById('madi');
img.onclick = function () {
img.style.marginLeft = '100px';
};

// Click counter on home page
var button= document.getElementById('clicker');
button.onclick = function(){
	
	// Create a request object (not yet making the request)
	var request= new XMLHttpRequest();

	// Capture the response & store it
	request.onreadystatechange = function()
	{
		if(request.readyState === XMLHttpRequest.DONE)
		{
			if(request.status === 200)
			{
				var counter= request.responseText;
				// Render the variable in the correct span
				var span= document.getElementById('count');
				span.innerHTML = counter.toString();
			}
		}
	}

	// Making the request to counter endpoint URL
	request.open('GET','/counter',true);
	request.send(null);
}



var s = document.getElementById('submit_button');
s.onclick = function ()
{
	// Request server to send name
	var request= new XMLHttpRequest();
	request.onreadystatechange = function()
	{
		if(request.readyState === XMLHttpRequest.DONE)
		{
			if(request.status === 200)
			{
				var names = request.responseText;
				names = JSON.parse(names); // converts string to array (Javascript object)
				var list= '';
				for(var i=0; i<names.length; i++)
				{
					list+= '<li>' + names[i] + '</li>';
				}	
				var ul= document.getElementById('name_list');
				ul.innerHTML = list;			
			}
		}
	}
	var nameField = document.getElementById('name');
	var name = nameField.value;
	request.open('GET','/submit-name/?name='+name,true);
	request.send(null);
	
}


