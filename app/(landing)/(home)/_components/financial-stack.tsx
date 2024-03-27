"use client";

const FinancialStack = () => {
  return (
    <section className=" bg-white">
      <div className=" py-20 container flex flex-col gap-6">
        <h3 className=" lg:w-2/3">
          The complete financial stack for your business
        </h3>
        <p className=" lg:w-2/3">
          We help companies of all types work better, save time and money with a
          simply better banking service that works.
        </p>
        <div className=" flex flex-col md:flex-row md:items-center gap-6 lg:gap-10">
          <div className=" flex gap-4 items-center md:flex-1">
            <div className=" size-16 rounded-lg bg-gray-100"></div>
            <div className=" flex flex-col gap-1">
              <h5>Speed</h5>
              <p>
                Open a commercial-grade current account from anywhere in 10
                minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialStack;
