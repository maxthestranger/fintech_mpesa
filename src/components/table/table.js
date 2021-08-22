const Table = () => {
  return (
    <div className="table-responsive">
      <table className="table table-hover table-nowrap">
        <thead className="thead-light">
          <tr>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Value</th>
            <th scope="col">Currency</th>
            <th scope="col">Created At</th>
            <th scope="col">Updated At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="From">
              <span className="text-heading font-semibold">Sys Admin</span>
            </td>
            <td data-label="To">
              <span className="text-heading font-semibold">Allan Calton</span>
            </td>
            <td data-label="Value">
              <span className="badge bg-soft-success text-success">
                +1,000.00
              </span>
            </td>
            <td data-label="Currency">
              <span className="text-current">USD</span>
            </td>
            <td data-label="Created At">
              <span className="text-current">Aug, 22, 2021 07:12</span>
            </td>
            <td data-label="Updated At">
              <span className="text-current">Aug, 22, 2021 07:12</span>
            </td>
          </tr>
          {/* <tr>
            <td data-label="From">
              <span className="text-heading font-semibold">Robert Fox</span>
            </td>
            <td data-label="To">
              <span className="text-heading font-semibold">
                Massai Furgerson
              </span>
            </td>
            <td data-label="Value">
              <span className="badge bg-soft-danger text-danger">-20.00</span>
            </td>
            <td data-label="Currency">
              <span className="text-current">USD</span>
            </td>
            <td data-label="Created At">
              <span className="text-current">Apr, 21, 2021 09:47</span>
            </td>
            <td data-label="Updated At">
              <span className="text-current">Apr, 21, 2021 09:47</span>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
