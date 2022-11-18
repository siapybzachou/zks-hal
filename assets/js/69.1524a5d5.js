(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{483:function(e,t,o){"use strict";o.r(t);var a=o(32),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"known-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),o("p",[e._v("zkSync 2.0 is currently in the alpha stage, hence some things you are used to may not work. Please keep in mind that the system is still under ongoing development.")]),e._v(" "),o("h2",{attrs:{id:"why-are-metamask-native-contract-interactions-not-working"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-are-metamask-native-contract-interactions-not-working"}},[e._v("#")]),e._v(" Why are Metamask native contract interactions not working?")]),e._v(" "),o("p",[e._v("It is not currently possible to interact with zkSync smart contracts via Metamask with EIP-1559 transactions. zkSync does not support EIP1559 transactions.")]),e._v(" "),o("p",[o("strong",[e._v("Solution.")]),e._v(" Explicitly specify "),o("code",[e._v("{ type: 0 }")]),e._v(" in transaction overrides to use Ethereum legacy transactions.")]),e._v(" "),o("h2",{attrs:{id:"why-does-my-wallet-have-no-funds-and-my-contract-disappears"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-does-my-wallet-have-no-funds-and-my-contract-disappears"}},[e._v("#")]),e._v(" Why does my wallet have no funds and my contract disappears?")]),e._v(" "),o("p",[e._v("We are expected to update our testnet continuously, so from time to time, we will need to do a re-genesis. This will cause the entire state to reset, and all deployed contracts will cease to exist.")]),e._v(" "),o("p",[o("strong",[e._v("We will communicate re-genesis events before they happen!")])]),e._v(" "),o("h2",{attrs:{id:"why-does-wait-get-stuck-for-l1-l2-transactions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-does-wait-get-stuck-for-l1-l2-transactions"}},[e._v("#")]),e._v(" Why does "),o("code",[e._v("wait()")]),e._v(" get stuck for L1->L2 transactions?")]),e._v(" "),o("p",[e._v("If the "),o("code",[e._v("wait()")]),e._v(" takes much longer than expected, most likely the transaction has failed.")]),e._v(" "),o("h2",{attrs:{id:"why-is-there-an-unexpected-end-of-json-input-compilation-error"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-is-there-an-unexpected-end-of-json-input-compilation-error"}},[e._v("#")]),e._v(" Why is there an "),o("code",[e._v("unexpected end of JSON input")]),e._v(" compilation error?")]),e._v(" "),o("p",[e._v("This is an error that is usually thrown when compiling a large smart contract codebase.")]),e._v(" "),o("p",[e._v("If you encounter such an error, please do the following:")]),e._v(" "),o("ul",[o("li",[e._v("Update the "),o("code",[e._v("@matterlabs/hardhat-zksync-solc")]),e._v(" library and try to re-compile the smart contracts afterwards.")]),e._v(" "),o("li",[e._v("If after the recompilation you get the "),o("code",[e._v("Library not found")]),e._v(" error, then you should follow the instructions from "),o("RouterLink",{attrs:{to:"/api/hardhat/compiling-libraries.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),o("li",[e._v("If the same error persists, report the issue to our team. We will do our best to help you.")])]),e._v(" "),o("h2",{attrs:{id:"why-can-t-i-use-create-create2-opcodes-with-raw-bytecode"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-can-t-i-use-create-create2-opcodes-with-raw-bytecode"}},[e._v("#")]),e._v(" Why can't I use CREATE/CREATE2 opcodes with raw bytecode?")]),e._v(" "),o("p",[e._v("zkSync does not support using CREATE/CREATE2 with raw bytecode. We highly recommend using the "),o("code",[e._v("new")]),e._v(" operator to avoid any issues.")]),e._v(" "),o("h2",{attrs:{id:"why-is-hardhat-s-console-log-not-working"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-is-hardhat-s-console-log-not-working"}},[e._v("#")]),e._v(" Why is Hardhat's "),o("code",[e._v("console.log")]),e._v(" not working?")]),e._v(" "),o("p",[e._v("zkSync does not support the Nomic Foundation's "),o("code",[e._v("console.log")]),e._v(" contract. Due to different address derivation rules, even when deployed, the "),o("code",[e._v("console.log")]),e._v(" library will likely have a different address from the one on Ethereum.")])])}),[],!1,null,null,null);t.default=s.exports}}]);