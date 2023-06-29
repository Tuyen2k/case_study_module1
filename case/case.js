function home() {
    document.getElementById('introduce').style.display = 'none'
    document.getElementById('display').style.display = 'none'
    document.getElementById('home').style.display = 'block'
}

function imfomafion() {
    document.getElementById('display').style.display = 'none'
    document.getElementById('home').style.display = 'none'
    document.getElementById('introduce').style.display = 'block';
}

function logIn() {
    let checkLogIn = document.getElementById('logIn').innerHTML
    if (checkLogIn === 'Đăng nhập') {
        document.getElementById('formLogIn').style.display = 'block'
    } else {
        let comFirm = confirm('Bạn có muốn đăng xuất không?')
        if (comFirm) {
            document.getElementById('logIn').innerHTML = 'Đăng nhập'
            document.getElementById('addButton').style.display = 'none'
            localStorage.setItem('iLogIn', 'false');
            displayProduct()
        }
        document.getElementById('home').style.display = 'block'
    }
}


function submit() {
    let nameLogIn = document.getElementById('nameLogIn').value
    let passLogIn = document.getElementById('passLogIn').value
    if (nameLogIn === localStorage.getItem('username')) {
        if (passLogIn === localStorage.getItem('password')) {
            alert('Đăng nhập thành công!')
            document.getElementById('formLogIn').style.display = 'none'
            localStorage.setItem('iLogIn', 'true')
            document.getElementById('logIn').innerHTML = 'Đăng xuất'
            document.getElementById('addButton').style.display = 'inline'
            reset()
            displayProduct()
        } else {
            alert('Vui lòng nhập lại mật khẩu!')
        }
    } else alert('Vui lòng nhập lại tên tài khoản!')
    document.getElementById('home').style.display = 'block'

}

function reset() {
    document.getElementById('nameLogIn').value = ''
    document.getElementById('passLogIn').value = ''
}

class Product {
    name
    price
    quantity
    stockQuantity
    img
    type
    id

    constructor(name, price, quantity, img, type, id) {
        this.name = name
        this.price = price
        this.quantity = quantity
        this.img = img
        this.type = type
        this.id = id
        this.stockQuantity = quantity

    }
}

let product1 = new Product('Iphone 12 Pro', 15000, 100, 'ảnh/ip12pro.jpg', 'iphone', 'sp1');
let product2 = new Product('Iphone 12 Pro Max', 5000, 2, 'ảnh/ip12promax.jpg', 'iphone', 'ip2');
let product3 = new Product('Iphone 13 Pro', 7000, 50, 'ảnh/ip13pro.jpg', 'iphone', 'ip3');
let product4 = new Product('Iphone 13 Pro Max', 9000, 13, 'ảnh/ip13promax.jpg', 'iphone', 'ip4');
let product5 = new Product('Iphone 14', 55000, 22, 'ảnh/IP14.jpg', 'iphone', 'ip5');
let product6 = new Product('Iphone 14 Plus', 33000, 34, 'ảnh/ip14plus.jpg', 'iphone', 'ip6');
let product7 = new Product('Iphone 14 Pro', 27000, 45, 'ảnh/ip14pro.jpg', 'iphone', 'ip7');
let product8 = new Product('Iphone 14 Pro Max', 33000, 50, 'ảnh/ip14promax.jpg', 'iphone', 'ip8');
let product9 = new Product('Iphone 13', 35000, 42, 'ảnh/iphone13.jpg', 'iphone', 'ip9');
let product10 = new Product('Iphone 13 Mini', 40000, 11, 'ảnh/iphone13mini.jpg', 'iphone', 'ip10');
let product11 = new Product('Samsung Galaxy S23', 40000, 11, 'ảnh/samsung-galaxy-s23.jpg', 'samsung', 'sp11');
let product12 = new Product('Samsung Galaxy Z Flip 3 5G', 40000, 11, 'ảnh/samsung-galaxy-z-flip-3-5g.jpg', 'samsung', 'sp12');
let product13 = new Product('Samsung Galaxy Z Fold 3', 40000, 11, 'ảnh/samsung-galaxy-z-fold-3.jpg', 'samsung', 'sp13');
let product14 = new Product('Samsung Galaxy S22', 40000, 11, 'ảnh/ss22.jpg', 'samsung', 'sp14');
let product15 = new Product('Samsung Galaxy S22 Plus', 40000, 11, 'ảnh/ss22plus.jpg', 'samsung', 'sp15');
let product16 = new Product('Samsung Galaxy S22 Ultra', 40000, 11, 'ảnh/ss22ultra.jpg', 'samsung', 'sp16');
let product17 = new Product('Samsung Galaxy S23 Plus', 40000, 11, 'ảnh/ss23plus.jpg', 'samsung', 'sp17');
let product18 = new Product('Samsung Galaxy S23 Ultra', 40000, 11, 'ảnh/ss23ultra.jpg', 'samsung', 'sp18');
let product19 = new Product('Samsung Galaxy S22 5G', 40000, 11, 'ảnh/ss225g.jpg', 'samsung', 'sp19');
let product20 = new Product('Samsung Galaxy Z Flip 4', 40000, 11, 'ảnh/zflip4.jpg', 'samsung', 'sp20');
let product21 = new Product('Samsung Galaxy Z Fold 4', 40000, 11, 'ảnh/zfold4.jpg', 'samsung', 'sp21');

