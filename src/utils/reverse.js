// функция из тренажера массив - отрицание, замена порядка

function reverseAndNegate (arr) {
	return arr.reverse().map(value => -value);
}

export default reverseAndNegate;