import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAtom, atom } from "jotai";
import tRPCclient from "../../utils/tRPC";

interface FormDataSignIn {
  email: string;
  password: string;
}

const loginStatusAtom = atom("idle");
const errorMessageAtom = atom("");

export function Login() {
  const [loginStatus, setLoginStatus] = useAtom(loginStatusAtom);
  const [errorMessage, setErrorMessage] = useAtom(errorMessageAtom);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<FormDataSignIn>();
  // const hello = tRPCclient.users.hello.query

  const handleSignInClick = async () => {
    // console.log("test");
    navigate("/SignIn");
    // const res = await hello()
    
    
  };

  const handleSignIn = async (data: FormDataSignIn) => {
    setLoginStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("YOUR_API_LOGIN_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.user) {
        console.log("התחברות מוצלחת");
        setLoginStatus("success");
        navigate("/dashboard");
      } else {
        console.error("התחברות נכשלה");
        setLoginStatus("error");
        setErrorMessage("שם משתמש או סיסמה שגויים");
      }
    } catch (error) {
      console.error("שגיאה במהלך התחברות:", error);
      setLoginStatus("error");
      setErrorMessage("שגיאה במהלך התחברות");
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-cover ${styles.page}`}
      style={{
        backgroundImage:
          'url("https://www.shvoong.co.il/wp-content/uploads/2022/01/shutterstock_1124541077.jpg")',
      }}
    >
      <div className="bg-white p-8 rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          התחברות לאתר מזג אויר
        </h2>
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              email
            </label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                {...register("email")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                {...register("password")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              login
            </button>
            <br></br>
            <button
              type="button"
              onClick={handleSignInClick}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              SignIn
            </button>
          </div>
        </form>
        {loginStatus === "error" && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default Login;
