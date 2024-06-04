import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Modal from "react-modal";
import CheckoutForm from "../Form/CheckoutForm";
import useAuth from "../../hooks/useAuth";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const RegistrationModal = ({
  isOpen,
  closeModal,
  isEditModalOpen,
  contest,
}) => {
  const { user } = useAuth();
  const { title, image, from, to, type, prizeMoney, price, _id, description } =
    contest;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      borderRadius: "25px",
      right: "auto",
      // bottom: 'auto',
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={isOpen}
      // onAfterOpen={isEditModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <div className="text-right   rounded-full">
        <button
          className="btn mt-10 font-bold text-white rounded-full bg-[#FF6F61] text-2xl "
          onClick={closeModal}
        >
          <IoIosCloseCircleOutline />
        </button>
      </div>
      <div>
        <div className="h-full w-full">
          <p className="text-lg font-semibold">{title}</p>
          <p>price: ${price}</p>
          <p>Prize Money: ${prizeMoney}</p>
        </div>
        <div>
          {/* somthing todo */}
        </div>
      </div>
      <hr />
      <div className="w-96 mt-5">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            registrationInfo={{
              ...contest,
              participate: {
                name: user?.displayName,
                email: user?.email,
                image: user?.photoURL,
              },
            }}
            closeModal={closeModal}
          />
        </Elements>
      </div>
    </Modal>
  );
};

export default RegistrationModal;
