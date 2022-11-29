// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BishaevAction is ERC20, Ownable {
    constructor() ERC20("BishaevAction", "BAT") {
        _mint(msg.sender, 50000000 * 10**decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function getMyName() public view returns (string memory) {
        return "Alan Bishaev";
    }
}
