import { FormGroup, Label, Input, Button, Form } from "reactstrap";
export const Login = () => {
  return (
    <>
      <div className="container">
        <div className="col-sm-4">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="Create your password"
              type="password"
            />
            <ul style={{ color: "#848689", marginTop: "10px" }}>
              <li>At least 8 characters</li>
              <li>One uppercase letter</li>
              <li>One lowercase letter</li>
              <li>One number</li>
            </ul>
            <Button color="success">Submit</Button>
          </FormGroup>
        </div>
      </div>
    </>
  );
};
