//DOM Lab Part 1
// Select and cache the <main> element in a variable named mainEl.
// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
// Add a class of flex-ctr to mainEl.
//create main element , queryselector ,for bg color style it,create h1, bring it in center 
// 1
let mainEl = document.querySelector('main');
console.log(mainEl);
//2
mainEl.style.backgroundColor = "var(--main-bg)";
//3 
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
//4
mainEl.classList.add("flex-ctr");

//Part 2 

// Next, create a blank menu bar that we can use to later add some interactivity to the page:
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
// Set the height of the topMenuEl element to be 100%.
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
// Add a class of flex-around to topMenuEl.

const topMenuEl = document.getElementById('top-menu');
console.log(topMenuEl);
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add("flex-around");

//PART 3
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

//   Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.
// Set the new element's content to the value of the text property of the "link" object.
// Append the new element to the topMenuEl element.

for (i=0; i<menuLinks.length; i++){
    const newElem = document.createElement('a');
    newElem.setAttribute('href', menuLinks[i].href);
    newElem.append(menuLinks[i].text);
    document.getElementById("top-menu").appendChild(newElem);
}

//console.log(newElem);

//DOM Part 2 ALAB 316.3.1//
/*Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
Set the height subMenuEl element to be "100%".
Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
Add the class of flex-around to the subMenuEl element.
*/
///

const subMenuEl = document.getElementById('sub-menu');
console.log(subMenuEl);

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add("flex-around");


//comment out line 53 then this ll work so did that 

// Set the CSS position property of subMenuEl to the value of absolute.
// Set the CSS top property of subMenuEl to the value of 0.

subMenuEl.style.position='absolute';
subMenuEl.style.top='0';