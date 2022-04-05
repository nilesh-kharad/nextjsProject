import Image from 'next/image'
import logo from '../public/logo.png'
const Sidebar = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <Image
        src={logo} className="sidebarLogo" alt="Company logo" width="150px" height="50px" />
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="reportForm">
              <span className="menu-title">Faculty Details</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charts">
              <span className="menu-title">Students Faculty Ratio</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charts">
              <span className="menu-title">Faculty Cadre Proportion</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charts">
              <span className="menu-title">Faculty Qualification</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charts">
              <span className="menu-title">Faculty Retention</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charts">
              <span className="menu-title">Innovations</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charts">
              <span className="menu-title">Faculty as Participants</span>
            </a>
          </li>
          <li className="nav-item nav-category">Research and Development</li>
          <li className="nav-item">
            <a className="nav-link" href="/Academicresearch">
              <span className="menu-title">Academic Research</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charts">
              <span className="menu-title">Sponsored Research</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charts">
              <span className="menu-title">Faculty as Participants</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charts">
              <span className="menu-title">Development Activities</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#charts">
              <span className="menu-title"> Consultancy (Industry)</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Sidebar