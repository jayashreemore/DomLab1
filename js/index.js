//DOM Lab Part 1
//create main element , queryselector ,for bg color style it,create h1, bring it in center 
// 1
let mainEl = document.querySelector('main');
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

// const topMenuEl = document.getElementById('top-menu');
// topMenuEl.style.height = '100%';
// topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// topMenuEl.classList.add("flex-around");


