import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './LoginPage.module.scss'
function LoginPage(user) {
    const { handleSubmit, register } = useForm();
    const [isPassword, setIsPassword] = useState(true);
    const onSubmit = data => console.log(data);
    // const handleLogin = (event) => {
    //     console.log('login')
    // }
    return (
        <div className={styles.loginWraper}>
            <div className={styles.loginBlock}>
                <div className={styles.loginTitle}>
                    <span>Welcom back </span>
                    <img src='hand.png' alt='hand' />

                </div>
                <div className={styles.formBlock}>
                    <form name="loginForm" onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.inputBlock}>
                            <div className={styles.input} >



                                <input
                                    {...register("login", { required: true, maxLength: 20 })}


                                />


                            </div>
                            <div className={styles.input}>
                                {/* <input
                                    {...register("password", type = 'password', { required: true, maxLength: 20 })}

                                /> */}
                                <input
                                    name="password"
                                    type={isPassword ? 'password' : 'text'}
                                    {...register("password", { required: true, maxLength: 20 })}
                                />
                                <button onClick={()=>setIsPassword(prev=>!prev)}>
                                    <FontAwesomeIcon icon={faEye}
                                        size={'xl'}
                                        className={styles.faEye} />
                                </button>
                            </div>
                            <div className={styles.inputFuter}>
                                <div>
                                    <input type='checkbox' id='keepLoged' name='keepLoged' />
                                    <label htmlFor='keepLoged'>Keep me logged in</label>
                                </div>
                                <button>Forgot Password?</button>
                            </div>

                        </div>

                        <button type="submit" className={styles.logInBtn}><span>Log In</span></button>

                    </form>
                </div>

            </div>
            <div className={styles.imgBlock}>
                <img src='Screenshot_1.png' alt='pattern' />
            </div>
        </div>
    )
}

export default LoginPage