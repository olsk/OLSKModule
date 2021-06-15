const mod = {

	OLSKModuleSetupKeys (inputData) {
		if (typeof inputData !== 'object' || inputData === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		return Object.keys(inputData).filter(function (e) {
			return e.match(/^Setup/);
		});
	},
	
};

Object.assign(exports, mod);
