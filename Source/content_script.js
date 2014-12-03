walk(document.body);

// This whole thing is a clone of https://github.com/panicsteve/cloud-to-butt

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

	v = v.replace(/\bRemember Me\b/g, "AVENGE ME");
	v = v.replace(/\bRemember me\b/g, "AVENGE ME");
	v = v.replace(/\bREMEMBER ME\b/g, "AVENGE ME");
	v = v.replace(/\bremember me\b/g, "AVENGE ME");
	
	textNode.nodeValue = v;
}


