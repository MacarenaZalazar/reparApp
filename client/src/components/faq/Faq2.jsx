import React from "react";

function Faq2(props) {
  return (
    <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item ">
        <h2 class="accordion-header" id="flush-headingOne">
          <button
            class="accordion-button collapsed bg-dark text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Accordion Item #1
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          class="accordion-collapse collapse text-dark"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">{props.text1}</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button
            class="accordion-button collapsed bg-dark text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Accordion Item #2
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">{props.text2}</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button
            class="accordion-button collapsed bg-dark text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Accordion Item #3
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">{props.text3}</div>
        </div>
      </div>
    </div>
  );
}

export default Faq2;
