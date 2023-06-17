//your code here
//1.Array of band names
let bandNames=['The virupaksha temple','Victoria Memorial','Tajmahal'];
//2.Remove Articles from Band Names by map Function
let modifiednames=bandNames.map(names=>names.replace(/^(a|an|the)\s/i""));
//3.Sorting the modified names lexicographically
modifiednames.sort();
//creating an HTML list
let ul=document.createElement('ul');
ul.setAttribute('id','band');
modifiednames.forEach(name=>{
	let li=document.createElemnt('li');
	li.textContent=name;
	ul.appendChild(li);
})
document.body.appendChild(ul);







