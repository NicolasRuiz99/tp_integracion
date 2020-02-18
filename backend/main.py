from flask import Flask, jsonify, request, json
from classes import User,Customer,Type,Role,Chat,Message,Product,Color_size,Coupon,Shipping,Purchase,Purchxitem,Reservation,Wishlist,Review
from ddbb_connect import logInUser,logInUser2
from mp_api import pagar
from flask_cors import CORS
import time, threading

def handleError (error):
    detail = ''
    for item in error.args:
        detail = detail + item
    return jsonify ({'result': 'error', 'type': detail}), 500

coupon = Coupon ()
reservation = Reservation ()

def updateDates ():
    try:
        coupon.check_dates()
        reservation.check_dates()
        print ('dates checked')
    except (Exception) as err:
        print (err)
    threading.Timer(3600, updateDates).start()

app = Flask(__name__)
CORS (app)

@app.route ('/mercadopago',methods=['POST'])
def mercadopago():
    items = []
    error = False
    lista = request.json['list']
    id = request.json['id']
    coupon  = request.json['coupon']
    cart = request.json['cart']
    for i in lista:
        if (cart):
            precio = i['price'] - ((i['discount']*i['price'])/100)
        else:
            precio = i['price']
        if (coupon != None):
            precio = precio - ((coupon*precio)/100)
        items.append ({
            "title": i['name'] + " color " + i['color'] + " talle " + i["size"],
            "quantity": i['stock'],
            "currency_id": "ARS",
            "unit_price": precio
        })
    try:
        url = pagar(items,id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data': url})

@app.route ('/user/list_emails',methods=['GET'])
def list_emails():
    error = False
    user = User ()
    try:
        results = user.listallEmails()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'results' : results})   

@app.route ('/product/topsellers',methods=['GET'])
def listtopsellers():
    error = False
    prod = Product ()
    try:
        results = prod.listTopSellers ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'results' : results})   

@app.route ('/user/listall',methods=['GET'])
def listall():
    error = False
    user = User ()
    try:
        results = user.listall()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'results' : results})   

@app.route ('/chat/listall',methods=['GET'])
def listallchats():
    error = False
    chat = Chat ()
    try:
        results = chat.listall()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data': results}) 

@app.route ('/product/listall',methods=['GET'])
def listproducts():
    error = False
    prod = Product ()
    try:
        results = prod.listall()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'results' : results})   

@app.route ('/product/listallAdmin',methods=['GET'])
def listproductsAdmin():
    error = False
    prod = Product ()
    try:
        results = prod.listallAdmin ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'results' : results})   

@app.route ('/purchase/listall',methods=['GET'])
def listallpurchases():
    error = False
    purch = Purchase ()
    try:
        results = purch.listall()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'results' : results})   

@app.route ('/review/listall',methods=['GET'])
def listallreviews():
    error = False
    rev = Review ()
    try:
        results = rev.listall ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'results' : results})  

@app.route ('/reservation/listall',methods=['GET'])
def listallreservations():
    error = False
    res = Reservation ()
    try:
        results = res.listall ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'results' : results})  

@app.route ('/coupon/listall',methods=['GET'])
def listallcoupons():
    error = False
    coupon = Coupon ()
    try:
        results = coupon.listall ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'results' : results})

@app.route ('/product/getRecomended',methods=['POST'])
def listproductsRecomended():
    results = []
    error = False
    prod = Product ()
    prod.type = request.json ['type']
    prod.id = request.json ['id']
    try:
        results = prod.listRecomended ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data': results})

@app.route ('/customer/listall',methods=['GET'])
def listcustomerall():
    error = False
    user = User ()
    try:
        results = user.listCustomers ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'results' : results})   

@app.route ('/user/getCustomer',methods=['POST'])
def getuserCustomer():
    error = False
    user = User ()
    user.id = request.json ['id']
    try:
        info = user.getCustomer ()
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
        user_id,role = logInUser (e_mail,psw)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','user_id': user_id,'role': role})

@app.route ('/user/loginExt',methods=['POST'])
def loginUserExt ():
    error = False
    id = request.json['id']
    try:
        user_id,role = logInUser2 (id)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','user_id': user_id,'role': role})

@app.route ('/user/register',methods=['POST'])
def registerUser():
    error = False
    e_mail = request.json['e_mail']
    psw = request.json['psw']
    id_role = request.json['id_role']
    new = User (e_mail,psw,id_role)
    try:
        new.register()
        user_id,role = logInUser (e_mail,psw)
        #creamos chat con admin 1
        chat = Chat (user_id,1)
        chat.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','user_id': user_id,'role': role})

@app.route ('/user/registerExt',methods=['POST'])
def registerUserExt():
    error = False
    id = request.json['id']
    new = User ()
    new.external_id = id
    new.id_role = 2
    try:
        new.register2()
        user_id,role = logInUser2 (id)
        #creamos chat con admin 1
        chat = Chat (user_id,1)
        chat.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','user_id': user_id,'role': role})

