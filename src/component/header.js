import React, { useState } from 'react';
import './style1.css'
import Icon1 from "../icon/icon1.png"
import Icon2 from "../icon/icon2.png"
import Icon3 from "../icon/icon3.png"
import Banner from "../component/banner"
import classNames from 'classnames'


export default () => {
    const [state, setState] = useState({active: false})

    function dropDown(){
        return(
            setState({active: !state.active})
        )
    }

    return(
        <div className="header">
            <div className="narbar">
                <a href="#" className="wrap-icon"><img className="icon" src="https://coolmate.cdn.vccloud.vn/images/logo-coolmate.svg"/></a>
                <div className={classNames("wrap-narbar", {'active-wrap-narbar': state.active })} onClick={dropDown}>
                    <div className={classNames('menu-dropdown',{'active-display' : !state.active})}></div>
                    <div className={classNames('wrap',{'active-display' : state.active})}> 
                        <a href="#" className={classNames('a', 'tag-a', {'active-display' : state.active})} >
                            SALES
                        </a>
                        <ul className={classNames('ul',{'active-display' : state.active})}>
                            <li className="li"> 
                                <a href="#">Coolmate Outlet, chỉ từ 39k</a>
                                <span className="span">NEW</span>
                            </li>
                        </ul>
                    </div>
                    <div className={classNames('wrap',{'active-display' : state.active})}> 
                        <a className={classNames('a',{'active-display' : state.active})} >
                            TỦ ĐỒ COOLMATE
                        </a>
                        <span className="tag-span">Mới</span>
                        <ul className={classNames('ul', 'tag-ul', {'active-display' : state.active})}>
                            <li className="li"> 
                                <a href="#" >TỦ ĐỒ COOLMATE</a>
                            </li>
                            <li className="li"> 
                                <a href="#">TỰ TẠO TỦ ĐỒ CHO RIÊNG BẠN</a>
                            </li>
                        </ul>
                    </div>
                    <div className={classNames('wrap',{'active-display' : state.active})}>
                        <a href="#" className={classNames('a',{'active-display' : state.active})} >
                            ÁO THUN
                        </a>
                        <div className="arow"></div>
                        <ul className={classNames('ul',{'active-display' : state.active})}>
                            <li className="li"> 
                                <a href="#" >ÁO POLO</a>
                                <span className="span">NEW</span>
                            </li>
                            <li className="li"> 
                                <a href="#">ÁO THỂ THAO NAM MAXCOOL</a>
                            </li>
                            <li className="li"> 
                                <a href="#">ÁO COTTON COMPACT PHIÊN BẢN PREMIUM</a>
                                <span className="span span-hot">HOT</span>
                            </li>
                            <li className="li"> 
                                <a href="#">ÁO THUN</a>
                            </li>
                        </ul>
                    </div>
                    <div className={classNames('wrap',{'active-display' : state.active})}>
                        <a href="#" className={classNames('a',{'active-display' : state.active})} >
                            QUẦN
                        </a>
                        <div className="arow"></div>
                        <ul className={classNames('ul', 'tag-ul', {'active-display' : state.active})}>
                            <li className="li"> 
                                <a href="#" >QUẦN LÓT NAM</a>
                            </li>
                            <li className="li"> 
                                <a href="#">QUẦN SHORT, QUẦN ĐÙI</a>
                            </li>
                        </ul>
                    </div>
                    <div className={classNames('wrap',{'active-display' : state.active})}>
                        <a href="#" className={classNames('a',{'active-display' : state.active})} >
                            TẤT VỚ
                        </a>
                    </div>
                    <div className={classNames('wrap',{'active-display' : state.active})}>
                        <a href="#" className={classNames('a',{'active-display' : state.active})} >
                            PHỤ KIỆN
                        </a>
                    </div>
                    <div className={classNames('wrap',{'active-display' : state.active})}>
                        <a href="#" className={classNames('a',{'active-display' : state.active})}>
                            CHỌN SIZE
                        </a>
                    </div>
                    <div className={classNames('wrap',{'active-display' : state.active})}>
                        <a href="#" className={classNames('a',{'active-display' : state.active})}>
                            MẶC ĐẸP SỐNG CHẤT
                        </a>
                        <span className="tag-span">Mới</span>
                    </div>
                </div>
                <img src={Icon1} className="icon-1"/>
                <img src={Icon2} className="icon-1"/>
                <div className="wrap-icon-1">
                    <img src={Icon3} className="icon-1-1"/>
                    <span>Giỏ Hàng</span>
                </div>
            </div>
            <Banner/>
        </div>
    )
}