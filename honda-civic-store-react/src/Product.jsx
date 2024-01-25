function Product(props) {
  if(!props.products){
    return false;
  }
  return (
    <div>
      <h4>Products</h4>
      <div>
        <p>{props.products[0].productName}</p>
        <p>{props.products[0].price}</p>
        <p>{props.products[0].description}</p>
      </div>
    </div>
  );
}
export default Product;

/*
async function productPage() {
  try {
    const products = await fetchProducts();

    document.getElementById("page-title").innerHTML = "Products";

    const productList = products.map((product) => {
      return `<tr><td>${product.productName}</td><td>${product.description}</td><td>${product.price}</td></tr>`;
    });
    // const productHTMLList = productList.join("");

    const tableHeader =
      "<tr><th>Product Name </th><th>Product Desc </th><th>Product price </th></tr>";
    document.getElementById("app").innerHTML =
      "<table>" + tableHeader + productList + "</table>";
  } catch (error) {
    console.error("error with fetch", error);
  }
}
export default productPage;
*/
