import AppPageTitle from "../template/AppPageTitle";
import AppTableContainer from "../template/AppTableContainer";
import { Button, Table } from "react-bootstrap";

const TableData = () => {
  return (
    <tr data-toggle="tooltip" data-placement="right" title="<?= $a['content']?>">
      <td className="text-center text-muted">#1</td>
      <td>
        <div className="widget-content p-0">
          <div className="widget-content-wrapper">
            <div className="widget-content-left me-3">
              <div className="widget-content-left">
                <img width="40" className="rounded-circle" src="http://localhost:3000/assets/images/avatars/1.jpg" alt=""/>
              </div>
            </div>
            <div className="widget-content-left flex2">
              <div className="widget-heading">Full Name</div>
              <div className="widget-subheading opacity-7">
                Role
              </div>
            </div>
          </div>
        </div>
      </td>
      <td className="text-center">
        <span className="d-inline-block text-truncate" style={{maxWidth: 300 + 'px'}}>
          Post Content
        </span>
      </td>
      <td className="text-center">
        Post Date
      </td>
      <td className="text-center">
        <div className="d-flex justify-content-center gap-3">
          <Button size="sm">
            <i className="pe-7s-note"></i>
          </Button>
          <Button size="sm" variant="danger">
            <i className="pe-7s-trash"></i>
          </Button>
        </div>
      </td>
    </tr>
  )
}

const AdminListTable = () => {
  return (    
    <Table striped hover responsive className="align-middle mb-0">
      <thead>
        <tr>
          <th className="text-center">#</th>
          <th>Posted By</th>
          <th className="text-center">Announcement</th>
          <th className="text-center">Posted @</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <TableData />
      </tbody>
    </Table>
  )
}

const Index = () => {
  return (
    <div className="app-main__inner">
      <AppPageTitle iconName={"network"} pageTitle={"Admin List"}/>
      <AppTableContainer table={<AdminListTable />} tableTitle={`Admin List`}/>
    </div>
  )
}

export default Index
