import Pet from './pet.js';

class Dog extends Pet {
    constructor(name, sound, image) {
        super(name, image, sound);

        sound === undefined ? this.sound = 'Woof!': this.sound = sound;	
        image === undefined ? this.image = '../image/dog.jpg': this.image = image;
    }
}

export default Dog;