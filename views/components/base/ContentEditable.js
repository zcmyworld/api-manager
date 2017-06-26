var ContentEditable = React.createClass({
    render: function(){
        return <div id="contenteditable"
            onInput={this.emitChange} 
            onBlur={this.emitChange}
            contentEditable
            dangerouslySetInnerHTML={{__html: this.props.html}}></div>;
    },

    shouldComponentUpdate: function(nextProps){
        return nextProps.html !== this.getDOMNode().innerHTML;
    },

    componentDidUpdate: function() {
        if ( this.props.html !== this.getDOMNode().innerHTML ) {
           this.getDOMNode().innerHTML = this.props.html;
        }
    },
    
    keyPress: function(e){
      // force set last html for copy and paste events
      this.lastHtml = this.getDOMNode().innerHTML;
      
      var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;
      if(key == 13) {
          // do something with this.lastHtml
      }
    },

    emitChange: function(){
        var html = this.getDOMNode().innerHTML;
        if (this.props.onChange && html !== this.lastHtml) {
            this.props.onChange({
                target: {
                    value: html
                }
            });
        }
        this.lastHtml = html;
    }
});