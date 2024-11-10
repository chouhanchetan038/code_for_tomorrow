import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
    const handleClick = (page) => {
        if (onPageChange) {
            onPageChange(page);  // Call the passed in onPageChange function
        }
    };

    return (
        <div className="pagination">
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {[...Array(totalPages).keys()].map((num) => (
                <button
                    key={num + 1}
                    onClick={() => handleClick(num + 1)}  
                    style={{ fontWeight: currentPage === num + 1 ? 'bold' : 'normal' }}
                >
                    {num + 1}
                </button>
            ))}
            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
