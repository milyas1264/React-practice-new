function Header(props, children) {
  
  console.log(children);
  
   
  return (
    <div>
      {children}
      <h1 className="text-primary"> This is a Header  </h1>
      <p className="text-danger">This is a simple header component.</p>
      <p className="text-primary">Email: {props.email}</p>
      <p className="text-primary">Phone: {props.phone}</p>
      <p className="text-secondary">Name: {props.name}</p>
      <p className="text-secondary">Class: {props.class}</p>
      <p className="text-secondary">Age: {props.age}</p>
    </div>
  );
}
export default Header;