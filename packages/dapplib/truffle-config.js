require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index random rural history just private slot genuine'; 
let testAccounts = [
"0xae6d4123db01e32903049e21b2f8017955de4c453568e4aae7d96d7ba312f4f2",
"0xc2ac2d4b7f16e08c0b8b23b2fee50a861703277dcc05e10f943105e313f409ed",
"0x16c9f2086fb3f11f15ea27fc55beb881d0fc89f69b5ceea11297cee647e8e95e",
"0x48f9018a0710c170dd560b16ed919913655a922514a0a4350a7d8099c442577e",
"0x9ff28d8749099edf377e335262f8c9d2fd9f3553abd91971154ca627ff71d4e9",
"0xd803c30c91f37bd9e664ac69e5a475e210bbbc35302c7fae12358d460ff52535",
"0x2a650ed17bbde8e27bc188cef6946c3fec8d968b8a6a46b2d0e3e839b9b74f4c",
"0x00e54dbd8eeac5dadcbad2ed4ae6ea2ad769cc383a81b875522523c5506103a3",
"0xf40a9f1cdd8b52f60305b32843395af0f29951cad8e26a9fb061c5fc843768c9",
"0x0519033891858b39a598ed75d17775cccc2e3578e4d1295abf48933c3d2a3a39"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

