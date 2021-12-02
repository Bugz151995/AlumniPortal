import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const PageTitleAction = (props) => {
  return (
    <div className="page-title-actions">
      <Button variant="primary" onClick={props.handleShow}>
        <span class="btn-icon-wrapper opacity-7">
          <i className="fas fa-plus-circle"></i>
        </span>
      </Button>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes  
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
};

const AppPageTitle = (props) => {
  const [iconName,  setIconName]  = useState("");
  const [pageTitle, setPageTitle] = useState("");
  const [show,      setShow]      = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setIconName(props.iconName);
    setPageTitle(props.pageTitle);
  }, [props.iconName, props.pageTitle]);

  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div className="page-title-icon">
            <i className={"icon-gradient bg-mean-fruit pe-7s-" + iconName}></i>
          </div>
          <div>
            {pageTitle}
            <div className="page-title-subheading">
              Welcome to the {pageTitle} Page!
            </div>
          </div>
        </div>
        <PageTitleAction show={show} handleShow={handleShow} handleClose={handleClose}/>
      </div>
    </div>
  );
};

export default AppPageTitle;
