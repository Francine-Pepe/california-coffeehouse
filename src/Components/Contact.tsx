import React from "react";

function Contact(props: any) {
  const { text, contact } = props;
  return (
    <section className="contact-container container" id="contact">
      <div className="contact-content">
        <h1>Contact</h1>
        <div className="box-container">
          {text.map((data: { text: string }, index: any) => (
            <div className="contact-box" key={index}>
              <p>{data.text}</p>
            </div>
          ))}

          <div className="contact-box">
            <p>
              Do you want to reserve a table? We can be reached by phone or
              email:
            </p>
            {contact.map(
              (
                data: { icon: string; alt: string; text: string },
                index: any
              ) => (
                <div className="contact-box-information" key={index}>
                  <img src={data.icon} alt={data.alt} />
                  <p>{data.text}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
