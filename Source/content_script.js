walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

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

	v = v.replace(/Strong/g, "Stronk");
	v = v.replace(/strong/g, "stronk");
	v = v.replace(/STRONG/g, "STRONK");

	v = v.replace(/Strength/g, "Stronktitude");
	v = v.replace(/strength/g, "stronktitude");
	v = v.replace(/STRENGTH/g, "STRONKTITUDE");
	
	textNode.nodeValue = v;
}


