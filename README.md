# 🗳️ Blockchain-Based Secure Voting System  

A decentralized voting platform built on **Ethereum blockchain** using **Solidity, Hardhat, React.js, and MetaMask**.  
This system ensures **security, transparency, and fairness** in digital elections by employing a **commit–reveal voting scheme** with **cryptographic hashing (Keccak256)**.  

---

## 📑 Abstract  
Traditional voting systems suffer from issues like **vote tampering, lack of transparency, and trust concerns**.  
Our system leverages **blockchain technology** to overcome these challenges by providing:  

- 🔗 **Decentralization** → No central authority.  
- 🔒 **Immutability** → Votes cannot be altered once recorded.  
- 👁️ **Transparency** → All actions are auditable on-chain.  
- 🕵️ **Confidentiality** → Votes hidden during commit phase using cryptographic hashing.  
- ⚖️ **Fairness** → Commit–reveal prevents early disclosure & coercion.  

This approach guarantees **tamper-proof, verifiable, and trustable elections** for governments, organizations, and online communities.  

---

## 🛠️ Tech Stack  

### **Software**
| Layer | Technologies |
|-------|--------------|
| **Frontend** | React.js, HTML, CSS, Ethers.js |
| **Backend & Blockchain** | Hardhat, Solidity, Sepolia Testnet |
| **Dependency** | MetaMask |
| **Development Environment** | VS Code |

### **Hardware**
| Resource | Requirement |
|----------|-------------|
| CPU | 8 cores |
| RAM | 8 GB |
| SSD | 256 GB |

---

## 📂 System Architecture  

![System Architecture](./assets/system-architecture.png)  

- **Frontend (React.js)** → User interface for voting.  
- **Ethereum Blockchain** → Stores all immutable voting data.  
- **Smart Contract** → Handles voter registration, commit–reveal, phase control, and tallying.  
- **MetaMask Integration** → Connects users securely to blockchain.  
- **Voters** → Submit & reveal their votes via Ethereum wallet.  

---

## 👥 User Roles  

### 🔑 Administrator  
- Registers voters (Ethereum addresses).  
- Controls commit & reveal phases.  
- Cannot view or alter votes.  

### 🗳️ Voter  
- Submits **hash(commitment)** during commit phase.  
- Reveals original vote + secret during reveal phase.  
- Votes are validated & counted automatically.  

---

## 🔄 Workflow  

1. **Voter Registration** → Admin registers wallet addresses.  
2. **Commit Phase** → Voter submits:  
3. **Reveal Phase** → Voter discloses candidate + secret.  
4. **Final Tally** → Smart contract validates and counts votes.  

![Workflow](./assets/workflow.png)  

---

## 🔐 Security Features  

| Threat | Mitigated By |
|--------|--------------|
| Early vote leakage | Commit–Reveal scheme |
| Multiple vote submissions | Voted & revealed flags |
| Unauthorized access | Admin-only modifiers |
| Vote tampering | Blockchain immutability |
| Replay attacks | State checks before revealing |

---

## 📜 Smart Contract Features  

- ✅ Immutable vote storage.  
- ✅ Commit–Reveal voting logic.  
- ✅ Phase isolation (Commit → Reveal).  
- ✅ Automatic tallying & result display.  
- ✅ Publicly auditable and open-source.  

---

## ⚙️ Installation & Setup  

### 🔽 Prerequisites  
- [Node.js](https://nodejs.org/) & npm  
- [MetaMask](https://metamask.io/) browser extension  
- [Hardhat](https://hardhat.org/)  
- Sepolia ETH (for test transactions)  

### 🚀 Steps  

```bash
# Clone the repository
git clone https://github.com/your-username/blockchain-voting.git
cd blockchain-voting

# Install dependencies
npm install

# Compile smart contracts
npx hardhat compile

# Deploy smart contracts (local network)
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost

# Start frontend
cd client
npm install
npm start
```
---
