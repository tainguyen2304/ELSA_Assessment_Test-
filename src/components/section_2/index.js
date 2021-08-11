import './index.scss'
import img_1 from '../../assets/image/vector_4.png'
import img_2 from '../../assets/image/vector_5.png'
import img_3 from '../../assets/image/vector_3.png'
import img_4 from '../../assets/image/vector_7.png'
import img_5 from '../../assets/image/phone_2.png'
import img_6 from '../../assets/image/vector_6.png'
import { useEffect, useState } from 'react'

function Section_2(props) {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isClick, setClick] = useState(false)
    const [isSubmit, setIsSubmit] = useState(false)
    const [isUserName, setIsUserName] = useState(false)
    const [isPhoneNumber, setIsPhoneisPhoneNumber] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isRadio1, setIsRadio1] = useState(false)
    const [isRadio2, setIsRadio2] = useState(false)
    const tagex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const invisible = 'invisible notice show'
    const visible = 'visible notice show'

    useEffect(() => {
        if (isEmail && isPhoneNumber && isUserName && (isRadio1 || isRadio2)) {
            setIsSubmit(true)
        }
        else setIsSubmit(false)

        setTimeout(() => {
            setClick(false)
            if (isSubmit === true) {
                setUserName('')
                setPhoneNumber('')
                setEmail('')
            }
        }, 2000)
    }, [isClick, isEmail, isPhoneNumber, isUserName, isRadio1, isRadio2, isSubmit])

    const changeEmail = (e) => {
        setEmail(e.target.value)
    }

    const changePhoneNumber = (e) => {
        setPhoneNumber(e.target.value)
    }

    const changeUserName = (e) => {
        setUserName(e.target.value)
    }

    const checkPhoneNumber = (value) => {
        if (value.length !== 10) return false;
        for (let i = 0; i < value.length; i++) {
            if (value[i] > '9' || value < '0') return false
        }
        return true
    }

    const checkIsPhoneNumber = (value) => {
        const unExits = checkPhoneNumber(value)
        if (unExits) setIsPhoneisPhoneNumber(true)
        else setIsPhoneisPhoneNumber(false)
    }

    const checkName = (value) => {
        if (!value) setIsUserName(false)
        else setIsUserName(true)
    }

    const checkEmail = (value) => {
        if (tagex.test(value)) setIsEmail(true)
        else setIsEmail(false)
    }

    const handleRadio_mot = (e) => {
        if (e.target.checked) {
            setIsRadio1(true)
            setIsRadio2(false)
        }
    }
    const handleRadio_hai = (e) => {
        if (e.target.checked) {
            setIsRadio2(true)
            setIsRadio1(false)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        checkIsPhoneNumber(phoneNumber)
        checkName(userName)
        checkEmail(email)
        setClick(true);
    }

    return (
        <div className='section_2 ' id="form-sign-up">
            <div className='py-5 row'>
                <div className='col-12 col-md-6 '>
                    <div className='form-sign-up'>
                        <div className='p-2 form-header'>
                            CÙNG ỨNG DỤNG ELSA
                            NÓI TIẾNG ANH “THẢ GA”
                        </div>
                        <form className='form-content p-3 d-flex flex-column'>
                            <div>
                                <label htmlFor="username" className="form-label d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="form-icon bi bi-person " viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                    <span>Họ tên *</span>
                                </label>
                                <input value={userName} onChange={changeUserName} onBlur={() => checkName(userName)} type="text" className="form-control" id="username" />
                                {!isUserName
                                    ? <div className="text-danger show">
                                        Vui lòng nhập đầy đủ họ tên!
                                    </div>
                                    : <div></div>
                                }
                            </div>
                            <div>
                                <label htmlFor="phonenumber" className="form-label d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="form-icon bi bi-telephone" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                    <span>Số điện thoại *</span>
                                </label>
                                <input value={phoneNumber} onChange={changePhoneNumber} onBlur={() => checkIsPhoneNumber(phoneNumber)} type="text" className="form-control" id="phonenumber" />
                                {!isPhoneNumber
                                    ? <div className="text-danger show">
                                        Vui lòng nhập số điện thoại hợp lệ!
                                    </div>
                                    : <div></div>
                                }
                            </div>
                            <div>
                                <label htmlFor="email" className="form-label d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="form-icon bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                    </svg>
                                    <span>Email *</span>
                                </label>
                                <input value={email} onChange={changeEmail} onBlur={() => checkEmail(email)} type="email" className="form-control" id="email" />
                                {!isEmail
                                    ? <div className="text-danger show">
                                        Vui lòng nhập Email hợp lệ!
                                    </div>
                                    : <div></div>
                                }
                                <div className='d-flex justify-content-between mt-4' style={{ minHeight: '50px' }}>
                                    <div className="form-check ">
                                        <input className="form-check-input" type="radio" onClick={handleRadio_mot} name="flexRadioDefault" id="mot_nam" />
                                        <label className="form-check-label m-0" htmlFor="mot_nam">
                                            Gói học 1 năm
                                        </label>
                                        {isRadio1 ? <div className="text-primary">
                                            Giá: 989.000 VND
                                        </div> : <div></div>}
                                    </div>
                                    <div className="form-check" style={{ minWidth: '160px' }}>
                                        <input className="form-check-input" type="radio" onClick={handleRadio_hai} name="flexRadioDefault" id="mot_doi" />
                                        <label className="form-check-label m-0" htmlFor="mot_doi">
                                            Gói trọn đời
                                        </label>
                                        {isRadio2 ? <div className="text-primary">
                                            Giá: 1.995.000 VND
                                        </div> : <div></div>}
                                    </div>
                                </div>
                                {!isRadio1 && !isRadio2 ? <p className='m-0 text-danger show text-center'>Vui lòng chọn khóa học!</p> : <div></div>}
                            </div>
                            <div>
                                <button className="btn-submit rounded-pill py-2" onClick={onSubmit}>GỬI ĐĂNG KÝ</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-12 col-md-6 block_right'>
                    <img src={img_1} className='img_1' alt='img_1'></img>
                    <img src={img_2} className='img_2' alt='img_2'></img>
                    <img src={img_3} className='img_3' alt='img_3'></img>
                    <img src={img_4} className='img_4' alt='img_4'></img>
                    <img src={img_5} className='img_5' alt='img_5'></img>
                    <img src={img_6} className='img_6' alt='img_6'></img>
                </div>
            </div>
            <div className={!isClick ? invisible : visible} >
                <div className='border rounded p-5 bg-white w-25 h-25 d-flex justify-content-center align-items-center text-center'>
                    <h4 className={isSubmit === true ? 'text-success m-0' : 'text-danger m-0'}>
                        {isSubmit === true ? 'Đăng ký thành công!' : 'Lỗi!'}
                    </h4>
                </div>
            </div>
        </div>
    );
}
export default Section_2;