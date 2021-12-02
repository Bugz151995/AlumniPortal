import { Button,ButtonGroup, Card } from "react-bootstrap"

const AppTableContainer = (props) => {
  return (
    <Card className="mb-3">
      <Card.Header>{props.tableTitle}
        <div className="btn-actions-pane-right">
          <ButtonGroup role="group" size="sm">
            <Button className="active btn-focus">Last Week</Button>
            <Button className="btn-focus">All Month</Button>
          </ButtonGroup>
        </div>
      </Card.Header>

      {props.table}

      <Card.Footer>
        <Button className="me-2 btn-icon btn-icon-only" variant="outline-danger">
          <i className="pe-7s-trash btn-icon-wrapper"></i>
          </Button>
        <Button className="btn-wide" variant="success">Save</Button>
      </Card.Footer>
    </Card>
  )
}

export default AppTableContainer