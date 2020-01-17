from flask import Flask, jsonify, request, json
from queries import listUsers,listCustomers,listRoles,listUsersE_Mails,getUserCustomer,listProducts,getColor_size,getReview,listRecomendedProducts,getUserWishlist,getWishlistItem,getPurchaseItem,listTypes,listProductosMasVendidos
from classes import User,Customer,Type,Role,Chat,Message,Product,Color_size,Coupon,Shipping,Purchase,Purchxitem,Reservation,Wishlist,Review
from ddbb_connect import logInUser

def handleError (error):
    detail = ''
    for item in error.args:
        detail = detail + item
    return jsonify ({'result': 'error', 'type': detail}), 500

app = Flask(__name__)

@app.route ('/user/list_emails',methods=['GET'])
def list_emails():
    results = listUsersE_Mails ()
    return jsonify({'results' : results})

@app.route ('/product/topsellers',methods=['GET'])
def listtopsellers():
    results = listProductosMasVendidos()
    return jsonify({'results' : results})

@app.route ('/user/listall',methods=['GET'])
def listall():
    results = listUsers()
    return jsonify({'results' : results})

@app.route ('/product/listall',methods=['GET'])
def listproducts():
    results = listProducts()
    return jsonify({'results' : results})

@app.route ('/product/getRecomended',methods=['POST'])
def listproductsRecomended():
    type_id = request.json ['type']
    results = listRecomendedProducts (type_id)
    return jsonify({'results' : results})

@app.route ('/customer/listall',methods=['GET'])
def listcustomerall():
    results = listCustomers()
    return jsonify({'results' : results})

@app.route ('/user/getCustomer',methods=['POST'])
def getuserCustomer():
    error = False
    id = request.json ['id']
    try:
        info = getUserCustomer (id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data': info})

@app.route ('/user/login',methods=['POST'])
def loginUser ():
    error = False
    e_mail = request.json['e_mail']
    psw = request.json['psw']
    try:
        user_id = logInUser (e_mail,psw)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','user_id': user_id})

@app.route ('/user/register',methods=['POST'])
def registerUser():
    error = False
    e_mail = request.json['e_mail']
    psw = request.json['psw']
    id_role = request.json['id_role']
    new = User (e_mail,psw,id_role)
    try:
        new.register()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/user/mod',methods=['POST'])
def modUser():
    error = False
    id = request.json['id']
    e_mail = request.json['e_mail']
    psw = request.json['psw']
    new = User (e_mail,psw,None,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/user/delete',methods=['POST'])
def deleteUser():
    error = False
    id = request.json['id']
    new = User ()
    new.id = id
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/user/get',methods=['POST'])
def getUser():
    error = False
    id = request.json['id']
    new = User ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, e_mail = new.e_mail, psw = new.psw, id_role = new.id_role)
            return jsonify({'result': 'success','data' : result})
            
@app.route ('/customer/add',methods=['POST'])
def addCustomer():
    error = False
    dni = request.json['dni']
    name = request.json['name']
    surname = request.json['surname']
    genre = request.json['genre']
    c_size = request.json['c_size']
    shoe_size = request.json['shoe_size']
    phone_no = request.json['phone_no']
    id_user = request.json['id_user']
    new = Customer (dni,name,surname,genre,c_size,shoe_size,phone_no,id_user)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/customer/mod',methods=['POST'])
def modCustomer():
    error = False
    id = request.json['id']
    dni = request.json['dni']
    name = request.json['name']
    surname = request.json['surname']
    genre = request.json['genre']
    c_size = request.json['c_size']
    shoe_size = request.json['shoe_size']
    phone_no = request.json['phone_no']
    new = Customer (dni,name,surname,genre,c_size,shoe_size,phone_no,None,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/customer/get',methods=['POST'])
def getCustomer():
    error = False
    id = request.json['id']
    new = Customer ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, dni = new.dni, name = new.name, surname = new.surname, genre = new.genre, c_size = new.c_size, shoe_size = new.shoe_size, phone_no = new.phone_no, id_user = new.id_user)
            return jsonify({'result': 'success','data' : result})

@app.route ('/type/add',methods=['POST'])
def addType():
    error = False
    name = request.json['name']
    new = Type (name)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/type/listall',methods=['GET'])
def listAllTypes():
    results = listTypes()
    return jsonify({'results' : results})

@app.route ('/type/mod',methods=['POST'])
def modType():
    error = False
    id = request.json['id']
    name = request.json['name']
    new = Type (name,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/type/delete',methods=['POST'])
def deleteType():
    error = False
    id = request.json['id']
    new = Type ()
    new.id = id
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/type/get',methods=['POST'])
def getType():
    error = False
    id = request.json['id']
    new = Type ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, name =new.name)
            return jsonify({'result': 'success','data' : result})

@app.route ('/chat/add',methods=['POST'])
def addChat():
    error = False
    id_customer = request.json['id_customer']
    id_admin = request.json['id_admin']
    new = Chat (id_customer,id_admin)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/chat/mod',methods=['POST'])
def modChat():
    error = False
    id = request.json['id']
    id_customer = request.json['id_customer']
    id_admin = request.json['id_admin']
    new = Chat (id_customer,id_admin,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/chat/delete',methods=['POST'])
def deleteChat():
    error = False
    id = request.json['id']
    new = Chat ()
    new.id = id
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/chat/get',methods=['POST'])
def getChat():
    error = False
    id = request.json['id']
    new = Chat ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, id_customer =new.id_customer,id_admin = new.id_admin)
            return jsonify({'result': 'success','data' : result})

@app.route ('/message/add',methods=['POST'])
def addMessage():
    error = False
    msg = request.json['msg']
    date = request.json['date']
    id_user = request.json['id_user']
    id_chat = request.json['id_chat']
    new = Message (msg,date,id_user,id_chat)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/message/get',methods=['POST'])
def getMessage():
    error = False
    id = request.json['id']
    new = Message ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, msg =new.msg,date = new.date, id_user = new.id_user, id_chat = new.id_chat)
            return jsonify({'result': 'success','data' : result})

