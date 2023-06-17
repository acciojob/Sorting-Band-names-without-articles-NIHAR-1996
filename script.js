//your code here
let bandNames = ['The Beatles', 'Pink Floyd', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones'];

// Remove articles ('a', 'an', 'the') from band names and sort them in lexicographic order
let modifiedNames = bandNames.map(name => name.replace(/^(a|an|the)\s/i, ''))
                             .sort((a, b) => a.localeCompare(b));

// Create a <ul> element with id='band'
let ul = document.createElement('ul');
ul.setAttribute('id', 'band');

// Add each band name as an <li> element to the <ul> element
modifiedNames.forEach(name => {
  let li = document.createElement('li');
  li.textContent = name;
  ul.appendChild(li);
});

// Append the <ul> element to the document body or a desired container
document.body.appendChild(ul);






