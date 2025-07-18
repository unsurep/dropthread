

import Image from "next/image";


const Hero6 = () => {
  return (
    <>
      <div className=" mx-[1rem] pb-12">
        <h1 className="text-center text-3xl font-bold tracking-[5px] py-12">Frequently Asked Questions</h1>
        {/* questions */}

        <div className="flex justify-between gap-5">
          <div >

            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" defaultChecked />
              <div className="collapse-title font-semibold">
                Can I return or exchange an item?
              </div>
              <div className="collapse-content text-sm">
                Yes, we accept exchanges within a week of delivery. <br /> Please note that shipping  charges will apply: Rs:200 <br /> for in-city exchanges and Rs:300 for out-of-city exchanges.
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                What payment methods do you accept?
              </div>
              <div className="collapse-content text-sm">
                We accept only cash on delivery
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                How do I contact your customer service team?
              </div>
              <div className="collapse-content text-sm">
                You can reach us via email at info@dropthreads.com <br /> on WhatsApp, or through the contact form on our website.
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                What are your business hours?
              </div>
              <div className="collapse-content text-sm">
                Our customer service team is available Monday <br /> through Friday, 9am to 5pm (your time zone).
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                Do I need to create an account to place an order?
              </div>
              <div className="collapse-content text-sm">
                No, you can checkout as a guest.
              </div>
            </div>

            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                How long does shipping take?
              </div>
              <div className="collapse-content text-sm">
                Standard shipping takes 5-7 business days, while <br /> expedited shipping takes 2-3 business days.
              </div>
            </div>


            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                Can I track my order?
              </div>
              <div className="collapse-content text-sm">
                Yes, you will receive tracking information via email <br /> once your order has shipped.
              </div>
            </div>


            <div className="collapse collapse-plus bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title font-semibold">
                How do I initiate a return or exchange?
              </div>
              <div className="collapse-content text-sm">
                Please contact our customer service team at <br /> info@dropthreads.com to initiate the process.
              </div>
            </div>





          </div>

          <div className="flex  flex-col items-center justify-center mx-auto">
            <Image src="/logo.png" width={250} height={250} alt="image" className="w-full"/>
            <p className="font-black text-2xl">DropThreads</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero6;
