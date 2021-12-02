import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { Form, Button, Row, Col } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Autocomplete from "./Autocomplete";
import * as yup from "yup";
import axios from "axios";

const SignupForm = () => {
  /*
   * define the validation schema for the signup form
   */
  const schema = yup.object().shape({
    fname: yup.string().required("Please enter your first name."),
    lname: yup.string().required("Please enter your last name."),
    role: yup.string().required("Please provide a role."),
    email: yup.string()
      .required("Please provide an email.")
      .email("Please provide a valid email."),
    password: yup.string().required("Please provide a password."),
    passconf: yup.string().required("Please confirm your password."),
  });

  /*
   * pass the useForm() hook initial form values, a validate function
   * that will be called when form values change or fields are blurred, * and a submit function that will be called when the form is submitted
   */
  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      fname: "",
      lname: "",
      role: "",
      email: "",
      password: "",
      passconf: "",
    },
    onSubmit: (data) => {
      axios({
        headers: { "Content-Type": "application/json" },
        method: "post",
        url: "http://admin.parsuap-api.ph/signup",
        data: JSON.stringify(data),
      })
        .then((response) => {
          toast.success("You have successfully created an account!");
          toast.info(
            "Your account will now be validated, Please wait for the email confirmation."
          );
        })
        .catch((error) => {
          if (error.response) {
            const map = new Map(Object.entries(error.response.data.messages));

            map.forEach((e) => {
              toast.error(e);
            });
          }
        });
    },
  });

  return (
    <>
      <ToastContainer />
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="row-cols-1 row-cols-md-2">
          <Form.Group as={Col} className="mb-3" controlId="validationFname">
            <Form.Label>
              <span className="text-danger me-1">*</span>
              First Name
            </Form.Label>
            <Form.Control
              name="fname"
              type="text"
              placeholder="Enter your First Name..."
              size="sm"
              isValid={formik.touched.fname && !formik.errors.fname}
              isInvalid={formik.touched.fname && formik.errors.fname}
              {...formik.getFieldProps("fname")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.fname}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="validationLname">
            <Form.Label>
              <span className="text-danger me-1">*</span>
              Last Name
            </Form.Label>
            <Form.Control
              name="lname"
              type="text"
              placeholder="Enter your Last Name..."
              size="sm"
              isValid={formik.touched.lname && !formik.errors.lname}
              isInvalid={formik.touched.lname && formik.errors.lname}
              {...formik.getFieldProps("lname")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lname}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="row-cols-1 row-cols-md-2">
          <Form.Group as={Col} className="mb-3" controlId="validationRole">
            <Form.Label>
              <span className="text-danger me-1">*</span>
              Work Position/Role
            </Form.Label>

            <Autocomplete
              name="role"
              type="text"
              placeholder="Enter Work Position/Role..."
              size="sm"
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              setFieldValue={formik.setFieldValue}
              value={formik.values.role}
            />

            <Form.Control.Feedback type="invalid">
              {formik.errors.role}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="validationEmail">
            <Form.Label>
              <span className="text-danger me-1">*</span>
              Email
            </Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your Email..."
              size="sm"
              isValid={formik.touched.email && !formik.errors.email}
              isInvalid={formik.touched.email && formik.errors.email}
              {...formik.getFieldProps("email")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="row-cols-1 row-cols-md-2">
          <Form.Group as={Col} className="mb-3" controlId="validationPass">
            <Form.Label>
              <span className="text-danger me-1">*</span>
              Password
            </Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Enter your Password..."
              size="sm"
              isValid={formik.touched.password && !formik.errors.password}
              isInvalid={formik.touched.password && formik.errors.password}
              {...formik.getFieldProps("password")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} className="mb-3" controlId="validationPassC">
            <Form.Label>
              <span className="text-danger me-1">*</span>
              Password Confirmation
            </Form.Label>
            <Form.Control
              name="passconf"
              type="password"
              placeholder="Enter your Password Confirmation..."
              size="sm"
              isValid={formik.touched.passconf && !formik.errors.passconf}
              isInvalid={formik.touched.passconf && formik.errors.passconf}
              {...formik.getFieldProps("passconf")}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.passconf}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <hr className="mt-5" />
        <Form.Group className="small">
          <Link to="/" className="text-decoration-none">
            Already have Account?
          </Link>

          <Button className="float-end" type="submit" size="sm">
            Signup
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default SignupForm;
