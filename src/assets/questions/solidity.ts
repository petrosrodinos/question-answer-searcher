export const solidity = [
  {
    question: "Explain Solidity. What are the main components of a Solidity contract?",
    answer: `Solidity is a statically-typed, high-level programming language primarily used to write smart contracts on Ethereum-based blockchain platforms.
    Solidity code is compiled to bytecode and executed on the Ethereum Virtual Machine, which ensures isolation, security, and transparency during contract execution.
    `,
  },
  {
    question: "Pragma statement",
    answer: "Specifies the required version of the solidity compiler",
  },
  {
    question: "State variables",
    answer: `Variables that store the contract's state data persistently on the blockchain.
    `,
  },
  {
    question: "Constructor",
    answer: `A special function called once at contract deployment, used for initializing state variables.`,
  },
  {
    question: "Functions",
    answer: `Define the logic and behavior of the contract; can be divided into subcategories like view, pure, external, and internal functions.
    `,
  },
  {
    question: "Distinctions between view and pure functions?",
    answer: `State reading: view functions allow reading data from the contract's state, while pure functions do not access the contract's state at all.

    State modification: Neither view nor pure functions modify the contract's state.
    
    Gas consumption: Since view functions can access the contract's state, their gas consumption is dependent on the operations and data read from the state. On the other hand, pure functions do not access the state, so their gas consumption is more predictable as it depends only on the function's execution, not the state interactions.
    
    To sum up: View functions are often used for retrieving information about the contract and its state, like checking a user's balance or getting some specific details from the contract. pure functions, in contrast, are used for computations that depend only on the function's input, like calculating a hash or performing a mathematical operation.
    `,
  },
  {
    question: "Modifiers",
    answer: `Reusable code snippets that can be added to functions to modify their behavior, often to enforce access restriction or requirements.`,
  },
  {
    question: "Events",
    answer: `Custom data structures that emit transaction logs for external listeners to monitor contract activity and state changes.`,
  },
  {
    question: "Inheritance",
    answer: `Allows a contract to inherit properties (state variables, functions, events, and modifiers) from a base contract, enabling code reuse and abstraction.`,
  },
  {
    question: "Define Ethereum smart contract.",
    answer: `An Ethereum smart contract is a self-executing, autonomous piece of code that runs on the Ethereum blockchain. It contains the terms of an agreement between parties, and it is enforced automatically by the Ethereum Virtual Machine.Smart contracts can store and manage data, transfer digital assets, execute functions, and interact with other contracts, enabling decentralized applications to be built and executed without intermediaries. Smart contracts are typically written in a high-level programming language like Solidity and then compiled into bytecode for execution on the EVM.
    `,
  },
  {
    question: "Why is the Ethereum smart contract so special compared to other programs?",
    answer: `Decentralized execution: Smart contracts run on the Ethereum blockchain, which is a decentralized network. This means that the execution of a smart contract doesn't rely on a single authority, but rather on multiple nodes spread around the world. This increases the reliability and fault tolerance of the smart contract.

    Immutable and tamper-proof: Once a smart contract is deployed on the Ethereum blockchain, its code cannot be altered. This makes smart contracts invulnerable to hacking or unauthorized changes, ensuring that the rules established in the contract remain unchanged.
    
    Transparent and verifiable: All transactions and state changes in a smart contract are recorded on the Ethereum blockchain, and this information is publicly visible. This helps establish trust among the participants, as they can audit and verify that the smart contract is functioning as intended.

Self-executing: Smart contracts are designed to execute predefined actions automatically when certain conditions specified in the contract are met. This eliminates the need for intermediaries and manual intervention to enforce the terms of an agreement, reducing the potential for human error or fraud.

Tokenization: Ethereum smart contracts can be used to create and manage digital assets through the use of tokens. This has led to various use cases in finance, gaming, collectibles, and more, that leverage tokenization as a way to represent unique assets or value.
    `,
  },
  {
    question: "Explain the role of the Ethereum Virtual Machine",
    answer: `The Ethereum Virtual Machine plays a crucial role in the Ethereum ecosystem, serving as the runtime environment for smart contracts running on the Ethereum blockchain. It ensures that smart contracts are executed securely and consistently across all nodes in the network. The main roles of the EVM can be summarized as follows:

    Executing smart contracts: The EVM processes the EVM bytecode.Each opcode in the bytecode represents basic operations like arithmetic, logic, and storage, which the EVM executes sequentially.
    
    Isolating contract execution: EVM provides a sandboxed environment to execute smart contracts, ensuring that the execution is isolated from the underlying system and other contracts. This guarantees the safety and security of the network and prevents malicious contracts or bugs from affecting other parts of the system.
    
    Maintaining state: The EVM is responsible for maintaining the state of the Ethereum blockchain, which includes the contract state and balances of all accounts. When a smart contract's state changes due to the execution of a function, the EVM updates the contract's state accordingly.
    
    Handling gas: The EVM uses the concept of gas to measure the cost of executing a transaction or smart contract. Gas is paid in Ether and represents the computational resources required for executing a particular operation. The EVM calculates the total gas used during contract execution and ensures that a transaction has sufficient gas to complete the necessary operations.`,
  },
  {
    question: "What is the formula to calculate Ethereum gas cost?",
    answer: `Gas is the price of gas in Ether that a user is willing to pay to execute a transaction on the network. Transactions with higher gas prices are prioritized by miners.

    Total gas fee = gasLimit * gasPrice per unit
    `,
  },
  {
    question: "What is a gas limit in Solidity?",
    answer: `A gas limit in Solidity refers to the maximum amount of gas a user is willing to spend on a transaction. If a transaction requires more gas than the specified gas limit, the transaction will be reverted, and used gas will not be refunded. Conversely, if a transaction requires less gas than the gas limit, the remaining gas will be returned to the user.`,
  },
  {
    question: "What is a variable in Solidity?",
    answer: `A variable in Solidity is a storage location in a contract that holds a value of a specific data type.
    
    State variables: These are the variables declared outside of any functions in a contract, and they are permanently stored on the Ethereum blockchain.Τhey can have different visibility levels: public, private, internal, and external.

Local variables: These are the variables declared within a function or a block, and their scope is limited to that function or block. They do not persist beyond the function call and are not stored on the blockchain.

Variables in Solidity also have data types, such as uint, int, address, bool, bytes, or string. Additionally, Solidity supports complex data structures like arrays, structs, and mappings.

    `,
  },
  {
    question: "Who can read private and public variables?",
    answer: `Public variables: They can be accessed by any contract, function, or external entity. When a public variable is declared, the compiler automatically generates a getter function for that variable.

    Private variables: They can be accessed only within the contract that declares them. Private variables are not accessible by any external entity, nor by contracts derived from the contract in which they are declared.
    
    It's important to note that although private variables cannot be directly accessed by external entities, their values may still be read indirectly through transaction data on the blockchain, since all data is public on the Ethereum network.
    `,
  },
  {
    question: "Define Ethereum networks.",
    answer: `Ethereum networks are blockchain ecosystems that are built using the Ethereum protocol. They are decentralized platforms that facilitate the execution of smart contracts and transactions using Ether.

    Mainnet: The mainnet is the primary and original Ethereum network. It is a public, decentralized, and permissionless network where transactions and contract executions are performed using real Ether. The mainnet is used for deploying production-level smart contracts and applications.
    
    Testnets: Testnets are alternative Ethereum networks used for testing and development purposes. They provide a sandbox environment where developers can deploy and interact with smart contracts without risking real Ether.
    `,
  },
  {
    question: "Does the EVM understand Solidity?",
    answer: `No. The Ethereum Virtual Machine (EVM) does not directly understand Solidity. Instead, it understands and executes bytecode, a lower-level language.

    When you write a smart contract in Solidity, the code must go through a couple of steps before it can be executed on the EVM:
    
    Compilation: The Solidity code is compiled into an intermediate representation called Ethereum bytecode using a compiler like solc. This bytecode is a sequence of low-level instructions that the EVM can understand.
    
    Deployment: The compiled bytecode is then deployed to the Ethereum network, where it resides on the blockchain as part of a contract's data.
    
    When a function or transaction is executed for a smart contract, the EVM reads and processes the corresponding bytecode instructions. Since EVM bytecode is a lower-level language, it is closer to machine code and more efficient for the EVM to execute, allowing for better performance and resource utilization.
    `,
  },
  {
    question: "What is a staking pool in Solidity?",
    answer: `A staking pool is a smart contract that allows users to pool their tokens and participate in various blockchain activities, like staking,providing liquidity on decentralized exchanges or yield farming.`,
  },
  {
    question: "What is a proxy contract in Solidity?",
    answer: `A proxy contract is a design pattern that uses a secondary contract to act as an intermediary between the users and the main contract, which houses the core business logic. Proxy contracts are often used for upgradeability and storage optimization purposes.

    The proxy contract maintains a reference to the main contract and delegates calls from users to the main contract. This allows developers to maintain the proxy contract's state, while the main contract's code can be replaced or updated without affecting the data.
    `,
  },
  {
    question: "Describe an event in Solidity.",
    answer: `An event in Solidity is a custom data structure used to log information and notify external consumers, such as off-chain applications about specific occurrences within a contract.

    Events are declared in contracts using the event keyword and usually contain parameters that define the data to be logged. When an event is triggered, the EVM emits a log that includes the event data, making it searchable and accessible via blockchain explorers or APIs.
    `,
  },
  {
    question: "Explain delegatecall.",
    answer: `delegatecall is a low-level function in Solidity used to call a function in another contract, while preserving the context (storage and caller address) of the calling contract. It allows the called function to access and modify the calling contract's storage`,
  },
  {
    question: "What is a library?",
    answer: `A library in Solidity is a reusable and deployable piece of code that can be shared by multiple smart contracts, allowing for reduced code redundancy, optimized gas usage. Libraries are similar to contracts, but they cannot have state variables, nor can they inherit or be inherited from other contracts.
    Functions in a library can be viewed as pure functions without knowledge of the contract's state.
    `,
  },
  {
    question: "What do you need to do to deploy a smart contract to the Ethereum network?",
    answer: `Write the smart contract

    Test the smart contract
    
    Compile the contract: Compile the smart contract using a Solidity compiler, such as solc, to generate bytecode and Application Binary Interface (ABI).
    
    Choose a network
    
    Prepare the deployment script: Create a deployment script or use a tool like Truffle or Hardhat to simplify the deployment process. Include the contract bytecode, ABI, constructor arguments and gas price.
    
    Deploy the contract: Execute the deployment script or command. This will send a deployment transaction to the network, signed by your wallet.
    `,
  },
  {
    question: "Explain when you would use an array versus a mapping.",
    answer: `Use an Array when:
    -You need to maintain a specific order of elements.
    -You want to store a collection of elements that can be iterated over.
   -You require a fixed or dynamic length data structure and need to know the total number of elements.
    -You need to access elements using a numerical index.
    
    Use a Mapping when:
    -You need a key-value structure for associating one data type with another.
    -You want fast and constant-time lookups of elements irrespective of the mapping size.
    -You don't need to know the total number of elements or maintain their order.
    -You want to avoid duplicate keys, as each key in a mapping can have only one associated value.
    -You want a data structure that doesn't necessarily have a predefined or fixed size.
    `,
  },
  {
    question: "Give one difference between memory and storage in Solidity.",
    answer: `In Solidity, memory and storage are two different types of data locations.

    memory: A temporary storage location that exists only for the duration of a function call. Data stored in memory is not persisted between function calls and is much cheaper, in terms of gas costs, than storage.
    
    storage: A permanent storage location that exists on the Ethereum blockchain, where contract state variables are stored. Data stored in storage persists across function calls and is more expensive, in terms of gas costs, compared to memory.
    `,
  },
  {
    question: "What are Solidity modifiers?",
    answer: `Solidity modifiers are reusable pieces of code that can be added to functions to modify their behavior. They typically serve the purpose of validating conditions or adding access control restrictions to functions.
    Modifiers can make code more readable, maintainable, and concise by abstracting away repetitive logic. When a function with a modifier is called, the modifier's code is executed first, and upon satisfying the required conditions, the original function's code is executed.
    `,
  },
  {
    question: "What is a fallback function in Solidity?",
    answer: `A fallback function is a special, unnamed function that gets executed whenever a contract receives Ether without any data or when a function call is made without specifying any function. It serves as the default function for a contract when no other function matches the given input. It must be marked external and payable if the contract is intended to receive Ether directly.`,
  },
  {
    question: "Tell me about smart contract's ABI?",
    answer: `A smart contract's ABI, or Application Binary Interface, is a JSON representation of the contract's methods and events. It serves as an interface between the Ethereum blockchain and client-side applications by providing useful information about the smart contract.

    The ABI includes:
    
    Function names
    Function input and output types
    Function modifiers (like payable, view, or pure)
    Event names
    Event input types and indices
    With the help of the ABI, a client-side application can construct correct data types, encoding, and decoding of function calls and events when interacting with a smart contract on the Ethereum blockchain.
    `,
  },
  {
    question: "Explain reentrancy attack?",
    answer: `A reentrancy attack is a security vulnerability in smart contracts, where an attacker can repeatedly call a function within the same transaction before the previous call is finished.`,
  },
  {
    question: "What is a hard fork in Solidity?",
    answer: `A hard fork is a change to the underlying consensus rules or protocol that results in the creation of a new, independent blockchain branch. 
    In the context of Ethereum, a hard fork may occur when there is a change to the Ethereum protocol that requires all participants in the network (miners, nodes, and clients) to update their software.
    `,
  },
  {
    question: "What is a soft fork in Solidity?",
    answer: `A soft fork occurs when a blockchain undergoes an update to the protocol or rules. Soft forks change the existing rules or introduce new ones but maintain compatibility with the previous set of rules.`,
  },
  {
    question: "What is a token standard in Solidity?",
    answer: `A token standard in Solidity is a set of rules and guidelines, including a predefined interface, that controls how tokens should be implemented on the Ethereum blockchain. By following a token standard, developers create tokens that are compatible with different wallets, contracts, and other services within the Ethereum ecosystem.`,
  },
  {
    question: "What is a governance token in Solidity?",
    answer: `A governance token in Solidity is a token that represents the voting rights and decision-making power within a decentralized network or platform. Governance tokens enable a decentralized, community-driven approach to decision-making regarding the development, management, and future direction of the associated protocol or platform.`,
  },
  {
    question: "What is a wrapped token?",
    answer: `A wrapped token is a tokenized version of a digital asset, typically implemented as a smart contract on the Ethereum blockchain. Wrapped tokens are created to represent the value of various cryptocurrencies or assets while enabling compatibility with the Ethereum network.`,
  },
  {
    question: "What is a rollup?",
    answer: `A rollup is a Layer-2 scaling solution built on top of existing blockchain networks, such as Ethereum, to improve performance and reduce the transaction costs. Rollups function by bundling or "rolling up" multiple transactions off-chain into a single transaction using a cryptographic proof.This proof is then submitted and verified on the base blockchain, which reduces the number of on-chain transactions while maintaining security.`,
  },
  {
    question: "What is a decentralized application (dApp) in Solidity?",
    answer: `A decentralized application is a distributed application built on top of a blockchain network.dApps leverage smart contracts to create a transparent and trustless environment. The main features of decentralized applications are:

    Open source: dApps have their source code available to everybody, promoting transparency.
    
    Decentralized: dApps are built on top of blockchain networks that store data on multiple nodes, reducing the risk of a single point of failure and central control.
    
    No central authority: dApps operate autonomously without intermediaries, providing censorship resistance and reducing dependency on third parties.
    `,
  },
  {
    question: "Give three ways to save gas.",
    answer: `-Use less expensive operations: Some operations in Solidity consume less gas than others. For example, use +=, -= instead of repeated + and - operations, and use ++ and -- increment/decrement operators to modify values.

    -Use storage efficiently by combining multiple smaller data types into single storage slots when possible.
    -Use Solidity's struct packing. Solidity automatically packs smaller data types within struct efficiently to minimize the gas cost. Thus, organizing state variables within struct can save gas.
    -Reuse code with libraries: Extensive usage of functions, loops, and conditions can increase gas consumption. Using libraries for frequently used functions can help you to reduce the amount of bytecode and save gas.
    `,
  },
  {
    question: "How to protect against a reentrancy attack?",
    answer: `Use the Checks-Effects-Interactions pattern: Arrange your contract's code in the following order - perform input checks, update state variables, and lastly, interact with other contracts. This ensures that the state variables are up-to-date before any external calls.

    Use function modifiers: Create a function modifier that prevents the reentrancy attack by not allowing the function to be called again until the previous execution is completed.
    `,
  },
  {
    question: "Is it feasible to send a transaction without having to charge customers for gas?",
    answer: `Yes. You'd have people sign a message on the front end first. The message and signature would then be send to an off-chain backend that would establish a transaction and include the payload (message + signature).
    This means that instead of the user's wallet, the app's wallet will cover gas costs. A smart contract will validate the signature's validity and perform an activity on behalf of the user on the blockchain.
    `,
  },
  {
    question: "Abstract contract vs interface",
    answer: `Interface:
    -Interfaces are used to define the external functions that a contract is required to implement, enabling a consistent way to interact with other contracts.
    -Interfaces can only contain function signatures without implementation.
    -Interfaces cannot have state variables or constructors.
    
    Abstract Contract:
    -Abstract contracts are used as a base for other contracts to inherit from, but they can't be deployed on their own because they contain at least one unimplemented function.
    -Abstract contracts can have implemented functions, state variables, constructors, and events.
    -Abstract contracts also support inheritance
    -Abstract contracts can contain partially implemented functions, which can be helpful in sharing common functionality between several contracts.
    
    If the goal is to define a standard set of external functions for a contract to interact with other contracts, then an interface is the better choice. However, if you need a base contract that can include common functionality, state variables, and constructor logic that other contracts can inherit from, then an abstract contract would be more suitable.
    `,
  },
  {
    question: "What is the indexed keyword in the event definition?",
    answer: `In Solidity, the indexed keyword is used in event definitions to mark specific event parameters for more efficient and optimized filtering and searching.`,
  },
  {
    question: "What is a Merkle tree in Solidity?",
    answer: `A Merkle tree, is a data structure used in cryptography for efficiently verifying the contents of large data sets.In Ethereum, a Merkle tree is used to store the data of transactions, state, and storage. The tree consists of leaves and nodes, where the leaves contain the actual data and each non-leaf node stores the hash of its child nodes. The root of the tree, known as the Merkle root, represents the hash of all the tree's elements and is included in each block header to verify the block's transactions.`,
  },
  {
    question: "What is a sidechain?",
    answer: `Sidechains are separate, individual blockchain networks connected to a primary blockchain. Sidechains enable assets and tokens to be transferred between the primary blockchain and the sidechain securely and efficiently.
    The purpose of using a sidechain is to address issues like network congestion, performance, and scalability on the main blockchain.
    `,
  },
  {
    question: "What is a cross-chain bridge in Solidity?",
    answer: `A cross-chain bridge  enables communication and asset transfers between different blockchain networks.Cross-chain bridges work by connecting multiple blockchain platforms through the use of smart contracts, oracles and validators. These bridges facilitate the secure transfer of assets, from one chain to another.By locking the original asset on the source chain and minting an equivalent on the destination chain.`,
  },
  {
    question: "What is a flash mint in Solidity?",
    answer: `A flash mint is a specific feature available in some DeFi tokens implemented using smart contracts. Flash minting allows users to mint a large amount of tokens instantly by repaying the minted tokens within the same transaction.Flash minting relies on the concept of flash loans, which enables users to borrow large amounts of tokens without providing collateral. The primary use case for flash mints includes arbitrage opportunities and executing complex financial interactions in DeFi platforms.`,
  },
  {
    question: "What is a multi-signature wallet in Solidity?",
    answer: `A multi-signature wallet is a type of smart contract wallet that requires approval from multiple parties before a transaction can be executed. It offers enhanced security and better access control features compared to a traditional single-key wallet.`,
  },
];
