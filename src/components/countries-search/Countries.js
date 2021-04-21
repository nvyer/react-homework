import Raect from 'react';
import './countries.css';

export class Countries extends Raect.Component {
    constructor(props) {
        super(props);
    }

    findCountry = ({ target: { value } }) => {
        let re = /^[A-Za-z]+$/;
        if (re.test(value)) {
            const url = 'https://restcountries.eu/rest/v2';
            const countryName = value ? `name/${value}` : 'all';

            fetch(`${url}/${countryName}`).then(res => res.json()).then(countries => {
                this.setState({ countries });
            })
        }
    }

    render() {
        return (
            <div>
                <label>
                    <input className='search-bar' onChange={this.findCountry} />
                    {this.state && this.state.countries.map((el, i) => {
                        return (
                            <div key={i} className='country-container'>
                                <img src={el.flag} width='10px' height='10px'></img>
                                <p className='country-name'>{el.name}</p>
                            </div>)
                    })}
                </label>
            </div>
        )
    }
}