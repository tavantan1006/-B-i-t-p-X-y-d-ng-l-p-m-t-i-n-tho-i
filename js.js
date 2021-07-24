let myMobile = function (id, nameIphone, idxPin, txtSoanThao, txtHopThuDen, txtTinNhanDaGui, status, idG) {
    this.id = id;
    this.nameIphone = nameIphone;
    this.idxPin = idxPin;
    this.txtSoanThao = txtSoanThao;
    this.txtHopThuDen = txtHopThuDen;
    this.txtTinNhanDaGui = txtTinNhanDaGui;
    this.status = status;
    this.idG = idG;

    this.getId = function () {
        return this.id;
    }
    this.getnameIphone = function () {
        return this.nameIphone;
    }
    this.getidxPin = function () {
        return this.idxPin;
    }
    this.gettxtSoanThao = function () {
        return this.txtSoanThao;
    }
    this.gettxtHopThuDen = function () {
        return this.txtHopThuDen;
    }
    this.gettxtTinNhanDaGui = function () {
        return this.txtTinNhanDaGui;
    }
    this.getstatus = function () {
        return this.status;
    }
    this.getidG = function () {
        return this.idG;
    }
    this.setnameIphone = function (nameIphone) {
        this.nameIphone = nameIphone;
    }
    this.setId = function (id) {
        this.id = id;
    }
    this.setidxPin = function (idxPin) {
        this.idxPin = idxPin;
    }
    this.settxtSoanThao = function (txtSoanThao) {
        this.txtSoanThao = txtSoanThao;
    }
    this.settxtHopThuDen = function (txtHopThuDen) {
        this.txtHopThuDen = txtHopThuDen;
    }
    this.settxtTinNhanDaGui = function (txtTinNhanDaGui) {
        this.txtTinNhanDaGui = txtTinNhanDaGui;
    }
    this.setstatus = function (status) {
        this.status = status;
    }
    this.setidG = function (idG) {
        this.idG = idG;
    }
    function checkPin(idxPin){
        if (idxPin < 0){
            this.status = false;
        }
    }
}
let nokia = new myMobile(1, "nokia", 1, "", "", "", true, 12);
let iphone = new myMobile(12, "iphone", 80, "", "", "", true, 1);
show();
function show() {
    document.getElementById("soanthao").innerText = nokia.gettxtSoanThao();
    document.getElementById("thuden").innerText = nokia.gettxtHopThuDen();
    document.getElementById("tindagui").innerText = nokia.gettxtTinNhanDaGui();
    document.getElementById("pin").innerText = nokia.getidxPin();
    document.getElementById("soanthaoIp").innerText = iphone.gettxtSoanThao();
    document.getElementById("thudenIp").innerText = iphone.gettxtHopThuDen();
    document.getElementById("tindaguiIp").innerText = iphone.gettxtTinNhanDaGui();
    document.getElementById("pinIp").innerText = iphone.getidxPin();
    if (nokia.getstatus() == true && nokia.getidxPin()>0){
        document.getElementById("status").innerText = "bật";
    }else {
        document.getElementById("status").innerText = "tắt";
    }
    if (iphone.getstatus() == true && iphone.getidxPin()>0){
        document.getElementById("statusIp").innerText = "bật";
    }else {
        document.getElementById("statusIp").innerText = "tắt";
    }
}



function SendMessage(id) {
    if (nokia.getId() == id) {
        if (nokia.getstatus() == false && nokia.getidxPin() > 0 || nokia.getidxPin() <= 0 || nokia.getstatus() == false ){return alert("Vui lòng khởi động máy trước khi gửi !!")}
        nokia.setidxPin(nokia.getidxPin()-1);
        iphone.settxtHopThuDen(nokia.gettxtSoanThao());
        nokia.settxtTinNhanDaGui(nokia.gettxtSoanThao());
        nokia.settxtSoanThao("");
        show();
    }
    if (iphone.getId() == id) {
        iphone.setidxPin(iphone.getidxPin()-1);
        nokia.settxtHopThuDen(iphone.gettxtSoanThao());
        iphone.settxtTinNhanDaGui(iphone.gettxtSoanThao());
        iphone.settxtSoanThao("");
        show();
    }
}






