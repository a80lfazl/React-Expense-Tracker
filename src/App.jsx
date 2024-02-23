//FIXME: make components better
//TODO: re-name all function & write comment for each part
//TODO: add local storage to app to save data

//import components & useState
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

//main function
function App() {
  //array of all expences
  const [expences, setExpences] = useState([{
    name: "shop 1",
    value: 100,
    isDone: false
  }, {
    name: "shop 2",
    value: 300,
    isDone: false
  }]);

  //corrent expence
  const [expence, setExpence] = useState({
    name: "",
    value: 0,
    isDone: false
  });

  //user money
  const [money, setMoney] = useState(0);

  //get new arr expences and set it to corrent arr expences
  const handleUpdateExpences = (newExpences) => {
    setExpences(newExpences);
    setExpence({
      name: "",
      value: 0,
      isDone: false
    });
  }

  //cal the remain money with for on the all expences index
  const moneyRemains = () => {
    let allMoney = 0;
    for (let i = 0; i < expences.length; i++) {
      allMoney += expences[i].value;
    }

    let remainMoney = money - allMoney;

    return remainMoney;
  }

  //get the index of expence and make it done
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

  //add new expence to expences
  const handleNewExpence = () => {
    if (expence.name && expence.value) {
      let newExpence = expence;
      let newExpences = expences;
      newExpences.push(newExpence);
      handleUpdateExpences(newExpences);
    }
  }

  //get id of expence and delete it
  const handleDeleteOnClick = (id) => {
    let newExpences = expences;
    newExpences.splice(id, 1);
    handleUpdateExpences(newExpences);
  }

  //get the index of expence and make a new expences with index-1
  const handleExpenceChangeIndexToUpOnClick = (id) => {
    let newExpences = expences;
    let newExpence = newExpences[id];

    newExpences.splice(id, 1);
    newExpences.splice(id - 1, 0, newExpence);

    handleUpdateExpences(newExpences);
  }

  //get the index of expence and make a new expences with index+1
  const handleExpenceChangeIndexToDownOnClick = (id) => {
    let newExpences = expences;
    let newExpence = newExpences[id];

    newExpences.splice(id, 1);
    newExpences.splice(id + 1, 0, newExpence);

    handleUpdateExpences(newExpences);
  }

  //render view
  return (
    <>
      <Header money={money} setMoney={setMoney} />
      {/* 
        FIXME: make it need list promp
      */}
      <Body
        expence={expence}
        setExpence={setExpence}
        handleNewExpence={handleNewExpence}
        expences={expences}
        handleDeleteOnClick={handleDeleteOnClick}
        handleDoneOnClick={handleDoneOnClick}
        handleExpenceChangeIndexToDownOnClick={handleExpenceChangeIndexToDownOnClick}
        handleExpenceChangeIndexToUpOnClick={handleExpenceChangeIndexToUpOnClick}
      />
      <Footer expenceLength={expences.length} moneyRemains={moneyRemains} />
    </>
  );
}

export default App;