import styles from './signIn.module.css';
import { useNavigate } from 'react-router-dom';
import { useForm, FieldValues } from 'react-hook-form';
import tRPCclient from '../../utils/tRPC';

export interface HelloProps {}

export function SignIn(props: HelloProps) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const hello = tRPCclient.users.SignIn.mutate;

  const handleSignIn = async (data: FieldValues) => {
    try {
      if (data.password !== data.passwordConfirmation) {
        console.log(data.password, data.passwordConfirmation);

        console.error('הסיסמה ואימות הסיסמה אינם תואמים');
        return 'הסיסמה ואימות הסיסמה אינם תואמים';
      }

      //   if (!isValidEmail(data.email) || !isValidPassword(data.password)) {
      //     console.error("אימייל או סיסמה לא תקינים");
      //     return ("אימייל או סיסמה לא תקינים");
      //   }

      //   const isEmailExists = await checkEmailExistence(data.email);
      //   if (isEmailExists) {
      //     console.error("האימייל כבר קיים במערכת");
      //     return ("האימייל כבר קיים במערכת");
      //   }
      const test = await hello({ email: data.email, password: data.password });
      navigate('/Map');
      console.log(test);
    } catch (error) {
      console.error('שגיאה במהלך התחברות:', error);
    }
  };

  // const isValidEmail = (email: string): boolean => {
  //   // כאן יש להוסיף בדיקה לפי כללי התקן של אימייל
  //   return true;
  // };

  // // פונקציה לבדיקת תקינות סיסמה
  // const isValidPassword = (password: string): boolean => {
  //   // כאן יש להוסיף בדיקה לפי כללי התקן של סיסמה
  //   return true;
  // };

  // // פונקציה לבדיקת קיום האימייל במערכת
  // const checkEmailExistence = async (email: string): Promise<boolean> => {

  //   return false;
  // };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-cover ${styles.page}`}
      style={{
        backgroundImage:
          'url("https://www.shvoong.co.il/wp-content/uploads/2022/01/shutterstock_1124541077.jpg")',
      }}
    >
      <div className={styles.container}>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              הרשמה לאתר של מזג אויר
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                    // name="email"
                    type="email"
                    autoComplete="email"
                    required
                    {...register('email')}
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
                    {...register('password')}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="passwordConfirmation"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password Confirmation
                </label>
                <input
                  id="passwordConfirmation"
                  // name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  {...register('passwordConfirmation')}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
