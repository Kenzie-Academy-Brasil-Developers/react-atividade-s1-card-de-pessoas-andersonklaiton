import "./style.css"
function Developer({name, age, country}){
    return(
        <div className="cardInfo">
            <span>
                <p className="userName">Dev: {name}</p>
                <p>Idade: {age}</p>
                <p>País: {country}</p>
            </span>
        </div>
    )
}
export default Developer
