from ddbb_connect import addToTable,listTable,updateTable,deleteFromTable,searchID,deleteFromTable2,searchID2,query,callFun

class User:
    def __init__ (self,e_mail = None,psw = None,id_role = None,external_id=None,_id = None):
        self.id = _id
        self.e_mail = e_mail
        self.psw = psw
        self.external_id = external_id
        self.id_role = id_role 

    def register (self):
        new_record = (self.e_mail,self.psw,self.id_role)
        addToTable ('users (e_mail,psw,id_role)',new_record,'(%s,%s,%s)')

    def register2 (self):
        new_record = (self.external_id,self.id_role)
        addToTable ('users (external_id,id_role)',new_record,'(%s,%s)')

    def mod (self):
        new_record = (self.e_mail,self.psw,self.id)
        updateTable ('users',new_record,'e_mail = %s, psw = %s')

    def delete (self):
        deleteFromTable ('users',self.id)

    def get (self):
        res = searchID ('users',self.id)  
        self.id = res[0]
        self.e_mail = res[1]
        self.psw = res[2]
        self.id_role = res[3]

class Customer:
    def __init__ (self,dni = None,name = None,surname = None,genre = None,c_size = None,shoe_size = None,phone_no = None,id_user = None,_id = None):
        self.id = _id
        self.dni = dni
        self.name = name
        self.surname = surname
        self.genre = genre
        self.c_size = c_size
        self.shoe_size = shoe_size
        self.phone_no = phone_no
        self.id_user = id_user 

    def add (self):
        new_record = (self.dni,self.name,self.surname,self.genre,self.c_size,self.shoe_size,self.phone_no,self.id_user)
        addToTable ('customers (dni,name,surname,genre,c_size,shoe_size,phone_no,id_user)',new_record,'(%s,%s,%s,%s,%s,%s,%s,%s)')

    def mod (self):
        new_record = (self.dni,self.name,self.surname,self.genre,self.c_size,self.shoe_size,self.phone_no,self.id)
        updateTable ('customers',new_record,'dni = %s, name = %s, surname = %s, genre = %s, c_size = %s, shoe_size = %s, phone_no = %s')

    def delete (self):
        deleteFromTable ('customers',self.id)

    def get (self):
        res = searchID ('customers',self.id)  
        if (res == None):
            self.id = None
        else:
            self.id = res[0]
            self.dni = res[1]
            self.name = res[2]
            self.surname = res[3]
            self.genre = res[4]
            self.c_size = res[5]
            self.shoe_size = res[6]
            self.phone_no = res[7]
            self.id_user = res[8] 

    def getUser (self):
        res = searchID2 ('customers',self.id_user,'id_user = %s')  
        if (res == None):
            self.id = None
        else:
            self.id = res[0]
            self.dni = res[1]
            self.name = res[2]
            self.surname = res[3]
            self.genre = res[4]
            self.c_size = res[5]
            self.shoe_size = res[6]
            self.phone_no = res[7]
            self.id_user = res[8] 

class Type:
    def __init__ (self,name = None,_id=None):
        self.id = _id
        self.name = name

    def add (self):
        new_record = (self.name,)
        addToTable ('type (name)',new_record,'(%s)')

    def mod (self):
        new_record = (self.name,self.id)
        updateTable ('type',new_record,'name = %s')

    def delete (self):
        deleteFromTable ('type',self.id)

    def get (self,_id):
        res = searchID ('type',_id)  
        self.id = res[0]
        self.name = res[1]

class Role:
    def __init__ (self,name=None,_id=None):
        self.id = _id
        self.name = name

    def add (self):
        new_record = (self.name, )
        addToTable ('roles (name)',new_record,'(%s)')

    def mod (self):
        updateTable ('roles',(self.name,self.id),'name = %s')

    def delete (self):
        deleteFromTable ('roles',self.id)

    def get (self,_id):
        res = searchID ('roles',_id)  
        self.id = res[0]
        self.name = res[1]

class Chat:
    def __init__ (self,id_customer=None,id_admin=None,_id=None):
        self.id = _id
        self.id_customer = id_customer
        self.id_admin = id_admin

    def add (self):
        new_record = (self.id_customer,self.id_admin)
        addToTable ('chat (id_customer,id_admin)',new_record,'(%s,%s)')

    def mod (self):
        updateTable ('chat',(self.id_customer,self.id_admin,self.id),'id_customer = %s, id_admin = %s')

    def delete (self):
        deleteFromTable ('chat',self.id)
    
    def get (self,_id):
        res = searchID ('chat',_id)  
        self.id = res[0]
        self.id_customer = res[1]
        self.id_admin = res[2]

class Message:
    def __init__ (self,msg=None,date=None,id_user=None,id_chat=None,_id=None):
        self.id = _id
        self.msg = msg
        self.date = date
        self.id_user = id_user
        self.id_chat = id_chat     

    def add (self):
        new_record = (self.msg, self.date,self.id_user, self.id_chat )
        addToTable ('message (msg, date, id_user, id_chat)',new_record,'(%s,%s,%s,%s)')

    def mod (self):
        updateTable ('message',(self.msg,self.date,self.id_user,self.id_chat,self.id),'msg = %s, date = %s, id_user = %s, id_chat = %s')

    def delete (self):
        deleteFromTable ('message',self.id)

    def get (self,_id):
        res = searchID ('message',_id)  
        self.id = res[0]
        self.msg = res[1]
        self.date = res[2]
        self.id_user = res[3]
        self.id_chat = res[4]

