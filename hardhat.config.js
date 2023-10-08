const { TASK_TEST_RUN_MOCHA_TESTS } = require("hardhat/builtin-tasks/task-names");

require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.21+commit.d9974bed.Emscripten.clang",
  networks: {
    // Exemplo de configuração de uma rede de desenvolvimento local (Ganache)
    hardhat: {
      chainId: 1337, // ID da cadeia para a rede de desenvolvimento local
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/SEU_ALCHEMY_API_KEY", // URL de um nó Ethereum para fork (opcional)
      },
    },
    // Exemplo de configuração da rede Rinkeby
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/SEU_INFURA_PROJECT_ID", // URL da API do Infura para Rinkeby
      accounts: {
        mnemonic: "sua frase mnemônica aqui", // Sua frase mnemônica para acessar contas da Rinkeby
      },
    },
    // Adicione mais configurações de rede conforme necessário
    linea: {
      url: "https://explorer.goerli.linea.build/address/0xe39BFaC9A5DE8C7e753D0c201c30255d8CdF35e5/coin-balances#address-tabs",
      accounts: {
        mnemonic: "0xe39BFaC9A5DE8C7e753D0c201c30255d8CdF35e5",
      }
    }
  },
};

