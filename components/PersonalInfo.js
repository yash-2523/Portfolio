import { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styles from "../styles/PersonalInfo.module.css";
import HomeStyles from "../styles/Home.module.css";
import { sha256 } from "js-sha256";
import Image from "next/image";
import EncodedMode from "./EncodedMode";

export default function PersonalInfo(props) {
    const [encoded,setEncoded] = useState(true);
    const txs = [
        "0x49cdefe3bf5f7c1dee7ede6b2f86c47ef4ed1d94b7892fedbf632fd99a18ce91",
        "0x33f0a4e4acf1ccb427071ffff1a7a450394d9413eeb13253786d6de363711a19",
        "0x52639258e471bc04bf7f0baa70e29ba7adb6cbc9d8615e22b6dc56034cee2e2c",
        "0x55e90c53d26962bd7b5b20f6b45bcac39985b997ebbcb8e3040f0bfcec7096e6",
        "0x72d90af393d610727bdf1fa58d1010c116f263ae7ce096eeb7eb36c2ae646791",
        "0x365770999fbc5da3877315c4709787b9e35f1881f297ea960c075febc7303a83",
        "0xcd1398d46da3fd6c8739faccb405875ead5f8d3152a3af4dfd06d08c70999dcd"
    ];

    const blockhash = `0x${sha256(txs)}`;

    return (
        <div className={`${HomeStyles["glass-ui-background"]}`}>
        {
            encoded ?
        
            <EncodedMode blockNumber={1} blockHash = {blockhash} txs={txs} decode={() => setEncoded(false)} />
        : 

            <div className={`mt-5 px-2 mb-5 ${styles["main-container"]}`}>
                <div className={"text-center mt-5 text-light " + styles['name']}>Yash Doshi</div>
                <h2 className={`text-center text-light mb-5`}>Blockchain Developer</h2>
                
                <div className="col-12 mt-5 mb-5 d-flex flex-lg-row flex-md-column flex-sm-column flex-column" style={{rowGap: "2.5rem"}}>
                    <div className={`col-12 col-lg-6 text-center`}>
                        <Image src={"/yash_doshi.jpeg"} width={350} height={350} style={{borderRadius: "50%"}}></Image>
                    </div>
                    <span className={`col-12 col-lg-6`}>
                        <p>A skilled blockchain developer with experience in the system architecture, setup, testing, and maintenance of software systems. Competent in multiple programming languages and platforms. Technology and development skills at the forefront of the industry. Capable of working both independently on projects and in a team to accomplish goals.</p>
                        <p className="mt-5"><b>Email - </b>yashdoshi107@gmail.com</p>
                        <p><b>Phone - </b>+919265353396</p>
                        <p><b>Address - </b>Ahemdabad, India</p>
                        <p><b>LinkedIn - </b><u><a style={{textDecoration: "none"}} href="https://linkedin.com/in/yash-doshi -7a3b47195">linkedin.com/in/yash-doshi -7a3b47195</a></u></p>
                        <p><b>Github - </b><u><a style={{textDecoration: "none"}} href="https://github.com/yash-2523">github.com/yash-2523</a></u></p>
                    </span>
                </div>

                <button className={"btn mt-5 btn-rounded mx-auto"} onClick={() => setEncoded(true)} style={{backgroundColor: "cyan"}}>Encode Block</button>
            </div>
        }
        </div>
    )
}