@app.route ('/product/add',methods=['POST'])
def addProduct():
    error = False
    name = request.json['name']
    dsc = request.json['dsc']
    material = request.json['material']
    genre = request.json['genre']
    brand = request.json['brand']
    type = request.json['type']
    discount = request.json['discount']
    price = request.json['price']
    new = Product (name,dsc,material,genre,brand,type,discount,price)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/product/mod',methods=['POST'])
def modProduct():
    error = False
    id = request.json['id']
    name = request.json['name']
    dsc = request.json['dsc']
    material = request.json['material']
    genre = request.json['genre']
    brand = request.json['brand']
    type = request.json['type']
    discount = request.json['discount']
    price = request.json['price']
    new = Product (name,dsc,material,genre,brand,type,discount,price,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/product/delete',methods=['POST'])
def deleteProduct():
    error = False
    id = request.json['id']
    new = Product ()
    new.id = id
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/product/get',methods=['POST'])
def getProduct():
    error = False
    id = request.json['id']
    new = Product ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, name = new.name, dsc = new.dsc, material = new.material, genre = new.genre, brand = new.brand,type = new.type, discount = new.discount, price = new.price)
            return jsonify({'result': 'success','data' : result})

@app.route ('/product/getColor_size',methods=['POST'])
def getProductColor_size():
    error = False
    id = request.json['id']
    try:
        result = getColor_size (id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success','data' : result})

@app.route ('/product/getReview',methods=['POST'])
def getProductReview():
    error = False
    id = request.json['id']
    try:
        result = getReview (id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success','data' : result})

@app.route ('/color_size/add',methods=['POST'])
def addColor_size():
    error = False
    color = request.json['color']
    size = request.json['size']
    stock = request.json['stock']
    prod_id = request.json['prod_id']
    new = Color_size (color,size,stock,prod_id)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/color_size/mod',methods=['POST'])
def modColor_size():
    error = False
    id = request.json['id']
    color = request.json['color']
    size = request.json['size']
    stock = request.json['stock']
    prod_id = request.json['prod_id']
    new = Color_size (color,size,stock,prod_id,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/color_size/delete',methods=['POST'])
def deleteColor_size():
    error = False
    id = request.json['id']
    new = Color_size ()
    new.id = id
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

"""
@app.route ('/color_size/get',methods=['POST'])
def getColor_size():
    error = False
    id = request.json['id']
    new = Color_size ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, color = new.color, size = new.size,stock = new.stock,prod_id = new.prod_id)
            return jsonify({'result': 'success','data' : result})
"""

@app.route ('/coupon/add',methods=['POST'])
def addCoupon():
    error = False
    pc = request.json['pc']
    cad_date = request.json['cad_date']
    new = Coupon (pc,cad_date)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/coupon/mod',methods=['POST'])
def modCoupon():
    error = False
    id = request.json['id']
    pc = request.json['pc']
    cad_date = request.json['cad_date']
    new = Coupon (pc,cad_date,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/coupon/delete',methods=['POST'])
def deleteCoupon():
    error = False
    id = request.json['id']
    new = Coupon ()
    new.id = id
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/coupon/get',methods=['POST'])
def getCoupon():
    error = False
    id = request.json['id']
    new = Coupon ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, pc = new.pc, cad_date = new.cad_date)
            return jsonify({'result': 'success','data' : result})

@app.route ('/shipping/add',methods=['POST'])
def addShipping():
    error = False
    address = request.json['address']
    zip = request.json['zip']
    name = request.json['name']
    surname = request.json['surname']
    dni = request.json['dni']
    track_code = request.json['track_code']
    province = request.json['province']
    new = Shipping (address,zip,name,surname,dni,track_code,province)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/coupon/mod',methods=['POST'])
def modShipping():
    error = False
    id = request.json['id']
    address = request.json['address']
    zip = request.json['zip']
    name = request.json['name']
    surname = request.json['surname']
    dni = request.json['dni']
    track_code = request.json['track_code']
    province = request.json['province']
    new = Shipping (address,zip,name,surname,dni,track_code,province,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/shipping/delete',methods=['POST'])
def deleteShipping():
    error = False
    id = request.json['id']
    new = Shipping ()
    new.id = id
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/shipping/get',methods=['POST'])
def getShipping():
    error = False
    id = request.json['id']
    new = Shipping ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, address = new.address, zip = new.zip, name = new.name, surname = new.surname, dni = new.dni, track_code = new.track_code, province = new.province)
            return jsonify({'result': 'success','data' : result})

@app.route ('/purchase/add',methods=['POST'])
def addPurchase():
    error = False
    price = request.json['price']
    date = request.json['date']
    state = request.json['state']
    id_user = request.json['id_user']
    id_coupon = request.json['id_coupon']
    id_shipping = request.json['id_shipping']
    new = Purchase (price,date,state,id_user,id_coupon,id_shipping)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/purchase/mod',methods=['POST'])
def modPurchase():
    error = False
    id = request.json['id']
    price = request.json['price']
    date = request.json['date']
    state = request.json['state']
    id_user = request.json['id_user']
    id_coupon = request.json['id_coupon']
    id_shipping = request.json['id_shipping']
    new = Purchase (price,date,state,id_user,id_coupon,id_shipping,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/purchase/delete',methods=['POST'])
def deletePurchase():
    error = False
    id = request.json['id']
    new = Purchase ()
    new.id = id
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/purchase/get',methods=['POST'])
def getPurchase():
    error = False
    id = request.json['id']
    new = Purchase ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, price = new.price, date = new.date, state = new.state, id_user = new.id_user, id_coupon = new.id_coupon ,id_shipping = new.id_shipping)
            return jsonify({'result': 'success','data' : result})

@app.route ('/purchase/item',methods=['POST'])
def getPurchItem():
    result = False
    error = False
    id_user = request.json['id_user']
    id_prod = request.json['id_prod']
    try:
        item = getPurchaseItem (id_user,id_prod)
        if (item != []):
            result = True
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})

@app.route ('/purchxitem/add',methods=['POST'])
def addPurchxitem():
    error = False
    id_purchase = request.json['id_purchase']
    id_color_size = request.json['id_color_size']
    stock = request.json['stock']
    new = Purchxitem (id_purchase,id_color_size,stock)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/purchxitem/delete',methods=['POST'])
def deletePurchxitem():
    error = False
    id_purchase = request.json['id_purchase']
    id_color_size = request.json['id_color_size']
    new = Purchxitem (id_purchase,id_color_size)
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/purchxitem/get',methods=['POST'])
def getPurchxitem():
    error = False
    id_purchase = request.json['id_purchase']
    id_color_size = request.json['id_color_size']
    new = Purchxitem (id_purchase,id_color_size)
    try:
        new.get()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id_purchase = new.id_purchase,id_color_size = new.id_color_size, stock = new.stock)
            return jsonify({'result': 'success','data' : result})

