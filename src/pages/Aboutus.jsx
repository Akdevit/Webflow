import React from 'react';
import "../style/Aboutus.css";
import { HiLightBulb } from "react-icons/hi";

const ScrollColorChange = () => {


    return (
        <>

            {/* first section */}
            <div className="scroll-container">
                <div className='middle_container'>
                    <p>About Us</p>
                    <h1>Lorem ipsum dolor sit amet consectetur. Dolor scelerisque morbi maecenas blandit hac -<span>Porttitor ornare auctor, integer massa scelerisque enim consequat...</span> </h1>
                </div>
            </div>

            {   /* second section */}

            <div className='second_section_container'>
                <div className='centerd_div'>
                    <div className='text-containre'>
                        <h1>OUR APPROACH</h1>
                        <div className='text_p'>
                            <p>At MINTED, We believe every website is unique and deserves a webiste that reflects it's individuality</p>
                        </div>
                    </div>

                    <div className='main_container'>
                        {/* fist */}
                        <div className='first_section'>
                            <div className='container_first'>
                                <div className='icon_container_text'>
                                    <HiLightBulb className='bulb_icon' />
                                    <h1>Thoughtful Design</h1>
                                </div>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod reiciendis quidem facere molestiae </p>
                            </div>
                            <div className='container_second'>
                                <img src='https://s3-alpha-sig.figma.com/img/e8d2/2b6d/de3f311811ab0a353a5b968128857bca?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hr~frl~d88TJElwt2qg09IoyU-33lBY97199Yt2H~F4tf0~YaOLvTEhdraWnRaMWe-O0T6JAMYm-UMP64Igccl-yq~~sQC7Y1AVZlXLdmVFmaLQuHUOI5YqPbUcMIYPRIV5cS5-D~eBISW8EXbt8WRZs83A4clcR-kJIosx63KPT~hrrXeFK3qEsf--t4M4wURSsuTFhQPVZ6KtPtc6E4g2zoXIN2LvzYW-0fZCQMJWDeBfT2Nt3oux2bq2Omty2CMV6YJMaglciL5aclpbkFwhy~tk0SyNUmabQ6sV4zOr9s3~sUloWjRmgV3ZtBV46Lh9K~YJ~RX3LuLEtjo~RQA__' alt='' />
                                <p>Branding</p>
                            </div>
                            <div className='container_second'>
                                <img src='https://s3-alpha-sig.figma.com/img/89ce/f9a0/5e150bd538d453631b1dded2167a692f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bEvF6YBIvRfGC5lREs6hLSrVy7HPFvlqHmwQQvTX014tPDlNdIXbUoGIimWnRufWA-H5V08RwFaoJeFDzE6-flNvP~BaVOzHE21ow-YUV9wG4gC12ox3NYApWaNBAaG7tipruq~FNp3shY5uLvJeDkb2lvHaFUkOh3NGZq--SbP1p2F4VshvZaxA8Gg632ybRy8LOQ7wEPPsxf8yZ8rIK4L9CWphk2inmPmsh4Yz8J3oYTBL2EzoqnJdYGnS1O0M8NOP1Bm8DCwBEzKi9ZGpVbWvAQ8vD07fYQhytQTt~wZIKDBDaiI1nXUxzooVqmNLXlH7Wq9ajvRnyA7LP1KAHA__' alt='' />
                                <p>Digital Experiences</p>
                            </div>
                            <div className='container_second bottom-border'>
                                <img src='https://s3-alpha-sig.figma.com/img/9367/5e77/744420241f9c104f00a2d61d6755445f?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ly3B9ySUvaEm-8T3cperaQSSfhwD7g6IYlWpLXtbFUAzwO7r0g0FARL3L7tsPfwcQ-SaTbJtJZJ4~899Zn22CFlkNhRWYVra1KyjLqhkZ4a5ZN1A4g3p9RtxzYo1acPtBwloLw1f8EdXb9k3Il1RiA7VWGBw5xcu7R5rIQA~ecV6G5G6bg8igp9~hmaPov5GNiRpK~AP1k034b00yPGDYmKhIVCqc1oPwBSphaQLTNqayWWVhyYFSJmKnWK9vQpQavvuYQc2OG1oQFThc7VV4TnlhQ6zrKWDHEBTC1YaVQ9Hie7~RKPY6vcnNu7XpOD9VCB6UMMIWSBWWwlr03vXOA__' alt='' />
                                <p>Sales & Marketing</p>
                            </div>

                        </div>
                        {/* second Section */}
                        <div className='second_section'>
                            <div className='spline_assets'>
                                {/* <iframe src='https://my.spline.design/cubic-91c9fcb467081efd0b5125c44a0c0c93/' frameborder='0' width='100%' height='100%'></iframe>                           */}
                                <img className='iframe' src='https://s3-alpha-sig.figma.com/img/c471/1374/bf23b787403c7b16e785e78008ae6472?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JWYYAqzqUxhF0X5hnpHIvEil2ve~AWD600k6iN~LlXuxXS7BoVoWVj~rhNYaVP3KBcyDGE8N2p5vxCwdTWb~t~7c~khSc-tpkCqTmINHczUOnS9sL1rzD5JWCr6dK1~gYBqv~K1c7pS4qUUZ2Lj504qW6eEiURyTnyvl5ZLXILIXTmMgDYJNZfXgkIffanbX7j8pMox2b99opLyCVEt~PX8vchipoja-IezEL9tWxVfY2OeLcG2p~qYzmyU7QyHAYt40Jip7ul5x55YT0RjHHIl3uf6K7nOuJb3tk-SIC2CojZY663pD91wYkUaeGl9e5VN4187zzGcIIBfBNZVqGQ__' alt='spline cube' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    );
};

export default ScrollColorChange;
