function Country({ name, capital, region, flag, population }) {
  return (
    <div>
      <img src={flag} alt={`${name} flag`} />
      <h2>{name}</h2>
      <p>{population}</p>
      <p>{region}</p>
      <p>{capital}</p>
    </div>
  );
}

export default Country;
