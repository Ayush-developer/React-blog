import { Link } from 'react-router-dom'
import './navbarstyle.css'
const Navbar  = () => {

    return (
        <nav className="navbar">
            
            <ul>
    <li><Link to ="/">Home</Link></li>
    
    <li><Link to="/create">Create Blog</Link></li>
  </ul>
            
        </nav>
     );
}
 
export default Navbar ;