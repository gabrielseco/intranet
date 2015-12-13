//This form configuration would actually be loaded dynamically.  Hard code for now.
var fieldGroupA = {
    "field_key": "group_5666eaecc6a20",
    "title": "ReactJS",
    "fields": [
        {
            "field_key": "field_5666eafcfab4c",
            "label": "Email Address",
            "name": "email_address",
            "type": "text",
            "instructions": "",
            "required": 1,
            "conditional_logic": 0,
            "wrapper": {
                "width": "",
                "class": "",
                "id": ""
            },
            "default_value": "",
            "placeholder": "Please enter your email address.",
            "prepend": "",
            "append": "",
            "maxlength": "",
            "readonly": 0,
            "disabled": 0
        },
        {
            "field_key": "field_5666eaf1fab4a",
            "label": "First Name",
            "name": "first_name",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": {
                "width": "",
                "class": "",
                "id": ""
            },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "maxlength": "",
            "readonly": 0,
            "disabled": 0
        },
        {
            "field_key": "field_5666eaf8fab4b",
            "label": "Last Name",
            "name": "last_name",
            "type": "text",
            "instructions": "",
            "required": 0,
            "conditional_logic": 0,
            "wrapper": {
                "width": "",
                "class": "",
                "id": ""
            },
            "default_value": "",
            "placeholder": "",
            "prepend": "",
            "append": "",
            "maxlength": "",
            "readonly": 0,
            "disabled": 0
        } ,
        {
                "field_key": "field_56683c943cf40",
                "label": "My Repeater",
                "name": "my_repeater",
                "type": "repeater",
                "instructions": "",
                "required": 0,
                "conditional_logic": 0,
                "wrapper": {
                    "width": "",
                    "class": "",
                    "id": ""
                },
                "min": "",
                "max": "",
                "layout": "table",
                "button_label": "Add Row",
                "sub_fields": [
                    {
                        "field_key": "field_56683ca13cf41",
                        "label": "RPT 1",
                        "name": "rpt_1",
                        "type": "text",
                        "instructions": "",
                        "required": 0,
                        "conditional_logic": 0,
                        "wrapper": {
                            "width": "",
                            "class": "",
                            "id": ""
                        },
                        "default_value": "",
                        "placeholder": "",
                        "prepend": "",
                        "append": "",
                        "maxlength": "",
                        "readonly": 0,
                        "disabled": 0
                    },
                    {
                        "field_key": "field_56683ca13cf412",
                        "label": "RPT 2",
                        "name": "rpt_2",
                        "type": "text",
                        "instructions": "",
                        "required": 0,
                        "conditional_logic": 0,
                        "wrapper": {
                            "width": "",
                            "class": "",
                            "id": ""
                        },
                        "default_value": "RPT 2",
                        "placeholder": "",
                        "prepend": "",
                        "append": "",
                        "maxlength": "",
                        "readonly": 0,
                        "disabled": 0
                    }
                ]
            }
    ],
    "location": [
        [
            {
                "param": "post_type",
                "operator": "==",
                "value": "post"
            }
        ]
    ],
    "menu_order": 0,
    "position": "normal",
    "style": "default",
    "label_placement": "top",
    "instruction_placement": "label",
    "hide_on_screen": "",
    "active": 1,
    "description": ""
};

//Hard code some data for now.
var values = {
    'field_5666eafcfab4c' : 'lucas.stark@outlook.com',
    'field_5666eaf1fab4a' : 'Lucas',
    'field_5666eaf8fab4b' : 'Stark',
    'field_56683c943cf40' : [
        {
            'field_56683ca13cf41' : 'Sub Value',
            'field_56683ca13cf412' : 'Sub Value B'
        },
        {
            'field_56683ca13cf41' : 'Sub Value2',
            'field_56683ca13cf412' : 'Sub Value C'
        }
    ]
}

var React = require('react');
var ReactDOM = require('react-dom');

var Example = React.createClass({
    getInitialState: function() {
          return { data: values }
    },
    componentDidMount: function() {
        this.setState( { data: values } );
    },
    render: function(){
          return (
            <div className="meta-box">
              <h1>hola</h1>
              <MetaBox title={fieldGroupA.title} fields={fieldGroupA.fields} />
            </div>
          );
    },
    doDebug : function() {
      console.log('MetaBox State');
      console.log(JSON.stringify(this.state, undefined, 2));
    }
})



