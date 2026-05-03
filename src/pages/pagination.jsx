function Pagination({ page, setPage, totalPages }) {
  return (
  <div className="d-flex justify-content-center align-items-center gap-3 mt-4">

  <button
    className="btn btn-light border"
    onClick={() => setPage(prev => prev - 1)}
    disabled={page === 0}
  >
    ←
  </button>

  <span className="fw-bold">
    {page + 1} / {totalPages}
  </span>

  <button
    className="btn btn-light border"
    onClick={() => setPage(prev => prev + 1)}
    disabled={page + 1 === totalPages}
  >
    →
  </button>

</div>
  );
}

export default Pagination;