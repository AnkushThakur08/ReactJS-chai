const SignIn = () => {

  return (
    <div>
      <input type="text" name="name" id="name" placeholder="Enter Name" />
      <input type="email" name="email" id="email" placeholder="Enter Email" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
      />
    </div>
  );
};

export default SignIn;
