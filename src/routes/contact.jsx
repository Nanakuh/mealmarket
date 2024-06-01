function Contact() {
  return <div><section className="info">

  <h2 className="text-emerald-800 font-black tracking-wider text-2xl flex justify-center my-10"  >CONTACT</h2>
  <article>
      <p className="ml-7 mb-4">From this form you can contact us and ask us any questions.
          We encourage you to write to us!!!</p>
      <p className="ml-7 mb-4">
      All fields marked with <span className="asterisc">*</span> are mandatory.
      </p>
  </article>
</section>
<section className="ml-7 mb-4">
  <htmlForm className="htmlFormulary" action="https://htmlFormspree.io/f/xoqozyjz" method="post">
      <label className="text-emerald-800 font-black mr-2" htmlFor="name">Full name<span className="asterisc"> *</span></label>
      <input className="input" type="text" id="name" name="complete name" placeholder="Name..."
          title="Escribe tu nombre y apellidos" />
      <label className="text-emerald-800 font-black ml-5 mr-2" htmlFor="email">Email<span className="asterisc"> *</span></label>
      <input className="input" type="email" id="email" name="email" placeholder="email@mail.com"
          title="Escribe tu email de contacto" />
      <label className="text-emerald-800 font-black ml-5 mr-2" htmlFor="phone">Telephone </label>
      <input className="input" type="tel" id="phone" name="telephone" placeholder="Ej: 123456789"
          title="Escribe tu teléfono" />
      <label className="text-emerald-800 font-black ml-5 mr-2" htmlFor="notes">Message <span className="asterisc"> *</span></label>
      <input className="input--text" type="text" id="notes" name="comments" placeholder="What do you need?"
          title="Escribe tu petición" />
      <input className="text-emerald-800 font-black ml-5 mr-2" type="submit" value="SEND" />
  </htmlForm>
</section></div>;
}

export default Contact;