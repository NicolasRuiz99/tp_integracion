from ddbb_connect import addToTable,listTable,updateTable,deleteFromTable,searchID

class User:
    def __init__ (self,e_mail = None,psw = None,id_role = None,_id = None):
        self.id = _id
        self.e_mail = e_mail
        self.psw = psw
        self.id_role = id_role 

    def register (self):
        new_record = (self.e_mail,self.psw)
        addToTable ('users (e_mail,psw)',new_record,'(%s,%s)')

    def mod (self):
        new_record = (self.e_mail,self.psw,self.id_role,self.id)
        updateTable ('users',new_record,'e_mail = %s, psw = %s, id_role = %s')

    def delete (self):
        deleteFromTable ('users',self.id)

    def get (self,_id):
        res = searchID ('users',_id)  
        self.id = res[0]
        self.e_mail = res[1]
        self.psw = res[2]
        self.id_role = res[3]

def listUsers ():
    return listTable ('users')

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
        new_record = (self.dni,self.name,self.surname,self.genre,self.c_size,self.shoe_size,self.phone_no,self.id_user,self.id)
        updateTable ('customers',new_record,'dni = %s, name = %s, surname = %s, genre = %s, c_size = %s, shoe_size = %s, phone_no = %s, id_user = %s')

    def delete (self):
        deleteFromTable ('customers',self.id)

    def get (self,_id):
        res = searchID ('customers',_id)  
        self.id = res[0]
        self.dni = res[1]
        self.name = res[2]
        self.surname = res[3]
        self.genre = res[4]
        self.c_size = res[5]
        self.shoe_size = res[6]
        self.phone_no = res[7]
        self.id_user = res[8] 

def listCustomers ():
    return listTable ('customers')

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

def listTypes ():
    return listTable ('type')

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

def listRoles ():
    return listTable ('roles')

class Chat:
    def __init__ (self,id_user=None,id_admin=None,_id=None):
        self.id = _id
        self.id_user = id_user
        self.id_admin = id_admin

    def add (self):
        new_record = (self.id_user,self.id_admin)
        addToTable ('chat (id_user,id_admin)',new_record,'(%s,%s)')

    def mod (self):
        updateTable ('chat',(self.id_user,self.id_admin,self.id),'id_user = %s, id_admin = %s')

    def delete (self):
        deleteFromTable ('chat',self.id)
    
    def get (self,_id):
        res = searchID ('chat',_id)  
        self.id = res[0]
        self.id_user = res[1]
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

#cust = Customer ()
#cust.getCustomer (6)
#cust.id_user = '4'
#cust.modCustomer ()
#print (cust.id,cust.dni,cust.name)
#listCustomers ()

user = User ()
user.get (6)
user.e_mail = 'bueno ahora si'
#user.psw = 'igeubgusg'
user.mod ()
#print (user.id,user.e_mail,user.psw,user.id_role)
#res = listUsers ()
#print (res)
#user.e_mail = 'jeje'
#user.modUser ()
#print (user.id,user.e_mail,user.psw,user.id_role)