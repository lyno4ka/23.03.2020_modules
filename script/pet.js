class Pet {
    constructor(name, sound, image) {
        this.name = name;
        this.sound = sound;
        this.image = image;
    }

    getName(){
		    return this.name;
    }
    
	  getSound(){
		    return this.sound;
    }
    
    getImage(){
		    return this.image;
    }
	
    makeSound(petName) {
        let div = document.createElement('div');
        div.innerText = `${this.sound}`;

        div.classList.add('sound-text');
		    petName.before(div);

        setTimeout((() =>{
          div.remove();
        }), 2000);
    }
}

export default Pet;