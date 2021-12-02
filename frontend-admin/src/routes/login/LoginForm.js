import { useFormik } from "formik";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.minimal.css";
import * as yup from "yup";
import axios from "axios";

function LoginForm() {
  const schema = yup.object().shape({
    username: yup.string().required("Please enter your email."),
    password: yup.string().required("Please enter your password."),
    grant_type: yup.string(),
  });

  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      grant_type: "password",
      username: "",
      password: ""
    },
    onSubmit: (data) => {
      axios({
        headers: {
          "Content-Type": "application/json"
        },
        method: "post",
        url: "http://admin.parsuap-api.ph/login",
        data: JSON.stringify(data)
      })
        .then((response) => {
          if(response.status === 200) {
            axios({
              headers: {
                "Content-Type": "application/json"
              },
              auth: {
                username: 'admin_app',
                password: '7094b527b637f079b053b78dcb1c3a54'
              },
              method: "post",
              url: "http://admin.parsuap-api.ph/authorize",
              data: JSON.stringify(data)
            })
              .then((response) => {
                // do redirect here to home page.
                navigate('/home');
              })
              .catch((error) => {
                toast.error(error.response.data.error_description);
                toast.info("Please contact the administrator.");
              })
          }
        })
        .catch((error) => {
          var messages = error.response.data.messages;
          toast.error(messages.username);
          toast.error(messages.password);
        })
    }
  });

  return (
    <>    
      <ToastContainer />
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="validationEmail">
          <Form.Label>
            <span className="text-danger me-1">*</span>
            Email
          </Form.Label>
          <Form.Control
            name="username"
            type="email"
            value={formik.values.username}
            onChange={formik.handleChange}
            isValid={formik.touched.username && !formik.errors.username}
            isInvalid={formik.touched.username && formik.errors.username}
            placeholder="Enter your Email..."
            size="sm"
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="validationPassword">
          <Form.Label>
            <span className="text-danger me-1">*</span>
            Password
          </Form.Label>
          <Form.Control
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            isValid={formik.touched.password && !formik.errors.password}
            isInvalid={formik.touched.password && formik.errors.password}
            placeholder="Enter your Password..."
            size="sm"
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <hr className="mt-5" />
        <Form.Group className="small float-start">
          <Link to="/signup" className="text-decoration-none">Don't have Account?</Link> 
        </Form.Group>
        <Form.Group className="float-end">
          <Button type="submit" size="sm">
            Login
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default LoginForm;
