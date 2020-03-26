import Cat from './cat.js';
import Dog from './dog.js';
import makePicture from './function.js';
import {container}  from './function.js';

let dog1 = new Dog('Rick');
let cat1 = new Cat('Keks');
let cat2 = new Cat("Tom", 'mmmeyyyy', '../image/cat2.jpg');
let dog2 = new Dog('Bim', 'Affff!', '../image/dog2.jpg');

let pets = [dog1, cat1, cat2, dog2];

makePicture(pets);


container.addEventListener('click', function(event) {
	const targetElement = event.target.parentElement.id;
	const petName = event.target.parentElement.querySelector('img');

	const pet = pets.find((item) => {
		return item.name === targetElement;
	});

	pet.makeSound(petName);
});