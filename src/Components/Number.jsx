import React from 'react'
import '../Style/Number.css'
import NumberCard from './NumberCard'
function Number() {
  return (
    <section className='number'>

        <div className='container'>
            <div className='number__wrapper'>
            <div className='number__bg'></div>
                 <div className='number__title'>
                    <span>since 2019</span>
                    <h1>
                        In numbers
                    </h1>
                 </div>
                <div className='number__son'>
                    <NumberCard title='Happy clients' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.' num='1000+'/>
                    <NumberCard title='Products created' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.' num='20+'/>
                    <NumberCard title='Investments received' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla interdum aliquet.' num='$5M+'/>
                  
                </div>
            </div>
        </div>
    </section>
  )
}

export default Number