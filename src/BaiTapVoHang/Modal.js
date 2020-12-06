import React, { Component } from 'react'

export default class Modal extends Component {
    render() {

        let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props

        return (
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Giỏ hàng</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Mã sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Thành tiền</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {gioHang.map((spGH, index) => {
                                        return <tr key={index}>
                                            <td>{spGH.maSP}</td>
                                            <td><img src={spGH.hinhAnh} height="75" width="65" alt="124" /></td>
                                            <td>{spGH.tenSP}</td>
                                            <td>
                                                <button onClick = {() => {
                                                    tangGiamSoLuong(spGH.maSP, true)
                                                }} className = "btn btn-primary">+</button>
                                                {` ${spGH.soLuong} `}
                                                <button onClick = {() => {
                                                    tangGiamSoLuong(spGH.maSP, false)
                                                }} className = "btn btn-primary">-</button>
                                            </td>
                                            <td>{spGH.giaBan.toLocaleString()}</td>
                                            <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                                            <td><button onClick = {() => xoaGioHang(spGH.maSP)} className = "btn btn-danger" >Xóa</button></td>
                                        </tr>
                                    })}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan = "5"></td>
                                        <td>Tổng tiền</td>
                                        <td>
                                            {gioHang.reduce((tongTien, spGioHang,index) => {
                                                return tongTien += (spGioHang.soLuong * spGioHang.giaBan)
                                            }, 0).toLocaleString()}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
