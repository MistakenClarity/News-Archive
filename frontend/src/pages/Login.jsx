import { useState } from "react"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
    }

    return (
    // <form className="bg-slate-400 w-80 p-4 mt-16 mx-auto text-center rounded" onSubmit={handleSubmit} autoComplete="off">
    //     {/* <h3 className="">Login</h3> */}
    //     <img src="/keyh.png" className="mx-auto w-32"></img>
    //     <h3 className="mt-4 mb-1">[ Username ]</h3>
    //     <input className="rounded h-8 text-center" type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
    //     <h3 className="mt-4 mb-1">[ Password ]</h3>
    //     <input className="rounded h-8 text-center" type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
    //     <br/>
    //     <button className="bg-slate-600 m-5 py-1 px-5 border border-2 rounded border-slate-800 hover:bg-slate-300 ">Login</button>
    // </form>
    <div>IN PROGRESS</div>
  );
}

export default Login