@app.route ('/user/mod',methods=['POST'])
def modUser():
    error = False
    id = request.json['id']
    e_mail = request.json['e_mail']
    psw = request.json['psw']
    new = User ()
    new.id = id
    new.e_mail = e_mail
    new.psw = psw
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
    new.id = id
    try:
        new.get()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = new.json ()
            return jsonify({'result': 'success','data' : result})

@app.route ('/user/getInfo',methods=['POST'])
def getUserInfo():
    error = False
    result = {}
    id = request.json['id']
    user = User ()
    user.id = id
    try:
        user.get ()
        result['user'] = user.json() 
        cust = Customer ()
        cust.id_user = id
        cust.getUser ()
        if (cust.id != None):
            result['customer'] = cust.json()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
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
    user = User ()
    user.id = id_user
    try:
        new.add()
        info = user.getCustomer ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','id':info[0]['id']})

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
    new.id = id
    try:
        new.get()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = new.json ()
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
    result = []
    error = False
    t = Type ()
    try:
        result = t.listall ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success','data' : result})

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
            result = new.json()
            return jsonify({'result': 'success','data' : result})

"""
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
"""
@app.route ('/chat/get',methods=['POST'])
def getChat():
    error = False
    new = Chat ()
    new.id_user = request.json['id']
    try:
        new.get()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = new.json()
            return jsonify({'result': 'success','data' : result})

@app.route ('/chat/getUnreadMsg',methods=['POST'])
def getUnreadChatMsg():
    error = False
    new = Chat ()
    new.id_user = request.json['id']
    try:
        result = new.getUnreadMsg()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success','unread_messages' : result})

@app.route ('/chat/listallmsg',methods=['POST'])
def listallChatMsg():
    error = False
    new = Chat ()
    new.id_user = request.json['id']
    try:
        result = new.listAllMsg()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success','data' : result})

@app.route ('/chat/readall',methods=['POST'])
def readAllChatMessages():
    error = False
    id = request.json['id']
    id_user = request.json['id_user']
    new = Chat ()
    try:
        new.id_user = id
        new.readAll (id_user)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success'})            

@app.route ('/message/add',methods=['POST'])
def addMessage():
    error = False
    msg = request.json['msg']
    id_user = request.json['id_user']
    id_chat = request.json['id_chat']
    new = Message (msg,None,id_user,id_chat)
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
            result = new.json()
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
        id = new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','id': id})

@app.route ('/product/mod',methods=['POST'])
def modProduct():
    error = False
    prod = Product ()
    prod.id = request.json['id']
    prod.name = request.json['name']
    prod.dsc = request.json['dsc']
    prod.material = request.json['material']
    prod.genre = request.json['genre']
    prod.brand = request.json['brand']
    prod.type = request.json['type']
    prod.discount = request.json['discount']
    prod.price = request.json['price']
    try:
        prod.mod()
    except (Exception) as err:          
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/product/setActive',methods=['POST'])
def ProductSetActive():
    error = False
    new = Product ()
    new.id = request.json['id']
    new.active = request.json['active']
    try:
        new.setActive()
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
            result = new.json ()
            return jsonify({'result': 'success','data' : result})

@app.route ('/product/getColor_size',methods=['POST'])
def getProductColor_size():
    error = False
    prod = Product ()
    prod.id = request.json['id']
    try:
        result = prod.getColor_size ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success','data' : result})

@app.route ('/product/listNew',methods=['GET'])
def getNewProducts():
    result = []
    error = False
    try:
        prod = Product ()
        result = prod.listNew ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success','data' : result})

@app.route ('/product/listHighRated',methods=['GET'])
def getHighRatedProducts():
    result = []
    error = False
    try:
        prod = Product ()
        result = prod.listHighRated ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success','data' : result})

@app.route ('/product/getReview',methods=['POST'])
def getProductReview():
    error = False
    prod = Product ()
    prod.id = request.json['id']
    try:
        result = prod.listReviews ()
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


@app.route ('/color_size/get',methods=['POST'])
def getColor_size():
    error = False 
    new = Color_size ()
    new.id = request.json['id']
    try:
        new.get()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = new.json()
            return jsonify({'result': 'success','data' : result})


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
def modShipping():
    error = False
    id = request.json['id']
    pc = request.json['pc']
    cad_date = request.json['cad_date']
    used = request.json['used']
    new = Coupon (pc,cad_date,used,id)
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
    new.id = id
    try:
        new.get()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):       
            result = new.json ()
            return jsonify({'result': 'success','data' : result})     

@app.route ('/coupon/use',methods=['POST'])
def useCoupon():
    error = False
    id = request.json['id']
    new = Coupon ()
    new.id = id
    try:
        new.get()
        new.use()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):       
            return jsonify({'result': 'success'})   

@app.route ('/shipping/add',methods=['POST'])
def addShipping():
    error = False
    id = request.json['id']
    address = request.json['address']
    zip = request.json['zip']
    name = request.json['name']
    surname = request.json['surname']
    dni = request.json['dni']
    province = request.json['province']
    new = Shipping (address,zip,name,surname,dni,province,id)
    try:
        new.add()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/shipping/setTrackCode',methods=['POST'])
