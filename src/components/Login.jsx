import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { toast } from "react-toastify";

const Login = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Password required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    const { email, password } = values;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login successfully");
    } catch (err) {
      toast.error("Please sign up if you don't have an account.");
      console.log(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="px-3">
      <div className="max-w-sm mx-auto mt-10 px-3 border">
        <h2 className="text-3xl text-blue-500 mb-4">Login</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="border p-2 w-full"
              />
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="border p-2 w-full"
              />
              <ErrorMessage
                name="password"
                component="p"
                className="text-red-500"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white px-2 py-1 rounded mb-4 w-full"
            >
              Login
            </button>
          </Form>
        </Formik>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="text-red-700">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