@app.route ('/reservation/add',methods=['POST'])
def addReservation():
    error = False
    date = request.json['date']
    stock = request.json['stock']
    id_user = request.json['id_user']
    id_color_size = request.json['id_color_size']
    state = request.json['state']
    new = Reservation (date,stock,id_user,id_color_size,state)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/reservation/mod',methods=['POST'])
def modReservation():
    error = False
    id = request.json['id']
    date = request.json['date']
    stock = request.json['stock']
    id_user = request.json['id_user']
    id_color_size = request.json['id_color_size']
    state = request.json['state']
    new = Reservation (date,stock,id_user,id_color_size,state,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/reservation/delete',methods=['POST'])
def deleteReservation():
    error = False
    id = request.json['id']
    new = Reservation ()
    new.id = id
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/reservation/get',methods=['POST'])
def getReservation():
    error = False
    id = request.json['id']
    new = Reservation ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, date = new.date, stock = new.stock, id_user = new.id_user, id_color_size = new.id_color_size, state = new.state)
            return jsonify({'result': 'success','data' : result})

@app.route ('/wishlist/add',methods=['POST'])
def addWishlist():
    error = False
    id_user = request.json['id_user']
    id_prod = request.json['id_prod']
    new = Wishlist (id_user,id_prod)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/wishlist/delete',methods=['POST'])
