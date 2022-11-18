import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Register = () => {
    const { createUser, update ,signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.displayName.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                toast.success('successfully create user')
                update(displayName)
                .then(()=>{})
                .catch(error=> console.log(error))
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error);
            })
        form.reset();

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
                    <h1 className="text-5xl font-bold">Register</h1>

                </div>
                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full md:w-[480px]    ">
                    <div className="card-body">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='displayName' placeholder="Name" className="input input-bordered" required />
                        </div>

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

                        </div>


                        <div className="form-control mt-6">
                            <button className="btn bg-gray-600 hover:bg-gray-600 text-white">Register</button>
                        </div>

                    </div>
                </form>
                <p className='text-center'>If You Have Any Account Please  <Link to='/login' className='text-primary'>Login</Link></p>
                <div className="divider">OR</div>

                <button onClick={googleSubmitHandle} className=' py-3 px-10 border rounded-xl bg-slate-400 justify-center w-96'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Register;