import { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/AddProduct.module.css';

function AddProduct() {
  const [product, setProduct] = useState({ prodName: '', prodPrice: '' });
  const navigate = useNavigate();

  const saveProduct = async () => {
    await API.post('/products', product);
    navigate('/products');
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add Product</h2>
      <input
        className={styles.input}
        placeholder="Name"
        onChange={e => setProduct({ ...product, prodName: e.target.value })}
      />
      <input
        className={styles.input}
        placeholder="Price"
        onChange={e => setProduct({ ...product, prodPrice: e.target.value })}
      />
      <button className={styles.button} onClick={saveProduct}>Save</button>
    </div>
  );

  // return (
  //   <div className="p-4">
  //     <h2>Add Product</h2>
  //     <input placeholder="Name" onChange={e => setProduct({...product, prodName: e.target.value})} />
  //     <input placeholder="Price" onChange={e => setProduct({...product, prodPrice: e.target.value})} />
  //     <button onClick={saveProduct}>Save</button>
  //   </div>
  // );
}

export default AddProduct;
