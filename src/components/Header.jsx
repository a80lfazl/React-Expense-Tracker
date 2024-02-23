function Header({
    money,
    setMoney
}) {
    //render view
    return (
        <div className="d-flex flex-row align-items-center justify-content-between">
            <h1 className="display-4">My Expence & Money</h1>
            <h2>
                $
                <input className="border-0" type="number" value={money} onChange={(e) => {
                    setMoney(e.target.value)
                }} />
            </h2>
        </div>
    );
}

export default Header;