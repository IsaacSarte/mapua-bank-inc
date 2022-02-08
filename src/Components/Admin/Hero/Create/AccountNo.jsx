import React, { useState } from 'react';

const AccountNo = (props) => {

    // Destructured Properties
    const { onGenerate } = props;

    // States
    const [accountNo, setAccountNo] = useState("")

    // Event Handlers
    const onBtnClick = () => {
        let randomNum = Math.floor(Math.random() * 9000 + 1000);
        let numberGenerated = "2021-" + randomNum;
        setAccountNo(numberGenerated);
        onGenerate(numberGenerated);
    };

    return (
        <>
            <input
                type="text"
                value={accountNo}
                disabled />
            <button type="button" onClick={onBtnClick} className="btn-generate">Click to Generate</button>
        </>
    )
}

export default AccountNo;