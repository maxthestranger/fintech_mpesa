import Image from 'next/image';
import Link from 'next/link';
import styles from './form.module.scss';

import { useState, useRef } from 'react';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';

async function createUser(email, password) {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

const Form = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // optional: Add validation

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });

      if (!result.error) {
        // set some auth state
        router.replace('/profile');
      }
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className={styles.full__screen}>
      <div className="container-xl">
        <div className="row mb-7">
          <div className="col-md-12 text-center">
            <Image
              src="/images/brand/logo.svg"
              width={86}
              height={43}
              className="h-8"
              alt="mpesa"
            />
          </div>
        </div>
        <form onSubmit={submitHandler} className={styles.form}>
          {isLogin ? (
            ''
          ) : (
            <div className="mb-5">
              <label className="form-label" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Your Full Name"
              />
            </div>
          )}

          <div className="mb-5">
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your email address"
              ref={emailInputRef}
            />
          </div>
          <div className="mb-5">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              autoComplete="current-password"
              ref={passwordInputRef}
            />
          </div>
          <div>
            <a
              role="button"
              className="btn btn-primary w-full"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? 'Login' : 'Register'}
            </a>
          </div>
        </form>

        <p className="text-center pt-5">
          <Link href={isLogin ? '/register' : '/login'}>
            <a>
              {isLogin ? "Don't have an account?" : 'Already has an account?'}
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Form;
