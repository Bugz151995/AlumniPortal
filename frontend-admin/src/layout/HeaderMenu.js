const HeaderMenu = () => {
  return (
    <div className="app-header__menu">
      <span>
        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
          <span className="btn-icon-wrapper">
            <i className="fa fa-ellipsis-v fa-w-6"></i>
          </span>
        </button>
      </span>
    </div>
  )
}

export default HeaderMenu
