import "./App.scss";
import {useState, useEffect} from 'react';
import { CustomersPage } from "./components/CustomersPage";
import { Navigation } from "./components/Navigation";

function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  
  useEffect(() => {
    const body = document.querySelector('body');
    if (isShowMenu) {
      body?.classList.add('lock')
    } else {
      body?.classList.remove('lock')
    }
  }, [isShowMenu]);

  return (
    <div className="app">
      <div onClick={() => setIsShowMenu(!isShowMenu)} className={`app__menu-btn`}>
        <div className={`app__menu-btn-item ${isShowMenu ? 'app__menu-btn-item--open' : ''}`}></div>
        <div className={`app__menu-btn-item ${isShowMenu ? 'app__menu-btn-item--open' : ''}`}></div>
      </div>
      <Navigation isShow={isShowMenu} />
      <CustomersPage />
    </div>
  );
}

export default App;
