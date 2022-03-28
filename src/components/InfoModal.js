// STYLES
import './InfoModal.css'

const InfoModal = ({ setShowInfo }) => {
  return (
    <div className="info-modal">
      <div className="info-box">
        <span className="close" onClick={() => {setShowInfo()}} >Close</span>
        <h2 className="headline">About Where in the world?</h2>
        <p>Where in the World? acts as a quick visual reference for geographic information from 250 different countries around the world using the REST Countries API and database.  Information provided includes capital city, population, border countries, etc.</p>
        <p>Use the filter feature to organize the countries by region, use the search bar to search for a specific country, or simply scroll to explore and you might just find a country or two you've never even heard of.</p>
        <p id="call-to-action" onClick={() => {setShowInfo()}}>Give it a try!</p>
      </div>
    </div>
  )
}

export default InfoModal