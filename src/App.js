import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./Hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/Productlist/Productlist";
import Form from "./components/Form/Form";
function App() {
    const {onToggleButton, tg} = useTelegram();
  useEffect(() =>
    {
        tg.ready();
    }, [])


    return (
    <div className="App">
        <Header/>
        <Routes>
            <Route index element={<ProductList />}/>
            <Route path={'form'} element={<Form />}/>
        </Routes>
<button onClick={onToggleButton}>Отправить</button>

    </div>
  );
}

export default App;
