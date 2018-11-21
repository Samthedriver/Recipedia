import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class CommentForm extends Component {
  constructor() {
    super()
    this.state = this.getInitialState()
  }

  handleSubmit = () => {
    
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Add your comment</label>
          <input placeholder='So tell us what do you think?' />
        </Form.Field>

        <Button type='submit'>Submit</Button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Form>
    )
  }

export default CommentForm
