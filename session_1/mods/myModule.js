function addFunction (a, b) {
	return a + b;
}

const myMod = {
	add: addFunction,
	sub: addFunction
};

module.exports = myMod;
