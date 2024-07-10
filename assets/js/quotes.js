const quotes = [
  {
    quote: 'In line with our philosophy of "building a lakehouse from spare parts", we were looking for an in-process graph database to run lineage queries: Kùzu is very fast and has great foundations as the team behind it, and handles all the strange inferences we throw at it. So far, we have been extremely happy with both the library and the support, and we are now planning new use cases on top of it.',
    name: 'Jacopo Tagliabue, Founder of',
    company: 'Bauplan Labs',
    link: 'https://www.bauplanlabs.com/',
    img: '/img/quotes/jacopo.jpg',
    logo: 'img/quotes/bauplan-logo.png'
  },
  //   {
  //   quote: 'What the fuck?',
  //   name: 'Nobody',
  //   company: 'Whatever',
  //   link: 'https://www.bauplanlabs.com/',
  //   img: '/img/quotes/jacopo.jpg',
  //   logo: 'img/quotes/bauplan-logo.png'
  // }
]

const quoteText = $('#quote-text');
const quoteName = $('#quote-name');
const quoteCompany = $('#quote-company');
const quoteImg = $('#quote-img');
const quoteLogo = $('#quote-logo');
const nextButton = $('#next-quote');
const prevButton = $('#prev-quote');
const quoteButtons = $('#quote-buttons');

let currentQuote = 0;

if(quotes.length <= 1) {
  quoteButtons.hide();
}

const changeQuote = (i, animate = true) => {
  const time = animate ? 300 : 0;
  quoteText.fadeOut(time, () => {
    quoteText.text(quotes[i].quote);
    quoteText.fadeIn(time);
  });

  quoteName.fadeOut(time, () => {
    quoteName.text(quotes[i].name);
    quoteName.fadeIn(time);
  });

  quoteCompany.fadeOut(time, () => {
    quoteCompany.text(quotes[i].company);
    quoteCompany.fadeIn(time);
  });

  quoteCompany.attr('href', quotes[i].link);

  quoteImg.fadeOut(time, () => {
    quoteImg.attr('src', quotes[i].img);
    quoteImg.fadeIn(time);
  });

  quoteLogo.fadeOut(time, () => {
    quoteLogo.attr('src', quotes[i].logo);
    quoteLogo.fadeIn(time);
  });
}

changeQuote(currentQuote, false);

nextButton.click(() => {
  currentQuote = (currentQuote + 1) % quotes.length;
  changeQuote(currentQuote);
});

prevButton.click(() => {
  currentQuote = (currentQuote - 1 + quotes.length) % quotes.length;
  changeQuote(currentQuote);
});