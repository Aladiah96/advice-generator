$(".button").on('click', () => {
    $.get('https://api.adviceslip.com/advice', (slip) => {
        let advId = JSON.parse(slip).slip.id;
        let advice = JSON.parse(slip).slip.advice;

        $(".advcard-title span").text(advId);
        $(".advcard-text span").text(advice);
    });
  }); 