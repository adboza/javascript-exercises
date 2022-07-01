const helloWorld = function() {
  return 'Hello, World!'
};

//module.exports = helloWorld;
//This file will be used also for DOM exercises

const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para1 = document.createElement('p');
container.appendChild(para1);
para1.textContent = 'Hey I\'m red!';
para1.style.color = 'red';
const sh3 = document.createElement('h3');

container.appendChild(sh3);

sh3.textContent = "I\’m a blue h3!"
sh3.style.color = 'blue';
const para = document.createElement('p');
container.appendChild(para);
para.textContent = 'ME TOO!';

const adiv = document.createElement('div');
adiv.setAttribute('style', 'border: thick solid black; background: pink;');

const ch1 = document.createElement('h1');
adiv.appendChild(ch1);
ch1.textContent = 'I\'m a div!';
const cp = document.createElement('p');
adiv.appendChild(cp);
cp.textContent = 'ME TOO!!!';
container.appendChild(adiv);

//method 2
//const btn = document.querySelector('#btn');
//btn.onclick = () => alert("Hello World");

//method 3
const btn = document.querySelector('#btn');
btn.addEventListener('click', alertFunction);

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});


