import './App.css'
import Lottery from './lotteryGame/Lottery'
function App() {

  return (
    <>
      <h1>Lottery Game !</h1>
    <Lottery num={3} winningNum={15} />
    </>
  )
} 

export default App
