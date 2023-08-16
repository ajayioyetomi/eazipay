import {AccountRouter,GeneralRouter} from './router';
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Routes>
      <Route path='/account/*' element={<AccountRouter/>}/>
      <Route path='/*' element={<GeneralRouter/>}/>
    </Routes>
           
    </>
  )
}

export default App
