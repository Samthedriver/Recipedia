import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: '1', text: '1 serving', value: '1 serving' },
  { key: '2', text: '2 serving', value: '2 servings' },
  { key: '3', text: '3 serving', value: '3 servings' },
  { key: '4', text: '4 serving', value: '4 servings' },
  { key: '5', text: '5 serving', value: '5 servings' },
  { key: '6', text: '6 serving', value: '6 servings' },
  { key: '7', text: '7 serving', value: '7 servings' },
  { key: '8', text: '8 serving', value: '8 servings' },
  { key: '9', text: '9 serving', value: '9 servings' },
  { key: '10', text: '10 serving', value: '10 servings' },
  { key: '11', text: '11 serving', value: '11 servings' },
  { key: '12', text: '12 serving', value: '12 servings' }
]

const categories = [
  { key: 'd', text: 'Dessert', value: 'dessert' },
  { key: 'c', text: 'Cocktail', value: 'cocktail' },
  { key: 'e', text: 'Entree', value: 'entree' },
  { key: 's', text: 'Smoothie', value: 'smoothie' },
]



class RecipeForm extends Component {
  constructor() {
    super()
    this.state = this.getInitialState()
  }

  getInitialState = () => ({
    name: '',
    likes: '0',
    imgUrl: '',
    yield: '',
    cookTime: '',
    instuctions: '',
    ingredients: '',
    comments: ''
  })

  handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      [name]: value
    })
  }

  handleCategorySelection = (e, data) => {
    console.log(data.value)
    this.setState({
      category: data.value
    })
  }

  handleYieldSelection = (e, data) => {
    console.log(data.value)
    this.setState({
      yield: data.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, likes, imgUrl, yields, cookTime, instructions, ingredients, comments } = this.state
    fetch('http://localhost:3001/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        recipe: {
          name: name,
          likes: likes,
          imgUrl: imgUrl,
          yield: yields,
          cookTime: cookTime,
          intructions: instructions,
          ingredients: ingredients,
          comments: comments
        }
      })

    })
      .then(resp => resp.json())
      .then(recipe => this.props.onFormSubmit(recipe))
      .catch(error => console.error(error))
    this.setState(this.getInitialState())
  }

  render() {
    const { value } = this.state
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Recipe Name' placeholder='First name' name='name' onChange={this.handleChange}/>
          <Form.Input fluid label='Image Link' placeholder='http://' name='imgUrl' onChange={this.handleChange}/>
          <Form.Select fluid label='Category' options={categories} placeholder='servings' name='category' onChange={this.handleCategorySelection}/>
          <Form.Select fluid label='Yield' options={options} placeholder='servings' name='yield' onChange={this.handleYieldSelection}/>
          <Form.Input fluid label='Cook Time' placeholder='1:00 hr' name='cookTime' onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.TextArea label='Ingredients' placeholder='What do you need...' name='ingredients' onChange={this.handleChange}/>
          <Form.TextArea label='Instructions' placeholder='How do you make this...' name='instructions' onChange={this.handleChange}/>
        </Form.Group>
        <Form.Button>Submit</Form.Button>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Form>
    )
  }
}

export default RecipeForm
