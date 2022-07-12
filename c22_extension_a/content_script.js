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
	var myArray = ['ARTICULO X Leer texto del articulo',
                   'ARTICULO X Ver texto de aticulo',
                   'ARTICULO X Vote informado',
                   'ARTICULO X Votar si miedo',
                   'ARTICULO X A votar',
                   'ARTICULO X Votar votar'
	               ]; 


	var rand = myArray[Math.floor(Math.random() * myArray.length)];
	var v = textNode.nodeValue;

	v = v.replace(/\bArticulo\b/g, "");
	v = v.replace(/\bnro\b/g, rand);
//	v = v.replace(/\bThe 's\b/gi, rand + "'s");
			
	textNode.nodeValue = v;
}