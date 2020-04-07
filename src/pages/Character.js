const Character = () => {
  const view = `
    <div className='Characters-inner'>
      <article className='Characters-card'>
        <img src='image' alt='name' />
      </article>
      <article className='Character-card'>
        <h3>Episodes:</h3>
        <h3>Species:</h3>
        <h3>Gender:</h3>
        <h3>Origin:</h3>
        <h3>Last location:</h3>
      </article>
    </div>
  `;
  return view;
};

export default Character;
