var form = document.querySelector('#addForm');
var itemList = document.querySelector('#items');
var filter = document.getElementById('filter')

// Form Submit events
form.addEventListener('submit', function (e) {
	e.preventDefault();
	// get input value
	var newItem = document.getElementById('item').value;
	// Create new li element
	var li = document.createElement('li');
	var button = document.createElement('button');
	// Add class
	li.className = 'list-group-item';
	button.className = 'btn btn-danger btn-sm float-right delete';
	// Add text nod ewith input value
	li.appendChild(document.createTextNode(newItem))
	button.appendChild(document.createTextNode('X'));

	li.appendChild(button);
	itemList.appendChild(li);

})

// Delete items
itemList.addEventListener('click', function (e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you sure?')) {
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
})

// Filter items
filter.addEventListener('input', function (e) {
	var text = e.target.value.toLowerCase();
	var items = itemList.getElementsByTagName('li');
	Array.from(items).forEach(function (item) {
		var itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = 'block';
		}else{
			item.style.display = 'none'
		}
	})
	//console.log(items)
})