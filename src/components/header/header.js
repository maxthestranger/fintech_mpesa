import Image from 'next/image';

import styles from './header.module.scss';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-0 py-3">
      <div className={`container-xl ${styles.shadow}`}>
        {/* <!-- Logo --> */}
        <a className="navbar-brand" href="#">
          <Image
            src="/images/brand/logo.svg"
            width={86}
            height={43}
            className="h-8"
            alt="mpesa"
          />
        </a>
        {/* <!-- Navbar toggle --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/* <!-- Nav --> */}
          <div className="navbar-nav mx-lg-auto"></div>
          {/* <!-- Right navigation --> */}
          <div className="navbar-nav ms-lg-4 mx-4">
            <a
              className={`nav-item nav-link ${styles.notification}`}
              href="/login"
            >
              <i className="bi bi-power" />
            </a>
          </div>
          {/* <!-- Action --> */}
          <div className="d-flex align-items-lg-center mt-3 mt-lg-0">
            <a
              href="#"
              className={`btn btn-sm btn-primary rounded-circle ${styles.btn}`}
            >
              AC
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
