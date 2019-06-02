import React, { Component } from 'react'
import styles from '../../css/items.module.css'
import Tour from './tour'
import Title from '../title'

export default class TourList extends Component {
  state = { //different than featureTours to do **filtering** use PROPS
   tours: [],
   sortedTours: []
  }

   componentDidMount() {
    this.setState({
     tours: this.props.tours.edges,
     sortedTours: this.props.tours.edges,
    })
   }


 render() {
   return <section className={styles.tours}>
    <Title title='our' subtitle='tours' />
  
   <div className={styles.center}>
    {this.state.sortedTours.map(({node}) => {
     return <Tour key={node.contentful_id} tour={node} />
    })}
   </div>
   </section>
 
 }
}
