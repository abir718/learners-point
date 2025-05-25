const RefundPolicy = () => {
  return (
    <div className="text-center mx-auto w-[90%] flex flex-col flex-1">
      <h1 className="text-4xl font-medium mt-10">Refund Policy</h1>
      <hr className="border-gray-200 my-6" />
      <p className="text-xl w-[80%] mx-auto">
        At Learner's Point, we strive to ensure complete satisfaction with our courses and content. If you are not satisfied with your purchase, you may request a refund within 7 days of enrollment.
        To be eligible for a refund, the course content must not be more than 20% completed. Refunds will not be issued for downloaded materials or in cases of account misuse.
        All refund requests must be submitted in writing via email with a valid reason. Our team will review the request and process approved refunds within 5–7 business days.
        We reserve the right to deny refund requests that do not meet our policy criteria. For further assistance, please contact our support team.
      </p>
    </div>
  );
};

export default RefundPolicy;