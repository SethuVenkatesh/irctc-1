import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import NewTrain from './admin/NewTrain';
import AllTrain from './admin/AllTrain';
import UpdateTrain from './admin/UpdateTrain';


function App() {
  return (
    <div className="h-screen w-full p-2">
      <Router>
        <Routes>
          <Route path='/train/new' element={<NewTrain/>}/>
          <Route path='/train/update' element={<UpdateTrain/>}/>
          <Route path='/train/all' element={<AllTrain/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
