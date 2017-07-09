//variable to get input element
	var filterInput=document.getElementById('filterInput')
	//event Listener
	filterInput.addEventListener('keyup',filterNames);

	function filterNames(){
		//console.log(1);
		//Get value of input
		var filterValue=document.getElementById('filterInput').value.toUpperCase();
		//console.log(filterValue);

		//get name ul
		var ul=document.getElementById('names');
		//Get list from ul
		var li=ul.querySelectorAll('li.collection-item');
		//loop through collection-item
		for(var i=0;i<li.length;i++)
		{
			var a=li[i].getElementsByTagName('a')[0];
			//if match found
			if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1)
			{
				li[i].style.display='';
			}
			else
			{
				li[i].style.display='none';
			}
		}
	}