import {normalGridData} from '../../data/normalGridData'
import Normalgridcard from '../ui/Normalgridcard'

const Normalgrid = () => {

    const element = <Normalgridcard cityAbv="" cityName="" numberOfSalariesReported="" SalaryPerHour=""/>


    return(
        <>
        <section className="flex flex-col items-center px-5 md:px-78 py-9 md:py-18">
            <h2 className="px-2 md:px-35 py-11 text-2xl font-bold leading-[130%] tracking-tight uppercase text-center">Highest paying cities for Front Desk Agents<span className="text-blue-800"> near Me</span></h2>
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