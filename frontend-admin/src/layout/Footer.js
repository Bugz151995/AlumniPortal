const Footer = () => {
  return (
    <div className="app-wrapper-footer">
      <div className="app-footer">
        <div className="app-footer__inner">
          <div className="app-footer-left">
            <ul className="nav">
              <li className="nav-item">
                <a href="/docs" className="nav-link">
                  ParSU Admin v1.1.1
                </a>
              </li>
            </ul>
          </div>
          <div className="app-footer-right">
            <ul className="nav">
              <li className="nav-item">
                <a href="https://parsu.edu.ph" className="nav-link">
                  <span className="align-middle"><i className="far fa-copyright mr-1"></i> 2021 Partido State University</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Footer
