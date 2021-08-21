import { useState } from 'react';
import Button from '../components/button/button';
import Card from '../components/card/card';
import Drawer from '../components/drawer/drawer';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import Table from '../components/table/table';
import Title from '../components/title/title';
import styles from './index.module.scss';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <Header />
      <div className="container-xl">
        <section className={styles.title}>
          <div className={styles.mb__35}>
            <Title title="Balances" />
            <Button toggleDrawer={toggleDrawer} value="New Transaction" />
          </div>
          <div className="row g-5">
            <div className="col-md-4">
              <Card
                name="Dollars"
                amount="$252.00"
                flag="/images/brand/usa.svg"
              />
            </div>
            <div className="col-md-4">
              <Card
                name="Euros"
                amount="€347.00"
                flag="/images/brand/euro.svg"
              />
            </div>
            <div className="col-md-4">
              <Card
                name="Nairas"
                amount="₦102.00"
                flag="/images/brand/nigeria.svg"
              />
            </div>
          </div>
          <div className={`mt-7 pt-3 ${styles.mb__35}`}>
            <Title title="Latest Transactions" />
          </div>
          <div>
            <Table />
          </div>
        </section>
        <Drawer visibility={isOpen} toggleDrawer={toggleDrawer}>
          <form className={styles.form}>
            <div className="mb-5">
              <label className="form-label" htmlFor="recipient">
                Choose Recipient
              </label>
              <select
                className="form-select"
                aria-label="account select"
                id="recipient"
              >
                <option selected disabled>
                  Choose by name
                </option>
                <option value="USD">
                  adsasdsasw afsdaf - ahushashjgb@dio.casc
                </option>
                <option value="EUR">
                  Maxmill Max - thestrangermax@gmail.com
                </option>
              </select>
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="account">
                Select Account
              </label>
              <select
                className="form-select"
                aria-label="account select"
                id="account"
              >
                <option selected disabled>
                  Choose Account
                </option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="NGN">NGN</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="currency">
                Currency
              </label>
              <select
                className="form-select"
                aria-label="currency select"
                id="currency"
              >
                <option selected disabled>
                  Choose currency
                </option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="NGN">NGN</option>
              </select>
            </div>
            <div className="mb-5">
              <label className="form-label" htmlFor="amount">
                Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="amount"
                placeholder="Amount"
                autoComplete="off"
              />
            </div>
            <div className="mt-7 pt-7">
              <a role="button" className="btn btn-primary w-full">
                Transfer
              </a>
            </div>
          </form>
        </Drawer>
      </div>
      <Footer />
    </>
  );
}
