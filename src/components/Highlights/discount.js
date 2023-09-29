import React, { useState, useEffect } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MyButton from "../utils/myButton";

const Discount = () => {
  const end = 30;
  const [start, setStart] = useState(0);
  const porcentage = () => {
    if (start < end) {
      setStart((prev) => prev + 1);
    }
  };

  useEffect(()=>{
    if (start>0 && start < end) {
        setTimeout(()=>{
            setStart((prev) => prev + 1);
        },40);
        
      }
  },[start]);


  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              porcentage();
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before 20th Sept</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled but also the leap into electronic{" "}
            </p>
            <MyButton
              text = "Purchase Tickets"
              link="http://www.google.com"
              size="small"
              style ={{
                color: '#ffffff',
                background: '#ffa800'
              }}
              iconTicket = {true}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};
export default Discount;
