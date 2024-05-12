function Contact() {
  return <div><section className="info">

  <h2 className="title-contact">CONTACT</h2>
  <article>
      <p className="description-contact">From this form you can contact us and ask us any questions.
          We encourage you to write to us!!!</p>
      <p className="required">
      All fields marked with <span className="asterisc">*</span> are mandatory.
      </p>
  </article>
</section>
<section className="htmlForm">
  <htmlForm className="htmlFormulary" action="https://htmlFormspree.io/f/xoqozyjz" method="post">
      <label className="field" htmlFor="name">Full name<span className="asterisc"> *</span></label>
      <input className="input" type="text" id="name" name="complete name" placeholder="Name..."
          title="Escribe tu nombre y apellidos" />
      <label className="field" htmlFor="email">Email<span className="asterisc"> *</span></label>
      <input className="input" type="email" id="email" name="email" placeholder="email@mail.com"
          title="Escribe tu email de contacto" />
      <label className="field" htmlFor="phone">Telephone </label>
      <input className="input" type="tel" id="phone" name="telephone" placeholder="Ej: 123456789"
          title="Escribe tu teléfono" />
      <label className="field" htmlFor="notes">Message <span className="asterisc"> *</span></label>
      <input className="input--text" type="text" id="notes" name="comments" placeholder="What do you need?"
          title="Escribe tu petición" />
      <input className="submit" type="submit" value="SEND" />
  </htmlForm>
</section></div>;
}

export default Contact;