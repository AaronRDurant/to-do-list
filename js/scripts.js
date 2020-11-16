function newItem() {
	// 1. Adds a new item to the list of items:
	let li = $('<li></li>');
	let inputValue = $('input').val();
	li.append(inputValue);
	
	if (inputValue === '') {
		alert('You must write something!');
	} else {
		$('#list').append(li);
	}
	
	// 2. Crosses out an item from the list of items:
	function crossOut() {
		li.toggleClass("crossed");
	}
	
	li.on("dblclick", function crossOut() {
		li.toggleClass("crossed");
	});
	
	// 3a. Adds the delete button:
	let deleteButton = $('<deleteButton></deleteButton>');
	deleteButton.append(document.createTextNode("X"));
	li.append(deleteButton);
	
	// 3b. Adds "delete" class to remove item upon clicking X:
	deleteButton.on('click', deleteListItem);
	function deleteListItem() {
		li.addClass('delete')
	}
	
	// 4. Enables reordering of items:
	$('#list').sortable();
	}
