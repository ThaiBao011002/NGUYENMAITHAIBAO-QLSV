function Staff(Account, Name, Email, Password, Workday, BasicSalary, Position, WorkTime, Type, TotalSalary) {
    this.Account = Account;
    this.Name = Name;
    this.Email = Email;
    this.Password = Password;
    this.Workday = Workday;
    this.BasicSalary = BasicSalary;
    this.Position = Position;
    this.WorkTime = WorkTime;
    this.Type = Type;
    this.TotalSalary = 0;
    this.SumSalary = function () {
        if (this.Position == "Sếp") {
            return this.TotalSalary = this.BasicSalary * 3;
        } else if (this.Position == "Trưởng phòng") {
            return this.TotalSalary = this.BasicSalary * 2;
        } else {
            return this.TotalSalary = this.BasicSalary * 1
        }
    }
    this.Type = function () {
        if (this.WorkTime >= 192){
            return this.Type = "Nhân viên xuất sắc";
        } else if (this.WorkTime >= 176){
            return this.Type = "Nhân viên giỏi";
        } else if (this.WorkTime >= 160){
            return this.Type = "Nhân viên khá";
        } else {
            return this.Type = "Nhân viên trung bình";
        }
    }
}
        

