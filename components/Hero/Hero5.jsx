

const Hero5 = () => {

    const testimonials = [
        {
          id: 1,
          name: "Ali Hassan",
          initial: "A",
          text: "I'm so impressed with the quality of Dropthreads' clothing. The attention to detail is amazing and the prices are unbeatable!..",
          bgColor: "white"
        },
        {
          id: 2,
          name: "Usman Khan",
          initial: "U",
          text: "Dropthreads has become my go-to destination for all my fashion needs. Their collection is always on trend and their customer service is top-notch!..",
          bgColor: "white"
        },
        {
          id: 3,
          name: "Omar Farooq",
          initial: "O",
          text: "I was blown away by the speed of delivery from Dropthreads. I ordered a shirt on Monday and received it on Wednesday! Impressive!..",
          bgColor: "white"
        },
        {
          id: 4,
          name: "Bilal Ahmed",
          initial: "B",
          text: "Dropthreads has the best selection of casual wear I've ever seen. Their clothes are comfortable, stylish, and affordable. What more could you ask for?..",
          bgColor: "gray"
        },
        {
          id: 5,
          name: "Fahad Ali",
          initial: "F",
          text: "I've never been disappointed with a purchase from Dropthreads. Their clothes are always true to size and the quality is exceptional...",
          bgColor: "gray"
        },
        {
          id: 6,
          name: "Saad Ahmed",
          initial: "S",
          text: "I'm obsessed with Dropthreads! Their clothes are always on trend and great quality. I've never been disappointed with a purchase...",
          bgColor: "gray"
        }
      ];




    return (
      <>
        {/* Testimonies */}
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-black tracking-[5px]">
              What Our Customers Say
            </h1>
            <p className="text-gray-700 ">
              We value our customers and their feedback. Here's what they have
              to say about us.
            </p>
          </div>

          <div className="max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`
              p-6 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-lg
              ${
                testimonial.bgColor === "white"
                  ? "bg-white shadow-sm border border-gray-200"
                  : "bg-gray-200 shadow-sm"
              }
            `}
                >
                  <div className="mb-4">
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded-full text-sm font-medium">
                      {testimonial.initial}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
};
export default Hero5;