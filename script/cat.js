import Pet from './pet.js';

class Cat extends Pet {
    constructor(name, sound, image) {
        super(name, image, sound);

        sound === undefined ? this.sound = 'Meow!': this.sound = sound;	
        image === undefined ? this.image = '../image/cat.jpg': this.image = image;
    }
}

export default Cat;