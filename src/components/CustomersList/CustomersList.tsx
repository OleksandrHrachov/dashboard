import searchIcon from "../../assets/icons/search.svg";
import { CustomerRow } from "../CustomerRow";
import { Pagination } from "../Pagination";
import "./CustomersList.scss";


const customersList = [
  {
    name: "Jane Cooper",
    company: "Microsoft",
    phone: "(225) 555-0118",
    email: "jane@microsoft.com",
    country: "United States",
    status: "active",
  },
  {
    name: "Floyd Miles",
    company: "Yahoo",
    phone: "(205) 555-0100",
    email: "floyd@yahoo.com",
    country: "Kiribati",
    status: "inactive",
  },
  {
    name: "Ronald Richards",
    company: "Adobe",
    phone: "(302) 555-0107",
    email: "ronald@adobe.com",
    country: "Israel",
    status: "inactive",
  },
  {
    name: "Marvin McKinney",
    company: "Tesla",
    phone: "(252) 555-0126",
    email: "marvin@tesla.com",
    country: "Iran",
    status: "active",
  },
  {
    name: "Jerome Bell",
    company: "Google",
    phone: "(629) 555-0129",
    email: "jerome@google.com",
    country: "Réunion",
    status: "active",
  },
  {
    name: "Kathryn Murphy",
    company: "Microsoft",
    phone: "(406) 555-0120",
    email: "kathryn@microsoft.com",
    country: "Curaçao",
    status: "active",
  },
  {
    name: "Jacob Jones",
    company: "Yahoo",
    phone: "(208) 555-0112",
    email: "jacob@yahoo.com",
    country: "Brazil",
    status: "active",
  },
  {
    name: "Kristin Watson",
    company: "Facebook",
    phone: "(704) 555-0127",
    email: "kristin@facebook.com",
    country: "Åland Islands",
    status: "inactive",
  },
];

export const CustomersList = () => {
  return (
    <div className="customers-list">
      <div className="customers-list__header">
        <div className="customers-list__header-title">
          <h3 className="customers-list__header-title-content">
            All Customers
          </h3>
          <p className="customers-list__header-title-hint">Active Members</p>
        </div>
        <div className="customers-list__header-search">
          <input
            className="customers-list__header-search-input"
            type="text"
            placeholder="Search"
          />
          <img
            className="customers-list__header-search-img"
            src={searchIcon}
            alt="Q"
          />
        </div>
      </div>
      <div className="customers-list__table">
        <ul className="customers-list__table-list">
          <li className="customers-list__table-header">
            <div className="customers-list__table-cell-name">Customer Name</div>
            <div className="customers-list__table-cell-company">Company</div>
            <div className="customers-list__table-cell-phone">Phone Number</div>
            <div className="customers-list__table-cell-email">Email</div>
            <div className="customers-list__table-cell-country">Country</div>
            <div className="customers-list__table-cell-status">Status</div>
          </li>
          {customersList.map((customer) => {
            return (
              <li key={customer.name} className="customers-list__table-row">
                <CustomerRow {...customer} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="customers-list__info">
        <p className="customers-list__info-data">
          Showing data 1 to 8 of 256K entries
        </p>
        <div className="customers-list__info-pagination">
          <Pagination/>
        </div>
      </div>
    </div>
  );
};
