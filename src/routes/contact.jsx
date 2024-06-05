function Contact() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-orange-300 font-black tracking-wider text-2xl flex justify-center my-10">
        CONTACT
      </h2>
      <p className="mb-4">
        From this form you can contact us and ask us any questions. We encourage
        you to write to us!!!
      </p>
      <p className="mb-4">
        All fields marked with <span className="asterisc">*</span> are
        mandatory.
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSd2-f_3mDJPSXePECf4i8bKzAxpfOhX2azMGStAE84bT-85FA/viewform?embedded=true"
        width="640"
        height="724"
        className="mx-auto"
      >
        Cargando…
      </iframe>
    </div>
  );
}

export default Contact;
