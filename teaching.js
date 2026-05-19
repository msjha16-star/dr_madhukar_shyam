fetch('data/teaching.json')
  .then(response => response.json())
  .then(data => {

    const container =
      document.getElementById('teaching-list');

    data.forEach(item => {

      const div = document.createElement('div');

      div.classList.add('publication-card');

      div.innerHTML = `
        <h3>${item.course}</h3>
      `;

      container.appendChild(div);
    });

  });