import {useState } from 'react';

function Search({onFilter}) {

  const [ searchVal, setSearchVal] = useState('')


  const onSearchInput = (e) => {
    const val = e.target.value
    setSearchVal(val)
    onFilter(val)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchVal} onInput={onSearchInput}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
