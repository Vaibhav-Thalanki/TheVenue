import React from "react";
const Location = ()=>{
    return (
        <div className="location_wrapper"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48359.890289892326!2d-74.02021080824204!3d40.7511771976528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f8d61b2f3d%3A0x92c4e681d9aada95!2sRadio%20City%20Music%20Hall!5e0!3m2!1sen!2sin!4v1695997440763!5m2!1sen!2sin"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        width = "100%"
        height = "500px"
        allowFullScreen
        title="gglemaps"
        frameBorder="0"
        ></iframe>
        <div className="location_tag">
            <div>
                Location
            </div>
        </div>
        </div>

    )
}
export default Location;