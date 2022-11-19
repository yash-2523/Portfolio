import { useState } from "react";
import styles from "../styles/EndingNote.module.css";
import { sha256 } from "js-sha256";
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EncodedMode from "./EncodedMode";
import Image from "next/image";
import { CancelOutlined } from "@mui/icons-material";

export default function EndingNote(props) {
    const [encoded,setEncoded] = useState(true);
    const txs = [
        "0xf104e98332e2a826fa815cc13d8de6022d9cb8a98e4ead1286f3a3a160de4972",
        "0xe8725716bd7371405665e4f680904bbb349664419f5916fe199750da17d236d8",
        "0x25857c334f548bb030aabcc7882eeff398adc19e6c40674d5c230aee6bf8c185",
        "0x351abe57f2b55cc02117161c7544468c6b1f31c474c9b586dee06d8faed5320c",
        "0x9da3391bbb85e5a4d596824155b79356808910508567a431d652cc010246b877",
        "0x0a7df4624d61aa11cb2bbfb16f14bcf573b33fab4540f2701f528ed2e5cfdc89",
        "0x9539f5abe468ca8bc2034486e00826e0b823ec466e3baeca8803a7533b001d00"
    ];

    const blockhash = `0x${sha256(txs)}`;

    return (
        <>
        {
            encoded ?
        
            <EncodedMode close={() => props.close()} blockNumber={7} blockHash = {blockhash} txs={txs} decode={() => setEncoded(false)} />
        : 

            <div className={"mt-5 " + styles["main-container"]}>
                <CancelOutlined className={`cross-btn`} onClick={props.close} />
                <div className={"text-center mt-5 text-light " + styles['name']}>Feathers on the Cap</div>

                    <div className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                        <div className="d-flex flex-column">
                            <span className="d-flex align-items-center"><Image priority className="me-3" src={"/vector32.png"} style={{borderRadius: "30%"}} width={60} height={40} /><h3><a style={{color: "#356bdb"}} href="#" target={"_blank"} rel="noreferrer">Vector 32</a></h3></span>
                            <p className="ps-5 ms-4">Think out of the Box</p>
                        </div>
                        <span className="mt-4">
                            <br /><strong>Role -</strong> Co-Founder of Vector 32
                            <br />
                            <br />
                            We at Vector32 think out of the box solutions to everyday hurdles for small to medium size companies. 
                            <br />
                            <br />
                            As many companies have invest most of their valuable time in managing internal activities of company, growth of the company suffer. We here come to rescue with our solutions that will reduce the time spent in internal activity and boost companies productivity and ability work flawlessly with a good margin.
                        </span>                   
                    </div>             
                    <div className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                        <div className="d-flex flex-column">
                            <span className="d-flex align-items-center"><Image priority className="me-3" style={{borderRadius: "50%"}} src={"/agrivirtus.png"} width={60} height={60} /><h3><a style={{color: "#356bdb"}} href="https://agrivirtus.farm" target={"_blank"} rel="noreferrer">Agrivirtus</a></h3></span>
                        </div>
                        <span className="mt-4">
                            <br /><strong>Role -</strong> Lead Developer at Agrivirtus
                            <br />
                            <br />
                            Everything started from the following criterions to develop the project: a limited risk business model that can be limitlessly scaled using DAO governance structure and cryptocurrency financing in emerging and tier markets.
                            <br />
                            <br />
                            Agrivirtus is the result. A decentralized autonomous community whose mission is to create a social dynamic that financially incentivizes its actors to establish, operate, scale, and reproduce financially viable farming business models financed through cryptocurrency, focusing its activities in emerging and third world markets and starting with greenhouse tomato farming in Latin America.

                        </span>                   
                    </div>  
                    <div className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                        <div className="d-flex flex-column">
                            <span className="d-flex align-items-center"><Image priority className="me-3" style={{borderRadius: "50%"}} src={"/fate.jpeg"} width={60} height={60} /><h3><a style={{color: "#356bdb"}} href="https://fate-dao.com" target={"_blank"} rel="noreferrer">Fate DAO</a></h3></span>
                        </div>
                        <span className="mt-4">
                            <br /><strong>Role -</strong> Lead Developer at Fate DAO
                            <br />
                            <br />
                            FATE is a community-owned and social partner-DAO for promising blockchain-powered-investment-based ecosystems. Fate is about bringing people together, and bringing up fantastic project ideas, which can create passive income means for people. The DAO can vote on any project proposal, either passed or rejected using the DAO governance token named Destiny $DNY.
                        </span>                   
                    </div>  
                <button className={"btn mt-5 btn-rounded mx-auto"} onClick={() => setEncoded(true)} style={{backgroundColor: "cyan"}}>Encode Block</button>
            </div>
        }
        </>
    )
}