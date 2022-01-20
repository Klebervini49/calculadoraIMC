document.querySelector('#formulario').addEventListener('submit', (e) => {
	e.preventDefault();
	let valorPeso = document.querySelector('#peso').value,
		valorAltura = document.querySelector('#altura').value,
		classeRmv = document.querySelectorAll('td'),
		resultClass,
		resultadoDiv = document.querySelector('#resultado')

	valorPeso = parseFloat(valorPeso);
	valorAltura = parseFloat(valorAltura);
	let result = valorPeso / (valorAltura ** 2);
	result = parseFloat(result.toFixed(2));

	if (isNaN(result) != true) {
		classeRmv.forEach((i) => {
			i.classList.remove('bad', 'bom', 'medio');
		});
		if (result < 18.5) {
			resultClass = 'bad';
			let cor1 = document.querySelectorAll('#imc1, #quali1, #obs1');
			cor1.forEach((ie1) => {
				ie1.classList.add(resultClass);
			});
		};
		if (result >= 18.5 && result <= 24.9) {
			resultClass = 'bom';
			let cor2 = document.querySelectorAll('#imc2, #quali2, #obs2');
			cor2.forEach((ie2) => {
				ie2.classList.add(resultClass);
			});
		};
		if (result >= 25.0 && result <= 29.9) {
			resultClass = 'medio';
			let cor3 = document.querySelectorAll('#imc3, #quali3, #obs3');
			cor3.forEach((ie3) => {
				ie3.classList.add(resultClass);
			});
		};
		if (result >= 30.0 && result <= 39.9) {
			resultClass = 'bad';
			let cor4 = document.querySelectorAll('#imc4, #quali4, #obs4');
			cor4.forEach((ie4) => {
				ie4.classList.add(resultClass);
			});
		};
		if (result >= 40.0) {
			resultClass = 'bad';
			let cor5 = document.querySelectorAll('#imc5, #quali5, #obs5');
			cor5.forEach((ie5) => {
				ie5.classList.add(resultClass);
			});
		};
		resultadoDiv.innerHTML = `<p class='${resultClass}'>Seu IMC É ${result}</p>`;
	} else {
		resultadoDiv.innerHTML = `Cara, digita um número direito!`;
	};
});