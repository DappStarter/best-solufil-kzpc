require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle foot dad renew stereo snake history light army gas'; 
let testAccounts = [
"0x7c23a1039af056ed4be35a5087bfc7e2065f4ae645de454e08a7d45224f335ea",
"0xc762999850ee206d3155d0487d192324abc8a7ce6386a01910eb0ee39dd6e014",
"0x965a40a7abcc4aefff1db394824afa7e90524c962f60b876f9e4740ea43fbeb2",
"0xcdfed497db99ec56d2b80901ff0ecabc71bc20d91458badacdba3f94bfa2ff07",
"0x95419d34cb4718fee11cfe5b067aa93f35613491be73864e24e9636152f36424",
"0x707218e4deec284b158a81c7c5ebb997f2cb17ba33f5956a33a07a7916f0c78c",
"0x94a3f61a339c5e708619c4d9d8c99680b5b301dfa600dd2545c0acd44ff05348",
"0x256228454f4782b5dcfde10337b9c75c6dfc4ab1a99f5b341ffa57447c809056",
"0xf158decc653a8cf842fecee7f3ade66871e185ba65cc28f36aa98c9045a3dab6",
"0xcabff9176a3cfbf7e5ce8a8d4a37550375477dc4a38e993f8489a4058a0da8ae"
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

