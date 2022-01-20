document.querySelector('#formulario').addEventListener('submit', (e) => {
	e.preventDefault()
	let valorPeso = document.querySelector('#peso').value,
		valorAltura = document.querySelector('#altura').value,
		classeRmv = document.querySelectorAll('td'),
		resultClass;
	valorPeso = parseFloat(valorPeso);
	valorAltura = parseFloat(valorAltura);

	let result = valorPeso / (valorAltura ** 2);
	result = parseFloat(result.toFixed(2))

	classeRmv.forEach((i) => {
		i.classList.remove('bad', 'bom', 'medio')
	})

	if (result < 18.5) {
		resultClass = 'bad'
		document.querySelector('#imc1').classList.add(resultClass)
		document.querySelector('#quali1').classList.add(resultClass)
		document.querySelector('#obs1').classList.add(resultClass)
	}
	if (result >= 18.5 && result <= 24.9) {
		resultClass = 'bom'
		document.querySelector('#imc2').classList.add(resultClass)
		document.querySelector('#quali2').classList.add(resultClass)
		document.querySelector('#obs2').classList.add(resultClass)
	}
	if (result >= 25.0 && result <= 29.9) {
		resultClass = 'medio'
		document.querySelector('#imc3').classList.add(resultClass)
		document.querySelector('#quali3').classList.add(resultClass)
		document.querySelector('#obs3').classList.add(resultClass)
	}
	if (result >= 30.0 && result <= 39.9) {
		resultClass = 'bad'
		document.querySelector('#imc4').classList.add(resultClass)
		document.querySelector('#quali4').classList.add(resultClass)
		document.querySelector('#obs4').classList.add(resultClass)
	}
	if (result >= 40.0) {
		resultClass = 'bad'
		document.querySelector('#imc5').classList.add(resultClass)
		document.querySelector('#quali5').classList.add(resultClass)
		document.querySelector('#obs5').classList.add(resultClass)
	}
	document.querySelector('#resultado').innerHTML = `<p class='${resultClass}'>Seu IMC É ${result}</p>`
})