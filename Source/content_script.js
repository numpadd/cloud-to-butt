walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
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

   // Original functionality
	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");
	
   // xkcd 1288
   v = v.replace(/\bwitnesses\b/gi, "these dudes I know");
   v = v.replace(/\bWitnesses\b/gi, "these dudes I know");
	v = v.replace(/\ballegedly\b/gi, "kinda probably");
	v = v.replace(/\bAllegedly\b/gi, "kinda probably");
	v = v.replace(/\bnew study\b/gi, "Tumblr post");
	v = v.replace(/\bNew study\b/gi, "Tumblr post");
	v = v.replace(/\brebuild\b/gi, "avenge");
	v = v.replace(/\bRebuild\b/gi, "avenge");
	v = v.replace(/\bspace\b/gi, "spaaace");
	v = v.replace(/\bSpace\b/gi, "spaaace");
	v = v.replace(/\bgoogle glass\b/gi, "Virtual Boy");
	v = v.replace(/\bGoogle Glass\b/gi, "Virtual Boy");
	v = v.replace(/\bsmartphone\b/gi, "Pokédex");
	v = v.replace(/\bSmartphone\b/gi, "Pokédex");
	v = v.replace(/\belectric\b/gi, "atomic");
	v = v.replace(/\bElectric\b/gi, "atomic");
	v = v.replace(/\bsenator\b/gi, "Elf-Lord");
	v = v.replace(/\bSenator\b/gi, "Elf-Lord");
	v = v.replace(/\bcar\b/gi, "cat");
	v = v.replace(/\bCar\b/gi, "cat");
	v = v.replace(/\belection\b/gi, "eating contest");
	v = v.replace(/\bElection\b/gi, "eating contest");
	v = v.replace(/\bcongressional leaders\b/gi, "river spirits");
	v = v.replace(/\bCongressional leaders\b/gi, "river spirits");
	v = v.replace(/\bhomeland security\b/gi, "homestar runner");
	v = v.replace(/\bHomeland security\b/gi, "homestar runner");
	v = v.replace(/\bcould not be reached for comment\b/gi, "is guilty and everyone knows it");
	v = v.replace(/\bCould not be reached for comment\b/gi, "is guilty and everyone knows it");

	textNode.nodeValue = v;
}


