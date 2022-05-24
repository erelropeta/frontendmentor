// select buttons of .features__tabs and articles of .features__contents
const featuresTabs = document.querySelectorAll('.features__tabs > button');
const featuresContents = document.querySelectorAll(
  '.features__contents > article'
);
const faqQuestionToggleBtn = document.querySelectorAll(
  '.faq__question-toggle-btn'
);

// add click event listener to each button of featuresTabs
featuresTabs.forEach(function (featureBtn) {
  featureBtn.addEventListener('click', function (e) {
    // get dataset from featureBtn and assign to id variable
    const id = e.target.dataset.content;
    // select article with the id
    const featuresContent = document.querySelector(`#${id}`);

    // add .features__content--selected to the selected content
    // and remove it from the rest
    featuresContents.forEach(function (content) {
      if (featuresContent === content) {
        content.classList.add('features__content--selected');
      } else {
        content.classList.remove('features__content--selected');
      }
    });
  });
});

console.log(faqQuestionToggleBtn);
faqQuestionToggleBtn.forEach(function (toggleBtn) {
  toggleBtn.addEventListener('click', function (e) {
    const question = e.target.parentElement.parentElement.parentElement;

    if (question.classList.contains('faq__question--show-text')) {
      question.classList.remove('faq__question--show-text');
    } else {
      question.classList.add('faq__question--show-text');
    }
  });
});
