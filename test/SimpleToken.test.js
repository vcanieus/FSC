const { expect } = require("chai");

describe("SimpleToken", function () {
  let SimpleToken;
  let simpleToken;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Deploy the contract and get references to it and some accounts
    SimpleToken = await ethers.getContractFactory("SimpleToken");
    [owner, addr1, addr2] = await ethers.getSigners();
    simpleToken = await SimpleToken.deploy();
    await simpleToken.deployed();
  });

  it("Deveria atribuir o fornecedor como dono inicial do contrato", async function () {
    expect(await simpleToken.owner()).to.equal(owner.address);
  });

  it("Deveria permitir a transferência de tokens entre contas", async function () {
    const initialBalanceOwner = await simpleToken.balanceOf(owner.address);
    const transferAmount = 100;

    // Transfer tokens from owner to addr1
    await simpleToken.transfer(addr1.address, transferAmount);
    const balanceOwnerAfterTransfer = await simpleToken.balanceOf(owner.address);
    const balanceAddr1AfterTransfer = await simpleToken.balanceOf(addr1.address);

    expect(balanceOwnerAfterTransfer).to.equal(initialBalanceOwner.sub(transferAmount));
    expect(balanceAddr1AfterTransfer).to.equal(transferAmount);
  });

  it("Deveria falhar ao transferir tokens para uma conta inválida", async function () {
    const transferAmount = 10000;

    // Attempt to transfer tokens to the zero address (invalid)
    await expect(simpleToken.transfer("0x0000000000000000000000000000000000000000", transferAmount)).to.be.reverted;
  });

  it("Deveria falhar ao transferir mais tokens do que o saldo do proprietário", async function () {
    const transferAmount = 1000000;
    const ownerBalance = await simpleToken.balanceOf(owner.address);

    // Attempt to transfer more tokens than the owner has
    await expect(simpleToken.transfer(addr1.address, ownerBalance.add(1))).to.be.reverted;
  });
});
