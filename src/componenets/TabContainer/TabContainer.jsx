import HorizontalCard from "../utlis/HorizontalCard";
import Button from "../utlis/Button";

export default function TabContainer({tab, cartItem, handleToremoveWishlist, removeProduct, cartId, wishlistItems}) {
    return (
        <div>
          {tab === 'tab1' && (
            cartId.length > 0 ? (
              cartItem.map(data => (
                <div key={data.product_id} className="card bg-base-100 w-full shadow-sm">
                  <HorizontalCard
                    imgSrc={data.product_image}
                    imgClass="w-30 aspect-video object-cover rounded-lg"
                    title={data.product_title}
                    cardDescription={data.description}
                    price={data.price}
                    wrapperClass="shadow-lg rounded-xl flex items-center w-full md:w-3/4 mx-auto gap-2 sm-gap-3 md:gap-4 p-2"
                    onClick={() => removeProduct(data.product_id)}
                  />
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-4">Nothing to show in Cart</div>
            )
          )}
      
          {tab === 'tab2' && (
            wishlistItems.length > 0 ? (
              wishlistItems.map(data => (
                <div key={data.product_id} className="card bg-base-100 w-full shadow-sm">
                  <HorizontalCard
                    imgSrc={data.product_image}
                    imgClass="w-30 aspect-video object-cover rounded-lg"
                    title={data.product_title}
                    cardDescription={data.description}
                    price={data.price}
                    wrapperClass="shadow-lg rounded-xl flex items-center w-full md:w-3/4 mx-auto gap-2 sm-gap-3 md:gap-4 p-2"
                    onClick={() => handleToremoveWishlist(data.product_id)}
                  />
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 py-4">Nothing to show in Wishlist</div>
            )
          )}
        </div>
      );
}

