import ReactPaginateModule from "react-paginate";
const ReactPaginate = ReactPaginateModule.default ?? ReactPaginateModule;

const Pagination = ({ pageCount, handlePageChange, forcePage }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={forcePage}
      onPageChange={handlePageChange}
      containerClassName="pagination"
      activeClassName="selected"
      disabledClassName="disabled"
      nextLabel={"Next"}
      previousLabel={"Previous"}
    />
  );
};
export default Pagination;