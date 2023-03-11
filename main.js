const dsnv = new DanhSachNhanVien();
const validation = new Validation();

function getELE(id) {
    return document.getElementById(id);
}
function ShowTable(mang) {
    var content = "";
    mang.map(function (nv, index) {
        var trELE = `<tr>
            <td>${nv.Account}</td>
            <td>${nv.Name}</td>
            <td>${nv.email}</td>
            <td>${nv.Workday}</td>
            <td>${nv.Position}</td>
            <td>${nv.TotalSalary}</td>
            <td>${nv.Type}</td>
            <td>
            <button onclick="DeleteStaff('${nv.Account}')"   class="btn btn-danger"  >Xóa</button>
            </td>

        </tr>`
        content += trELE;
    })
    getELE("tableDanhSach").innerHTML = content;
}
function setLocalStorage(mang) {
    localStorage.setItem("DSNV", JSON.stringify(mang));

}

function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        ShowTable(dsnv.mangNV);
    }


}
getLocalStorage();


function Add() {
    var Account = getELE("tknv").value;
    var Name = getELE("name").value;
    var Email = getELE("email").value;
    var Password = getELE("password").value;
    var Workday = getELE("datepicker").value;
    var BasicSalary = getELE("luongCB").value;
    var Position = getELE("chucvu").value;
    var WorkTime = getELE("gioLam").value;

    var isValid = true;
    isValid &= validation.checkEmpty(Account, "tbTKNV", "Tài khoản không để trống!") && validation.checkkytu(Account, "tbTKNV", "Tài khoản tối đa 4-6 ký số!");
    isValid &= validation.checkEmpty(Name, "tbTen", "Tên nhân viên không để trống!") && validation.checkName(Name, "tbTen", "Tên nhân viên chưa đúng định dạng!");
    isValid &= validation.checkEmpty(Email, "tbEmail", "Email không để trống!") && validation.checkEmail(Email, "tbEmail", "Email chưa đúng định dạng!");
    isValid &= validation.checkEmpty(Password, "tbMatKhau", "Mật khẩu không để trống!") && validation.checkPass(Password, "tbMatKhau", "Mật khẩu chưa đúng định dạng!");
    isValid &= validation.checkEmpty(Workday, "tbNgay", "Ngày làm không để trống!") && validation.checkDay(Workday, "tbNgay", "Ngày làm chưa đúng định dạng!");
    isValid &= validation.checkEmpty(BasicSalary, "tbLuongCB", "Lương không để trống!") && validation.checkSalary(BasicSalary, "tbLuongCB", "Lương chưa đúng quy định!");
    isValid &= validation.checkPosition(Position, "tbChucVu", "Vui lòng chọn chức vụ phù hợp!");
    isValid &= validation.checkEmpty(WorkTime, "tbGiolam", "Giờ làm không để trống!") && validation.checkWorkTime(WorkTime, "tbGiolam", "Giờ làm chưa đúng định dạng!");





    if (isValid) {
        var nv = new Staff(Account, Name, Email, Password, Workday, Number(BasicSalary), Position, Number(WorkTime));
        nv.SumSalary();
        nv.Type();

        dsnv.AddNV(nv);
        ShowTable(dsnv.mangNV);
        setLocalStorage(dsnv.mangNV);
    }
}
    function DeleteStaff(id) {
        dsnv.DeleteNV(id);
        setLocalStorage(dsnv.mangNV);
        getLocalStorage()

    }
    function UpdateStaff(id) {

        var Account = getELE("tknv").value;
        var Name = getELE("name").value;
        var Email = getELE("email").value;
        var Password = getELE("password").value;
        var Workday = getELE("datepicker").value;
        var BasicSalary = getELE("luongCB").value;
        var Position = getELE("chucvu").value;
        var WorkTime = getELE("gioLam").value;

        var nv = new Staff(Account, Name, Email, Password, Workday, Number(BasicSalary), Position, Number(WorkTime));
        nv.SumSalary();
        nv.Type();
        dsnv.UpdateNV(nv);
        setLocalStorage(dsnv.mangNV);
        getLocalStorage();




    }
    function FindStaffType (id) {
        var Account = getELE("tknv").value;
        var Name = getELE("name").value;
        var Email = getELE("email").value;
        var Password = getELE("password").value;
        var Workday = getELE("datepicker").value;
        var BasicSalary = getELE("luongCB").value;
        var Position = getELE("chucvu").value;
        var WorkTime = getELE("gioLam").value;

        var nv = new Staff(Account, Name, Email, Password, Workday, Number(BasicSalary), Position, Number(WorkTime));
        nv.SumSalary();
        nv.Type();
        dsnv.FindStaff(nv);
        setLocalStorage(dsnv.mangNV);
        getLocalStorage();
    }



