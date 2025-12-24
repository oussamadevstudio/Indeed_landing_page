import {normalGridData} from '../../data/normalGridData'
import Normalgridcard from '../ui/Normalgridcard'

const Normalgrid = () => {

    const element = <Normalgridcard cityAbv="" cityName="" numberOfSalariesReported="" SalaryPerHour=""/>


    return(
        <>
        <section className="flex flex-col items-center px-5 md:px-78 py-9 md:py-18">
            <h2 className="px-20 py-11">Highest paying cities for Front Desk Agents near Me</h2>
            <div className="flex flex-col md:grid lg:grid-cols-3 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-3 gap-4 place-items-center">
                {normalGridData.map((element) => 
                <Normalgridcard key={element.cityAbv} cityAbv={element.cityAbv} 
                cityName={element.cityName} 
                numberOfSalariesReported={element.numberOfSalariesReported} 
                SalaryPerHour={element.SalaryPerHour}/>)}
            </div>
        </section>

        
        </>
    )
}

export default Normalgrid