function displayText(id) {
	const myElement = document.getElementById(id);
	if (
		myElement.children.length > 2 &&
		myElement.children[1].style.display === 'none'
	) {
		myElement.children[1].style.display = 'block';
	} else if (myElement.children.length > 2) {
		myElement.children[1].style.display = 'none';
	}
}
