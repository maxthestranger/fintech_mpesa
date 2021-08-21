import Image from 'next/image';
import Link from 'next/link';
import styles from './login.module.scss';

const Login = () => {
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
        <form className={styles.form}>
          <div className="mb-5">
            <label className="form-label" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your email address"
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
            />
          </div>
          <div className="mb-5">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="check_example"
                id="check_example"
              />
              <label className="form-check-label" htmlFor="check_example">
                Keep me logged in
              </label>
            </div>
          </div>
          <div>
            <Link href="/">
              <a className="btn btn-primary w-full">Sign in</a>
            </Link>
          </div>
        </form>
        <p className="text-center pt-5">
          <a href="/register">Don&#39;t have an account?</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
