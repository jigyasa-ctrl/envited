import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import App from './App';
import Create from './components/Create';
import Events from './components/Events';
function Main() {

    return (
        <Router>
            <Routes>
                <Route exact path='/' element={< App />}></Route>
                <Route exact path='/create' element={< Create />}></Route>
                <Route exact path='/event' element={<Events />}></Route>
            </Routes>
        </Router >
    );
}

export default Main