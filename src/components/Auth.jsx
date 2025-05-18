import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LoginForm from './forms/LoginForm';
import RegisterForm from './forms/RegisterForm';

export default function Auth() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();

    const mode = searchParams.get('mode');
    const isLogin = mode !== 'register'; 

    const toggleMode = () => {
        setSearchParams({ mode: isLogin ? 'register' : 'login' });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    {isLogin ? <LoginForm /> : <RegisterForm />}

                    <div>
                        <p className="mt-4 text-center text-sm text-gray-600">
                            {isLogin ? (
                                <>
                                    Or{' '}
                                    <button
                                        onClick={toggleMode}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        create a new account
                                    </button>
                                </>
                            ) : (
                                <>
                                    Already have an account?{' '}
                                    <button
                                        onClick={toggleMode}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                        Sign in
                                    </button>
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