let arrayProduct = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10
    , product11, product12, product13, product14, product15, product16, product17, product18, product19, product20, product21]


function displayProduct(type = null, keyword = '') {
    document.getElementById('introduce').style.display = 'none'
    document.getElementById('home').style.display = 'none'
    document.getElementById('display').style.display = 'block'

    let iLogIn = localStorage.getItem('iLogIn')
    let arrayCheckType = arrayProduct.filter(function (product, index, array) {
        if (type === null) {
            return product.name.toLowerCase().includes(keyword.toLowerCase())
        }
        return (product.type === type && product.name.toLowerCase().includes(keyword.toLowerCase()))
    })

    let data = ''
    for (let i = 0; i < arrayCheckType.length; i++) {
        data += '<div class="item">';
        data += `<img class="img" src=${arrayCheckType[i].img} >`
            + '<h3>' + arrayCheckType[i].name + '</h3>'
            + ' <span>Giá: <strong style="color: red">' + arrayCheckType[i].price + '</strong></span><br><br>'
            + '<span>Số lượng: ' + arrayCheckType[i].quantity + '</span><br><br>'
        if (iLogIn === 'true') {
            data += '<button onclick="editProduct(' + i + ')"><label for="nameEdit">Sửa</label></button>' +
                ' <button onclick="deleteProduct(' + i + ')">Xóa</button>'
        } else {
            data += ' <button onclick="addCart(' + i + ')">Thêm vào giỏ hàng</button><br><br>'
        }
        data += '</div>'
    }
    data += ''
    document.getElementById('display').innerHTML = data
}

function addProduct() {
    document.getElementById('addProduct').style.display = 'block'
}

function addSuccess() {
    let nameAdd = document.getElementById('nameAdd').value
    let priceAdd = document.getElementById('priceAdd').value
    let quantityAdd = document.getElementById('quantityAdd').value
    let imgAdd = document.getElementById('imgAdd').value
    let typeAdd = document.getElementById('typeAdd').value

    let productAdd = new Product(nameAdd, priceAdd, quantityAdd, imgAdd, typeAdd)

    if (productAdd.name === '') {
        alert('Vui lòng thêm tên sản phẩm!')
    } else {
        arrayProduct.push(productAdd)
        alert('Đã thêm thành công!')
        document.getElementById('addProduct').style.display = 'none'
        displayProduct()
    }
    document.getElementById('nameAdd').value = ''
    document.getElementById('priceAdd').value = ''
    document.getElementById('quantityAdd').value = ''
    document.getElementById('imgAdd').value = ''
    document.getElementById('typeAdd').value = ''
}

function deleteProduct(id) {
    let confirmDelete = confirm('Bạn có chắc chắn muốn xóa hay không?')
    if (confirmDelete) {
        arrayProduct.splice(id, 1)
        displayProduct()
    }
}

let index;

function editProduct(id) {
    index = id
    document.getElementById('editProduct').style.display = 'block'
    document.getElementById('nameEdit').value = arrayProduct[id].name
    document.getElementById('priceEdit').value = arrayProduct[id].price
    document.getElementById('quantityEdit').value = arrayProduct[id].quantity
    document.getElementById('imgEdit').value = arrayProduct[id].img
    document.getElementById('typeEdit').value = arrayProduct[id].type
}