class Product:
    def __init__ (self,name=None,dsc=None,material=None,genre=None,brand=None,type=None,discount=None,price=None,_id=None):
        self.id = _id
        self.name = name
        self.dsc = dsc
        self.material = material
        self.genre = genre
        self.brand = brand
        self.type = type 
        self.discount = discount
        self.price = price    

    def add (self):
        new_record = (self.name, self.dsc,self.material, self.genre,self.brand,self.type,self.discount,self.price )
        addToTable ('products (name, dsc, material, genre, brand, type, discount, price)',new_record,'(%s,%s,%s,%s,%s,%s,%s,%s)')

    def mod (self):
        updateTable ('products',(self.name, self.dsc,self.material, self.genre,self.brand,self.type,self.discount,self.price,self.id),'name = %s, dsc = %s, material = %s, genre = %s, brand = %s, type = %s, discount = %s, price = %s')

    def delete (self):
        deleteFromTable ('products',self.id)

    def get (self,_id):
        res = searchID ('products',_id)  
        self.id = res[0]
        self.name = res[1]
        self.dsc = res[2]
        self.material = res[3]
        self.genre = res[4]
        self.brand = res[5]
        self.type = res[6]
        self.discount = res[7]
        self.price = res[8]  

class Color_size:
    def __init__ (self,color=None,size=None,stock=None,prod_id=None,_id=None):
        self.id = _id
        self.color = color
        self.size = size 
        self.stock = stock
        self.prod_id = prod_id   

    def add (self):
        new_record = (self.color, self.size,self.stock, self.prod_id )
        addToTable ('color_size (color, size, stock, prod_id)',new_record,'(%s,%s,%s,%s)')

    def mod (self):
        updateTable ('color_size',(self.color, self.size,self.stock, self.prod_id,self.id),'color = %s, size = %s, stock = %s, prod_id = %s')

    def delete (self):
        deleteFromTable ('color_size',self.id)

    def get (self,_id):
        res = searchID ('color_size',_id)  
        self.id = res[0]
        self.color = res[1]
        self.size = res[2]
        self.stock = res[3]
        self.prod_id = res[4]

class Coupon:
    def __init__ (self,pc=None,cad_date=None,used=False,_id=None):
        self.id = _id
        self.pc = pc
        self.cad_date = cad_date
        self.used = used

    def add (self):
        new_record = (self.pc, self.cad_date, self.used )
        addToTable ('coupon (pc, cad_date, used)',new_record,'(%s,%s,%s)')

    def use (self):
        self.used = True
        updateTable ('coupon',(self.used),'used = %s')

    def delete (self):
        deleteFromTable ('coupon',self.id)

    def get (self):
        res = searchID ('coupon',self.id)  
        self.id = res[0]
        self.pc = res[1]
        self.cad_date = res[2]
        self.used = res[3]

class Shipping:
    def __init__ (self,address=None,zip=None,name=None,surname=None,dni=None,province=None,_id=None,track_code=None):
        self.id = _id
        self.address = address
        self.zip = zip
        self.name = name
        self.surname = surname
        self.dni = dni
        self.track_code = track_code
        self.province = province

    def add (self):
        new_record = (self.id,self.address, self.zip, self.name, self.surname, self.dni, self.track_code, self.province )
        addToTable ('shipping (id,address, zip, name, surname, dni, track_code, province)',new_record,'(%s,%s,%s,%s,%s,%s,%s,%s)')

    def mod (self):
        updateTable ('shipping',(self.address, self.zip, self.name, self.surname, self.dni, self.track_code, self.province, self.id),'address = %s, zip = %s, name = %s, surname = %s, dni = %s, track_code = %s, province = %s')

    def setTrackCode (self):
        updateTable ('shipping',(self.track_code,self.id),'track_code = %s')

    def delete (self):
        deleteFromTable ('shipping',self.id)

    def get (self):
        res = searchID ('shipping',self.id)  
        if (res == None):
            self.id = None
        else:
            self.id = res[0]
            self.address = res[1]
            self.zip = res[2]
            self.name = res[3]
            self.surname = res[4]
            self.dni = res[5]
            self.track_code = res[6]
            self.province = res[7]

class Purchase:
    def __init__ (self,price=None,date=None,state='cart',id_user=None,id_coupon=None,_id=None):
        self.id = _id
        self.price = price 
        self.date = date
        self.state = state
        self.id_user = id_user
        self.id_coupon = id_coupon

    def add (self):
        new_record = (self.id_user,self.id_coupon,self.state)
        addToTable ('purchase (id_user, id_coupon, state)',new_record,'(%s,%s,%s)')

    def mod (self):
        updateTable ('purchase',(self.price,self.state,self.id_user,self.id_coupon, self.id),'price = %s, state = %s, id_user = %s, id_coupon = %s')

    def setState (self):
        updateTable ('purchase',(self.state, self.id),'state = %s')

    def delete (self):
        deleteFromTable ('purchase',self.id)

    def get (self):
        res = searchID ('purchase',self.id)  
        self.price = res[1]
        self.date = res[2]
        self.state = res[3]
        self.id_user = res[4]
        self.id_coupon = res[5]

