import { useEffect, useState } from "react";
import ProductCard from "../component/productcart";
import axiosInstance from "../apis/config";
import Pagination from "../pages/pagination";
import Loader from "../component/loader";
import Hero from "../pages/hero";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const limit = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await axiosInstance.get(
          `/products?limit=${limit}&skip=${page * limit}`
        );

        setProducts(res.data.products);
        setTotal(res.data.total);

      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  return (
    <>
    
      {/* HERO */}
      <Hero />

      {/* PRODUCTS */}
      <div className="container py-5">

        <h1 className="text-center mb-5">
          Product List
        </h1>

        {loading && <Loader />}

        <div className="row row-cols-1 row-cols-md-4 g-4">
          {products.map((pro) => (
            <ProductCard key={pro.id} product={pro} />
          ))}
        </div>

        <Pagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />

      </div>
    </>
  );
}

export default ProductList;