import React from 'react';

function GetStarted() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Get Started</h2>
          <p className="mt-4 text-gray-600">
            Ready to begin your journey with us? Follow these simple steps to get started.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-2xl text-gray-800 mb-4">Step 1</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Sign Up
            </h3>
            <p className="text-gray-600">
              Create an account to access all our services.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-2xl text-gray-800 mb-4">Step 2</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Explore
            </h3>
            <p className="text-gray-600">
              Discover our platform and find what interests you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="text-2xl text-gray-800 mb-4">Step 3</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Get Started
            </h3>
            <p className="text-gray-600">
              Begin your exciting journey with us today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
