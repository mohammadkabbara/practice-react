import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './data.json'
import Row from 'react-bootstrap/Row'


class Main extends React.Component {




    render() {
        return (

            <>

                <Row xs={1} md={2} className="g-4">


                    {


                        Data.map((item) => {
                            return (
                                <HornedBeast

                                    image_url={item.image_url}
                                    title={item.title}
                                    description={item.description}



                                />
                            )
                        })
                    }
                </Row>




            </>

        )
    }
}

export default Main