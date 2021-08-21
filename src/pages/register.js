import Image from 'next/image';
import styles from './login.module.scss';

const Register = () => {
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
          <div>
            <a href="#" className="btn btn-primary w-full">
              Register
            </a>
          </div>
        </form>

        <p className="text-center pt-5">
          <a href="/login">Already have an account?</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
