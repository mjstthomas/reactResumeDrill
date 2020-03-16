import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Sally Student Resume</h1>
      </header>
      <main>
        <section>
          <header>
            <h2>Contact Info:</h2>
          </header>
          <address>
            <ul>
              <li>Sally Student</li>
              <li><a href= "mailto:SallyStudent@gmail.com">SallyStudent@gmail.com</a></li>
              <li><a href="tel:5205896530">(520)589-6530</a></li>
            </ul>
          <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" height="300px" width="200px" alt="picture of Sally"/>
          </address>
        </section>
        <section>
          <header>
            <h2>Education</h2>
          </header>
          <p>University of Arizona</p>
          <ul>
            <li>2003-2007</li>
            <li>Bachelors in Business Management</li>
          </ul>
        </section>
        <section>
          <header>
            <h2>Employment History</h2>
          </header>
          <ol>
            <li>Safeway</li>
              <ul>
                <li>Assistant Store Manager</li>
                <li>Oct 2002 to Jan 2019</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Urna nunc id cursus metus aliquam eleifend. Faucibus nisl tincidunt eget nullam non nisi.</li>
                </ul>
            <li>Target</li>
              <ul>
                <li>Senior Team Lead of Logistics</li>
                <li>Jan 2019 to current</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac placerat vestibulum lectus mauris ultrices eros in. Tempus urna et pharetra pharetra massa massa ultricies mi quis. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim.</li>
              </ul>
            </ol>
          </section>
        </main>
    </div>
  )
}


export default App;
