import './title-section.css'

const TitleSection = () => {
  return (
    <div className="title-section container-md">
      <div className="text-center">
        <h1>Search That Recipe!</h1>
        <p>
          Edamam recipe API contains the data of over 2.3 million recipes by diets, calories, and nutrient ranges. 
        </p>
        <p>
          Enter any dish to see some of its results!
        </p>
        <p>*Note: API only allows 10 calls per minute*</p>
      </div>
    </div>
  )
}

export default TitleSection;