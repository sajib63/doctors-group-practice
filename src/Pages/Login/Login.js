import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Login = () => {
    const { signInUser , signInWithGoogle, resetPassword} = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
 

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        setError();
        const email = form.email.value;
     
        const password = form.password.value;
        signInUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });

            })
            .catch(error => {
                setError(error.message)
            })

    }

    const googleSubmitHandle=()=>{
        signInWithGoogle()
        .then(()=>{
            toast.success('login SuccessFull')
            navigate(from, { replace: true });
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }

  
    return (

        <div className="hero min-h-screen  ">
            <div className="hero-content flex-col bg-base-100 shadow-2xl rounded-xl">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full md:w-[480px]    ">
                    <div className="card-body">



                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>

                        {
                            error && <p className='text-red-600 text-2xl'>{error}</p>
                        }

                        <div className="form-control mt-6">
                            <button className="btn bg-gray-600 hover:bg-gray-600 text-white">Login</button>
                        </div>

                    </div>
                </form>
                <p className='text-center'>New To Doctor Portal? <Link to='/register' className='text-primary'>Create New Account</Link></p>
                <div className="divider">OR</div>

                <button onClick={googleSubmitHandle} className=' py-3 px-10 border rounded-xl bg-slate-400 justify-center w-96'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;