def deleteWishlist():
    error = False
    id_user = request.json['id_user']
    id_prod = request.json['id_prod']
    new = Wishlist (id_user,id_prod)
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/wishlist/get',methods=['POST'])
def getWishlist():
    result = []
    error = False
    id_user = request.json['id_user']
    try:
        result = getUserWishlist (id_user)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})

@app.route ('/wishlist/item',methods=['POST'])
def getWishItem():
    result = False
    error = False
    id_user = request.json['id_user']
    id_prod = request.json['id_prod']
    try:
        item = getWishlistItem (id_user,id_prod)
        if (item != []):
            result = True
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})

@app.route ('/review/add',methods=['POST'])
def addReview():
    error = False
    stars = request.json['stars']
    title = request.json['title']
    commentary = request.json['commentary']
    id_prod = request.json['id_prod']
    id_user = request.json['id_user']
    new = Review (stars,title,commentary,id_prod,id_user)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/review/mod',methods=['POST'])
def modReview():
    error = False
    id = request.json['id']
    date = request.json['date']
    stars = request.json['stars']
    title = request.json['title']
    commentary = request.json['commentary']
    id_product = request.json['id_product']
    id_user = request.json['id_user']
    new = Review (date,stars,title,commentary,id_product,id_user,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/review/delete',methods=['POST'])
def deleteReview():
    error = False
    id = request.json['id']
    new = Review ()
    new.id = id
    try:
        new.delete()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

"""
@app.route ('/review/get',methods=['POST'])
def getReview():
    error = False
    id = request.json['id']
    new = Review ()
    try:
        new.get(id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = dict (id = new.id, date = new.date, stars = new.stars, title = new.title, commentary = new.commentary, id_product = new.id_product)
            return jsonify({'result': 'success','data' : result})
"""

if __name__ == '__main__':
    app.run(debug=True)

