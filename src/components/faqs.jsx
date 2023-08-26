import React from "react";
// import Accordion from "./Accordion";

// import "../css/main.css";
// import "../scss/main.scss";

// import illustration__box from "";
// import illustration__woman_desktop from "";svg
// import illustration__woman_mobile from "";

const questionsAnswers = [
  {
    id:1,
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: 2, 
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3, 
    question: "How do I reset my password?",
    answer: `Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.`,
  },
  {
    id: 3, 
    question: "Can I cancel my subscription?",
    answer: `Yes! Send us a message and we’ll process your request no questions asked.`,
  },
  {
    id: 3, 
    question: "Do you provide additional support?",
    answer: `Chat and email support is available 24/7. Phone lines are open during normal business hours.`,
  },
];

const Faqs = () => {
  return (
    <div class="faq container-faqs" aria-level="Frequently Asked Questions">
    <header class="faq_header">
        <h2 class="faq_header-title">Frequently Asked Questions</h2>
    </header>
   <div class="faq__body">
    {questionsAnswers.map((data) => <FaqsDetail  key={data.id} {...data}/>)}
       {/* <details aria-expanded="true" class="faq__panel" open>
           <summary class="faq__label">What is Artificial Intelligence?</summary>
           <div class="faq__panel-body">
           <p class="faq__panel-answer">AI, or Artificial Intelligence, refers to computer systems that can perform tasks requiring human-like intelligence. It involves techniques like machine learning, natural language processing, and robotics. AI systems can learn, analyze data, recognize patterns, and make decisions. Examples include voice assistants and recommendation algorithms. AI has applications in various industries and holds potential for significant advancements. However, ethical and societal concerns must be addressed as AI continues to develop.</p>
           </div>
       </details>
       <details aria-expanded="false" class="faq__panel">
           <summary class="faq__label">What is ChatGpt?</summary>
           <div class="faq__panel-body">
           <p class="faq__panel-answer">ChatGPT is an artificial intelligence language model developed by OpenAI. It is based on the GPT (Generative Pre-trained Transformer) architecture, specifically GPT-3.5. The model is designed to generate human-like responses to text inputs, making it suitable for conversational applications. It has been trained on a diverse range of internet text to acquire a broad understanding of language patterns, context, and common knowledge.</p>
           </div>
       </details>
       <details aria-expanded="false" class="faq__panel">
           <summary class="faq__label">What's the future of AI?</summary>
           <div class="faq__panel-body">
           <p class="faq__panel-answer">AI's future: Advanced machine learning, automation, enhanced NLP, healthcare revolution, ethical AI, AI-robotics integration, AI-assisted creativity, personalized experiences, cybersecurity defense, and autonomous transportation. Challenges include ethics, privacy, job displacement, and responsible AI use.</p>
           </div>
       </details> */}
       
   </div>

</div>
  );
};

const FaqsDetail = ({question , answer}) => {
  return (
    <>
      <details aria-expanded="true" class="faq__panel" open >
           <summary class="faq__label">{question}</summary>
           <div class="faq__panel-body">
           <p class="faq__panel-answer">{answer}</p>
           </div>
       </details>
    </>
  )
}


export default Faqs;