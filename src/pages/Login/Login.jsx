import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const location = useLocation();
    console.log(location);
    const navigate =  useNavigate();
    const {signIn} = useContext(AuthContext);
    const handleLogin = e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email,password)
        // .then(result=>{
        //     console.log("Logged in Successfully" ,result.user))
        // }
        .then(result=>{
            console.log('Logged Successfully ',result);
            navigate(location?.state ? location.state : '/home')
        })
        .catch(error=>console.error(error));
    }
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-3xl text-center mt-10">This is Login Page</h3>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    
                    <p>New to this website ?<Link to='/register' className="font-bold text-blue-600">Register</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Login;