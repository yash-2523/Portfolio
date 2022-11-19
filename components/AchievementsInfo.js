import { useState } from "react";
import styles from "../styles/AchievementsInfo.module.css";
import { sha256 } from "js-sha256";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EncodedMode from "./EncodedMode";
import { CancelOutlined } from "@mui/icons-material";

export default function AchievementsInfo(props) {
    const [encoded, setEncoded] = useState(true);
    const txs = [
        "0x74cf2bc63fe122206c82cecc1b3f31a100d5d4aaca6e12682590271276fb4691",
        "0x2bd4f0b73fdfba329b37d8f3b3424851cc052991a906d8ee4f297c222bf4a7dd",
        "0xdd46c98bcb558cb4e16fa9cb2c26e8d4265e1cf6767738b7218e4638aeed3a6f",
        "0x73689f1ab6ead57dbd18c410a6590d6a06adc9234b50e57a862fcdce73c2989c",
        "0xc8c17ec626c1dbabae1446f759c83c2fcde3fed06d25577796ff723ce0c5a317",
        "0x5b02c827ea368ea027d41b94faa2b73b2db8e65ecb62586b2096e8db7b00babf",
        "0x6f3efe7eb490a44a2e4c7c097e8bf8370469b021de939a90376c3161a3617d35"
    ];

    const blockhash = `0x${sha256(txs)}`;

    return (
        <>
            {
                encoded ?

                    <EncodedMode close={() => props.close()} blockNumber={5} blockHash={blockhash} txs={txs} decode={() => setEncoded(false)} />
                    :

                    <div className={"mt-5 " + styles["main-container"]}>
                        <div className={"text-center mt-5 text-light " + styles['name']}>Achievements</div>
                        <CancelOutlined className={`cross-btn`} onClick={props.close} />

                        <div className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                            <div className="d-flex flex-column">
                                <h3>Winner of WEBSITE MAKING CHALLENGE</h3>
                            </div>
                            <span className="mt-3">
                                Achieved Certicate for ranking 1st in "Website Making Challenge" from
                                Programming Club- Ahmedabad University
                            </span>
                        </div>

                        <div className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                            <div className="d-flex flex-column">
                                <h3>Winner of Ingenieum Hackathon</h3>
                            </div>
                            <span className="mt-3">
                                Secured second rank in Ingenium Hackathon organized at University. Developed a
                                blockchain and machine learning based laboratory report management platform.
                            </span>
                        </div>

                        <div className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                            <div className="d-flex flex-column">
                                <h3>5 star Coder on Codechef</h3>
                            </div>
                            <span className="mt-3">
                                Codechef profile: <a style={{color: "#356bdb"}} href="https://www.codechef.com/users/yash_2523" target={"_blank"} rel="noreferrer">https://www.codechef.com/users/yash_2523</a>
                            </span>
                        </div>

                        <div className={"mx-auto mt-5 px-2 py-4 " + styles["accordion-items"]}>
                            <div className="d-flex flex-column">
                                <h3>VOLUNTEER, Khoj Museum</h3>
                            </div>
                            <span className="mt-3">
                                Served 30 hours as a volunteer at Khoj Museum. Our team organized campaigns
                                and events for spreading awareness towards kitchen gardening, terrace gardening,
                                and Bottle Gardening.
                            </span>
                        </div>

                        <button className={"btn mt-5 btn-rounded mx-auto"} onClick={() => setEncoded(true)} style={{ backgroundColor: "cyan" }}>Encode Block</button>
                    </div>
            }
        </>
    )
}