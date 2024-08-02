import { useState } from 'react';
import './App.css';

function App() {


  //first we have to take intial value 0 using useState for dynamically update the value 
  const[bill,setBill]=useState('');
  const[tipPercentage,setTipPercentage]=useState('');
  const[numberOfPeople,setNumberOfPeople]=useState('');
  const[customTip,setCUstomTip]=useState('');

//then we have to handle reset button.
  const handleReset=()=>{
    setBill('');
    setTipPercentage('');
    setCUstomTip('');
    setNumberOfPeople('');

  };

  //we have to calculate tip amount
  const calculateTipAmount=()=>{
    let tipPercent=0;
    if(customTip>0){
      tipPercent=customTip/100;
    }else{
      tipPercent=tipPercentage/100;
    }
    if(numberOfPeople>0){
      return (bill*tipPercent)/numberOfPeople;
    }
    return 0;

  };

  const calculateTotalPerson=()=>{
    let tipPercent=0;
    if (customTip >0){
      tipPercent=customTip/100;
    }else{
      tipPercent=tipPercentage/100;
    }

    if(numberOfPeople >0){
      return (bill+ bill * tipPercent)/numberOfPeople;
    }
    return 0;
  };

  // const handleChange=(event)=>{
  //   const value=event.target.valueAsNumber;
  //   setCUstomTip(value);
  // };
  // const calculateTipAmount = () => {
  //   const billValue = parseFloat(bill) || 0;
  //   const numberOfPeopleValue = parseFloat(numberOfPeople) || 0;
  //   const tipPercent = customTip > 0 ? customTip / 100 : (parseFloat(tipPercentage) || 0) / 100;

  //   if (numberOfPeopleValue > 0) {
  //     return (billValue * tipPercent) / numberOfPeopleValue;
  //   }
  //   return 0;
  // };

  

  return (
    <>
    
    <h2 className="title">spli <br />tter</h2>
    <div className="card">
      <div className="card-container">
        <div className="inputs-section">
          <div className="bill-sec">
            <label htmlFor="bill">Bill</label>
            <div className="bill-input">
              <input type="text" placeholder="0" id="bill" value={bill} onChange={({target:{value}})=>setBill(parseFloat(value))} />
              {/* <input type="number" placeholder="0" id="bill" value={bill} onChange={handleChange}/> */}
              <img src="./images/icon-dollar.svg" alt="dollar icon" />
            </div>
          </div>
          <div className="tip-sec">
            <label htmlFor="custom">Select Tip %</label>
            <div className="tip-btns">
              <div>
                <button onClick={()=>setTipPercentage('5')}>5%</button>
                <button onClick={()=>setTipPercentage('10')}>10%</button>
                <button onClick={()=>setTipPercentage('15')}>15%</button>
              </div>
              <div>
                <button onClick={()=>setTipPercentage('25')}>25%</button>
                <button onClick={()=>setTipPercentage('50')}>50%</button>
                <input type="number" placeholder="Custom" id="custom" value={customTip} onChange={({target:{value}})=>setCUstomTip(parseFloat(value))}/>
                {/* <input type="number" placeholder="custom" id="custom" value={customTip} onChange={handleChange}/> */}
              </div>
            </div>
          </div>
          <div className="people-sec">
            <label htmlFor="people">Number of People</label>
            <div className="people-input">
              <input type="text" placeholder="0" id="people" value={numberOfPeople} onChange={({target:{value}})=>setNumberOfPeople(parseFloat(value))}/>
              <img src="./images/icon-person.svg" alt="person icon" />
            </div>
          </div>
        </div>
        <div className="outputs-section">
          <div className="tip-amount">
            <p>Tip Amount<br /><span>/ person</span></p>
            <h2 id="tipAmount">${calculateTipAmount().toFixed(2)}</h2>
          </div>
          <div className="total">
            <p>Total<br /><span>/ person</span></p>
            <h2 id="total">${calculateTotalPerson().toFixed(2)}</h2>
          </div>
          <button className="reset-btn" id="resetBtn" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
    <script src="app.js"></script>
 
    </>
   
  );
}

export default App;
