import React from 'react'

export const Header = () => {
    return (
        <div>
          <nav className="navbar navbar-expand-md bg-dark navbar-dark">
              <a className="navbar-brand text-warning font-weight-bold" href='#'>
                  Newbie
              </a>
              <button className="navbar-toggler" data-target="#navbar" data-toggle="collapse" type="button">
                  <span className="navbar-toggler-icon"></span>
              </button>
              </nav>       
        </div>
    )
}
