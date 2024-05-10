// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.20;
import {Initializable} from  "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {UUPSUpgradeable} from "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import {OwnableUpgradeable} from "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC20PermitUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract GREENLAND is Initializable, ERC20Upgradeable, ERC20PermitUpgradeable, OwnableUpgradeable {
    /*//////////////////////////////////////////////////////////////
                                VARIABLES
    //////////////////////////////////////////////////////////////*/

    /// @notice Number of objects inside the box.
    uint256 public numberOfObjects;

    /*//////////////////////////////////////////////////////////////
                                FUNCTIONS
    //////////////////////////////////////////////////////////////*/

    function initialize(uint256 objects, address multisig) public initializer {
        __Ownable_init(multisig);
        __ERC20_init("GREENLAND", "GLD");
        __ERC20Permit_init("GREENLAND");
        _mint(msg.sender, 1000000000 * 10 ** decimals());
        numberOfObjects = objects;
    }

    /// @notice Remove an object from the box.
    function removeObject() external {
        require(numberOfObjects > 1, "Nothing inside");
        numberOfObjects -= 1;
    }
}