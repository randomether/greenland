import { ethers, defender } from "hardhat";

async function main() {
    const Box = await ethers.getContractFactory("GREENLAND");

    const upgradeApprovalProcess = await defender.getUpgradeApprovalProcess();
    if (upgradeApprovalProcess.address === undefined) {
        throw new Error(`Upgrade approval process with id ${upgradeApprovalProcess.approvalProcessId} has no assigned address`);
    }
    console.log(`address: `, upgradeApprovalProcess.address)
    if (upgradeApprovalProcess.address) {
        console.log(`address: `, upgradeApprovalProcess.address)

        const deployment = await defender.deployProxy(Box, [5, upgradeApprovalProcess.address], { initializer: "initialize", initialOwner: upgradeApprovalProcess.address });

        await deployment.waitForDeployment();

        console.log(`Contract deployed to ${await deployment.getAddress()}`);
    } else {
        console.log(`Missing onwer address`);

    }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});