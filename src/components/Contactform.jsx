import React from "react";

function Contactform(){

    // <form name="contact-form" netlify netlify-honeypot="bot-field" hidden>
    //   <input type="text" name="name" />
    //   <input type="email" name="email" />
    //   <textarea name="message"></textarea>
    // </form>

    return <div>


    <h2 id="contactme"  class="h1-responsive font-weight-bold  ">Contact me</h2>
   
    <div >
    <div class="row">

        <div class="col-md-9 mb-md-0 mb-5">
            <form action="/" id="contact-form" name="contact-form"   method="POST" className="Fields" >
            {/* The input is for javascript to work with the netlify attribute */}
            <input type="hidden" name="form-name" value="contact-form" />


                <div class="row ">

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="email" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>

                </div>

                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>

                <div class="row">

                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>

                <div id="send-button" class="text-center text-md-left">
                    <button type="submit" class="btn btn-primary" >Send</button>
                 </div>

            </form>

            

            <div class="status"></div>
        </div>


    </div>

    </div>

    </div>
    
}

export default Contactform;