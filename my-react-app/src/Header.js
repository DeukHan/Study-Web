import {Link} from 'react-router-dom'
function Header()  {
    return (
    <div> 
        <ul class="nav">
          <li class="nav-item">
            <div class="nav-link active" aria-current="page"><Link to="/">Home</Link></div>
          </li>
          <li class="nav-item">
            <div class="nav-link"><Link to="/login">Login</Link></div>
          </li>
          <li class="nav-item">
            <div class="nav-link"><Link to="/join">Join</Link></div>
          </li>
      </ul>  
    </div>
    )
}

export default Header;