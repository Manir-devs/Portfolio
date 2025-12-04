// Load projects from JSON (optional)
fetch('_data/projects.json')
  .then(res => res.json())
  .then(data => {
    const gallery = document.getElementById('gallery');
    data.forEach(project => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${project.title}</h3>
        <img src="${project.image}" alt="${project.title}" width="300"/>
        <p>${project.description}</p>
      `;
      gallery.appendChild(div);
    });
  });
