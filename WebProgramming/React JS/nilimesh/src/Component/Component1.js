import ChildComponent from './ChildComponent';
import Data from './Data.json';
let value=[];
for(let i=0;i<2;i++){
    value.push(<ChildComponent name={Data[i].Name} address={Data[i].Address}/>);
}
function Component1(){
    return(
        <div>
            <ChildComponent name="Niimesh" address="Harindanga"/>
            <ChildComponent name="Soumili" address="Harindanga"/>
            <ChildComponent name="Arunima" address="Amira"/>
            {value}
        </div>
    )
}
export default Component1;