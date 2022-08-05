import Deal from './Deal'

function Deals ({ athletes, sponsors, deals, idGetter}) {
    

    const mapDeals = deals.map((deal) => {
        return <Deal deal={deal} key={deal.id} athletes={athletes} sponsors={sponsors} idGetter={idGetter} />
    })

    return(
        <div>
            <h1>Deals</h1>
            <ul className='athletes'>{mapDeals}</ul>
        </div>
    )
    

}

export default Deals