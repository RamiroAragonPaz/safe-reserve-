// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract SafeReserve is ERC721URIStorage {
    using Strings for uint256;

    address owner;

    string tokenURIFinal;

    uint256 private _tokenIds;

    constructor() ERC721("SafeReserve", "SFRSV") {
        owner = msg.sender;
    }

    mapping(uint256 => address) public propertyOwners;
    mapping(address => bool) public issuedCertificates;

    function issueCertificate(address to, string memory baseURI) onlyOwner external returns(uint256 Id){
        issuedCertificates[to] = true;
        _tokenIds++;

        uint256 newItemId = _tokenIds;
        tokenURIFinal = string(abi.encodePacked(baseURI, "/" , newItemId.toString(), ".json"));
        _mint(msg.sender, newItemId);
        
        _setTokenURI(newItemId, tokenURIFinal);

        propertyOwners[newItemId] = msg.sender;
        issuedCertificates[msg.sender] = true;

        return newItemId;
    }

    function checkCertificateOfPerson(address person) external view returns (bool hasCertificate) {
        return issuedCertificates[person];
    }


    function withdraw() public onlyOwner  {
        address _owner = owner;
        uint256 amount = address(this).balance;
        (bool sent, ) =  _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }

 
    receive() external payable {}

 
    fallback() external payable {}


    modifier onlyOwner() {
        require(msg.sender == owner, "You're not the owner");
        _;
    }

}