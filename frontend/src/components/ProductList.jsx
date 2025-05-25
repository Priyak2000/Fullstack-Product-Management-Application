import { useEffect, useState } from 'react';
import  API from '../services/api';
import { Link } from 'react-router-dom';
import styles from '../styles/ProductList.module.css';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get('/products').then(res => setProducts(res.data));
    
  }, []);

  const deleteProduct = async (id) => {
     if (!id) {
    console.error("Invalid product id:", id);
    return
     }
    await API.delete(`/products/${id}`);
    setProducts(products.filter(p => p.prodId !== id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Product List</h2>
      <Link to="/add" className={styles.addButton}>+ Add Product</Link>
      <ul className={styles.list}>
        {products.map(prod => (
          <li key={prod.prodId} className={styles.item}>
            <div className={styles.info}>
              <strong>{prod.prodName}</strong> – ₹{prod.prodPrice}
            </div>
            <div className={styles.actions}>
              <button className={styles.button} onClick={() => deleteProduct(prod.prodId)}>Delete</button>
              <Link to={`/edit/${prod.prodId}`} className={styles.editLink}>Edit</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  // return (
  //   <div className="p-4">
  //     <h2>Product List</h2>
  //     <Link to="/add">Add Product</Link>
  //     <ul>
  //       {products.map(prod => (
  //         <li key={prod.prodId}>
  //           {prod.prodName} - ₹{prod.prodPrice}
  //           <button onClick={() => deleteProduct(prod.prodId)}>Delete</button>
  //           <Link to={`/edit/${prod.prodId}`}>Edit</Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
}

export default ProductList;
