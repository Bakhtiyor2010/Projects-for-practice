let input = document.getElementById('up')

function handleCalculation(val) {
    input.value += val

    if (val === '') {
        input.value = ''
    }
}

function calculate() {
    try {
        input.value = eval(input.value)
    } catch {
        input.value = 'Error'
    }
}

function deleteCalculation() {
    input.value = input.value.slice(0, -1)
}

function squareRoot() {

        input.value = Math.sqrt(eval(input.value))
}