import LoginWith from "./components/LoginWith";

export default function Login() {
  return (
    <div className="flex flex-col justify-around items-center w-screen">
        <img src="uc.png" width={200} />
        <div className="flex flex-col justify-around items-center bg-secondary m-b p-b w-screen md:w-2/4 lg:w-1/4 rounded-default">
          <LoginWith provider="google" />
          <LoginWith provider="google" />
          <LoginWith provider="google" />
        </div>
    </div>
  )
}
