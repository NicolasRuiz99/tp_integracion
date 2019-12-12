from flask import Flask, jsonify, request, json
from queries import listUsers,listCustomers,listRoles
from classes import User,Customer,Type,Role,Chat,Message,Product,Color_size,Coupon,Shipping,Purchase,Purchxitem,Reservation,Wishlist,Review

def handleError (error):
    detail = ''
    for item in error.args:
        detail = detail + item
    return jsonify ({'result': 'error', 'type': detail})

app = Flask(__name__)

@app.route ('/user/listall',methods=['GET'])
def listall():
    results = listUsers()
    return jsonify({'results' : results})

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
    id_role = request.json['id_role']
    new = User (e_mail,psw,id_role,id)
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
    id_user = request.json['id_user']
    new = Customer (dni,name,surname,genre,c_size,shoe_size,phone_no,id_user,id)
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

if __name__ == '__main__':
    app.run(debug=True)

