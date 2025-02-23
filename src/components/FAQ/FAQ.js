import HomeButton from '../../components/shared/HomeButton';
import './FAQ.scss';
import { useState } from 'react';

function FAQ() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  const data = [
    {
      question: 'How does it work?',
    },

    {
      question: 'How does it work?',
    },

    {
      question: 'How does it work?',
    },

    {
      question: 'How does it work?',
    },

    {
      question: 'How does it work?',
    },
  ];

  return (
    <section className="faq-container">
      <section className="faq-content">
        <h1>Questions? Look Here.</h1>
        <p>Still can't find an answer? Email us at fakeemail@gmail.com</p>
        {data.map((item, index) => (
          <section
            className="faq-accordion"
            onClick={() => toggle(index)}
            key={index}
          >
            <div className="faq">
              <p>{item.question}</p>

              {clicked === index && (
                <p className="faq-answer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  praesentium.
                </p>
              )}
            </div>
            <span>{clicked === index ? '-' : '+'}</span>
          </section>
        ))}
      </section>

      <HomeButton />
    </section>
  );
}

export default FAQ;
