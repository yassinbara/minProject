
import './App.css';
import Header from './header';
import Post from "./Post";
import SideMenu from './SideMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='to'>

        <div className={"SMC"}>
          <div className='po'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
          <div className='side'>

          <SideMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
