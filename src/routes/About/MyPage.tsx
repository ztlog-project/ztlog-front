/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import photo from 'pages/images/photo.png';

export default function MyPage() {

    // const listWraper = {
    //     height: "960px"
    // }

    return (
        <div className="col-md-10 col-lg-8 col-xl-7">
            <div className='row'>
                <div className="col-md-6 col-lg-7 col-xl-7" style={{ margin: 'auto 0px', padding: '30px' }}>
                    <img src={photo} alt="photo" style={{ width: '100%', borderRadius: '60px' }} />
                </div>
                <div className="col-md-6 col-lg-7 col-xl-7" style={{ margin: 'auto 0px', padding: '30px' }}>
                    <div className='profile'>
                        <h1>🙋🏻‍♀️ 최예지 Choi Yeji</h1>
                        <h4>Backend Developer</h4>
                        <p>
                            안녕하세요! <br />
                            웹 백엔드 개발자 최예지입니다. <br />
                            자바, 스프링 프레임워크 이용한 웹 개발을 주로 하고 있습니다. <br />
                            반갑습니다 😆
                        </p>
                    </div>
                    <br />
                    <hr />
                    <div className="myInfo">
                        <h1>💼 경력</h1>
                        <h4>지니웍스</h4>
                        <p>PDG 플랫폼 운영팀/주임</p>
                        <p>2021.05 ~ 2023.09</p>
                        <br />

                        <h4>한국융합아이티</h4>
                        <p>연구개발/사원</p>
                        <p>2020.12 ~ 2021.05</p>

                        <br />
                        <hr />
                        <br />

                        <h1>🎓 학력</h1>
                        <h4>호서대학교</h4>
                        <p>해양IT공학과(주전공) / 컴퓨터공학과(복수전공) 졸업</p>
                        <p>2015.03 ~ 2019.02</p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}