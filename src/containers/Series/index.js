import React , {Component} from 'react';
import SeriesList from '../../components/SeriesList'
class Series extends Component{

  state = {
    series: [],
    seriesName: ``,
    isFetching: false,
  }
    
  onSeriesInputChange = e => {

    this.setState({seriesName: e.target.value, isFetching: true})

    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`) 
    .then( (response) =>  response.json() )
    .then(json => this.setState({ series: json, isFetching: false}))
    
  }

  render(){

    const { series, seriesName, isFetching } = this.state;
    return (
    <div>       
        <div>
          <input
            value={seriesName}
            type="text"
            onChange={this.onSeriesInputChange} />
        </div>
        {
          series.length === 0 && seriesName.trim() === '' 
          &&
          <p>Please inter series name to the input</p>
        }
        {
          series.length === 0 && seriesName.trim() !== ''
          &&
          <p>No Tv series nave been found with this name</p>
        }
      <SeriesList list={this.state.series}/>
    </div>
    
  )
  }
}

export default Series;