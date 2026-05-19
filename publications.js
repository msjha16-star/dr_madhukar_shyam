fetch('data/publications.json')
  .then(response => response.json())
  .then(data => {

    const container =
      document.getElementById('publication-list');

    data.forEach(pub => {

      const div = document.createElement('div');

      div.classList.add('publication-card');

      div.innerHTML = `
        <h3>${pub.title}</h3>
        <p>${pub.journal}</p>
        <span>${pub.year}</span>
      `;

      container.appendChild(div);
    });

  });