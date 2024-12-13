export default function Higher(Component) {
  return (props) => {
    return (
      <>
        <h1>Hello {props.name}</h1>
        <Component name={props.name}></Component>;
      </>
    );
  };
}