class Purchxitem:
    def __init__ (self,id_purchase=None,id_color_size=None,stock=None,purch_price=None):
        self.id_purchase = id_purchase
        self.id_color_size = id_color_size
        self.stock = stock
        self.purch_price = purch_price

    def add (self):
        new_record = (self.id_purchase, self.id_color_size,self.stock )
        addToTable ('purchxitem (id_purchase, id_color_size, stock)',new_record,'(%s,%s,%s)')

    def delete (self):
        deleteFromTable2 ('purchxitem',(self.id_purchase,self.id_color_size),'id_purchase = %s and id_color_size = %s')

    def get (self):
        res = searchID2 ('purchxitem',(self.id_purchase,self.id_color_size),'id_purchase = %s and id_color_size = %s')  
        self.id_purchase = res[0]
        self.id_color_size = res[1]
        self.stock = res[2]
        self.purch_price = res [3]

class Reservation:
    def __init__ (self,date=None,stock=None,id_user=None,id_color_size=None,state=None,_id=None):
        self.id = _id
        self.date = date
        self.stock = stock
        self.id_user = id_user
        self.id_color_size = id_color_size
        self.state = state

    def add (self):
        callFun ('create_reservation',[self.stock,self.id_user,self.id_color_size,])

    def mod (self):
        updateTable ('reservations',(self.date, self.stock, self.id_user, self.id_color_size, self.state, self.id),'date = %s, stock = %s, id_user = %s, id_color_size = %s, state = %s')

    def cancel (self):
        updateTable ('reservations',('cancelled',self.id),'state = %s')

    def delete (self):
        deleteFromTable ('reservations',self.id)

    def get (self,_id):
        res = searchID ('reservations',_id)  
        self.id = res[0]
        self.date = res[1]
        self.stock = res[2]
        self.id_user = res[3]
        self.id_color_size = res[4]
        self.state = res[5]

class Wishlist:
    def __init__ (self,id_user=None,id_prod=None,date=None):
        self.id_user = id_user
        self.id_prod = id_prod
        self.date = date

    def add (self):
        new_record = (self.id_user, self.id_prod, self.date )
        addToTable ('wishlist (id_user, id_prod, date)',new_record,'(%s,%s,%s)')

    def delete (self):
        deleteFromTable2 ('wishlist',(self.id_user, self.id_prod),'id_user = %s and id_prod = %s')

    def get (self):
        res = searchID2 ('wishlist',(self.id_user, self.id_prod),'id_user = %s and id_prod = %s')  
        self.id_user = res[0]
        self.id_prod = res[1]
        self.date = res[2]

    def getAll (self,_id):
        res = searchID ('wishlist',_id)  
        self.id_user = res[0]
        self.id_prod = res[1]
        self.date = res[2]

class Review:
    def __init__ (self,stars=None,title=None,commentary='Sin comentarios',id_product=None,id_user=None,_id=None,date=None):
        self.id = _id
        self.date = date
        self.stars = stars
        self.title = title
        self.commentary = commentary
        self.id_product = id_product
        self.id_user = id_user

    def add (self):
        new_record = (self.stars, self.title, self.commentary, self.id_product,self.id_user)
        print (new_record)
        addToTable ('review (stars, title, commentary, id_product,id_user)',new_record,'(%s,%s,%s,%s,%s)')

    def mod (self):
        updateTable ('review',(self.stars, self.title, self.commentary, self.id_product,self.id_user, self.id),'stars = %s, title = %s, commentary = %s, id_product = %s, id_user = %s')

    def delete (self):
        deleteFromTable ('review',self.id)

    def get (self):
        res = searchID ('review',self.id)  
        self.id = res[0]
        self.date = res[1]
        self.stars = res[2]
        self.title = res[3]
        self.commentary = res[4]
        self.id_product = res[5]
        self.id_user = res[6]

#cust = Customer ()
#cust.get (7)
#cust.genre = 'T'
#cust.mod()
#cust.id_user = '4'
#cust.modCustomer ()
#print (cust.id,cust.dni,cust.name)
#listCustomers ()

#user = User ('nuevo@mail.com','ubwgubwugbg',None)
#user.register()
#user = User ()
#user.get(11)
#user.delete()
#user.e_mail = 'prueba2'
#user.mod()
#user.e_mail = 'odndbhibhi'
#user.psw = 'igeubgusg'
#user.mod ()
#print (user.id,user.e_mail,user.psw,user.id_role)
#res = listUsers ()
#print (res)
#user.e_mail = 'jeje'
#user.modUser ()
#print (user.id,user.e_mail,user.psw,user.id_role)