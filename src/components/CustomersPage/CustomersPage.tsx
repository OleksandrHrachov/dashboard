import { CustomersList } from "../CustomersList";
import "./CustomersPage.scss";

export const CustomersPage = () => {
  return (
    <div className="customer-page">
      <div className="customer-page__inner">
        <div className="customer-page__title">
          <span className="customer-page__title-name">
            Hello Evano &#128075;,
          </span>
        </div>
        <CustomersList/>
      </div>
    </div>
  );
};
