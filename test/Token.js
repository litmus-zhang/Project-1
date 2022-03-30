const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
  it("Transferring should update the balance", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();

    const balance3 = await hardhatToken.balanceOf(addr2.address);
    expect(balance3).to.equal(0);

    hardhatToken.transfer(addr1.address, 200);
    expect(await hardhatToken.balanceOf(owner.address)).to.equal(999800);
  });
});
