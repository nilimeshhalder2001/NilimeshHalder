const name="Nilimesh";
const sister="Soumili";
const friend="Arunima";
const date=new Date();
const month=date.getMonth();
const year=date.getFullYear();
function Nilimesh(){
  return <div>
  <h1 className="design1">Hi Everyone</h1>
  <h2 className="display2">{name}</h2>
  <h3 className="display3">{sister}</h3>
  <h4 className="display4">{friend}</h4>
  <h5 className="display5">{month}</h5>
  <h6 className="display6">{year}</h6>
</div>
}
export default Nilimesh;