// item
import React from 'react'
import "./projectPage_3.css";
import ReactPlayer from 'react-player';

const dataTest = {
        id: 1,
        image: [
            {id: 1, img: "https://res.cloudinary.com/dwjsk2qlw/image/upload/v1713539449/zillow_mini/dbnqryytpmphotwfixon.jpg"},
            {id: 1, img: "https://res.cloudinary.com/dwjsk2qlw/image/upload/v1713539447/zillow_mini/hftw3zxewdakow8xj279.jpg"},
            {id: 1, img: "https://res.cloudinary.com/dwjsk2qlw/image/upload/v1712910566/zillow_mini/om2nymp47yh28oxpbe4x.jpg"},
            {id: 1, img: "https://res.cloudinary.com/dwjsk2qlw/image/upload/v1712910431/zillow_mini/w3ih5rwzbyz2asmpw9vq.jpg"},
        ],
        // demo: "",
        live: "/project-item",
        github: "https://github.com/Kyronk/e-commerce-tgdd-",
        title: "Web eco 1",
        desc: "",
        mainFunction: [
            "Login, Logout",
            "register (registration confirmation via email)",
            "With Admin", 
            "CRUD Item",
            "Manager user list",

            "With User",
            "Add product in cart and update in cart (redux)",
            "Payment via Paypal",
            "Favorites list",
            "Purchase history"

        ],
        tech: ["Html", "Taiwind", "ReactJS", "MongoDB", "NodeJS", "Express"]

    }
/**
 * 
 * @returns 
 *  các chức năng chính
 *  login logout
 *   register (xác nhân dăng ký qua mail)
 *  Đối với admin
 * + CRUD săn phẩm 
 * + quản lý user
 * 
 * + đối với user
 *  + giỏ hàng, update trong giỏ hàng
 * + thanh toán qua paypal
 * + danh sách sản phẩm yêu thích
 * + lịch sủ mua hàng
 * 
 */

const ProjectPage_3 = () => {
    return (
        <section id="projectPage" className='projectPage container section'>
            <div className='sectionTitle'>
                <span className='titleNumber'>Name Project:</span>
                <span>Website name 3</span>
            </div>

            {/* video demo */}
            {/* <video src="https://res.cloudinary.com/dwjsk2qlw/video/upload/v1715267770/My_CV/2024-05-09_16-35-34_utu7vy.mp4"
                controls
                muted 
                width="1000"
                height="1220"
                type="video/mp4"
            ></video> */}

            <ReactPlayer 
                controls={true}
                height="450"
                width="500"
                url="https://res.cloudinary.com/dwjsk2qlw/video/upload/v1715267770/My_CV/2024-05-09_16-35-34_utu7vy.mp4" 
            />


            {/* img and content */}
            <div className='projectPageContainer'>
                {/* mo ta cong nghe chuc năng */}
                <div className='projectPageContent grid'>
                    <h5>Description about Project</h5>

                    <div className='textSection'>
                        {dataTest && dataTest?.mainFunction?.map((item, idx) => (
                            <div key={idx}>
                                <span>{item}.</span>
                            </div>
                        ))}
                    </div>

                    <div className='about'>
                        <span>cong nghe su dung</span>
                    </div>
                </div>

                {/* hinh anh kem theo */}
                {/* <div>
                    {
                        dataTest && dataTest.image.map((item,idx) => (
                            <div className=''>
                                <img src={item.img} alt="" />
                            </div>
                        ))
                    }
                    
                </div> */}
            </div>

            
        </section>
    )
}

export default ProjectPage_3