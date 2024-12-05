import { Form } from "react-router-dom";

export const contactData=async({request})=>{
    try{
        const response=await request.formData();
        const data=Object.fromEntries(response)
        // console.log(data)
        return null
    }catch(error){
        console.log(error)
    }
}

export const Contact = () => {

    return (
      <>
        <section className="container ">
          <h2 className="section-common--heading my-3">Contact us</h2>
          <p className="section-common--subheading mb-10">
            Get in touch with us. We are always here to help you.
          </p>
  
          <div className="section-contact">
            <div className=" grid grid-two--cols">
              <div className="contact-content">
                <Form method="POST" action="/contact">
                  <div className="grid grid-two-cols mb-3">
                    <div>
                      <label htmlFor="username">full name</label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        required
                        autoComplete="off"
                        placeholder="enter full name"
                      />
                    </div>
  
                    <div>
                      <label htmlFor="email">email address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        autoComplete="off"
                        placeholder="abc@gmail.com"
                      />
                    </div>
                  </div>
  
                  <div className="mb-3">
                    <label htmlFor="message">message</label>
                    <textarea
                      name="message"
                      id="message "
                      cols="30"
                      rows="10"
                      placeholder="we are always here to help you."
                    ></textarea>
                  </div>
  
                  <div className="mt-3">
                    <button type="submit" className="btn contact-btn">
                      send message
                    </button>
                  </div>
                </Form>
              </div>
              <div className="contact-image">
                <figure>
                  <img
                    src="/contact1.png"
                    alt="contact pic"
                    className="contact_image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };