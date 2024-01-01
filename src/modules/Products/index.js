import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import ProductCard from '../../components/ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  }, [])

  return (
    <div>
      
      <div className="flex flex-col text-center w-full mt-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-3">Discover NEW Arrivals</h1>
        <h2 className="text-sm tracking-widest font-medium title-font mb-1">Recently added shirts!</h2>
      </div>
      {
        products.length > 0 ?
        <ProductCard products={products}/>
        :
        <div>Loading.....</div>
      }

      {
        products.length > 0 ?
        <Categories products={products}/>
        :
        <div>Loading.....</div>
      }
    
    </div>
    
  )
}

export default Products