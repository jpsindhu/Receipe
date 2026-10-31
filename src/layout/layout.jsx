import NavBar from '../components/NavBar.jsx';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
           <div className="App">
            <NavBar />
            <main className="content">  
                <Outlet />
            </main>
      
    </div>
    )
}

export default Layout