function Faqs() {
  return (
    <div>
      <div className="question" onClick="toggleAnswer(0)">
        What are the delivery times?
      </div>
      <div className="answer">
        Delivery times are Monday to Friday from 9:00 a.m. to 9:00 p.m. and
        Saturdays from 10:00 a.m. to 8:00 p.m. and Saturdays from 10:00 a.m. to
        8:00 p.m.
      </div>
      <div className="question" onClick="toggleAnswer(1)">
        What is the delivery coverage area?
      </div>
      <div className="answer">
        We currently deliver throughout the city of [name of city].
      </div>
      <div className="question" onClick="toggleAnswer(2)">
        What are the accepted payment methods?
      </div>
      <div className="answer">
        We accept payment by credit card, debit card and cash on delivery. of
        delivery.
      </div>
      <div className="question" onClick="toggleAnswer(3)">
        Is it possible to place personalised orders or orders adapted to special
        diets? special diets?
      </div>
      <div className="answer">
        Yes, we offer options to personalise your order according to your
        dietary dietary preferences or food allergies. Please contact our
        customer our customer service for more information.
      </div>
    </div>
  );
}

export default Faqs;
