import React from 'react';
import { Menu, Search } from 'semantic-ui-react';
import recipediaLogo3 from './recipediaLogo3.jpg'
import './styles.css'

const NavBar = (props) => (
  <Menu>
    <Menu.Menu>
      <Menu.Item>
        <div className="ui labeled button" onClick={props.onAddNewRecipe}>
          <div className="ui green button">
            <i className="plus icon"></i>
          </div>
          <a className="ui basic green left pointing label">
            Add a recipe!
          </a>
        </div>
      </Menu.Item>
      <Menu.Item>
        <Search onSearchChange={props.handleSearchChange} showNoResults={false}/>
      </Menu.Item>
      <Menu.Item>

          RECIPE<img src={recipediaLogo3} alt='recipediaLogo' className='NavBar.logo' />DIA

      </Menu.Item>
      <Menu.Item>
        <div className="ui labeled button">
          <div className="ui green button">
            Cocktails
          </div>
        </div>
      </Menu.Item>
      <Menu.Item>
      <div className="ui labeled button">
        <div className="ui green button">
          Smoothies
        </div>
      </div>
      </Menu.Item>
      <Menu.Item>
      <div className="ui labeled button">
        <div className="ui green button">
          Desserts
        </div>
      </div>
      </Menu.Item>
      <Menu.Item>
      <div className="ui labeled button">
        <div className="ui green button">
          Entrees
        </div>
      </div>
      </Menu.Item>




    </Menu.Menu>
  </Menu>

)

export default NavBar;
