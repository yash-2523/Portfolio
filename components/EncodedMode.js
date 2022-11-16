import HomeStyles from "../styles/Home.module.css";
export default function EncodedMode ( props ) {
    const {blockNumber, blockHash, txs} = props;
    return (
        <div className={`mt-5 px-2 ${HomeStyles["block-info-container"]}`}>
                <h1 className="text-light text-center text-bold mt-5" style={{fontFamily: "Poppins", fontWeight: "900"}}>Block {blockNumber}</h1>
                <h6 className="text-center text-light mb-5">{blockHash}</h6>

                <span className={`mt-5 ${HomeStyles['tx-container']}`} style={{fontFamily: "Poppins", fontWeight: "700"}}>
                    <h2 className="mb-5 mt-3 text-light text-bold text-center">Transactions</h2>

                    {txs.map(tx => 
                        <p key={tx} className="text-center mx-1"># {tx}</p>
                    )}
                </span>

                <button className={`btn mt-5 btn-rounded mx-auto`} onClick={props.decode} style={{backgroundColor: "cyan"}}>Decode Block</button>
        </div>
    )
}