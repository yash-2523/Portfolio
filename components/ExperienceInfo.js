import { useState } from "react";
import styles from "../styles/ExperienceInfo.module.css";
import { sha256 } from "js-sha256";
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EncodedMode from "./EncodedMode";
import { CancelOutlined } from "@mui/icons-material";

export default function ExperienceInfo(props) {
    const [encoded,setEncoded] = useState(false);
    const txs = [
        "0xc0f250457a5d0fd4014152278901cab9572d3e181b1c518763b61dbbf6e5d798",
        "0xfcd45de4a70af9b3f52ddc0fd9dc9ccc42c4c5a06f4016e641a83f2f9ddf80cb",
        "0x0ab87ffe3b4a63422e7f561a5435b51edfc6017661373e98f2503dfbbc0c5b8c",
        "0x55e90c53d26962bd7b5b20f6b45bcac39985b997ebbcb8e3040f0bfcec7096e6",
        "0xbb7edda7b2145fcb5b9e1e9e2dead63154d95b24b571723b0ee7b263b94ca65b",
        "0xf4869db29dfa45115785a273103b7c253b14ab06266ce342a449756763494392",
        "0x96105b64dcf6c46e48d6ed3e0a381f7f18be507e49b13c0a1e833121f1468376"
    ];

    const blockhash = `0x${sha256(txs)}`;

    return (
        <>
        {
            encoded ?
        
            <EncodedMode close={() => props.close()} blockNumber={2} blockHash = {blockhash} txs={txs} decode={() => setEncoded(false)} />
        : 

            <div className={"mt-5 " + styles["main-container"]}>
                <CancelOutlined className={`cross-btn`} onClick={props.close} />
                <div className={"text-center mt-5 text-light " + styles['name']}>Employment History</div>

                    <div className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                        <div className="d-flex flex-column">
                            <h3>Blockchain Developer, Get Thrifty LLP</h3>
                            <p>Feb 2022 - Present</p>
                        </div>
                        <span className="mt-3">
                            Full-stack web and blockchain developer with experience developing
                            DEFI/DEX/Dapps. Additionally, I contributed to the development of a crypto
                            payment gateway platform for Bahrain country's project as a core developer.
                        </span>                   
                    </div>
                    <div className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                        <div className="d-flex flex-column">
                            <h3>Full Stack Developer, Troovi.in</h3>
                            <p>Jun 2021 — Aug 2021</p>
                        </div>
                        <span className="mt-3">
                        Single-handedly designed the architect, developed and deployed the project using
                        React
                        <br />
                        <br />
                        The platform helps to manage the transport business digitally without any hassle
                        of paperwork.
                        </span>                   
                    </div>                
                <button className={"btn mt-5 btn-rounded mx-auto"} onClick={() => setEncoded(true)} style={{backgroundColor: "cyan"}}>Encode Block</button>
            </div>
        }
        </>
    )
}