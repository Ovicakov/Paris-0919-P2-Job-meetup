import React from "react"
import InputRange from "react-input-range";
import 'react-input-range/lib/css/index.css'
import './Filter.css'
class Filter extends React.Component {
    state = {
        active: false,
        openFilter: false,
        value: 2
    }

    toggleClass = () => {
        const currentState = this.state.active;
        this.setState({
          active : !currentState
        })
      }

    render() {
        return (
            <div className="filter">
                <div className="buttonfilter" onClick={this.toggleClass}>
                    <button
                        className={this.state.openFilter ? 'is-open' : ' '}
                        onClick={event => {
                            const newOpenFilter = !this.state.openFilter;
                            this.setState({ openFilter: newOpenFilter });
                        }}
                    >Filter</button>
                </div>
                <form className={this.state.active ? "slider checkBox" : "checkBox"}>
                    <div className="check-meet-up">
                        <label>
                            <input type="checkbox" value="Meet-up" ></input>
                            Meet-up
                        </label>
                    </div>
                    <div className="check-entreprise">
                        <label>
                            <input type="checkbox" value="Entreprises" ></input>
                            Entreprises
                        </label>
                    </div>
                    <div className="check-cowork">
                        <label>
                            <input type="checkbox" value="Cafés-Coworking" ></input>
                            Cafés-Coworking
                        </label>
                    </div>
                    <div className="range">
                        <p>Rayon</p>
                        <InputRange
                            maxValue={15}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({ value })} />
                    </div>
                </form>


            </div >
        )
    }
}

export default Filter