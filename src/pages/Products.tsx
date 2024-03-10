export const loader = async () => {
  return null;
};
const Products = () => {
  return (
    <main className="h-screen mt-24">
      {/* title section */}
      <div className=" flex py-16 px-5  justify-between p lg:px-16 lg:py-24 ">
        <h2>ALL PRODUCTS</h2>
        <select name="sort" id="sort" className="bg-[#FFF4F4;]">
          <option value="LOWEST">SORT BY</option>
          <option value="LOWEST">VEST</option>
          <option value="HIGHEST">HOODIE</option>
        </select>
      </div>
      {/* Product section */}
    </main>
  );
};

export default Products;