def setShippingTrackCode():
    error = False
    id = request.json['id']
    track_code = request.json['track_code']
    new = Shipping ()
    new.id = id
    new.track_code = track_code
    try:
        new.setTrackCode()
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
    new.id = id
    try:
        new.get()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = new.json ()
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
    state = request.json['state']
    id_user = request.json['id_user']
    id_coupon = request.json['id_coupon']
    new = Purchase (price,None,state,id_user,id_coupon,id)
    try:
        new.mod()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success'})

@app.route ('/purchase/setState',methods=['POST'])
def setStatePurchase():
    error = False
    id = request.json['id']
    state = request.json['state']
    new = Purchase ()
    new.id = id
    new.state = state
    try:
        new.setState()
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

@app.route ('/purchase/getInfo',methods=['POST'])
def getPurchaseInfo():
    error = False
    result = {}
    id = request.json['id']
    purch = Purchase ()
    purch.id = id
    try:
        purch.get()
        result['purchase'] = purch.json()
        ship = Shipping ()
        ship.id = id
        ship.get()
        if (ship.id != None):
            result['shipping'] = ship.json()
        if (purch.id_coupon != None):
            coup = Coupon ()
            coup.id = purch.id_coupon
            coup.get()
            result['coupon'] = coup.json()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success','data' : result})

@app.route ('/purchase/listItems',methods=['POST'])
def listUserPurchaseItems():
    result = []
    error = False
    purch = Purchase ()
    purch.id = request.json['id']
    try:
        result = purch.listItems ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})

@app.route ('/purchase/item',methods=['POST'])
def getPurchItem():
    error = False
    id_user = request.json['id_user']
    id_prod = request.json['id_prod']
    try:
        purch = Purchase ()
        result = purch.getItem (id_user,id_prod)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})

@app.route ('/purchase/list',methods=['POST'])
def listUserPurchase():
    result = []
    error = False
    id_user = request.json['id_user']
    try:
        purch = Purchase ()
        result = purch.userList (id_user)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})

@app.route ('/cart/add',methods=['POST'])
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

@app.route ('/cart/delete',methods=['POST'])
def deleteCartItem():
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

@app.route ('/cart/listItems',methods=['POST'])
def listUserCartItems():
    result = []
    error = False
    user = User ()
    user.id = request.json['user_id']
    try:
        result = user.listCartItems ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})

@app.route ('/cart/getInfo',methods=['POST'])
def getUserCartInfo():
    result = []
    error = False
    user = User ()
    user.id = request.json['user_id']
    try:
        result = user.getCartInfo ()
        if len (result) == 0:
            new = Purchase ()
            new.id_user = user.id
            new.add ()
            result = user.getCartInfo ()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})

"""
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
"""

"""
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
"""
"""
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
"""

@app.route ('/reservation/add',methods=['POST'])
def addReservation():
    error = False
    stock = request.json['stock']
    id_user = request.json['id_user']
    id_color_size = request.json['id_color_size']
    new = Reservation (None,stock,id_user,id_color_size,None,None)
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

@app.route ('/reservation/cancel',methods=['POST'])
def cancelReservation():
    error = False
    id = request.json['id']
    new = Reservation ()
    new.id = id
    try:
        new.cancel ()
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
            result = new.json()
            return jsonify({'result': 'success','data' : result})

@app.route ('/reservation/item',methods=['POST'])
def getUserReservationItem():
    result = []
    error = False
    res = Reservation ()
    res.id_user = request.json['id_user']
    res.id_color_size = request.json['id_color_size']
    try:
        result = res.getItem ()  
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result': 'success','data' : result})

@app.route ('/reservation/list',methods=['POST'])
def listUserReservations():
    result = []
    error = False
    id_user = request.json['id_user']
    try:
        res = Reservation ()
        result = res.userList (id_user)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})

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
        wish = Wishlist ()
        result = wish.userList (id_user)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})

@app.route ('/wishlist/item',methods=['POST'])
def getWishItem():
    error = False
    id_user = request.json['id_user']
    id_prod = request.json['id_prod']
    try:
        wish = Wishlist ()
        result = wish.getItem (id_user,id_prod)
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
    stars = request.json['stars']
    title = request.json['title']
    commentary = request.json['commentary']
    id_product = request.json['id_product']
    id_user = request.json['id_user']
    new = Review (stars,title,commentary,id_product,id_user,id)
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

@app.route ('/review/list',methods=['POST'])
def listUserReview():
    result = []
    error = False
    id_user = request.json['id_user']
    try:
        rev = Review ()
        result = rev.userList (id_user)
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            return jsonify({'result' : 'success','data' : result})


@app.route ('/review/get',methods=['POST'])
def getReviewInfo():
    error = False
    id = request.json['id']
    new = Review ()
    new.id = id
    try:
        new.get()
    except (Exception) as err:
        error = True
        return handleError (err)
    finally:
        if not (error):
            result = new.json()
            return jsonify({'result': 'success','data' : result})


if __name__ == '__main__':
    app.run(debug=True)

updateDates()