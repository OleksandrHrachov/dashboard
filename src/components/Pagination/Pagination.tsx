import { PaginationBtn } from "../PaginationBtn";
import arrwRight from "../../assets/icons/arrow-right.svg";
import arrwLeft from "../../assets/icons/arrow-left.svg";


export const Pagination = () => {
  return (
    <>
      <PaginationBtn>
        <img src={arrwLeft} alt="<" />
      </PaginationBtn>
      <PaginationBtn active>1</PaginationBtn>
      <PaginationBtn>2</PaginationBtn>
      <PaginationBtn>3</PaginationBtn>
      <PaginationBtn>4</PaginationBtn>
      <PaginationBtn>...</PaginationBtn>
      <PaginationBtn>40</PaginationBtn>
      <PaginationBtn>
        <img src={arrwRight} alt=">" />
      </PaginationBtn>
    </>
  );
};
