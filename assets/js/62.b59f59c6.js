(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{474:function(t,e,a){"use strict";a.r(e);var o=a(32),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"intro-to-rollups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#intro-to-rollups"}},[t._v("#")]),t._v(" Intro to rollups")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("To better understand rollups we need to dive briefly into Ethereum and Layer 2 solutions.")]),t._v(" "),a("p",[t._v("The Ethereum network is frequently congested, which results in slow transactions and increased gas prices.\nWhile this has remained so for a long time, an improved solution is needed: one that will not put limits on the throughput, but instead,\nachieve a high transaction rate without having to trade off security. That is where Layer 2 solutions shine.")]),t._v(" "),a("p",[t._v("Layer 2 solutions are designed as an extension to Ethereum, and offer various solutions poised to be the critical scalability component to\nthe inherent network congestion on Ethereum. Covering all Layer 2 solutions is beyond the scope of this doc.\nWe will go through a brief explainer on rollups in this section.")]),t._v(" "),a("h2",{attrs:{id:"optimistic-rollups-versus-zk-rollups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optimistic-rollups-versus-zk-rollups"}},[t._v("#")]),t._v(" Optimistic rollups versus ZK rollups")]),t._v(" "),a("p",[t._v("There are mainly two types of rollups, ZK rollups and Optimistic rollups.")]),t._v(" "),a("h3",{attrs:{id:"what-are-rollups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-rollups"}},[t._v("#")]),t._v(" What are rollups?")]),t._v(" "),a("p",[t._v("Rollups are a recent development intended to increase the scalability of Ethereum by performing calculations off-chain, rolling many\ntransactions up into a single batch, and sending it to the main Ethereum chain in a single action.\nInstead of submitting each transaction separately, rollup operators submit a summary of the required changes to represent all transactions\nin a batch.")]),t._v(" "),a("p",[t._v("To be able to work on a rollup, funds need to be locked on a smart contract on the Layer 1 blockchain.\nThis allows transactions to be processed without the overhead of all the data associated with performing a transaction on the main chain.\nRollups significantly decrease associated transaction processing times and gas fees.")]),t._v(" "),a("p",[t._v("The main difference between ZK and Optimistic rollups is in the way this batch of transactions becomes "),a("em",[t._v("final")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"what-are-zk-rollups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-zk-rollups"}},[t._v("#")]),t._v(" What are ZK rollups?")]),t._v(" "),a("p",[t._v("In ZK rollups ('ZK' standing for zero-knowledge) the batch of transactions is verified for correctness on the Ethereum network. After the\nverification passes, the batch of transactions is considered final like any other Ethereum transaction. This is achieved through the power\nof cryptographic "),a("em",[t._v("validity proofs")]),t._v(" (commonly called zero-knowledge proofs). With any batch of off-chain transactions, the ZK rollup\noperator generates a proof of validity for this batch. Once the proof is generated, it is submitted to Ethereum to make the roll-up batch final.\nIn zkSync, this is done via a "),a("strong",[t._v("SNARK")]),t._v(", succinct non-interactive argument of knowledge.")]),t._v(" "),a("h3",{attrs:{id:"what-are-optimistic-rollups"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-optimistic-rollups"}},[t._v("#")]),t._v(" What are Optimistic rollups?")]),t._v(" "),a("p",[t._v("Optimistic rollups, on the other hand, have no mechanism to prove the validity of the off-chain transactions. Instead, they are considered\n“optimistic” because they assume off-chain transactions are valid unless proven otherwise. Hence, they rely on "),a("em",[t._v("fraud proofs")]),t._v(", a\nchallenge to the submitted state to Ethereum. If such a challenge is submitted, the Optimistic rollup operator needs to show that the\nstate and transactions in questions are actually valid. This is a cumbersome process, and requires watchers to make sure that the Optimistic\nrollup operator is honest at all times.")]),t._v(" "),a("h3",{attrs:{id:"l1-and-l2-what-s-the-difference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#l1-and-l2-what-s-the-difference"}},[t._v("#")]),t._v(" L1 and L2: what's the difference?")]),t._v(" "),a("p",[t._v("The term "),a("strong",[t._v("Layer 1")]),t._v(" (or "),a("strong",[t._v("L1")]),t._v(") is used to refer to the underlying primary chain, such as the Ethereum network or Bitcoin. Layer 1\nblockchains determine protocol rules and transaction finality, and perform the base-level functions of applications built upon them.")]),t._v(" "),a("p",[t._v("The term "),a("strong",[t._v("Layer 2")]),t._v(" (or "),a("strong",[t._v("L2")]),t._v(") is used to describe an overlaying application or network that operates on top of the Layer 1 chain. These\nare most often built to provide further scalability solutions by taking on a portion of transaction-based tasks to lighten the impact on the\nlayer 1 chain, quickening transaction times and lowering gas fees.")]),t._v(" "),a("p",[t._v("zkSync is an L2, where L1 is the main Ethereum blockchain.")])])}),[],!1,null,null,null);e.default=s.exports}}]);