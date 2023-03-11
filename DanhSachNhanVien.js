function DanhSachNhanVien() {
    this.mangNV = [];
    this.AddNV = function(nv){
        this.mangNV.push(nv);
    }
this.findIndexNV = function(id){
    var indexFind = -1;
    indexFind = this.mangNV.findIndex(function(nv){
        return nv.Account == id;
    })
    return indexFind;

}
  
this.DeleteNV = function(id){
   var index = this.findIndexNV(id);
    if(index != -1){
    this.mangNV.splice(index, 1);
    }
}

this.UpdateNV = function(nv){
    var index = this.findIndexNV(nv.Account);
    if(index != -1){
        this.mangNV[index] = nv;
    }
}
this.FindStaff = function (id){
    var indexFind = -1;
    indexFind = this.mangNV.findIndex(function(nv){
        return nv.Type == id;
    })
    return indexFind;
}
}
