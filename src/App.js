import React, { Component } from 'react';
import logo from './logo.svg'; 
import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonGroup,Form,FormGroup,
  ControlLabel,FormControl,HelpBlock,Checkbox,Radio
  ,Grid,Row,Col} from 'react-bootstrap';



class App extends Component {
  
  
  state = {
    name:"",
    color:"",
    movies:[],
    gender:"",
    message:"",
    pornstar:[],
    sex:"",
  };
  
  onChange = (fieldName)=>{
    return (event)=>{
      var state = this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
    }
  };
  
  checkboxChange = (fieldName)=>{
    return (event)=>{
    var targetArray = this.state[fieldName];
    if(targetArray.indexOf (event.target.value) >=0)  
    targetArray.splice(
      targetArray.indexOf(event.target.value),
    1
    );
    else 
    targetArray.push(event.target.value);
    
      var state = this.state;
      state[fieldName] = targetArray;
      this.setState(state);
    }
  };
  
  render() {
    
    return (
      <div className="container">
        <div className="page-header">
      
          <h2>STUDENT SURVEY</h2>
        </div>
        <p className="jumbotron">
        <Grid>
        <Row>
          <Col md={6}>
        
          <Form>
        <FormGroup>
        <ControlLabel> Name Please... </ControlLabel>
        <FormControl type="text" placeholder="Name here"
        value={this.state.name}
        onChange={this.onChange('name')}
        />
        <HelpBlock>Use to identify you</HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Choose Your Favorite Color </ControlLabel>
        <FormControl componentClass="select"
                      placeholder="Color here"
                      value={this.state.color}
        onChange={this.onChange('color')}>
                      <option value="Red">Red</option>
                      <option value="Black">Black</option>
                      <option value="Blue">Blue</option>
                      </FormControl>
        <HelpBlock>Use to identify you</HelpBlock>
        </FormGroup>         
        
        <FormGroup>
        <ControlLabel>Favorite Movies</ControlLabel>
        <Checkbox value="wiplash"
        checked={this.state.movies.indexOf ('wiplash')>=0 ? true:false}
                  onChange={this.checkboxChange('movies')}> Wiplash </Checkbox>
                  
        <Checkbox value="perfume"
        checked={this.state.movies.indexOf ('perfume')>=0 ? true:false}
                  onChange={this.checkboxChange('movies')}> Perfume </Checkbox>
                  
        <Checkbox value="august rush"
        checked={this.state.movies.indexOf ('august rush')>=0 ? true:false}
                  onChange={this.checkboxChange('movies')}> August Rush</Checkbox>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Gender</ControlLabel>
        <Radio name="gender" value="Male" 
        onChange={this.onChange('gender')}>Male</Radio>
        <Radio name="gender" value="Female" 
        onChange={this.onChange('gender')}>Female</Radio>
        </FormGroup>
        
             
          To get started, edit <code>src/App.js</code> and save to reload.
        
 
          <ButtonGroup>
           <Button bsStyle="default">
           <span className ="glyphicon glyphicon-star"></span>
          InfoButton</Button>
          <Button bsStyle="default">
           <span className ="glyphicon glyphicon-user"></span>
          InfoButton</Button>
          <Button bsStyle="default">
          <span className ="glyphicon glyphicon-flag"></span>
          InfoButton</Button>
          <Button bsStyle="default">
          <span className ="glyphicon glyphicon-barcode"></span>
          InfoButton</Button>
          </ButtonGroup>
          
               
        
        
        
          </Form>
          </Col>
          
          
          <Col md={6}> 
          
          <form>
          <FormGroup>
        <ControlLabel> Message </ControlLabel>
        <FormControl type="text" placeholder="Message here"
        value={this.state.message}
        onChange={this.onChange('message')}
        />
        <HelpBlock>Use to identify you</HelpBlock>
        </FormGroup>
        
        <FormGroup>
        <ControlLabel>Favorite Pornstar</ControlLabel>
        <Checkbox value="Sasha Grey"
        checked={this.state.movies.indexOf ('Sasha Grey')>=0 ? true:false}
                  onChange={this.checkboxChange('pornstar')}> Sasha Grey </Checkbox>
                  
        <Checkbox value="Tori Black"
        checked={this.state.movies.indexOf ('Tori Black')>=0 ? true:false}
                  onChange={this.checkboxChange('pornstar')}> Tori Black </Checkbox>
                  
        <Checkbox value="Emily Grey"
        checked={this.state.movies.indexOf ('Emily Grey')>=0 ? true:false}
                  onChange={this.checkboxChange('pornstar')}> Emily Grey</Checkbox>
                  
        <Checkbox value="Candace Cage"
        checked={this.state.movies.indexOf ('Candace Cage')>=0 ? true:false}
                  onChange={this.checkboxChange('pornstar')}> Candace Cage</Checkbox>
        </FormGroup>
        
         <FormGroup>
        <ControlLabel>Sex</ControlLabel>
        <Radio name="sex" value="Gay" 
        onChange={this.onChange('sex')}>Gay</Radio>
        <Radio name="sex" value="Lesbian" 
        onChange={this.onChange('sex')}>Lesbian</Radio>
         <Radio name="sex" value="Straight" 
        onChange={this.onChange('sex')}>Straight</Radio>
        </FormGroup>
        
        </form>
           <strong>Name is {this.state.name}</strong><br/>
           <strong>Color is {this.state.color}</strong><br/>
           <strong>Movies {
             this.state.movies.map((item,i)=>{
               return <div>
               <span className = "label label-default">{item}</span>
               </div>
             })
            }</strong><br/>
           <strong>Gender {this.state.gender}</strong><br/>
            <strong>Message {this.state.message}</strong><br/>
           
            <strong>Pornstar {
             this.state.pornstar.map((item,i)=>{
               return <div>
               <span className = "label label-default">{item}</span>
               </div>
             })
            }</strong><br/>
            
            <strong>Sex {this.state.sex}</strong><br/>
           
          </Col>
        </Row>
        </Grid>
        
        
        </p>
      </div>
    );
  }
}

export default App;
