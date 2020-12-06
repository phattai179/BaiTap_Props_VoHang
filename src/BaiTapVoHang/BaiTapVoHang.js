import React, { Component } from 'react'
import DanhSachSanPham from './DanhSachSanPham'
import Modal from './Modal'
import phoneData from '../Data/DataPhong.json';

export default class BaiTapVoHang extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             sanPhamChiTiet : phoneData[0],
             gioHang: []
        }
    }
    
    xemChiTiet = (sanPhamXem) => {
        // console.log(sanPhamXem)
        this.setState({
            sanPhamChiTiet: sanPhamXem
        })
    }

    themGioHang = (sanPhamChon) => {
        // console.log(sanPhamChon)
        var gioHangCapNhat = [...this.state.gioHang];
        var sanPhamGioHang = {
            maSP: sanPhamChon.maSP,
            tenSP: sanPhamChon.tenSP,
            giaBan: sanPhamChon.giaBan,
            hinhAnh: sanPhamChon.hinhAnh,
            soLuong: 1,
        }

        let index = gioHangCapNhat.findIndex(sp => sp.maSP === sanPhamChon.maSP);

        if(index !== -1) {
            gioHangCapNhat[index].soLuong += 1;
        }else{
            gioHangCapNhat.push(sanPhamGioHang);
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    xoaGioHang = (maSP) => {
        var gioHangCapNhat = [...this.state.gioHang];

        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);

        if(index !== -1){
            gioHangCapNhat.splice(index, 1);
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    tangGiamSoLuong = (maSP, flag) => {
        var gioHangCapNhat = [...this.state.gioHang];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);

        if(flag){
            gioHangCapNhat[index].soLuong +=1;
        }else{
            if(gioHangCapNhat[index].soLuong > 1){
                gioHangCapNhat[index].soLuong -= 1;
            }
        }

        this.setState({
            gioHang: gioHangCapNhat
        })
    }

    render() {

        let tongSoLuong = this.state.gioHang.reduce((tsl, spGioHang, index) => {
            return tsl += spGioHang.soLuong;
        }, 0);

        return (
            <div className = "container">
                <Modal tangGiamSoLuong = {this.tangGiamSoLuong} xoaGioHang = {this.xoaGioHang} gioHang = {this.state.gioHang}/>
                <h3 className = "text-center text-success" >Danh Sách Sản Phẩm</h3>
                <div className = "text-right text-danger mb-1">
                    <span style = {
                        {
                            cursor: "pointer",
                            fontSize: "17px",
                            fontWeight: "bold",
                        }
                    } data-toggle="modal" data-target="#modelId" >Vỏ hàng ({tongSoLuong})</span>
                </div>
                <DanhSachSanPham themGioHang = {this.themGioHang} xemChiTiet= {this.xemChiTiet} sanPhamChiTiet = {this.state.sanPhamChiTiet} mangSanPham = {phoneData} />
            </div>
        )
    }
}
