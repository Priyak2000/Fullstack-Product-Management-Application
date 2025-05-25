import { useEffect, useState } from 'react';
import API from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';

function EditProduct() {
  const [product, setProduct] = useState({ prodName: '', prodPrice: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    API.get(`/products/${id}`).then(res => setProduct(res.data));
  }, []);

  const updateProduct = async () => {
    await API.put(`/products/${id}`, product);
    navigate('/products');
  };

  return (
    <div className="p-4">
      <h2>Edit Product</h2>
      <input value={product.prodName} onChange={e => setProduct({...product, prodName: e.target.value})} />
      <input value={product.prodPrice} onChange={e => setProduct({...product, prodPrice: e.target.value})} />
      <button onClick={updateProduct}>Update</button>
    </div>
  );
}

export default EditProduct;
