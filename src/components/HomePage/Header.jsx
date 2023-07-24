
import { Link } from 'react-router-dom'
import '../../index.css'
export default function Header() {
  return (
    <div>
        {/* <!-- header section strats --> */}
    <header className="header_section">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" href="">
          <span>
            Giftos
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className=""></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ">
            <li className="nav-item active">
              <Link to={'/'} className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to={'/shop'} className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/why'} className="nav-link">
                Why Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/testimonial'} className="nav-link">
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/contact'} className="nav-link">Contact Us</Link>
            </li>
          </ul>
          <div className="user_option">
            <Link to={'/login'} >
              <i className="fa fa-user" aria-hidden="true"></i>
              <span>
                Login
              </span>
            </Link>
            <Link to={'/cart'} >
              <i className="fa fa-shopping-bag" aria-hidden="true"></i>
            </Link>
            <form className="form-inline ">
              <button className="btn nav_search-btn" type="submit">
                <i className="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    {/* <!-- end header section --> */}
    </div>
  )
}
