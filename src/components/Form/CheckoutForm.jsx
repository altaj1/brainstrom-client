/* eslint-disable react/prop-types */

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const CheckoutForm = ({registrationInfo}) => {
    console.log(registrationInfo.price, "registrationInfo")
    const navigate = useNavigate()
    const [clientSecret, setClientSecret] = useState()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')
  const [processing, setProcessing] = useState(false)
    useEffect(() => {
        // fetch client secret
        if (registrationInfo?.price && registrationInfo?.price > 1) {
          getClientSecret({ price:registrationInfo?.price})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [registrationInfo?.price])
    
      //   get clientSecret
      const getClientSecret = async price => {
        const { data } = await axiosSecure.post(`/create-payment-intent`, price) 
        // console.log('clientSecret from server--->', data)
        setClientSecret(data.clientSecret)
      }


    const handelSubmit = async (event)=>{
        event.preventDefault();
        const tasks = event.target.tasks
        // console.log(tasks)

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return
          }

           // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement)
    if (card == null) {
        return
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      })

      if (error) {
        console.log('[error]', error)
        setCardError(error.message)
        setProcessing(false)
        return
      } else {
        // console.log('[PaymentMethod]', paymentMethod)
        setCardError('')
      }

       // confirm payment
    const { error: confirmError, paymentIntent } =
    await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email,
          name: user?.displayName,
        },
      },
    })

    if (confirmError) {
        // console.log(confirmError)
        setCardError(confirmError.message)
        setProcessing(false)
        return
      }
  
      if (paymentIntent.status === 'succeeded') {
        // console.log(paymentIntent, "this is payment intent")
        const paymentInfo = {
            ...registrationInfo,
            contestId: registrationInfo._id,
            transactionId: paymentIntent.id,
            date: new Date(),
            paymentIntent_status: 'succeeded'
          }
          const participationCount = (registrationInfo?.participationCount || 0) + 1
        //   console.log(paymentInfo, "this is payment info")
          delete paymentInfo._id
        //   console.log(paymentInfo, "delete _id")
        // console.log( participationCount, 'this is participation count')
        try{
        
          
            const { data } = await axiosSecure.put(`/register?email=${user.email}&&contestId=${registrationInfo._id}`, paymentInfo)
        console.log(data)
        if (data.status) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Are allready rigisterd",
            showConfirmButton: false,
            timer: 1500
          });
        }
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Registration Successful",
            showConfirmButton: false,
            timer: 1500
          });
          // /update participation
          const { data: countData } = await axiosSecure.put(`/update-participation/${registrationInfo._id}`,{participationCount})
            navigate(`/submitPage/${paymentInfo.contestId}`)
        }
        }catch (err) {
        console.log(err)
      }
      }
    }
    return (
        <>
        <form onClick={handelSubmit} className="space-y-5">
         <div>
         <label className="">Enter Your Card Number:</label>
         <div className="border p-4 border-accent w-full max-w-xs rounded-lg">
            
         <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
         </div>
         </div>
  
          <div className="flex mt-2 justify-around">
            <button
              disabled={!stripe || !clientSecret || processing}
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            >
              {processing ? (
                <ImSpinner9 className='animate-spin m-auto' size={24} />
              ) : (
                `Pay ${registrationInfo?.price}`
              )}
              pay
            </button>
            
          </div>
        </form>
      </>
    );
};

export default CheckoutForm;