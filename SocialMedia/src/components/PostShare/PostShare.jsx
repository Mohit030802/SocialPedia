import React,{useState,useRef} from 'react'
import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'
import { UilScenery } from '@iconscout/react-unicons'
import { UilPlayCircle } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilSchedule } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const PostShare = () => {
    const[image,SetImage]=useState(null);
    const imgRef=useRef();
    const onImageChange=(e)=>{
        if(e.target.files && e.target.files[0]){
            let img=e.target.files[0];
            SetImage({
                image:URL.createObjectURL(img),
            })
        }
    }
    return (
        <div className='PostShare'>
            <img src={ProfileImg} alt="" />
            <div  className='inputt'>
                

                <input type="text" placeholder='Anything new....' />
                
                <div className="postOptions">
                    <div className="option" style={{color:"var(--photo)"}} onClick={()=>imgRef.current.click()}>
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option" style={{color:"var(--video)"}}> 
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option" style={{color:"var(--location)"}}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option" style={{color:"var(--shedule)"}}>
                        <UilSchedule />
                        Schedule

                    </div>
                    <button className='button ps-button'>Submit</button>
                    <div style={{display:"none"}}>
                        <input type="file" name="myImage" ref={imgRef} onChange={onImageChange} />
                    </div>
                </div>
                {image  && 
                <div className="previewImage">
                    <UilTimes onClick={()=>SetImage(null)}/>
                    <img src={image.image} alt="" />
                </div>
                }
                
            </div>

        </div>

    )
}

export default PostShare
