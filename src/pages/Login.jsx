import useUserAuth from "../hooks/useUserAuth";

function Login() {
  const { signInWithProvider } = useUserAuth();

  return (
    <div>
      <h1>Login</h1>
      <button
        className="p-2 bg-blue-500 text-white"
        onClick={signInWithProvider}
      >
        Click para logearte
      </button>
    </div>
  );
}

export default Login;
