function Footer({
    expenceLength,
    moneyRemains
}) {
    //render view

    //check if there is expences
    if (expenceLength != 0) {
        return (
            <footer className="px-3">
                <h2 className="display-6">money remains:
                    {
                        //ckeck if there is money left or no
                        moneyRemains() > 0 ?
                            <span style={{ color: "green" }}>${moneyRemains()}</span> :
                            <span style={{ color: "red" }}>${moneyRemains()}</span>
                    }
                </h2>
            </footer>
        );
    }

    return <></>;
}

export default Footer;