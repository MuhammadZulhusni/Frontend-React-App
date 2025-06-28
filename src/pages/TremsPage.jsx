import React, { Component, Fragment } from 'react'
import Footer from '../components/Footer/Footer'
import PageTop from '../components/PageTop/PageTop'
import TopNavigation from '../components/TopNavigation/TopNavigation'
import TremsDescription from '../components/TremsDescription/TremsDescription'

 class TremsPage extends Component {
     render() {
          return (
             <Fragment>
                  <TopNavigation title="Terms And Condition" />  
                 <PageTop pagetitle="Terms And Condition" /> 
                  <TremsDescription />
                  <Footer />
             </Fragment>
          )
     }
}

export default TremsPage