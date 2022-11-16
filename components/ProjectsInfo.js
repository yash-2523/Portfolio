import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styles from "../styles/ProjectsInfo.module.css";
import HomeStyles from "../styles/Home.module.css";
import { sha256 } from "js-sha256";
import Image from "next/image";
import EncodedMode from "./EncodedMode";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ProjectsInfo(props) {
    const [encoded, setEncoded] = useState(true);
    const txs = [
        "0x4ad53dbe3ea8e4c960d89c57100a3155aa8756406de4f6e113c4e5909b5920ff",
        "0x75a46a80ccd250f84c4da5eecc44fb0b5d6b7835cfe56b13c2b246d71fa39289",
        "0x3b69dff4672b647fc3267fa3c8a0d76795602749b62c96fc22c3d1b9e7fdf9e6",
        "0x8ad063284ddec528bfb05b3e45d7618d2eb3dc1c23278bd0c69d505cdc5f83ee",
        "0x6fd8707cc79e940f47cbddf4889b6a68c4c04b4f265b2832f47c31b25cced2d8",
        "0x754bdd395a064cfc55dfe56ca806628eeba856862e3091812a1eb1d08ecfb558",
        "0x8da9325f2c710bcaa2ed7c8ed25c440d2cab4282316a1b1953dc72ea02bdeced"
    ];

    const blockhash = `0x${sha256(txs)}`;

    return (
        <div className={`${HomeStyles["glass-ui-background"]}`}>
            {
                encoded ?

                    <EncodedMode blockNumber={3} blockHash={blockhash} txs={txs} decode={() => setEncoded(false)} />
                    :

                    <div className={"mt-5 " + styles["main-container"]}>
                        <div className={"text-center mt-5 text-light " + styles['name']}>Projects</div>

                        <Accordion className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className="d-flex flex-column">
                                    <h3>NFT Marketplace</h3>
                                    <p>Jun 2021 — Jul 2021</p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className="mt-3">
                                Developed a marketplace where users can buy/sell different NFTs and create their
                                own NFTs. Front-end was developed in Nextjs and Smart Contracts in solidity.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className="d-flex flex-column">
                                    <h3>Agrivirtus</h3>
                                    <p>May 2022 — Present</p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className="mt-3">
                                A DAO system for a community that involves power-based voting and vesting
                                for users, and developing a liquidity pool. Customized business logic for DAO
                                management and the security of funds. <a href="https://agrivirtus.farm" target={"_blank"} rel="noreferrer">Website</a>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className="d-flex flex-column">
                                    <h3>Cross Chain NFT minting</h3>
                                    <p>Aug 2022 — Oct 2022</p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className="mt-3">
                                Built a complete cross-chain NFT minting platform, using layerzero. The best part
                                was users can mint NFT with just one click, from any chain, and the corresponding
                                NFT will be minted on Ethereum.
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className="d-flex flex-column">
                                    <h3>Student Companion</h3>
                                    <p>Aug 2021 — Sep 2021</p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className="mt-3">
                                Built a platform where students can check their academic performance, schedule,
                                and admin can enroll students into a particular course. The platform was developed
                                in MERN stack and deployed on vercel. Link to the <a href="https://wmc-guide.vercel.app" target={"_blank"} rel="noreferrer">website</a>, Link for the <a href="https://dribbble.com/shots/16461580-Student-Companion?utm_source=Clipboard_Shot&utm_campaign=yash__doshi&utm_content=Student%20Companion&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=yash__doshi&utm_content=Student%20Companion&utm_medium=Social_Share" target={"_blank"} rel="noreferrer">website
                                    design</a>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <div className="d-flex flex-column">
                                    <h3>Upsolve</h3>
                                    <p>Jan 2021 — Apr 2021</p>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails className="mt-3">
                                A platform developed using MERN stack, where users can maintain their streak of
                                problem-solving on CodeForces and will be provided with a higher level problem
                                with respect to their ratings, which will help them to improve their skills in
                                Competitive Programming.
                            </AccordionDetails>
                        </Accordion>

                        <button className={"btn mt-5 btn-rounded mx-auto"} onClick={() => setEncoded(true)} style={{ backgroundColor: "cyan" }}>Encode Block</button>
                    </div>
            }
        </div>
    )
}