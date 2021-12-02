const HeaderLogo = () => {
  return (
    <div className="app-header__logo">
      <div className="logo-src"></div>
      <div className="header__pane ml-auto">
        <div>
          <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeaderLogo
