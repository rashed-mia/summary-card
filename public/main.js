// Fetch the data from the JSON file
fetch('/public/data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process the data and update the DOM
    const summaryItemsContainer = document.querySelector('.summary-items');
    summaryItemsContainer.innerHTML = ''; // Clear existing items

    data.forEach(item => {
      const summaryItem = document.createElement('div');
      summaryItem.classList.add('summary-item');
      summaryItem.innerHTML = `
        <div class="flex-group">
          <img src="${item.icon}" alt="${item.category} icon" class="summary-icon">
          <p class="summary-item-tile">${item.category}</p>
        </div>
        <p class="summary-score"><span>${item.score}</span> / 100</p>
      `;
      summaryItemsContainer.appendChild(summaryItem);
    });
  })
  .catch(error => console.error('Error fetching data:', error));