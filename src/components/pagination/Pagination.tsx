import React from 'react'
import ReactPaginate from "react-paginate"

const Pagination = () => {
    return (

        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            // onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={3}
            previousLabel="< previous"
        />
    )
}

export default Pagination