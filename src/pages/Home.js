import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();

  let data = [];
  characters.results.forEach(e => {
    data.push(e.species);
  });
  let species = [...new Set(data)];
  const view = `


  <div class='Filter'>${species
    .map(
      x => `
        <button type="button" class="btn btn-outline-success">${x}
        </button>`
    )
    .join('')}
    
      </div>
    <div class="Characters">
      ${characters.results
        .map(
          character => `
        <article class="Character-item">
          <a href="#/${character.id}/">
            <img src="${character.image}" alt="${character.name} class="rounded" >
            <h2>${character.name}</h2>
          </a>
        </article>
      `
        )
        .join('')}
    </div>
  `;
  return view;
};

export default Home;
