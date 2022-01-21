walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bNFT\b/g, "silly jpeg");
	v = v.replace(/\bnft\b/g, "silly jpeg");
	v = v.replace(/\bNFTs\b/g, "silly jpegs");
	v = v.replace(/\bNon-fungible token\b/g, "Silly jpeg");
	v = v.replace(/\bNon-fungible tokens\b/g, "Silly jpegs");
	v = v.replace(/\bnon-fungible token\b/g, "silly jpeg");
	v = v.replace(/\bNon-Fungible Tokens\b/g, "Silly Jpegs");
	
	textNode.nodeValue = v;
}


