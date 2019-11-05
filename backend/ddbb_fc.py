from classes import User,Customer,Type,Role,Chat,Message
from ddbb_connect import addToTable,listTable,updateTable,deleteFromTable
#import json

def addRole (new):
    new_record = (new.name, )
    addToTable ('roles (name)',new_record,'(%s)')

def listRoles ():
    listTable ('roles')

def modRole (new):
    updateTable ('roles',(new.name,new.id),'name = %s')

def deleteRole (_id):
    deleteFromTable ('roles',_id)



def addChat (new):
    new_record = (new.id_user,new.id_admin)
    addToTable ('chat (id_user,id_admin)',new_record,'(%s,%s)')

def deleteChat (_id):
    deleteFromTable ('chat',_id)

#customer = Customer (41485948,'asd','infeiensfie','M','M','40',159859485,3,1)

#user = User ('afiwnaf','jaj',2,3)

#user.id = 25
#registerUser (user)
#modUser (user)
#deleteUser (26)
#addCustomer (customer)
#modCustomer (customer)
#listUsers()
#listCustomers()
#newType = Type ('Ropa Interior',2)
#modType (newType)
#deleteType (1)
#listTypes ()
#listRoles ()

