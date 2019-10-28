from classes import User,Customer
from ddbb_connect import addToTable,listTable,updateTable,deleteFromTable
import json

def registerUser (new):
    new_record = (new.e_mail,new.psw)
    addToTable ('users (e_mail,psw)',new_record,'(%s,%s)')

def listUsers ():
    listTable ('users')

def modUser (new):
    new_record = (new.e_mail,new.psw,new.id)
    updateTable ('users',new_record,'e_mail = %s, psw = %s')

def getUserByID (_id):
    listTable ('users',str(_id),'id = %s')

def deleteUser (_id):
    deleteFromTable ('users',_id)

def addCustomer (new):
    new_record = (new.dni,new.name,new.surname,new.genre,new.c_size,new.shoe_size,new.phone_no,new.id_user)
    addToTable ('customers (dni,name,surname,genre,c_size,shoe_size,phone_no,id_user)',new_record,'(%s,%s,%s,%s,%s,%s,%s,%s)')

def listCustomers ():
    listTable ('customers')

def modCustomer (new):
    new_record = (new.dni,new.name,new.surname,new.genre,new.c_size,new.shoe_size,new.phone_no,new.id_user)
    updateTable ('customers',new_record,'dni = %s, name = %s, surname = %s, genre = %s, c_size = %s, shoe_size = %s, phone_no = %s, id_user = %s')

def deleteCustomer (_id):
    deleteFromTable ('customers',_id)

