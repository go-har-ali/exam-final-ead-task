import React, { useEffect, useState } from 'react'
import FeatureCard from '../FeatureCard'
import { Link } from 'react-router-dom';

const Categories = ({products = [] }) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories')
      const data = await response.json()
      console.log(data, 'data')
      setCategories(data)
    }
    fetchCategories()
  }, [])

  if (categories.length === 0) return <div>Loading.....</div>

  return (
    <>

      {/* <FeatureCard cards={categories}/> */}

          <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">

      <div className="flex flex-col text-center w-full mt-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-3">Top Sellers</h1>
        <h2 className="text-sm tracking-widest font-medium title-font mb-20">Browse our top-selling products</h2>
      </div>

        <div className="flex flex-wrap -m-4">
          {
            products.map((product) => {
              console.log(product, 'product')
              const { id, title, price, description, category, image } = product;
              return (
                <Link to={`/products/${id}`} className="lg:w-[23%] md:w-1/2 p-4 w-full mb-4 cursor-pointer rounded-lg shadow ml-4">
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt={title} className=" object-contain object-center w-full h-full block" src={image} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">{category}</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium text-center">{title}</h2>
                    <p className="mt-1 text-md font-semibold text-center P">${price}</p>
                  </div>
                </Link>
              )
            })
          }
        </div>

          <div className='flex items-center justify-center'>
            <button className='B text-white p-3 mt-10'>SHOP NOW</button>
          </div>
          
        </div>
    </section>
    </>
  )
}

export default Categories