import Button from "./Button";

function ProductCard({ product, onDelete }) {
  return (
    <div className="flex flex-col rounded-xl border
      border-gray-200 bg-white p-5 shadow-sm
      transition hover:shadow-md">

      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="break-words text-lg font-bold text-gray-800">
          {product.name}
        </h3>

        <span className="shrink-0 rounded-full bg-indigo-100
          px-3 py-1 text-xs font-medium text-indigo-700">
          {product.category}
        </span>
      </div>

      <p className="mb-3 text-2xl font-bold text-indigo-600">
        ₹{Number(product.price).toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </p>

      <p className="mb-5 flex-1 whitespace-pre-wrap break-words
        text-sm text-gray-600">
        {product.description || "No description provided."}
      </p>

      <Button
        variant="danger"
        onClick={() => onDelete(product.id)}
      >
        Delete Product
      </Button>
    </div>
  );
}

export default ProductCard;