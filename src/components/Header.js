import React from 'react'
// import { Link } from 'react-router-dom'
import { Navbar,Nav } from 'react-bootstrap'
const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
      田中室内装飾
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">ホーム</Nav.Link>
                        <Nav.Link href="/CompanyPage">会社概要</Nav.Link>
                        <Nav.Link href="/WorkPage">取扱業務</Nav.Link>
                        <Nav.Link href="/AccessPage">アクセス</Nav.Link>
                        <Nav.Link href="/ContactPage">お問い合わせ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >

    // <header>
/*       
      <div className='logo'>
        <h3>田中室内装飾</h3>
      </div>

      <nav>
        <ul>
          <li>
          <Link to="/">ホーム</Link>
          </li>
          <li>
          <Link to="/CompanyPage">会社概要</Link>
          </li>
          <li>
          <Link to="/WorkPage">取扱業務</Link>
          </li>
          <li>
          <Link to="/AccessPage">アクセス</Link>
          </li>
          <li>
          <Link to="/ContactPage">お問い合わせ</Link>
          </li>
        </ul>

      </nav>

    </header> */
  )
}

export default Header