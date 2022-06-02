// функция обертка

function createAdder(a) {
	return function addA(b) {
  	return a + b;
  }
}

export default createAdder;