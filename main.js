const uSerial2 = function (inputData) {
	return inputData.reduce(async function (coll, e) {
		return (await coll).concat(await new Promise(function (res, rej) {
			try {
				res(e());
			} catch (error) {
				rej(error);
			}
		}));
	}, Promise.resolve([]));
};

const mod = {

	OLSKModuleSetupKeys (inputData) {
		if (typeof inputData !== 'object' || inputData === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		return Object.keys(inputData).filter(function (e) {
			return e.match(/^Setup/);
		});
	},

	OLSKModuleLifecycleSetup (inputData) {
		return uSerial2(mod.OLSKModuleSetupKeys(inputData).map(function (e) {
			return inputData[e];
		}));
	},
	
};

Object.assign(exports, mod);
