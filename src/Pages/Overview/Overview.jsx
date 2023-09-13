import React from 'react'
import Card from '../../components/cards/Card';
import Task from '../../components/task/Task';
import Feature from '../../components/features/Feature';
import { Work } from '../../components/works/Work';
import Industries from '../../components/industries/Industries';
import Product from '../../components/products/Product';
import Testimotional from '../../components/testimotional/Testimotional';


function Overview() {
  return (
    <>
    
    <Task />
    <Card />
    <Feature />
    <Work />
    <Industries />
    <Product />
    <Testimotional
    firstText = "FieldForce.Ai is"
    midText = " loved"
    lastText = " by clients"
    />
    
    </>
  )
}

export default Overview