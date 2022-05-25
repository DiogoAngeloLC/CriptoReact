import "./style.scss";
import iconVetor from "../../assets/img/Vector1.png"

interface Budget {
    value?: string;
  
}

export default function Budget (props: Budget) {
  return (
    <div className="img-budget flex">
        <div className="div-budget">
        <p>{props.value}</p>
        </div>
        <img src={iconVetor} alt="" />
    </div>
  );
}
