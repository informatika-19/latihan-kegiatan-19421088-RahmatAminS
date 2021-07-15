const kegiatanModel = require ('../model/Kegiatan')
const ObjectId = require('mongoose').Types.ObjectId

exports.create = (data) =>
  new Promise((resolve, reject)=>{
    //fungsi untuk menyimpan kegiatan
    kegiatanModel.create(data)
    .then(() => resolve({
        status: true,
        pesan: 'Berhasil Memasukkan Data'
    })).catch (() => reject({
        status: false,
        pesan: 'Gagal Memasukan Data'
    }))

  })

//menemukan semua data
exports.showAllData = () =>
  new Promise((resolve, reject) => {
    kegiatanModel.find()
    .then(result => {
      resolve({
        status: true,
        pesan:'Berhasil Menampilkan Data',
        data: result
      })
    }).catch (() => reject({
      status: false,
      pesan: 'Gagal Menampilkan Data',
      data: null
    }))
  })

//menemukan satu data
exports.showDataById = (id) =>
  new Promise((resolve, reject) => {
    kegiatanModel.findOne({
      _id: ObjectId(id)
      }).then(result => {
        resolve({
          status: true,
          pesan:'Berhasil Menampilkan Data',
          data: result
        })
      }).catch (() => reject({
        status: false,
        pesan: 'Gagal Menampilkan Data',
        data: []
      }))
    })
    

exports.update = (data, id) =>
  new Promise ((resolve, reject) =>{
    kegiatanModel.updateOne({
        _id: ObjectId(id)
    }, data).then(()=>{
        resolve({
            status: true,
            pesan : 'Berhasil Memperbaharui Data'
        })
    }).catch(() =>{
        reject({
            status: false,
            pesan: 'Gagal Memperbaharui Data'
        })
    })
})

exports.delete = (id) =>
new Promise((resolve, reject)=>{
    kegiatanModel.deleteOne({
        _id: ObjectId(id)
    }).then(() =>{
        resolve({
            status: true,
            pesan : 'Berhasil Menghapus Data'
        })
    }).catch(() =>{
        reject({
            status: false,
            pesan: 'Gagal Menghapus Data'
        })
    })
})