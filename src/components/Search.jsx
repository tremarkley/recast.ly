var searchTimeout;

var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onKeyDown={(e) => {
      if (searchTimeout !== undefined) {
        clearTimeout(searchTimeout);
      }
      if ($('input').val() !== '') {  
        if (e.keyCode === 13) {
          props.onSearchEvent($('input').val());
        } else {
          searchTimeout = setTimeout(() => props.onSearchEvent($('input').val()), 500);
        }
      }
    }} />
    <button className="btn hidden-sm-down" onClick={() => {
      props.onSearchEvent($('input').val());
    }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;


