export class MyWidgetCls extends React.Component {
  onChange(dat) {
    console.log("onChange", dat);
    this.setState({ ...this.state, ...dat });
    this.props.onChange(Immutable.fromJS(dat));
  }

  handleChange1(e) {
    this.onChange({ field1: e.target.value });
  }

  handleChange2(e) {
    this.onChange({ field2: e.target.value });
  }

  constructor(props) {
    super(props);
    this.state = {
      field1: this.props.value?.get("field1") || "default1",
      field2: this.props.value?.get("field2") || "default2",
    };
  }

  render() {
    return (
      <div className={this.props.classNameWrapper}>
        <p>
          <label>Field 1</label>
          <input
            type="text"
            value={this.state.field1}
            onChange={this.handleChange1.bind(this)}
          />
        </p>
        <p>
          <label>Field 2</label>
          <input
            type="text"
            value={this.state.field2}
            onChange={this.handleChange2.bind(this)}
          />
        </p>
      </div>
    );
  }
}

export const MyWidget = true ? MyWidgetCls : MyWidgetFun;

export function MyWidgetPreview(props) {
  console.log("MyWidgetPreview", props.value);
  return <p>ahoj</p>;
}
