import { useState } from "react";
import styles from "../styles/SkillsInfo.module.css";
import { sha256 } from "js-sha256";
import Image from "next/image";
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EncodedMode from "./EncodedMode";
import { CancelOutlined } from "@mui/icons-material";

export default function SkillsInfo(props) {
    const [encoded,setEncoded] = useState(false);
    const txs = [
        "0x7ead9d0680addca94bbfaeec63e17c1e48ba89c1a9667ee7a43e6be652deeb7d",
        "0x01fad993ff61aca9a1f2f07100c95eb1559d8b6440a00cb974a92810a6b5a2dc",
        "0xef98f90351c69622c56148f7844ef734e506629c991a9a950486c241b8600246",
        "0x75712c3ea4c91a3c7089dbfc7ee4dacd29a6cdefb2a71a31c2e011ba44f18eea",
        "0x91231ff9ab6685fac02e3b2f8ec250c2c866b19be46ca7a195186b9c85e6fc69",
        "0x59f5929603dc346aafde632f567eaf379138a1145d7862da829bf0757a129754",
        "0xe022e26feda803a2155b0cbb8f974d1f9177f70e1aad1f9c79f2757d6f6d71d6"
    ];

    const blockhash = `0x${sha256(txs)}`;

    return (
        <>
        {
            encoded ?
        
            <EncodedMode close={() => props.close()} blockNumber={6} blockHash = {blockhash} txs={txs} decode={() => setEncoded(false)} />
        : 

            <div className={"mt-5 " + styles["main-container"]}>
                    <div className={"text-center mt-5 text-light " + styles['name']}>Skills</div>
                    <CancelOutlined className={`cross-btn`} onClick={props.close} />
                    <div className={`d-flex flex-column align-items-center mt-5 ${styles['list']}`}>
                        <strong><li><Image priority src={"/solidity.png"} width={30} height={30} />Solidity</li></strong>  
                        <strong><li><Image priority src={"/react.png"} width={30} height={30} /> React</li></strong>  
                        <strong><li><Image priority src={"/nodejs.png"} width={30} height={30} /> Nodejs</li></strong>  
                        <strong><li><Image priority src={"/js.png"} width={30} height={30} /> Javascript</li></strong>  
                        <strong><li><Image priority src={"/mongodb.png"} width={30} height={30} /> MongoDB</li></strong>  
                        <strong><li><Image priority src={"/html.png"} width={30} height={30} /> HTML & CSS</li></strong>  
                    </div>
                    <div className={"text-center mt-5 text-light " + styles['name']}>Courses</div>
                    <div className={`mx-auto mt-3 px-2 py-4 ${styles["accordion-items"]}`}>
                        <div className="d-flex flex-column">
                            <h3><li>Network Security Auditing with nmap, Udemy</li></h3>
                            <p className="ps-5">Jul 2021 — Aug 2021</p>
                        </div>               
                    </div>  
                    <div className={`mx-auto mt-3 px-2 py-4 ${styles["accordion-items"]}`}>
                        <div className="d-flex flex-column">
                            <h3><li>Python Data Analysis, Coursera</li></h3>
                            <p className="ps-5">Oct 2021 — Nov 2021</p>
                        </div>               
                    </div>        
                <button className={"btn mt-5 btn-rounded mx-auto"} onClick={() => setEncoded(true)} style={{backgroundColor: "cyan"}}>Encode Block</button>
            </div>
        }
        </>
    )
}