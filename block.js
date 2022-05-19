const hash = require ('./hash.js');

class Block {
  constructor(previousBlockHash, data) {
    this.previousBlockHash = previousBlockHash;
    this.data = data;
  }  
  getHash()
  {
    return(hash.hashObject(this));
  }
}

class BlockChain {
    constructor() {
      this.blocks = [];
    }
    getLatestBlockHash() {
        const lastBlock = this.blocks[this.blocks.length - 1];
        if (lastBlock) {
            return lastBlock.getHash();
        }
        else {
            // It's the first (Genesis) block, so return 0
            return 0;
        }
    }

    addBlock(data) {
        const previousBlockHash = this.getLatestBlockHash();
        const newBlock = new Block(previousBlockHash, data);
        this.blocks.push(newBlock);
        return newBlock;
        }

    verifyChain() {
        for (let i = 1; i < this.blocks.length; i++) {
          const currentBlock = this.blocks[i];
          const previousBlock = this.blocks[i - 1];
          
          if (currentBlock.previousBlockHash !== previousBlock.getHash()) {
            return false;
          }
        }
        return true;
      }
  }

module.exports = { Block, BlockChain };