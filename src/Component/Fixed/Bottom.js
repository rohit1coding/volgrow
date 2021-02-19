import React from 'react'

const Bottom = () => {
    return (
        <div className="#212121 grey darken-4" style={{display:'flex',float:"left" ,marginTop:"100px",borderBottom:"1px solid white"}}>
            <div>
                <div style={{marginLeft:"50px", width:"400px",height:"auto",color:"whitesmoke"}}>
                    <h4>About Us</h4>
                    <p>
                    “Nidhi” is a Hindi word, which means finance or fund. Nidhi means a company which has been incorporated exclusively with the object of developing the habit of thrift and reserve funds amongst its members.
                    </p>
                    
                    <h4>Contact Us</h4>
                    <div>
                        <div style={{display:"flex"}}>  
                            <i style={{marginRight:"5px"}} className="material-icons">contact_phone</i>
                                0470 2627330 
                            <i style={{marginRight:"5px",marginLeft:"20px"}} className="material-icons">contact_mail</i>
                            info@drkindianidhi.com
                        </div>
                    </div>
                    <div style={{display:"flex"}}>  
                    <i style={{marginRight:"5px"}} className="material-icons">contact_phone</i>
                    +91 8547398330 
                    </div>
                </div>
                </div>
            <div style={{marginLeft:"50px",width:"400px",height:"auto",color:"whitesmoke"}} >
            <h4>Registration Office</h4>
                    <p>
                        DRK India Nidhi Limited, KP VII/500(B), Kalluvilla Veedu, 18th Mile, Kizhuvilam P.O, Attingal, Trivandrum, Kerala 695104                    
                    </p>
                    <h4>Working Hours</h4>
                    <p>
                        Mon-Fri: 10:00 AM - 5:30 PM
                        Sat : 10:00 AM - 2:00 PM
                        Transaction time - 10:00 AM TO 4:15 PM
                        2nd and 4th Saturday Holiday
                    </p>
            </div>
            <div style={{marginLeft:"50px",width:"330px",height:"auto",color:"whitesmoke"}}>
                <h3>Latest News</h3>
            </div>
        </div>
    )
}

export default Bottom
