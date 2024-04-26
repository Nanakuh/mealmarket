import { Accordion } from "flowbite-react";

function Faqs() {
  const questionAnswers = [
    {
      question: "What are the delivery times?",
      answer:
        "Delivery times are Monday to Friday from 9:00 a.m. to 9:00 p.m. and Saturdays from 10:00 a.m. to 8:00 p.m.",
    },
    {
      question: "What is the delivery coverage area?",
      answer: "We currently deliver throughout the city of [name of city].",
    },
    {
      question: "What are the accepted payment methods?",
      answer:
        "We accept payment by credit card, debit card, and cash on delivery.",
    },
    {
      question:
        "Is it possible to place personalized orders or orders adapted to special diets?",
      answer:
        "Yes, we offer options to personalize your order according to your dietary preferences or food allergies. Please contact our customer service for more information.",
    },
  ];

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen w-full">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold mb-4">FAQs</h1>
        <Accordion className="min-w-4">
          {questionAnswers.map((item, i) => (
            <Accordion.Panel key={i}>
              <Accordion.Title>{item.question}</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {item.answer}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faqs;
