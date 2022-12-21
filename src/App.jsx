
const App =() =>{
  const num = 5;


  return (
    <div>
      {(num % 2 == 0) && <p> Broj {num} je paran</p>}
      {(num % 2 != 0) && <p> Broj {num} je neparan</p>}
    </div>
  );
}

export default App;