var MetaBox = React.createClass({
    getInitialState: function() {
          return { data: values }
    },
    componentDidMount: function() {
        this.setState( { data: values } );
    },
    render: function(){
          return (
            <div className="meta-box">
              <h1>{this.props.title}</h1>
              <FieldGroup data={ values } fields={this.props.fields} doDebug={this.doDebug} />
            </div>
          );
    },
    doDebug : function() {
      console.log('MetaBox State');
      console.log(JSON.stringify(this.state, undefined, 2));
    }
})

//Contains individual Field elements.
var FieldGroup = React.createClass({
      getInitialState: function() {
            return { data: this.props.data }
      },
      render: function() {
            var fields = this.props.fields.map(function(field) {
              return (
                  <Field key={field.field_key} value={ this.state.data[field.field_key] } onChange={this.onChange} doDebug={this.doDebug}  {...field} />
              )
            }.bind(this));

        return (
            <div className="acf-fields">
                {fields}
            </div>
        );
      },
      onChange : function(value, property) {
        var d = this.state.data;
        d[property] = value;
        this.setState({ data: d });
        this.doDebug();
      },
      doDebug : function() {
          console.log('Field Group State');
          console.log(JSON.stringify(this.state, undefined, 2));
          this.props.doDebug();
      }
});

//Field label and input wrapper.
var Field = React.createClass({
      render: function(){
        return (
            <div className={'acf-field' + ' acf-field-' + this.props.type + ' acf-field-' + this.props.field_key} data-name={this.props.name} data-type={this.props.type}>
                <FieldLabel {...this.props} />
                <div className="acf-input">
                    <FieldLoader {...this.props} />
                </div>
            </div>
        );
      }
});

//Component to dynamically create children based on name.
var FieldLoader = React.createClass({
      render:function(){
        return React.createElement( typeMap[this.props.type] , this.props);
      }
})

//Just a field label.
var FieldLabel = React.createClass( {
      render: function(){
        return (
            <div className="acf-label">
                 <label htmlFor={this.props.field_key}>
                      {this.props.label}
                 </label>
            </div>
        );
      }
});

//A special type of field that can recursivly contain other FieldGroups.
var FieldRepeater = React.createClass( {
        getInitialState: function() {
              return { data: this.props.value }
        },
        handleAddRow:function() {
            var rows = this.state.data;
            var newValue = {};

            //Generate a new object based on the subfield configuration.
            this.props.sub_fields.forEach(function(sub_field) {
                  newValue[sub_field.field_key] = sub_field.default_value;
            });

            var newRows = rows.concat([newValue]);
            this.setState( { data: newRows });

            //Not sure if telling the parent about the change is necessary, or best pratice.
            this.props.onChange(newRows, this.props.field_key);
            this.doDebug();
        },
        remove: function(item) {
          return function(e) {
              e.preventDefault();
              return this.onRemove(item);
            }.bind(this);
        },
        onRemove: function(itemToDelete){
          var newItems = _.reject(this.state.data, function(item) {
              return item == itemToDelete
          });

          this.setState({
            data: newItems
          });


          //Not sure if telling the parent about the change is necessary, or best pratice.
          this.props.onChange(newRows, this.props.field_key);

        },
        doDebug : function() {
            console.log('Repeater State');
            console.log(JSON.stringify(this.state, undefined, 2));
            this.props.doDebug();
        },
        render: function() {

            //Generate a table row that will contain another complete FieldGroup.
            var rows = this.state.data.map( function(row, index) {
              return (
                  <tr key={this.props.field_key + '_' + index}  className="acf-row">
                      <td className="order" title="Drag to reorder">{index + 1}</td>
                      <td className="acf-fields -left">
                              <FieldGroup data={row} fields={this.props.sub_fields} doDebug={this.doDebug} />
                      </td>
                      <td className="delete">
                          <input type="button" value="Delete" onClick={ this.remove(row) } />
                      </td>
                  </tr>
              );
            }.bind(this));

            return (
                <div className="field-repeater">
                      <table>
                          <tbody>
                              {rows}
                          </tbody>
                      </table>
                      <input type="button" onClick={this.handleAddRow} value={this.props.button_label} />
                </div>
            );
        }
});

//Simple Text Field
var FieldText = React.createClass({
      render: function() {
          return (
              <div className="acf-input-wrap">
                   <input type={this.props.type} name={this.props.name} id={this.props.key} value={this.props.value} onChange={this.onChange} />
              </div>
          )
      },
      onChange:function(event){
          var val = event.target.value;
          this.props.onChange(val, this.props.field_key);
      }
});


var typeMap = {
     'text' : FieldText,
     'repeater' : FieldRepeater
};


module.exports = Example
