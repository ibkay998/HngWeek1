const ContactForm = ({name}) => {
  return (
    <form  action="/">
        <div className="flex flex-col mt-6">
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="flex flex-col w-[100%] md:w-[45%]">
                    <label for="firstname" className="text-[14px] text-gray-700 "><b>First Name</b></label>
                    <input className= "border-2 border-solid border-gray-200 rounded-lg p-3 font-normal text-[16px]" id="first_name" type="text" placeholder="Enter Your First Name" name="firstname" required/>
                </div>
                <div className="flex flex-col w-[100%] md:w-[45%]">
                    <label for="lastname" className="text-[14px] text-gray-700 mt-6 md:mt-0"><b>Last Name</b></label>
                    <input className= "border-2 border-solid border-gray-200 rounded-lg p-3 font-normal text-[16px]" id="last_name" type="text" placeholder="Enter Your Last Name" name="lastname" required/>
                </div>
            </div>
            <div className="flex flex-col">
                <label for="email" className="text-[14px] text-gray-700 mt-6"><b>Email</b></label>
                <input className= "border-2 border-solid border-gray-200 rounded-lg p-3 font-normal text-[16px]" id="email" type="email" placeholder="yourname@email.com" name="email" required/>
            </div>
            <div className="flex flex-col">
                <label for="message" className="text-[14px] text-gray-700 mt-6"><b>Message</b></label>
                <textarea className= "border-2 border-solid border-gray-200 rounded-lg p-3 font-normal text-[16px] h-[132px]" id="message"  placeholder="Send me a message and I'll reply you as soon as possible..." name="message" required/>
            </div>
            <div className="flex flex-col">
                <label>
                    <input type="checkbox"  name="agreement" /> You agree to providing your data to {name} who may contact you.
                </label>
            </div>
            <button id="btn__submit" className="w-full bg-[#1570EF] p-3 mt-4 text-white rounded-md">Send message</button>
        </div>
    </form>
  )
  ;
};

export default ContactForm;
