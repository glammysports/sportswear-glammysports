fetch('products.csv')
  .then(response => response.text())
  .then(csvText => {
    const rows = csvText.trim().split('\n').slice(1); // skip header
    const grid = document.getElementById('product-grid');

    rows.forEach(row => {
      const [name, price] = row.split(',');

      // Generate image filename from name
      let imageName = name.trim()
                          .toLowerCase()
                          .replace(/\s+/g, '_') // spaces → underscores
                          + '.jpg';             // default extension

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="images/${imageName}" alt="${name}">
        <h3>${name}</h3>
        <p>$${price}</p>
      `;
      grid.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading CSV:", err));
