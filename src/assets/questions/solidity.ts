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
];
