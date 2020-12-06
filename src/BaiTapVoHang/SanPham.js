import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {

        const {sanPham, xemChiTiet, themGioHang} = this.props
        
        return (
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={sanPham.hinhAnh} height = "330" width = "300" alt="124" />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <button onClick = {() => xemChiTiet(sanPham)} className = "btn btn-success mr-2">Xem Chi Tiết</button>
                    <button onClick = {() => themGioHang(sanPham)} className="btn btn-danger">Thêm vỏ hàng</button>
                </div>
            </div>
        )
    }
}
