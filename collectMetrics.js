collectmetrics.js
const readline = require('readline');

const metrics = {
  networkSize: null,
  connectivity: null,
  networkDelay: null,
  maliciousNodes: null,
  securityLevel: null,
  committeeSize: null,
  endorsements: null,
  blockSize: null,
  votingRounds: null,
  confirmationBlocks: null,
  transactionRate: null,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function collectMetrics() {
  rl.question('Tamanho da Rede (Pequena, Média, Grande): ', (size) => {
    metrics.networkSize = size;
    rl.question('Probabilidade de Conexão (Baixa, Média, Alta): ', (connectivity) => {
      metrics.connectivity = connectivity;
      rl.question('Atraso da Rede (Baixo, Médio, Alto): ', (delay) => {
        metrics.networkDelay = delay;
        rl.question('Taxa de Nós Maliciosos (Baixa, Média, Alta): ', (maliciousNodes) => {
          metrics.maliciousNodes = maliciousNodes;
          rl.question('Segurança do Protocolo PoA (Baixa, Média, Alta): ', (securityLevel) => {
            metrics.securityLevel = securityLevel;
            rl.question('Tamanho do Comitê (Pequeno, Médio, Grande): ', (committeeSize) => {
              metrics.committeeSize = committeeSize;
              rl.question('Tamanho das Endossos (Baixo, Médio, Alto): ', (endorsements) => {
                metrics.endorsements = endorsements;
                rl.question('Tamanho do Bloco (Pequeno, Médio, Grande): ', (blockSize) => {
                  metrics.blockSize = blockSize;
                  rl.question('Número de Rodadas de Votos (Poucas, Médias, Muitas): ', (votingRounds) => {
                    metrics.votingRounds = votingRounds;
                    rl.question('Número de Blocos de Confirmação (Poucos, Médios, Muitos): ', (confirmationBlocks) => {
                      metrics.confirmationBlocks = confirmationBlocks;
                      rl.question('Taxa de Transação (Baixa, Média, Alta): ', (transactionRate) => {
                        metrics.transactionRate = transactionRate;

                        console.log('Métricas coletadas:');
                        console.log(metrics);

                        rl.close();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

collectMetrics();