function updateProduct() {
    let nameUpdate = document.getElementById('nameEdit').value
    let priceUpdate = document.getElementById('priceEdit').value
    let quantityUpdate = document.getElementById('quantityEdit').value
    let imgUpdate = document.getElementById('imgEdit').value
    let typeUpdate = document.getElementById('typeEdit').value
    let productUpdate = new Product(nameUpdate, priceUpdate, quantityUpdate, imgUpdate, typeUpdate)
    if (nameUpdate === '') {
        alert('Vui lòng thêm tên sản phẩm!')
    } else {
        arrayProduct[index] = productUpdate
        alert('Đã cập nhật sản phẩm thành công!')
    }
    document.getElementById('editProduct').style.display = 'none'
    displayProduct()
}

let localCart = localStorage.getItem('cart') || []
let arrayCart = []
if (localCart?.length > 0){
    arrayCart = JSON.parse(localCart)
}

function addCart(i) {
    let nameAddCart = arrayProduct[i].name
    let priceAddCart = arrayProduct[i].price
    let quantityAddCart = 1
    let imgAddCart = arrayProduct[i].img
    let typeAddCart = arrayProduct[i].type
    let id = arrayProduct[i].id
    let productCart = new Product(nameAddCart, priceAddCart, quantityAddCart, imgAddCart, typeAddCart, id)

    if (arrayProduct[i].quantity > 0) {
        arrayProduct[i].quantity--
    } else {
        alert('Không thể thêm vào giỏ hàng!')
        return;
    }


    displayProduct()

    let flag = false
    let count;
    if (arrayCart.length === 0) {
        arrayCart.push(productCart)
    } else {
        for (let i = 0; i < arrayCart.length; i++) {
            if (productCart.name === arrayCart[i].name) {
                flag = true
                count = i
                break;
            }
        }
        if (flag) {
            arrayCart[count].quantity += 1
        } else {
            arrayCart.push(productCart)
        }
    }

    let checkOnCart = document.getElementById('displayCart').style.display === 'none'
    if (!checkOnCart) {
        displayCart()
    }
}


let total = 0;

function quantityCart(eventTaget, i) {
    let newQuantity = eventTaget.value
    let productId = arrayCart[i].id
    let productIndex = arrayProduct.findIndex(function (element) { //productIndex = chỉ số của pt trong mảng với thuộc tính id = productId
        return element.id === productId
    })

    if (productIndex >= 0) {
        arrayProduct[productIndex].quantity = arrayProduct[productIndex].stockQuantity - newQuantity
    }
    if (newQuantity > 0) {
        arrayCart[i].quantity = newQuantity
    } else {
        arrayCart.splice(i, 1)
    }
    displayCart()
    displayProduct()
}

function displayCart() {
    total = 0
    let dataCart = '<table>'
    dataCart += '<tr>' +
        '<td><b>' + 'Tên sản phẩm' + '</b></td>' +
        '<td><b>' + ' Giá' + '</b></td>' +
        '<td><b>' + ' Số lượng' + '</b></td>' +
        '<td><b>' + 'Thành tiền' + '</b></td>' +
        '</tr>'
    for (let i = 0; i < arrayCart.length; i++) {
        total += arrayCart[i].price * arrayCart[i].quantity
        dataCart += '<tr>' +
            '<td>' + arrayCart[i].name + '</td>' +
            '<td>' + arrayCart[i].price + '</td>' +
            '<td>' + '<input type="number" value="' + arrayCart[i].quantity + '" min="0" oninput="quantityCart(this,' + i + ')">' + '</td>' +
            '<td>' + arrayCart[i].price * arrayCart[i].quantity + '</td>' + '<td><button onclick="deleteProductCart(' + i + ')">Xóa</button></td>'
        dataCart += '</tr>'
    }
    dataCart += '<tr style="color: red">' + '<td colspan="3"><b>Tổng thanh toán</b></td>' + '<td id="total"><b>' + total + '</b></td>'
    if (arrayCart.length!==0) {
        dataCart += '<td><button onclick="deleteAllCart()">Xóa tất cả</button></td>'
    }
    dataCart += '</table>'
    document.getElementById('displayCart_content').innerHTML = dataCart
    document.getElementById('displayCart').style.display = 'block'

    localStorage.setItem('cart', JSON.stringify(arrayCart))
}

function deleteProductCart(i) {
    let confirmDel = confirm('Bạn có chắc muốn xóa sản phẩm khỏi giỏ hàng?')
    if (confirmDel) {
        arrayCart.splice(i, 1)
        displayCart()
        displayProduct()
    }
}

function deleteAllCart() {
    let confirmDelAll = confirm('Bạn có chắc muốn xóa?')
    if (confirmDelAll) {
        arrayCart = []
        displayCart()
        displayProduct()
    }
}


