import React from "react";

function Contact() {
    return (
    <div id="contact-us" className="scroll-smooth bg-gray-900">
       <div className="mx-auto max-w-screen-xl lg:h-screen px-6 py-16
        grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
        
        <div className="text-center lg:text-left">
            <h1 className='mx-auto text-2xl sm:text-5xl font-extrabold text-white lg:text-left'>
              Get in touch
            </h1>

            <p className="mx-auto mt-20 text-lg text-gray-300">
              We're ready to lead you into the future of voice performance.
            </p>

            <p className="mt-4">
              <a 
              className="text-blue-600 hover:text-blue-700 text-lg font-bold"
              href="#"
              >
              Get help on the web <br/>
              Submit a request
              </a>
            </p>

            <div className="mt-20 flex flex-col gap-2">
              <div className="flex flex-col mt-6 flex gap-4">
                <h2 className="font-black text-lg lg:text-xl text-blue-600">United States Headquarters</h2>

                <p className="text-gray-300 text-lg"> 
                701 5th Ave <br/>
                Suite 1200  <br/>
                Seattle WA 98104  <br/>
                (425) 835-3673  <br/>
                </p>
              </div>
            </div>
        </div>


        <div className="rounded-lg bg-white p-10 shadow-lg">
         <form action="#" className="space-y-6">
          <div>
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              className="w-full rounded-lg border border-gray-300 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="email">Email</label>
              <input
                className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
          </div>

          <div>
            <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
            />
          </div>

          <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-black mt-6 px-5 py-3 font-medium text-white sm:w-auto hover:bg-gray-900"
            >
              Send Enquiry
            </button>
          </div>
        </form>
        </div>

       </div>
    </div>
    );
}

export default Contact;