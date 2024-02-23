function Body({
    expence,
    setExpence,
    handleNewExpence,
    expences,
    handleDeleteOnClick,
    handleDoneOnClick,
    handleExpenceChangeIndexToDownOnClick,
    handleExpenceChangeIndexToUpOnClick
}) {
    //render view
    return (
        <div className="body">
            <div className="form-group row px-2 w-75 mx-auto mt-4">
                <input className="form-control col mx-2" type="text" value={expence.name} placeholder="name" onChange={(e) => {
                    setExpence({
                        ...expence,
                        name: e.target.value
                    })
                }} />
                <input className="form-control col mx-2" type="number" value={expence.value} placeholder="money" onChange={(e) => {
                    setExpence({
                        ...expence,
                        value: e.target.value && parseInt(e.target.value)
                    })
                }} />
                <button className="btn btn-success col mx-2" onClick={handleNewExpence}>submit</button>
            </div>

            <div>
                {
                    expences.length == 0 ? <h1>No expence yet!</h1> :
                        <ul className="list-group list-group-flush my-5 border-top border-bottom py-2">
                            {
                                expences.map((ex, index) => (
                                    <li className="list-group-item d-flex flex-row justify-content-between align-items-center" key={index}>
                                        <div className="">
                                            {
                                                ex.isDone ?
                                                    <>
                                                        <span className="h3 mx-3 text-decoration-line-through text-secondary">
                                                            {ex.name}
                                                        </span>
                                                        <span className="h3 text-decoration-line-through text-secondary">
                                                            ${ex.value}
                                                        </span>
                                                    </> :
                                                    <>
                                                        <span className="h3 mx-3">
                                                            {ex.name}
                                                        </span>
                                                        <span className="h3">
                                                            ${ex.value}
                                                        </span>
                                                    </>
                                            }
                                        </div>
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <button className="btn border-success rounded-1 mx-1" data-index={index} onClick={(e) => {
                                                handleDoneOnClick(e.target.dataset.index)
                                            }}>
                                                ✔
                                            </button>

                                            <button className="btn border-danger rounded-1 mx-1" data-index={index} onClick={(e) => {
                                                handleDeleteOnClick(parseInt(e.target.dataset.index))
                                            }}>
                                                🗑
                                            </button>

                                            <button className="btn btn-dark rounded-end-0 rounded-start-1 rounded-1 ms-1" disabled={index == 0 && true} data-index={index} onClick={(e) => {
                                                handleExpenceChangeIndexToUpOnClick(parseInt(e.target.dataset.index))
                                            }}>
                                                ↑
                                            </button>

                                            {//FIXME: make this button work with fontawsome
                                            }
                                            <button className="btn btn-dark rounded-end-1 rounded-start-0 me-1 " disabled={index == expences.length - 1 && true} data-index={index} onClick={(e) => {
                                                handleExpenceChangeIndexToDownOnClick(parseInt(e.target.dataset.index))
                                            }}>
                                                ↓
                                            </button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                }
            </div>
        </div>
    );
}

export default Body;