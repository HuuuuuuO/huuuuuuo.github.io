forEach(document.getElementsByClassName('details'), ($details) => {
    const $summary = $details.querySelector('.details-summary');
    $summary.addEventListener('click', () => {
      $details.classList.toggle('open');
    }, false);
  });




