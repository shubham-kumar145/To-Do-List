import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Deatilsnavbar from './Deatilsnavbar';

const Login = () => {

    const [isSignup, setIsSignup] = useState(() => {
        const stored = localStorage.getItem('isSignup');
        return stored === 'true'
    });

    useEffect(() => {
        localStorage.setItem('isSignup', isSignup);
    }, [isSignup]);

    const [visiblePasswords, setVisiblePasswords] = useState({});

    const {
        register: registerSignup,
        handleSubmit: handleSignup,
        watch: watchSignup,
        clearErrors: clearSignupErrors,
        reset: resetSignup,
        formState: { errors: signupErrors, isSubmitting: signupisSubmitting },
    } = useForm();

    const {
        register: registerSignin,
        handleSubmit: handleSignin,
        clearErrors: clearSigninErrors,
        reset: resetSignin,
        formState: { errors: signinErrors, isSubmitting: signinisSubmitting },
    } = useForm();

    const handleToggle = () => {
        setIsSignup((prev) => {
            const newState = !prev;
            localStorage.setItem('isSignup', newState);
            return newState;
        });
        resetSignup();
        resetSignin();
    };

    const onSignup = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Signup Data:", data);
        alert("Signup Successful")
    };

    const onSignin = async (data) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("Signin Data:", data);
        alert("Signin Successful")
    };

    const SocialIcons = () => (
        <div className="flex justify-center gap-4 mt-4">
            <i className="fab fa-facebook-f bg-blue-500 text-white h-9 w-9 px-3 py-2.5 rounded-full hover:scale-110 transition"></i>
            <i className="fab fa-google-plus-g bg-red-500 text-white h-9 w-9 px-2 py-2.5 rounded-full hover:scale-110 transition"></i>
            <i className="fab fa-linkedin-in bg-blue-600 text-white h-9 w-9 px-2.5 py-2.5 rounded-full hover:scale-110 transition"></i>
        </div>
    );

    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[_.=\+\/\\|@#\$%\^&\*!~<,>\?-])[A-Za-z\d_.=\+\/\\|@#\$%\^&\*!~<,>\?-]+$/

    const signin_val_data = [
        { name: "signinUsername", type: "text", placeholder: "Username", required: true, minLength: 4, maxLength: 20, pattern: /^[A-Za-z\s'-]+$/, pattern_message: "Only letters, spaces, apostrophes, and hyphens are allowed" },
        { name: "signinPassword", type: "password", placeholder: "Password", required: true, minLength: 4, maxLength: 20, pattern: password_pattern, pattern_message: "Must include at least one letter, one number, and one special character" },
    ]

    const signup_val_data = [
        { name: "signupUsername", type: "text", placeholder: "Username", required: true, minLength: 4, maxLength: 20, pattern: /^[A-Za-z\s'-]+$/, pattern_message: "Only letters, spaces, apostrophes, and hyphens are allowed" },
        { name: "signupEmail", type: "email", placeholder: "Email", required: true, minLength: 4, maxLength: 30 },
        { name: "signupPassword", type: "password", placeholder: "Password", required: true, minLength: 6, maxLength: 20, pattern: password_pattern, pattern_message: "Must include at least one letter, one number, and one special character" },
        { name: "confirmPassword", type: "password", placeholder: "Confirm Password", required: true, minLength: 6, maxLength: 20, pattern: password_pattern, pattern_message: "Must include at least one letter, one number, and one special character" },
    ];

    const togglePasswordVisibility = (fieldName) => {
        setVisiblePasswords((prev) => ({
            ...prev,
            [fieldName]: !prev[fieldName],
        }));
    };

    return (
        <>
            <Deatilsnavbar />
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-500 via-violet-200 to-gray-400 px-4 pt-18">
                <div className="relative bg-white shadow-2xl rounded-2xl w-full max-w-5xl overflow-hidden">

                    <div className={`relative w-[200vw] sm:w-full flex flex-row sm:justify-around transition-transform duration-700 ease-in-out`}>

                        {/* Sign Up Form */}
                        <div className={`w-[80vw] sm:w-1/2 p-9 flex flex-col justify-center transition-transform duration-700 ease-in-out
                        ${isSignup ? 'translate-x-[-100%] sm:translate-x-[100%]' : 'translate-x-[10%] sm:translate-x-[200%]'}`}>
                            <h2 className="text-3xl font-bold text-center text-violet-500 mb-6">SignUp</h2>
                            <form onSubmit={handleSignup(onSignup)} className="flex flex-col gap-4">
                                {signup_val_data.map((value) => (
                                    <div key={value.name} className="mb-4 relative">
                                        <input
                                            type={
                                                value.type === "password" && visiblePasswords[value.name]
                                                    ? "text"
                                                    : value.type
                                            }
                                            placeholder={value.placeholder}
                                            {...registerSignup(value.name, {
                                                required: value.required === true ? "This field is required" : false,
                                                minLength: value.minLength
                                                    ? {
                                                        value: parseInt(value.minLength),
                                                        message: `Minimum ${value.minLength} characters`,
                                                    }
                                                    : undefined,
                                                maxLength: value.maxLength
                                                    ? {
                                                        value: parseInt(value.maxLength),
                                                        message: `Maximum ${value.maxLength} characters`,
                                                    }
                                                    : undefined,
                                                pattern: value.pattern
                                                    ? {
                                                        value: new RegExp(value.pattern),
                                                        message: value.pattern_message,
                                                    }
                                                    : undefined,
                                                validate: value.name === "confirmPassword"
                                                    ? (val) => val === watchSignup("signupPassword") || "Passwords do not match"
                                                    : undefined,
                                            })}
                                            className="border p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400 w-full pr-12"
                                        />

                                        {(value.type === "password" || value.name === "confirmPassword") && (
                                            <button
                                                type="button"
                                                onClick={() => togglePasswordVisibility(value.name)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
                                            >
                                                {visiblePasswords[value.name] ? "👀" : "🙈"}
                                            </button>
                                        )}
                                        {(signupErrors[value.name]) && (
                                            <span className="text-sm text-red-500">{signupErrors[value.name].message}</span>
                                        )}
                                    </div>
                                ))}

                                <button
                                    type="submit"
                                    disabled={signupisSubmitting}
                                    className="bg-violet-400 hover:bg-violet-500 text-white py-3 rounded-lg mt-2 font-semibold transition"
                                >
                                    {signupisSubmitting ? "Creating your Account...." : "Create Account"}
                                </button>
                            </form>
                            <p className="text-center text-gray-600 mt-5">or you can sign up with</p>
                            {SocialIcons()}
                            <div className="sm:hidden bg-gradient-to-br from-violet-300 to-blue-400 text-white flex flex-col justify-center items-center p-6 rounded-xl shadow-lg gap-4 mt-7">
                                <span className="text-center text-lg font-medium leading-relaxed px-2">
                                    Already have an account? Sign in to stay connected with us.
                                </span>
                                <button
                                    onClick={() => setIsSignup(!isSignup)}
                                    className="bg-white text-violet-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 shadow-md transition-all duration-300 hover:scale-105"
                                >
                                    {isSignup ? 'SignUp' : 'SignIn'}
                                </button>
                            </div>
                        </div>

                        {/* Sign In Form */}
                        <div className={`w-[80vw] sm:w-1/2 p-9 flex flex-col justify-center transition-transform duration-700 ease-in-out
                        ${isSignup ? 'translate-x-[-90%] sm:translate-x-[-200%]' : 'translate-x-[100%] sm:translate-x-[-100%]'}`}>
                            <h2 className="text-3xl font-bold text-center text-violet-500 mb-6">SignIn</h2>
                            <form onSubmit={handleSignin(onSignin)} className="flex flex-col gap-4">
                                {signin_val_data.map((value) => (
                                    <div key={value.name} className="mb-4 relative">
                                        <input
                                            type={
                                                value.type === "password" && visiblePasswords[value.name]
                                                    ? "text"
                                                    : value.type
                                            }
                                            placeholder={value.placeholder}
                                            {...registerSignin(value.name, {
                                                required: value.required ? "This field is required" : false,
                                                minLength: {
                                                    value: value.minLength,
                                                    message: `Minimum ${value.minLength} characters`,
                                                },
                                                maxLength: {
                                                    value: value.maxLength,
                                                    message: `Maximum ${value.maxLength} characters`,
                                                },
                                                pattern: value.pattern
                                                    ? {
                                                        value: new RegExp(value.pattern),
                                                        message: value.pattern_message,
                                                    }
                                                    : undefined,
                                            })}
                                            className="border p-3 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400 w-full pr-12"
                                        />
                                        {value.type === "password" && (
                                            <button
                                                type="button"
                                                onClick={() => togglePasswordVisibility(value.name)}
                                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
                                            >
                                                {visiblePasswords[value.name] ? "👀" : "🙈"}
                                            </button>
                                        )}
                                        {(signinErrors[value.name]) && (
                                            <span className="text-sm text-red-500">{signinErrors[value.name]?.message}</span>
                                        )}
                                    </div>
                                ))}

                                <button
                                    type="submit"
                                    disabled={signinisSubmitting}
                                    className="bg-violet-400 hover:bg-violet-500 text-white py-3 rounded-lg mt-2 font-semibold transition"
                                >
                                    {signinisSubmitting ? "Checking..." : "SignIn"}
                                </button>
                            </form>
                            <p className="text-center text-gray-600 mt-5">or you can sign in with</p>
                            {SocialIcons()}
                            <div className="sm:hidden bg-gradient-to-br from-violet-300 to-blue-400 text-white flex flex-col justify-center items-center p-6 rounded-xl shadow-lg gap-4 mt-7">
                                <span className="text-center text-lg font-medium leading-relaxed px-2">
                                    Don't have an account yet? Sign up to enjoy exclusive features.
                                </span>
                                <button
                                    onClick={handleToggle}
                                    className="bg-white text-violet-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 shadow-md transition-all duration-300 hover:scale-105"
                                >
                                    {isSignup ? 'SignUp' : 'SignIn'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Side Panel */}
                    <div className={`absolute top-0 right-[200%] sm:right-0 h-full w-full sm:w-1/2 flex flex-col items-center z-20 justify-center bg-gradient-to-br from-purple-200 via-violet-300 to-blue-300 text-white px-6 py-12 transition-all duration-700 ease-in-out
                    ${isSignup ? 'sm:-translate-x-full' : 'sm:translate-x-0'}`}>
                        <h2 className="text-4xl font-bold mb-3 text-white transition duration-700 ease-in-out">
                            {isSignup ? "👋 Welcome Back!" : "🚀 Join Us Today!"}
                        </h2>
                        <div className="text-md mb-6 text-center max-w-xs text-white transition duration-500 ease-in-out">
                            {isSignup ? (
                                <p className="text-lg font-medium leading-relaxed">
                                    We've missed you!<br />
                                    <span className="text-white/70">Log in</span> to continue your journey and stay connected with the community.
                                </p>
                            ) : (
                                <p className="text-lg font-medium leading-relaxed">
                                    Ready to explore?<br />
                                    <span className="text-white/70">Create your account</span> now and unlock exclusive features!
                                </p>
                            )}
                        </div>
                        <button
                            onClick={handleToggle}
                            className="bg-white text-violet-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                        >
                            {isSignup ? 'Signin' : 'Signup'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
