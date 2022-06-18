import { useState } from "react";
import ChooseMatch from './components/ChooseMatch';

const App = () => {

  const [matchScreen, setMatchScreen] = useState('principal')
  const renderMatchScreen = () => {
    switch (matchScreen){
      case 'match':
        return <ChooseMatch />
      case 'conversation':
        return <ChatMatch />
    }
  }


  return(
    <div>
      <p>Hello world</p>
    </div>
  )
}

export default App