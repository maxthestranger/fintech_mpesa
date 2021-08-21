import Title from '../title/title';
import styles from './drawer.module.scss';

const Drawer = ({ visibility, toggleDrawer, children }) => {
  return (
    <>
      <div
        className={`offcanvas offcanvas-end ${visibility ? 'show' : ''}`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={visibility ? { visibility: 'visible' } : { visibility: 'none' }}
      >
        <div className="offcanvas-header">
          <div id="offcanvasRightLabel">
            <Title title="New Payment" />
          </div>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleDrawer}
          ></button>
        </div>
        <div className="offcanvas-body">{children}</div>
      </div>
      {visibility ? (
        <div
          className="modal-backdrop fade show"
          style={{ zIndex: 1000 }}
          onClick={toggleDrawer}
        ></div>
      ) : (
        ''
      )}
    </>
  );
};

export default Drawer;
