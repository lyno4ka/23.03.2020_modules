export const container = document.getElementById('container');

function makePicture(pets) {
    pets.forEach((item) => {

		let div = document.createElement('div');
		div.classList.add('box', 'col-sm-3');

        div.innerHTML = `
			<div class='text-center ' id='${item.getName()}'>
				<div class='pet-name'>${item.getName()}</div>
				<img src='${item.getImage()}'>
			</div>
        `;

		container.appendChild(div);
    });
}

export default makePicture;