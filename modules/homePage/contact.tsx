import { useForm, ValidationError } from "@formspree/react"

export function ContactForm() {
    const [state, handleSubmit] = useForm('xqapnrkj')
    if(state.succeeded){
        return (
            <p className="text-light">Thanks for sending</p>
        )
    } return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="name" name="name" placeholder="Enter your name" className="form-input bg-transparent  rounded-lg w-full py-2 lg:py-3 px-4 lg:px-6 transition "/>
            <ValidationError prefix="Name" field="name" errors={state.errors}/>

            <input type="email" name="email" placeholder="Enter your email" className="form-input bg-transparent rounded-lg w-full py-2 lg:py-3 px-4 lg:px-6 transition "/>
            <ValidationError prefix="Email" field="email" errors={state.errors}/>

            <textarea name="message" rows={3} placeholder="Enter your message" className="form-input bg-transparent rounded-lg w-full py-2 lg:py-3 px-4 lg:px-6 transition "/>
            <ValidationError prefix="Message" field="message" errors={state.errors}/>

            <button type="submit" disabled={state.submitting} className="text-sm px-5 py-3 flex w-fit gap-2 items-center font-semibold rounded-full transition bg-primary hover:bg-primary2">
                <span className="">Send Message</span>
            </button>
        </form>
    )

}

export function Contact(){
    return (
        <section id="contact" className="bg-background2">
            <div className="container ">
                <div className="py-14 border-t border-stone-800 flex flex-col gap-6">
                    <h2 className="heading-01">Contact</h2>
                    
                    <div className="flex flex-col gap-6 lg:flex-row">
                        <div className="border-l border-stone-800 py-6 pl-6 md:pl-10 md:py-10">
                            <div className="flex flex-col gap-8">
                                <p className="p-light2">Have a question? or just want to say Hi? Drop me a message! </p>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


