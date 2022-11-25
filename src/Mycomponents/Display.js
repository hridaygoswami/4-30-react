import PropTypes from 'prop-types'
// import showImage from '../App.js'
// import Showimage from '../App'
import Images from './Images'
import dog1 from '../Images/dog1.jpg'
export default function Display(props) {
    let showImage = [
        {
          no: 1,
          title: 'dog-image-1',
          desc: 'a cute dog',
          img: {dog1}
        },
        {
          no: 2,
          title: 'dog-image-2',
          desc: 'a cute dog'
        },
        {
          no: 3,
          title: 'dog-image-3',
          desc: 'a cute dog'
        },
        {
          no: 4,
          title: 'dog-image-4',
          desc: 'a cute dog'
        },
        {
          no: 5,
          title: 'dog-image-5',
          desc: 'a cute dog'
        }
      ]
    return (
        <>
            <h1>Display is working?</h1>
            <Images showImage={showImage[0].img}/>
            {/* {props.showImage[0]} */}
            {/* <Showimage showImage={showimage}/> */}
        </>
    )
}
