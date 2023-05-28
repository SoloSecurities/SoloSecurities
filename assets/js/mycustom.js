// Get references to the elements
const featuresItems = document.querySelectorAll('.features-item');

// Add event listeners
featuresItems.forEach(function (item) {
  const description = item.querySelector('.description');
  const readMoreBtn = item.querySelector('.read-more');
  const readLessBtn = item.querySelector('.read-less');

  readMoreBtn.addEventListener('click', function () {
    // Close previously expanded item
    const expandedItem = document.querySelector('.features-item.expanded');
    if (expandedItem && expandedItem !== item) {
      expandedItem.classList.remove('expanded');
      expandedItem.querySelector('.read-more').style.display = 'inline-block';
      expandedItem.querySelector('.read-less').style.display = 'none';
    }

    // Expand current item
    item.classList.add('expanded');
    readMoreBtn.style.display = 'none';
    readLessBtn.style.display = 'inline-block';
  });

  readLessBtn.addEventListener('click', function () {
    // Collapse current item
    item.classList.remove('expanded');
    readMoreBtn.style.display = 'inline-block';
    readLessBtn.style.display = 'none';
  });
});
