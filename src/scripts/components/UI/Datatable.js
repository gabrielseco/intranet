import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Row from './Tables/Row'

class UIDataTable extends React.Component {
  componentDidMount(){
    var sorts = new Array();
    this.props.data.HEADERS.map((header, i) => {

      if(header.SORT === false) {
        sorts.push(i)
      }

    })
    this.node = ReactDOM.findDOMNode(this.refs.myTable);

    $(this.node)
    .addClass( 'nowrap' )
    .dataTable( {
      "language": {
               "url": "/src/assets/js/dataTables.spanish.json"
      },
      "aoColumnDefs": [
          { 'bSortable': false, 'aTargets': sorts }
       ],
      responsive: true,
      columnDefs: [
        { targets: [-1, -3], className: 'dt-body-right' }
      ]
    });
  }
  render(){
    var headers = this.props.data.HEADERS.map((header, i) => {
      return <th key={i}>{header.NAME}</th>
    })
    var body = this.props.data.BODY.map((el, i) => {
      return <Row key={i} data={el}/>
    });
    return (
      <div className='card'>
        <div className='datatables'>
              <table id='myTable' ref='myTable' className="table table-full table-full-small"
                cellSpacing="0" width="100%">
                  <thead>
                    <tr>
                      {headers}
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      {headers}
                    </tr>
                  </tfoot>
                  <tbody>
                    {body}
                  </tbody>
                </table>
              </div>
      </div>
    )

  }

}

UIDataTable.propTypes = {
  data: PropTypes.object.isRequired,
}


export default UIDataTable
