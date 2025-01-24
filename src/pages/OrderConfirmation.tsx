import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="max-w-screen-2xl mx-auto pt-20">
      <h1 className="text-5xl font-light text-center">Confirmación de compra</h1>
      <p className="text-center mt-5 text-lg">
        Tu orden fue confirmada y sera despachada
      </p>
      <Link
        to="/shop"
        className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-[400px] mx-auto mt-5 h-12 flex items-center justify-center max-md:text-base"
      >
        Continuar comprando
      </Link>
      <Link
        to="/order-history"
        className="text-white bg-secondaryBrown text-center text-xl font-normal tracking-[0.6px] leading-[72px] w-[400px] mx-auto mt-5 h-12 flex items-center justify-center max-md:text-base"
      >
        Ver historial de ordenes
      </Link>
    </div>
  );
};
export default OrderConfirmation;
