import { useState } from "react";
import FormInput from "./Component/FormInput";
import Button from "./Component/Button";
import ProductCard from "./Component/ProductCard";

const initialForm = {
  name: "",
  price: "",
  category: "",
  description: "",
};

function App() {
  const [formData, setFormData] = useState(initialForm);
  const [products, setProducts] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add a new product
  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: crypto.randomUUID(),
      ...formData,
      price: Number(formData.price),
    };

    setProducts((prev) => [newProduct, ...prev]);
    setFormData(initialForm);
  };

  // Delete a product
  const handleDelete = (id) => {
    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-indigo-700 sm:text-4xl">
            Product Management
          </h1>

          <p className="mt-2 text-gray-600">
            Add, view, and manage your products.
          </p>
        </header>

        {/* Product Form */}
        <section className="mb-10 rounded-2xl bg-white p-6 shadow-md sm:p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Add New Product
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <FormInput
                label="Product Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
              />

              <FormInput
                label="Price (₹)"
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter product price"
              />

              <div className="sm:col-span-2">
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300
                    bg-white px-4 py-3 outline-none
                    focus:border-indigo-500 focus:ring-2
                    focus:ring-indigo-200"
                >
                  <option value="">Select a category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Books">Books</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter product description"
                  rows={3}
                  className="w-full rounded-lg border border-gray-300
                    px-4 py-3 outline-none
                    focus:border-indigo-500 focus:ring-2
                    focus:ring-indigo-200"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="submit">
                + Add Product
              </Button>

              <button
                type="button"
                onClick={() => setFormData(initialForm)}
                className="rounded-lg border border-gray-300
                  px-5 py-3 font-semibold text-gray-700
                  transition hover:bg-gray-100"
              >
                Clear Form
              </button>
            </div>
          </form>
        </section>

        {/* Product List */}
        <section>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold text-gray-800">
              Product List
            </h2>

            <span className="rounded-full bg-indigo-100 px-4 py-2
              text-sm font-semibold text-indigo-700">
              Total Products: {products.length}
            </span>
          </div>

          {products.length === 0 ? (
            <div className="rounded-2xl border-2 border-dashed
              border-gray-300 bg-white px-6 py-12 text-center">
              <p className="text-lg font-semibold text-gray-600">
                No products added yet
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form above to add your first product.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default App;