const Checkout = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans py-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
        <form className="space-y-8">
          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 mb-4 bg-gray-100 text-gray-900 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-5 py-3 bg-gray-100 text-gray-900 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Payment Details */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-5 py-3 mb-4 bg-gray-100 text-gray-900 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 px-5 py-3 bg-gray-100 text-gray-900 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                placeholder="CVC"
                className="w-1/2 px-5 py-3 bg-gray-100 text-gray-900 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Adventure Tour</span>
              <span>$299</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Service Fee</span>
              <span>$20</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4">
              <span>Total</span>
              <span>$319</span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] text-white"
          >
            Confirm & Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;