import React, { Component } from 'react'
import SanPham from './SanPham'

export default class DanhSachSanPham extends Component {


    render() {

        const { mangSanPham, sanPhamChiTiet, xemChiTiet, themGioHang } = this.props
        return (
            <div className="container">
                <div className="row">
                    {mangSanPham.map((sp, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <SanPham themGioHang = {themGioHang} xemChiTiet = {xemChiTiet} sanPham={sp} />
                            </div>
                        )
                    })}
                </div>

                <hr></hr>
                
                <div className="row">
                    <div className="col-4 text-center mt-3">
                        <h3>{sanPhamChiTiet.tenSP}</h3>
                        <img src={sanPhamChiTiet.hinhAnh} alt="124" width="300" height="330" />
                    </div>

                    <div className="col-8 mt-3">
                        <h3>Thông số kỹ thuật</h3>
                        <table className = "table">
                            <tr>
                                <th>Màn hình</th>
                                <td>{sanPhamChiTiet.manHinh}</td>
                            </tr>

                            <tr>
                                <th>Hệ điều hành</th>
                                <td>{sanPhamChiTiet.heDieuHanh}</td>
                            </tr>

                            <tr>
                                <th>Camera trước</th>
                                <td>{sanPhamChiTiet.cameraTruoc}</td>
                            </tr>

                            <tr>
                                <th>Camera sau</th>
                                <td>{sanPhamChiTiet.cameraSau}</td>
                            </tr>

                            <tr>
                                <th>RAM</th>
                                <td>{sanPhamChiTiet.ram}</td>
                            </tr>

                            <tr>
                                <th>ROM</th>
                                <td>{sanPhamChiTiet.rom}</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}
