import "./style.css"

function Developer(){
    const person=[
        {name:"Gabriel",
         age:19,
         country:"Brasil"
        },
        {name:"Filipe",
         age:28,
         country:"Brasil"
        },
        {name:"Mariana",
         age:24,
         country:"Itália"
        },
    ]

    const eachPerson = person.map((item)=>{
        return (
            <div className="cardInfo">
                <span>
                    <p className="userName">Dev: {item.name}</p>
                    <p>Idade: {item.age}</p>
                    <p>País: {item.country}</p>
                </span>
            </div>
        )
    })
    return eachPerson
}
export default Developer