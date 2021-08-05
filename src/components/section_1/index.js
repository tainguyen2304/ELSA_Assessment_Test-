import './index.scss'
import logo from '../../assets/image/Group.png'
import icon_1 from '../../assets/image/vector.png'
import icon_2 from '../../assets/image/vector_2.png'
import phone from '../../assets/image/phone_1.png'

function Section_1(props) {
    return (
        <div className="section_1">
            <div className='header d-flex justify-content-center align-items-center'>
                <div className='logo'>
                    <img src={logo} className='w-100' alt='logo'></img>
                </div>
            </div>
            <div className='row content'>
                <div className='col-8 py-4 px-0 block_left'>
                    <img src={icon_1} alt='icon_1' className='icon_1'></img>
                    <div className='wrapper'>
                        <h2 className='title'>APP LUYỆN NÓI <br /> & GIAO TIẾP TIẾNG ANH THỜI 4.0</h2>
                        <p className='des'>Với ELSA Speak - Ai Cũng Có Thể Nói Tiếng Anh Hay!</p>
                        <a className='btn-dang-ky' href="#form-sign-up">
                            Đăng ký ngay
                        </a>
                    </div>
                </div>
                <div className='col-4 p-0 block_rigth'>
                    <img src={icon_2} alt='icon_2' className='icon_2'></img>
                    <div className='bg-phone mt-3'>
                        <img src={phone} alt='phone' className=''></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section_1;