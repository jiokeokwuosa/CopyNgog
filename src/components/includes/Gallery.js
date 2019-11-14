import React from 'react';

const Gallery =()=>{    
    return (        
        <div className="col-md-12">
            <h2 className="bold">GALLERY</h2>
            <hr/><br/>
            <div className="row push">
            <div className="col-md-4">
                <img src={require('../../assets/img/gallery.jpg')} alt="gallery"/>
            </div>
            <div className="col-md-4">
                <img src={require('../../assets/img/gallery.jpg')} alt="gallery"/>
            </div>
            <div className="col-md-4">
                <img src={require('../../assets/img/gallery.jpg')} alt="gallery"/>
            </div>               
            </div>
            <div className="row">
            <div className="col-md-4">
                <img src={require('../../assets/img/gallery.jpg')} alt="gallery"/>
            </div>
            <div className="col-md-4">
                <img src={require('../../assets/img/gallery.jpg')} alt="gallery"/>
            </div>
            <div className="col-md-4">
                <img src={require('../../assets/img/gallery.jpg')} alt="gallery"/>
            </div>               
            </div>
        </div> 
    );
    
}

export default Gallery;
