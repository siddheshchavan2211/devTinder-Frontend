import { SiTinder } from "react-icons/si";

const BusinessPolicy = () => {
  return (
    <div className="  bg-red-200 min-h-screen font-sans  text-gray-800">
      <header className="bg-red-400 text-white py-6 shadow-md">
        <div className="container mx-auto text-center flex ">
          <div className="items-center text-white  text-4xl font-bold flex gap-1 pl-8">
            <SiTinder className="lg:size-11 size-10 text-white " /> Devtinder{" "}
          </div>
          <h1 className="text-4xl font-semibold text-center justify-center pl-[20%] ">
            Our Business Policies
          </h1>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Introduction
          </h2>
          <p className="text-lg text-gray-700">
            Welcome to our business policy page. Please review our policies
            carefully. These are the guidelines we follow to ensure a smooth and
            trustworthy relationship with our customers.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Return and Refund Policy
          </h2>
          <p className="text-lg text-gray-700">
            As a membership-based service, we offer No Cancellations and No
            Refunds on all subscriptions. Once a membership is purchased, it is
            non-refundable, and cancellations are not permitted. Please ensure
            you review your subscription carefully before proceeding with your
            purchase.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Shipping Policy
          </h2>
          <p className="text-lg text-gray-700">
            As our service is membership-based, there are no shipping fees or
            physical products involved. All services and features are delivered
            digitally and are accessible immediately upon subscription.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Privacy Policy
          </h2>
          <p className="text-lg text-gray-700">
            Your privacy is important to us. We will never share your personal
            information with third parties without your consent. For more
            details, please review our full privacy policy.
          </p>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Terms of Service
          </h2>
          <p className="text-lg text-gray-700">
            By using our services, you agree to our terms and conditions. These
            include guidelines for using our website, placing orders, and the
            general use of our products. Please read them thoroughly.
          </p>
        </section>
      </div>

      <footer className="bg-red-400 py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg text-white">
            © 2025 Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BusinessPolicy;
