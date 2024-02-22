import "./App.css";

import { useState } from "react";

function App() {
  const [expences, setExpences] = useState([{
    name: "shop 1",
    value: 100,
    isDone: false
  }, {
    name: "shop 2",
    value: 300,
    isDone: false
  }]);
  const [expence, setExpence] = useState({
    name: "",
    value: 0,
    isDone: false
  });
  const [money, setMoney] = useState(0);

  const handleUpdateExpences = (newExpences) => {
    setExpences(newExpences);
    setExpence({
      name: "",
      value: 0,
      isDone: false
    });
  }

  const moneyRemains = () => {
    let allMoney = 0;
    for (let i = 0; i < expences.length; i++) {
      allMoney += expences[i].value;
    }

    let remainMoney = money - allMoney;

    return remainMoney;
  }

  const handleDoneOnClick = (id) => {
    console.log(typeof (id));
    let newIsDone = !expences[id].isDone;
    let newExpence = {
      ...expences[id],
      isDone: newIsDone
    };
    let newExpences = expences;
    newExpences[id] = newExpence;

    handleUpdateExpences(newExpences);
  }

  const handleNewExpence = () => {
    if (expence.name && expence.value) {
      let newExpence = expence;
      let newExpences = expences;
      newExpences.push(newExpence);
      handleUpdateExpences(newExpences);
    }
  }

  const handleDeleteOnClick = (id) => {
    let newExpences = expences;
    newExpences.splice(id, 1);
    handleUpdateExpences(newExpences);
  }

  const handleExpenceChangeIndexToUpOnClick = (id) => {
    let newExpences = expences;
    let newExpence = newExpences[id];

    newExpences.splice(id, 1);
    newExpences.splice(id - 1, 0, newExpence);

    handleUpdateExpences(newExpences);
  }

  const handleExpenceChangeIndexToDownOnClick = (id) => {
    let newExpences = expences;
    let newExpence = newExpences[id];

    newExpences.splice(id, 1);
    newExpences.splice(id + 1, 0, newExpence);

    handleUpdateExpences(newExpences);
  }

  return (
    <>
      <div className="header">
        <h1 className="display-4">My Expence & Money</h1>
        <h2>
          $
          <input type="number" value={money} onChange={(e) => {
            setMoney(e.target.value)
          }} />
        </h2>
      </div>
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
                              <span className="h3 mx-3 dis">
                                {ex.name}
                              </span>
                              <span className="h3 dis">
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
        {expences.length != 0 && <footer className="px-3">
          <h2 className="display-6">money remains:
            {
              moneyRemains() > 0 ? <span style={{ color: "green" }}>${moneyRemains()}</span> : <span style={{ color: "red" }}>${moneyRemains()}</span>
            }
          </h2>
        </footer>}
      </div >
    </>
  );
}

export default App