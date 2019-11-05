from ddbb_connect import addToTable,listTable,updateTable,deleteFromTable,searchID

class User:
    def __init__ (self,ident = None,e_mail = None,psw = None,id_role = None):
        self.id = ident 
        self.e_mail = e_mail
        self.psw = psw
        self.id_role = id_role 

    def registerUser (self):
        new_record = (self.e_mail,self.psw)
        addToTable ('users (e_mail,psw)',new_record,'(%s,%s)')

    def modUser (self):
        new_record = (self.e_mail,self.psw,self.id_role,self.id)
        updateTable ('users',new_record,'e_mail = %s, psw = %s, id_role = %s')

    def deleteUser (self):
        deleteFromTable ('users',self.id)

    def getUser (self,_id):
        res = searchID ('users',_id)  
        self.id = res[0]
        self.e_mail = res[1]
        self.psw = res[2]
        self.id_role = res[3]

def listUsers ():
    listTable ('users')

class Customer:
    def __init__ (self,ident = None,dni = None,name = None,surname = None,genre = None,c_size = None,shoe_size = None,phone_no = None,id_user = None):
        self.id = ident 
        self.dni = dni
        self.name = name
        self.surname = surname
        self.genre = genre
        self.c_size = c_size
        self.shoe_size = shoe_size
        self.phone_no = phone_no
        self.id_user = id_user 

    def addCustomer (self):
        new_record = (self.dni,self.name,self.surname,self.genre,self.c_size,self.shoe_size,self.phone_no,self.id_user)
        addToTable ('customers (dni,name,surname,genre,c_size,shoe_size,phone_no,id_user)',new_record,'(%s,%s,%s,%s,%s,%s,%s,%s)')

    def modCustomer (self):
        new_record = (self.dni,self.name,self.surname,self.genre,self.c_size,self.shoe_size,self.phone_no,self.id_user,self.id)
        updateTable ('customers',new_record,'dni = %s, name = %s, surname = %s, genre = %s, c_size = %s, shoe_size = %s, phone_no = %s, id_user = %s')

    def deleteCustomer (self):
        deleteFromTable ('customers',self.id)

    def getCustomer (self,_id):
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
    listTable ('customers')

class Type:
    def __init__ (self,_id=None,name = None):
        self.id = _id
        self.name = name

    def addType (self):
        new_record = (self.name,)
        addToTable ('type (name)',new_record,'(%s)')

    def modType (self):
        new_record = (self.name,self.id)
        updateTable ('type',new_record,'name = %s')

    def deleteType (self):
        deleteFromTable ('type',self.id)

    def getCustomer (self,_id):
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

def listTypes ():
        listTable ('type')

class Role:
    def __init__ (self,id=None,name=None):
        self.id = id
        self.name = name

    def addRole (self):
        new_record = (self.name, )
        addToTable ('roles (name)',new_record,'(%s)')

    def modRole (self):
        updateTable ('roles',(self.name,self.id),'name = %s')

    def deleteRole (self):
        deleteFromTable ('roles',self.id)

    def getRole (self,_id):
        res = searchID ('roles',_id)  
        self.id = res[0]
        self.name = res[1]

def listRoles ():
    listTable ('roles')

class Chat:
    def __init__ (self,id_user,id_admin,id=None):
        self._id = id
        self._id_user = id_user
        self._id_admin = id_admin

    @property
    def id_user (self):
        return self._id_user

    @id_user.setter
    def id_user (self, new):
        self._id_user = new

    @property
    def id_admin (self):
        return self._id_admin

    @id_admin.setter
    def id_admin (self, new):
        self._id_admin = new
    
    @property
    def id (self):
        return self._id

    @id.setter
    def id (self, new):
        self._id = new

class Message:
    def __init__ (self,msg,id_user,id_chat,id=None,date=None):
        self._id = id
        self._id_user = id_user
        self._id_chat = id_chat
        self._msg = msg
        self._date = date

    @property
    def id_user (self):
        return self._id_user

    @id_user.setter
    def id_user (self, new):
        self._id_user = new

    @property
    def id_chat (self):
        return self._id_chat

    @id_chat.setter
    def id_chat (self, new):
        self._id_chat = new
    
    @property
    def msg (self):
        return self._msg

    @msg.setter
    def msg (self, new):
        self._msg = new

    @property
    def date (self):
        return self._date

    @date.setter
    def date (self, new):
        self._date = new

    @property
    def id (self):
        return self._id

    @id.setter
    def id (self, new):
        self._id = new

#cust = Customer ()
#cust.getCustomer (6)
#cust.id_user = '4'
#cust.modCustomer ()
#print (cust.id,cust.dni,cust.name)
#listCustomers ()

#user = User ()
#user.getUser (1231)
#user.psw = 'igeubgusg'
#user.modUser ()
#print (user.id,user.e_mail,user.psw,user.id_role)
#listUsers ()
#user.e_mail = 'jeje'
#user.modUser ()
#print (user.id,user.e_mail,user.psw,user.id_role)