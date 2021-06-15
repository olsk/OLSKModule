const { deepEqual, throws } = require('assert');

const mod = require('./main.js');

describe('OLSKModuleSetupKeys', function test_OLSKModuleSetupKeys() {

	it('throws if not object', function () {
		throws(function () {
			mod.OLSKModuleSetupKeys(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('returns array', function () {
		const signature = 'Setup' + uRandomInt();
		const item = {
			['_' + signature]: Math.random().toString(),
			[signature]: Math.random().toString(),
		};

		deepEqual(mod.OLSKModuleSetupKeys(item), [signature]);
	});

});

describe('OLSKModuleLifecycleSetup', function test_OLSKModuleLifecycleSetup() {

	it('throws if not object', function () {
		throws(function () {
			mod.OLSKModuleSetupKeys(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('calls _SetupMethods', async function () {
		const item = Math.random().toString();
		const signature = 'Setup' + uRandomInt();

		deepEqual(await mod.OLSKModuleLifecycleSetup({
			[signature]: function () {
				return item;
			},
		}), [item]);
	});

});
