import Form from 'react-bootstrap/Form';

export default function InputField(
  { name, label, type, placeholder, error, stateVariable, stateFunction }
) {
  return (
    <Form.Group controlId={name} className="InputField">
      {label && <Form.Label >{label}</Form.Label>}
      <Form.Control
        type={type || 'text'}
        placeholder={placeholder}
        value={stateVariable}
        onChange = {(e)=>{
            stateFunction(e.target.value);
        }}
        text-align={'left'
            }      />
      <Form.Text className="text-danger">{error}</Form.Text>
      <Form.Control.Feedback>{error}</Form.Control.Feedback>
    </Form.Group>
  );
}