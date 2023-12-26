import { FC } from "react";
import "./CustomerRow.scss";

interface IProps {
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: string;
}

export const CustomerRow: FC<IProps> = ({
  name,
  company,
  phone,
  email,
  country,
  status,
}) => {
  return (
    <>
      <div className="customers-list__table-cell-name">{name}</div>
      <div className="customers-list__table-cell-company">{company}</div>
      <div className="customers-list__table-cell-phone">{phone}</div>
      <div className="customers-list__table-cell-email">{email}</div>
      <div className="customers-list__table-cell-country">{country}</div>
      <div className={`customers-list__table-cell-status customer-row__status customer-row__status--${status}`}>{status}</div>
    </>
  );
};
