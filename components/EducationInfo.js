import { useState } from "react";
import styles from "../styles/EducationInfo.module.css";
import { sha256 } from "js-sha256";
import {Accordion, AccordionSummary, AccordionDetails} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EncodedMode from "./EncodedMode";

export default function EducationInfo(props) {
    const [encoded,setEncoded] = useState(true);
    const txs = [
        "0x512ab3c6b9869577bd4474c56b88f9e3f1c40c54d18e8e5a2329821254d362d2",
        "0x85a7123a493d6ccedefa238d6112e98b22b6b86aebb8f23b4d6f51de24741dc3",
        "0x6251c311313e4846614416f7a106dc2a71632b98daf4bce10a83e6ffd963ad5d",
        "0x5dbc8743eaa8d95c7b082582f5b17d6c7ee33f1e2d01f687ae492d1f9b575536",
        "0x1d183e4e11bcf4b316b83dc2b48d1c7fb02da00aa4a5082f920ba2076c4cb912",
        "0x90f43323d3d5c8fd50c768d2d1350d93cde8914f77f1951f6053756fc0a21e89",
        "0x8835dcfa55ca91f3eb7522e9e517bd4767b47f8581936dc69464c6a022c2624e"
    ];

    const blockhash = `0x${sha256(txs)}`;

    return (
        <>
        {
            encoded ?
        
            <EncodedMode blockNumber={4} blockHash = {blockhash} txs={txs} decode={() => setEncoded(false)} />
        : 

            <div className={"mt-5 " + styles["main-container"]}>
                <div className={"text-center mt-5 text-light " + styles['name']}>Education</div>

                    <div className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                        <div className="d-flex flex-column">
                            <h3>B.Tech in Computer Science and Engineering</h3>
                            <p>Aug 2019 — Present</p>
                            <p>3.3/4.0</p>
                        </div>
                        <span className="mt-4">
                            I am currently pursuing my B.Tech in CSE from Ahmedabad Univeristy. Throughout my college life, I have been part of various projects and have been able to learn a lot of new things. I worked on strengthing the core fundamentals of Computer Science. 
                        </span>                   
                    </div>             
                <button className={"btn mt-5 btn-rounded mx-auto"} onClick={() => setEncoded(true)} style={{backgroundColor: "cyan"}}>Encode Block</button>
            </div>
        }
        </>
    )
}