import React from 'react';
import "./contUnit.css";

const ContUnit = (props) => {
    const [unit, setUnit] = React.useState(0);
    const [buttonMoreClass] = React.useState("button_blue");
    const [buttonMinusClass, setButtonMinusClass] = React.useState("button_gray");
    const [buttonAddProperties, setButtonAddProperties] = React.useState({ clicked: false, disabled: "disabled", class: "", text: "ADD" });

    function moreUnit() {
        const unitIncrement = unit + 1;
        if (unitIncrement <= props.max) {
            setUnit(unitIncrement);
        }


        if (unitIncrement > 0) {
            setButtonMinusClass("button_blue");
            if (buttonAddProperties.clicked) {
                setButtonAddProperties({ disabled: "", class: "button_blue", text: "UPDATE", clicked: false });
            }
            else {
                setButtonAddProperties({ ...buttonAddProperties, disabled: "", class: "button_blue" });
            }
        }
    }

    function minusUnit() {
        const unitDecrement = unit - 1;
        if (unitDecrement >= 0) {
            setUnit(unitDecrement);
        }
        if (unitDecrement === 0) {
            if (buttonAddProperties.clicked) {
                setButtonAddProperties({ clicked: false, disabled: "", class: "button_blue", text: "UPDATE" });
            }
            else {
                setButtonAddProperties({ ...buttonAddProperties, clicked: false, disabled: "disabled", class: "", text: "ADD" });
            }

            setButtonMinusClass("button_gray");
        }
        else {
            if (buttonAddProperties.clicked) {
                setButtonAddProperties({ ...buttonAddProperties, disabled: "", class: "button_blue", text: "UPDATE" });
            }
        }
    }

    function buttonClick() {
        if (unit === 0) {
            setButtonAddProperties({ disabled: "disabled", class: "", clicked: true, text: "ADD" });
        }
        else {
            setButtonAddProperties({ disabled: "disabled", class: "", clicked: true, text: "✔" });
        }

    }

    return (
        <div className="div-cont">
            <button className={buttonMinusClass} onClick={e => minusUnit()}>-</button>
            <input type="text" value={unit} readOnly></input>
            <button className={buttonMoreClass} onClick={e => moreUnit()}>+</button>
            <button className={buttonAddProperties.class} id="button-set-unit" onClick={e => buttonClick()} disabled={buttonAddProperties.disabled}>{buttonAddProperties.text}</button>
        </div>
    );
}

export default ContUnit;