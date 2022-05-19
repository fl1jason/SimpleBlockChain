const { BlockChain } = require ('./block.js');

const blockchain = new BlockChain();

const transaction1 = {
    name: 'John Smith',
    token: 'ETH',
    amount: 30,
    date: new Date(),
    type: 'deposit'
};

blockchain.addBlock(transaction1);

const transaction2 = {
    name: 'John Smith',
    token: 'ETH',
    amount: 10,
    date: new Date(),
    type: 'sell'
};

blockchain.addBlock(transaction2);

const transaction3 = {
    name: 'John Smith',
    token: 'ETH',
    amount: 5,
    date: new Date(),
    type: 'deposit'
};

blockchain.addBlock(transaction3);

// Loop through all the Blocks in the BlockChain
for (const block of blockchain.blocks) {
    console.log(block);
}

const isValid = blockchain.verifyChain();
console.log(`Is valid: ${isValid}`);