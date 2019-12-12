from flask import Flask, jsonify, request, json
from queries import listUsers,listCustomers,listRoles
from classes import User,Customer,Type,Role,Chat,Message,Product,Color_size,Coupon,Shipping,Purchase,Purchxitem,Reservation,Wishlist,Review

app = Flask(__name__)

@app.route ('/users/listall',methods=['GET'])
def listall():
    results = listUsers()
    return jsonify({'results' : results})

@app.route ('/users/register',methods=['POST'])
def registerUser():
    e_mail = request.form['e_mail']
    psw = request.form['psw']
    id_role = request.form['id_role']
    new = User (e_mail,psw,id_role)
    try:
        new.register()
    except (Exception) as error:
        error = error
    finally:
        if (error):
            return jsonify ({'result': 'error','type' : error})
        else:
            return jsonify({'result' : 'success'})

@app.route ('/users/mod',methods=['POST'])
def modUser():
    id = request.form['id']
    e_mail = request.form['e_mail']
    psw = request.form['psw']
    id_role = request.form['id_role']
    new = User (e_mail,psw,id_role,id)
    try:
        new.mod()
    except (Exception) as error:
        error = error
    finally:
        if (error):
            return jsonify ({'result': 'error','type' : error})
        else:
            return jsonify({'result' : 'success'})

@app.route ('/users/delete',methods=['POST'])
def deleteUser():
    id = request.form['id']
    new = User (id)
    try:
        new.delete()
    except (Exception) as error:
        error = error
    finally:
        if (error):
            return jsonify ({'result': 'error','type' : error})
        else:
            return jsonify({'result' : 'success'})

@app.route ('/users/get',methods=['POST'])
def getUser():
    id = request.form['id']
    new = User ()
    try:
        new.get(id)
    except (Exception) as error:
        error = error
    finally:
        if (error):
            return jsonify ({'result': 'error','type' : error})
        else:
            result = dict (id = new.id, e_mail = new.e_mail, psw = new.psw, id_role = new.id_role)
            return jsonify({'result' : result})

if __name__ == '__main__':
    app.run(debug=True)

